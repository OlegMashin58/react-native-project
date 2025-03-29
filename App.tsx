import { StyleSheet, View } from "react-native";
import { LoginForm } from "./components/LoginForm/LoginForm";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginForm onSubmit={() => alert("Button pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
