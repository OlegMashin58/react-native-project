import { StyleSheet, View } from "react-native";
// import { LoginForm } from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginForm onSubmit={() => alert("Button pressed")} /> */}
      <RegistrationForm />
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
