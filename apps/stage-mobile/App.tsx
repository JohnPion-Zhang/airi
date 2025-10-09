import { StatusBar } from "expo-status-bar";
import { Box, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "./gluestack-ui.config";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box flex={1} bg="$white" alignItems="center" justifyContent="center">
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </Box>
    </GluestackUIProvider>
  );
}