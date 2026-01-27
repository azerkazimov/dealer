import { inner_font } from "@/constant/inner-font";

import { useLayoutFonts } from "@/hooks/use-fonts";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function LayoutContent() {
  const { loaded, error } = useLayoutFonts(inner_font);
  if (!loaded) {
    return null;
  }
  if (error) {
    return <Text>Error loading fonts</Text>;
  }

  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Welcome",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
