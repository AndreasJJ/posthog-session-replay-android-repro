import {Pressable, ScrollView, Text, View} from "react-native";
import {Link} from "expo-router";

export default function ScreenA() {
  return (
      <ScrollView style={{ flex: 1, padding: 32 }} contentContainerStyle={{ gap: 16 }}>
        <View style={{ padding: 8, gap: 12, backgroundColor: 'white', borderRadius: 8 }}>
          <Text>Screen A</Text>
        </View>
        <View style={{ padding: 8, gap: 12, backgroundColor: 'white', borderRadius: 8 }}>
          <Text accessibilityLabel={'ph-no-capture'}>Text 1</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 2</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 3</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 4</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 5</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 6</Text>
          <Link href="/home/pages/modals/inputs" asChild>
            <Pressable style={{ borderColor: 'black', borderWidth: 1, borderRadius: 4, padding: 16, alignItems: 'center' }}>
              <Text>Edit profile</Text>
            </Pressable>
          </Link>
        </View>
        <View style={{ padding: 8, gap: 12, backgroundColor: 'white', borderRadius: 8 }}>
          <Text accessibilityLabel={'ph-no-capture'}>Text 7</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 8</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 9</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 10</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 11</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 12</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 13</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 14</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 15</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 16</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 17</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 18</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 19</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 20</Text>
          <Text accessibilityLabel={'ph-no-capture'}>Text 21</Text>
        </View>
      </ScrollView>
  );
}