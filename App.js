import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Danilo Rodrigues </Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Clone do projeto aula 04-03-2024 3B3 Lado A</Text>
<Title/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
