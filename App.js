import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Habit from "./components/Habit";

export default function App() {
  const habits = ["Habbit1", "Habbit2", "Habbit3", "Habbit4", "Habbit5"];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Tracker</Text>
      {habits.map((habit, index) => (
        <Habit key={index} name={habit} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
