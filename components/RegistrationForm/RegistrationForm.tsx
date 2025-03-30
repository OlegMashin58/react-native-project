import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import { Input } from "../Input/Input";
import { MainButton } from "../MainButton/MainButton";
import * as Yup from "yup";

// Валидация с помощью Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Имя обязательно"),
  email: Yup.string().email("Некорректный email").required("Email обязателен"),
  password: Yup.string()
    .min(6, "Пароль должен содержать не менее 6 символов")
    .required("Пароль обязателен"),
});

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Данные формы:", values);
        alert("Регистрация успешна!");
      }}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        handleBlur,
      }) => (
        <View style={styles.container}>
          {/* Поле ввода имени */}
          <Text style={styles.label}>Имя</Text>
          <Input
            style={styles.input}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")} // Обработка ухода фокуса
            value={values.name}
            placeholder="Введите ваше имя"
            label="Имя"
          />
          {touched.name && errors.name && (
            <Text style={styles.error}>{errors.name}</Text>
          )}

          {/* Поле ввода email */}
          <Text style={styles.label}>Email</Text>
          <Input
            style={styles.input}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            placeholder="Введите ваш email"
            keyboardType="email-address"
            label="Email"
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          {/* Поле ввода пароля */}
          <Input
            style={styles.input}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            placeholder="Введите пароль"
            secureTextEntry
            label="Пароль"
          />
          {touched.password && errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          {/* Кнопка отправки */}
          <Button title="Зарегистрироваться" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default RegistrationForm;
