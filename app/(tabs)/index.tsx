import React from "react";
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import Icon from "react-native-vector-icons/Ionicons";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header 1 */}
      <CustomHeader
        renderLeft={() => (
          <TouchableOpacity onPress={() => alert("Back")}>
            <Icon name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        )}
        renderCenter={() => <Text style={styles.title}>Header</Text>}
        renderRight={() => (
          <TouchableOpacity onPress={() => alert("Menu")}>
            <Icon name="menu" size={24} color="white" />
          </TouchableOpacity>
        )}
      />

      {/* Header 2 */}
      <CustomHeader
        renderLeft={() => (
          <TouchableOpacity onPress={() => alert("Back")}>
            <Icon name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        )}
        renderCenter={() => <Text style={styles.title}>Trang chủ</Text>}
        renderRight={() => (
          <TouchableOpacity onPress={() => alert("Home")}>
            <Icon name="home" size={24} color="white" />
          </TouchableOpacity>
        )}
      />

      {/* Header 3 */}
      <CustomHeader
        renderLeft={() => (
          <TouchableOpacity onPress={() => alert("Back")}>
            <Icon name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        )}
        renderCenter={() => <Text style={styles.title}>Nguyễn Đắc Quý</Text>}
        renderRight={() => (
          <TouchableOpacity onPress={() => alert("Hồ sơ")}>
            <Icon name="person" size={24} color="white" />
          </TouchableOpacity>
        )}
      />

      {/* Nội dung chính */}
      <View style={styles.content}>
        <Text style={styles.text}>Nội dung trang</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,

    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 18,
  },
});

export default Index;
