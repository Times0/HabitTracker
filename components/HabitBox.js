import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Week from "./Week";
import { AccentColorContext } from "../App";

export default function HabitBox({ name }) {
  const { accentColor } = React.useContext(AccentColorContext);

  const styles = StyleSheet.create({
    container: {
      margin: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: "#3a3f42",
      borderRadius: 5,
      width: "90%",
      backgroundColor: "#21222c",
    },
    text: {
      fontSize: 18,
      color: "white",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Week />
    </View>
  );
}
