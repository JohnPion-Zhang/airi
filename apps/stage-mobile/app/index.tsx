import { Box } from "@gluestack-ui/themed";
import CharacterView from "../components/CharacterView";
import ChatView from "../components/ChatView";

export default function HomeScreen() {
  return (
    <Box flex={1}>
      <Box flex={1}>
        <CharacterView />
      </Box>
      <Box flex={1}>
        <ChatView />
      </Box>
    </Box>
  );
}