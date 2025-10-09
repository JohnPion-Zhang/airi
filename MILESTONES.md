# Project Milestones

This document tracks the progress of the migration from the original web-based project to the new React Native (Expo) application.

## Completed Milestones

### Core Application

-   [x] **Project Restructuring:** Removed the old web and desktop frontends to focus on a single mobile application.
-   [x] **Expo App Initialization:** Created a new Expo project in `apps/stage-mobile` with all the required dependencies.
-   [x] **UI & Theming:** Set up `@gluestack-ui/themed` and `nativewind` for a customizable UI.
-   [x] **Navigation:** Implemented file-based routing using `expo-router`.
-   [x] **Documentation:** Added `QUICK-START.md` and `CHANGELOG.md`.

### Body

-   [x] **VRM Support:** Integrated `expo-three` to render a 3D character.
-   [x] **Basic Model Loading:** The application can load and display a placeholder VRM model from a URL.

### Brain

-   [x] **Core Chat UI:** Implemented a basic chat interface with a message list and input field.
-   [x] **AI SDK Integration:** Integrated the Vercel AI SDK (`@ai-sdk/react`) to manage the conversation state.
-   [x] **Mock Backend:** Created a mock API route to handle chat requests for development.

## Pending Milestones

### Body

-   [ ] **VRM Animations:**
    -   [ ] Implement auto-blinking for the character.
    -   [ ] Implement auto-look-at-camera functionality.
    -   [ ] Add idle animations to make the character feel more alive.
-   [ ] **Live2D Support:**
    -   [ ] Investigate and implement a solution for rendering Live2D models in React Native (potentially using `react-native-skia`).
    -   [ ] Implement animations for Live2D models (blinking, looking at, idle).
-   [ ] **Costume Change:**
    -   [ ] Design and implement a UI for selecting different costumes.
    -   [ ] Implement the logic to swap the character's model or textures.
-   [ ] **Facial Customization:**
    -   [ ] Design and implement a UI for customizing facial features.
    -   [ ] Implement the logic to modify the character's model based on user selections.

### Brain

-   [ ] **Game Integrations:**
    -   [ ] Investigate the feasibility of porting the Minecraft and Factorio integrations to a mobile platform.
-   [ ] **Chat Platform Integrations:**
    -   [ ] Integrate with the Telegram API to send and receive messages.
    -   [ ] Integrate with the Discord API to send and receive messages.
-   [ ] **Memory System:**
    -   [ ] Design and implement a memory system using `realm` to store conversation history and user preferences.
-   [ ] **Local Inference:**
    -   [ ] Investigate and implement a solution for running local inference on a mobile device.

### Ears

-   [ ] **Audio Input:**
    -   [ ] Implement audio input from the device's microphone.
-   [ ] **Speech Recognition:**
    -   [ ] Integrate a speech-to-text library to transcribe the user's voice.
-   [ ] **Talking Detection:**
    -   [ ] Implement voice activity detection (VAD) to determine when the user is speaking.

### Mouth

-   [ ] **Voice Synthesis:**
    -   [ ] Integrate a text-to-speech library (like ElevenLabs) to give the character a voice.