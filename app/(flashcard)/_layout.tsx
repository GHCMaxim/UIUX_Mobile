import { Stack } from "expo-router";

export default function FlashcardLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="cardCreate" />
      <Stack.Screen name="cardUpdate" />
      <Stack.Screen name="cardView" />
    </Stack>
  );
}
