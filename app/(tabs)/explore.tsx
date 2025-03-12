import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

// Component hiển thị một phần thông tin
const Section = ({ title, children }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
};

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Phần Lịch trình */}
      <Section title="Lịch trình">
        <View style={styles.card}>
          <Text style={styles.label}>Địa điểm</Text>
          <Text style={styles.value}>Hồ Tràm, Vũng Tàu</Text>
          
          <Text style={styles.label}>Thời gian</Text>
          <Text style={styles.value}>09:00 AM - 12:00 AM, 12/12/2024</Text>
          
          <Text style={styles.label}>Phương tiện di chuyển</Text>
          <Text style={styles.value}>Xe bus</Text>
          
          <Text style={styles.label}>Thời gian</Text>
          <Text style={styles.value}>21:00 - 22:00</Text>
          
          <Text style={styles.label}>Hình ảnh</Text>
          <Image source={{ uri: "https://cdn.tgdd.vn/Files/2022/02/22/1416895/cam-nang-du-lich-ho-tram-vung-tau-day-du-va-chi-tiet-2022-202202230026460856.jpg" }} style={styles.image} />
        </View>
      </Section>

      {/* Phần Khách sạn */}
      <Section title="Khách sạn">
        <View style={styles.card}>
          <Text style={styles.label}>Tên khách sạn</Text>
          <Text style={styles.value}>Hồng Quỳnh</Text>
          
          <Text style={styles.label}>Giờ mở cửa</Text>
          <Text style={styles.value}>06:00 AM - 12:00 AM</Text>
          
          <Text style={styles.label}>Địa điểm</Text>
          <Text style={styles.value}>234 Quang Trung, Hồ Chí Minh</Text>
          
          <TouchableOpacity style={styles.button} onPress={() => alert("Xem chi tiết") }>
            <Text style={styles.buttonText}>CHI TIẾT</Text>
          </TouchableOpacity>
        </View>
      </Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
