import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CepScreen from './components/CepScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CepScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
