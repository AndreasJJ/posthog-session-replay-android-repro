import {Slot} from "expo-router";
import {View} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {AnalyticsProvider} from "@/utils/analyticsProvider";

export default function RootLayout() {
  return (
    <AnalyticsProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Slot />
      </GestureHandlerRootView>
    </AnalyticsProvider>
  );
}
