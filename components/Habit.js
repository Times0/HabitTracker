import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Week from "./Week";

export default function Habit({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Week />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    backgroundColor: "#f8f8f8",
  },
  text: {
    fontSize: 18,
  },
});
