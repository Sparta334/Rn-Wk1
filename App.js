import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>111019022 陳奕誠 數位三甲</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#12d',
    fontSize: 30,
  }

});
