import {View} from "react-native";
import {Slot, Tabs} from "expo-router";

export default function TabsLayout() {
  return <Tabs initialRouteName={'screenA'}>
    <Tabs.Screen
        name="screenA"
        options={{
          title: "screenA"
        }}
    />
  </Tabs>
}