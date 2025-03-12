import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CustomTextInput = ({ label, placeholder, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label} <Text style={{ color: "red" }}>*</Text>
      </Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
          error && styles.inputError,
        ]}
      >
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {error && <Icon name="alert-circle" size={20} color="red" style={styles.icon} />}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.screen}>
      <CustomTextInput label="Name" placeholder="Place holder" />
      <CustomTextInput label="Email" placeholder="Place holder" />
      <CustomTextInput label="SDT" placeholder="Place holder" />
      <CustomTextInput label="MSSV" placeholder="Place holder" error="Lỗi nhập liệu" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: "#007bff",
  },
  inputError: {
    borderColor: "red",
  },
  icon: {
    marginLeft: 5,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
});

export default App;
