import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/navigation/Routes";
import { TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
});
