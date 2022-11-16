import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'no-stylesheet';

export default function App() {
  return (
    <View
      flex={1}
      paddingHorizontal={48}
      backgroundColor="magenta"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize={32} color="white">
        No StyleSheet
      </Text>
      <View mt={10}>
        <Text fontSize={18} color="white" textAlign="center">
          Easy as pie 🥧 solution to style React Native app
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
