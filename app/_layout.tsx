import {Slot} from "expo-router";
import {View} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
}
