import { config as defaultConfig } from "@gluestack-ui/config";
import { createConfig } from "@gluestack-ui/themed";

export const config = createConfig(defaultConfig);

// Get the type of Config
type ConfigType = typeof config;

// Extend the internal styled config
declare module "@gluestack-style/react" {
  interface ICustomConfig extends ConfigType {}
}