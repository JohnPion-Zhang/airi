import React, { useRef } from 'react';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import {
  AmbientLight,
  Clock,
  Fog,
  GridHelper,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { VRM, VRMUtils, VRMExpressionPresetName } from '@pixiv/three-vrm';

export default function CharacterView() {
  let timeout;
  const clock = new Clock();
  const vrmRef = useRef<VRM | null>(null);

  React.useEffect(() => {
    // Clear the animation loop when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={async (gl) => {
        const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
        const sceneColor = 0x6ec6ff;

        // Create a WebGLRenderer without a DOM element
        const renderer = new Renderer({ gl });
        renderer.setSize(width, height);
        renderer.setClearColor(sceneColor);

        const camera = new PerspectiveCamera(30, width / height, 0.1, 20);
        camera.position.set(0, 1, 5);

        const scene = new Scene();
        scene.fog = new Fog(sceneColor, 1, 10);
        scene.add(new GridHelper(10, 10));

        const ambientLight = new AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new PointLight(0xffffff, 0.5, 1000);
        pointLight.position.set(0, 3, 5);
        scene.add(pointLight);

        const loader = new GLTFLoader();

        loader.load(
          "https://raw.githubusercontent.com/madjin/vrm-samples/master/Avatar_Orion.vrm",
          (gltf) => {
            VRMUtils.removeUnnecessaryJoints(gltf.scene);

            VRM.from(gltf).then((vrm) => {
              scene.add(vrm.scene);
              vrm.scene.rotation.y = Math.PI;
              vrmRef.current = vrm;
            });
          },
          (progress) => console.log('Loading model...', 100.0 * (progress.loaded / progress.total), '%'),
          (error) => console.error(error)
        );

        // Setup an animation loop
        const render = () => {
          timeout = requestAnimationFrame(render);
          const delta = clock.getDelta();

          if (vrmRef.current) {
            vrmRef.current.update(delta);
          }

          renderer.render(scene, camera);
          gl.endFrameEXP();
        };
        render();
      }}
    />
  );
}