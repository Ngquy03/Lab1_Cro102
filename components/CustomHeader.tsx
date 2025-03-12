import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface HeaderProps {
  renderLeft?: () => JSX.Element;
  renderCenter?: () => JSX.Element;
  renderRight?: () => JSX.Element;
}

const CustomHeader: React.FC<HeaderProps> = ({ renderLeft, renderCenter, renderRight }) => {
  return (
    <View style={styles.header}>
      <View style={styles.left}>{renderLeft && renderLeft()}</View>
      <View style={styles.center}>{renderCenter && renderCenter()}</View>
      <View style={styles.right}>{renderRight && renderRight()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    backgroundColor: "#007bff",
    paddingHorizontal: 15,
  },
  left: {
    flex: 1,
    justifyContent: "center",
  },
  center: {
    flex: 2,
    alignItems: "center",
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default CustomHeader;
