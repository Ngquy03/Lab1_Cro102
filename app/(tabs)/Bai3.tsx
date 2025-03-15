import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CustomTextInput = ({ label, placeholder, value, onChangeText, error, keyboardType }) => {
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
          placeholder={isFocused ? "" : placeholder}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          keyboardType={keyboardType}
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
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    let newErrors = { ...errors, [field]: "" };
    if (field === "name" && /[^a-zA-Z ]/.test(value)) {
      newErrors[field] = "Chỉ được nhập chữ";
    }
    if (field === "phone" && /\D/.test(value)) {
      newErrors[field] = "Chỉ được nhập số";
    }
    setErrors(newErrors);
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "Không được để trống";
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      Alert.alert("Thành công", "Dữ liệu đã được gửi thành công!", [{ text: "OK" }]);
    }
  };

  return (
    <View style={styles.screen}>
      <CustomTextInput label="Name" placeholder="Mời nhập" value={formData.name} onChangeText={(text) => handleChange("name", text)} error={errors.name} />
      <CustomTextInput label="MSSV" placeholder="Mời nhập" value={formData.studentId} onChangeText={(text) => handleChange("studentId", text)} error={errors.studentId} />
      <CustomTextInput label="Email" placeholder="Mời nhập" value={formData.email} onChangeText={(text) => handleChange("email", text)} error={errors.email} />
      <CustomTextInput label="SDT" placeholder="Mời nhập" value={formData.phone} onChangeText={(text) => handleChange("phone", text)} error={errors.phone} keyboardType="numeric" />
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Gửi</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
