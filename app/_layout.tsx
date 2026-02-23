import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { createTamagui, TamaguiProvider } from "@tamagui/core";
import { defaultConfig } from "@tamagui/config/v5";

const config = createTamagui(defaultConfig);

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <TamaguiProvider config={config} defaultTheme="dark">
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </TamaguiProvider>
  );
}
