import React, { useState, Context } from "react";
import { AccentColorContext } from "../App";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import { Dimensions } from "react-native";

const primaryColors = [
  "#a54edb",
  "#ed3b3b",
  "#3bed7e",
  "#3b4bed",
  "#f5a623",
  "#23f5a6",
  "#f523a6",
  "#23a6f5",
  "#a6f523",
  "#f5a623",
  "#a6f523",
  "#f523a6",
];

function ProfileScreen({ navigation }) {
  const { accentColor, setAccentColor } = React.useContext(AccentColorContext);

  const renderColorOption = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.colorOption,
        { backgroundColor: item },
        item === accentColor ? styles.selectedColorOption : null,
      ]}
      onPress={() => {
        setAccentColor(item);
      }}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={primaryColors}
        renderItem={renderColorOption}
        keyExtractor={(item) => item}
        style={styles.colorGrid}
        numColumns={Math.floor(Dimensions.get("window").width / 70)} // Calculate number of columns based on screen width and item size+margin
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  colorGrid: {
    marginTop: 20,
  },
  colorOption: {
    width: 50, // Reduced size
    height: 50, // Reduced size
    margin: 10,
  },
  selectedColorOption: {
    borderWidth: 2,
    borderColor: "gold",
  },
});

export default ProfileScreen;
