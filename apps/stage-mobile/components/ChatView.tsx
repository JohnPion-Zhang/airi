import { useChat } from "ai/react";
import {
  Box,
  Button,
  ButtonText,
  Input,
  InputField,
  Text,
} from "@gluestack-ui/themed";
import { FlashList } from "@shopify/flash-list";

export default function ChatView() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Box flex={1} bg="$secondary50" p="$4">
      <FlashList
        data={messages}
        estimatedItemSize={50}
        renderItem={({ item }) => (
          <Box
            p="$2"
            bg={item.role === "user" ? "$primary100" : "$secondary100"}
            mb="$2"
            borderRadius="$lg"
          >
            <Text bold>{item.role}</Text>
            <Text>{item.content}</Text>
          </Box>
        )}
      />
      <Box flexDirection="row" alignItems="center">
        <Input flex={1} mr="$2">
          <InputField
            value={input}
            onChangeText={handleInputChange}
            placeholder="Type your message..."
          />
        </Input>
        <Button onPress={handleSubmit}>
          <ButtonText>Send</ButtonText>
        </Button>
      </Box>
    </Box>
  );
}