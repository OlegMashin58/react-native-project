import { StyleSheet, TouchableOpacity, Text } from "react-native";

type MainButtonProps = {
  title: string;
  onPress: () => void;
};

export const MainButton = ({ title, onPress }: MainButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    width: 328,
    height: 60,
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 1,
  },
  text: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 0.2,
  },
});
