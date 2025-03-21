import {Platform, ScrollView, Text, TextInput, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function InputsModal() {
  return (
      <SafeAreaView edges={['bottom', 'right', 'left']} style={{
        flex: 1,
        backgroundColor: 'white'
      }}>
        <ScrollView style={{
          flex: 1,
          backgroundColor: 'white'
        }} contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: 32,
          gap: 32
        }}>
          <View style={{ alignSelf: 'stretch' }}>
            <Text>Label</Text>
            <TextInput
                placeholder="Placeholder"
                style={{
                  alignSelf: 'stretch',
                  backgroundColor: 'white',
                  borderRadius: 4,
                  padding: 16,
                  ...Platform.select({
                    ios: {
                      shadowRadius: 1,
                      shadowOpacity: 1,
                      shadowOffset: { height: 0, width: 0 },
                      shadowColor: 'black'
                    },
                    android: {
                      borderWidth: 1,
                      borderColor: 'black'
                    }
                  })
                }}
                autoCapitalize="none"
                accessibilityLabel="ph-no-capture"
            />
          </View>
          <View style={{ alignSelf: 'stretch' }}>
            <Text>Label</Text>
            <TextInput
                placeholder="Placeholder"
                style={{
                  alignSelf: 'stretch',
                  backgroundColor: 'white',
                  borderRadius: 4,
                  padding: 16,
                  ...Platform.select({
                    ios: {
                      shadowRadius: 1,
                      shadowOpacity: 1,
                      shadowOffset: { height: 0, width: 0 },
                      shadowColor: 'black'
                    },
                    android: {
                      borderWidth: 1,
                      borderColor: 'black'
                    }
                  })
                }}
                autoCapitalize="none"
                accessibilityLabel="ph-no-capture"
            />
          </View>
          <View style={{ alignSelf: 'stretch' }}>
            <Text>Label</Text>
            <TextInput
                placeholder="Placeholder"
                style={{
                  alignSelf: 'stretch',
                  backgroundColor: 'white',
                  borderRadius: 4,
                  padding: 16,
                  ...Platform.select({
                    ios: {
                      shadowRadius: 1,
                      shadowOpacity: 1,
                      shadowOffset: { height: 0, width: 0 },
                      shadowColor: 'black'
                    },
                    android: {
                      borderWidth: 1,
                      borderColor: 'black'
                    }
                  })
                }}
                autoCapitalize="none"
                accessibilityLabel="ph-no-capture"
            />
          </View>
          <View style={{ alignSelf: 'stretch' }}>
            <Text>Label</Text>
            <TextInput
                placeholder="Placeholder"
                style={{
                  alignSelf: 'stretch',
                  backgroundColor: 'white',
                  borderRadius: 4,
                  padding: 16,
                  ...Platform.select({
                    ios: {
                      shadowRadius: 1,
                      shadowOpacity: 1,
                      shadowOffset: { height: 0, width: 0 },
                      shadowColor: 'black'
                    },
                    android: {
                      borderWidth: 1,
                      borderColor: 'black'
                    }
                  })
                }}
                autoCapitalize="none"
                accessibilityLabel="ph-no-capture"
            />
          </View>
          <View style={{ alignSelf: 'stretch' }}>
            <Text>Label</Text>
            <TextInput
                placeholder="Placeholder"
                style={{
                  alignSelf: 'stretch',
                  backgroundColor: 'white',
                  borderRadius: 4,
                  padding: 16,
                  ...Platform.select({
                    ios: {
                      shadowRadius: 1,
                      shadowOpacity: 1,
                      shadowOffset: { height: 0, width: 0 },
                      shadowColor: 'black'
                    },
                    android: {
                      borderWidth: 1,
                      borderColor: 'black'
                    }
                  })
                }}
                autoCapitalize="none"
                accessibilityLabel="ph-no-capture"
            />
          </View>
          <View style={{ alignSelf: 'stretch' }}>
            <Text>Label</Text>
            <TextInput
                placeholder="Placeholder"
                style={{
                  alignSelf: 'stretch',
                  backgroundColor: 'white',
                  borderRadius: 4,
                  padding: 16,
                  ...Platform.select({
                    ios: {
                      shadowRadius: 1,
                      shadowOpacity: 1,
                      shadowOffset: { height: 0, width: 0 },
                      shadowColor: 'black'
                    },
                    android: {
                      borderWidth: 1,
                      borderColor: 'black'
                    }
                  })
                }}
                autoCapitalize="none"
                accessibilityLabel="ph-no-capture"
            />
          </View>
          <View style={{ alignSelf: 'stretch' }}>
            <Text>Label</Text>
            <TextInput
                placeholder="Placeholder"
                style={{
                  alignSelf: 'stretch',
                  backgroundColor: 'white',
                  borderRadius: 4,
                  padding: 16,
                  ...Platform.select({
                    ios: {
                      shadowRadius: 1,
                      shadowOpacity: 1,
                      shadowOffset: { height: 0, width: 0 },
                      shadowColor: 'black'
                    },
                    android: {
                      borderWidth: 1,
                      borderColor: 'black'
                    }
                  })
                }}
                autoCapitalize="none"
                accessibilityLabel="ph-no-capture"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}