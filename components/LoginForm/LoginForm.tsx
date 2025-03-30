import { View, Text, StyleSheet } from "react-native";
import { Input } from "../Input/Input";
import { MainButton } from "../MainButton/MainButton";

type LoginFormProps = {
  onSubmit: () => void;
};

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const LABEL_INPUT = {
    EMAIL: "Почта",
    PASSWORD: "Пароль",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вход</Text>
      <Input label={LABEL_INPUT.EMAIL} />
      <Input label={LABEL_INPUT.PASSWORD} />
      <View style={styles.buttons}>
        <MainButton title="Войти" onPress={() => alert("Button pressed")} />
        <MainButton
          title="Зарегистрироваться"
          onPress={() => alert("Button pressed")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    marginTop: 16,
    gap: 16,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
});
