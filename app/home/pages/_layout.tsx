import {Stack} from "expo-router";


export default function PagesLayout() {
  return (
      <Stack
          screenOptions={{
            headerShown: false,
            animation: 'none'
          }}
      >
        <Stack.Screen name="(drawer)" />
        <Stack.Screen
            name="modals/inputs"
            options={{
              presentation: 'modal',
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackVisible: true,
              headerBackButtonMenuEnabled: true,
              headerBackButtonDisplayMode: "default",
              headerTitle: "Inputs",
              animation: 'slide_from_bottom'
            }}
        />
      </Stack>
  )
}