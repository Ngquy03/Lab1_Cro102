import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";

interface HeaderProps {
  leftComponent?: React.ReactNode;
  centerComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  iconLeft?: any;
  iconLeftColor?: string;
  onPressLeft?: () => void;
  leftIconSize?: number;
  title?: string;
  numberOfLines?: number;
  iconRight?: any;
  onPressRight?: () => void;
  rightIconSize?: number;
}

const Header: React.FC<HeaderProps> = ({
  leftComponent,
  centerComponent,
  rightComponent,
  iconLeft,
  iconLeftColor,
  onPressLeft,
  leftIconSize = 24,
  title = "",
  numberOfLines = 1,
  iconRight,
  onPressRight,
  rightIconSize = 24,
}) => {
  const renderLeft = () => {
    return (
      leftComponent || (
        <View>
          {iconLeft ? (
            <Pressable hitSlop={15} onPress={onPressLeft} style={{ padding: 5 }}>
              <Image
                source={iconLeft}
                style={{ tintColor: iconLeftColor, width: leftIconSize, height: leftIconSize }}
              />
            </Pressable>
          ) : (
            <View style={{ width: leftIconSize, height: leftIconSize }} />
          )}
        </View>
      )
    );
  };

  const renderCenter = () => {
    return (
      centerComponent || (
        <View style={styles.containerCenter}>
          <Text style={styles.title} numberOfLines={numberOfLines}>
            {title}
          </Text>
        </View>
      )
    );
  };

  const renderRight = () => {
    return (
      rightComponent || (
        <View style={styles.containerRight}>
          {iconRight ? (
            <Pressable hitSlop={15} onPress={onPressRight} style={{ padding: 5 }}>
              <Image
                source={iconRight}
                style={{ width: rightIconSize, height: rightIconSize }}
              />
            </Pressable>
          ) : (
            <View style={{ width: rightIconSize, height: rightIconSize }} />
          )}
        </View>
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} pointerEvents="auto">
        {renderLeft()}
        {renderCenter()}
        {renderRight()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 10,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Thay vì shadow* props
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 50,
    flex: 1,
    pointerEvents: "auto", // Chuyển từ props sang style
  },
  containerCenter: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  containerRight: {
    alignItems: "flex-end",
  },
});
export default Header;