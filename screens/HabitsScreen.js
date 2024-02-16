import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HabitBox from "../components/HabitBox";

const HabitsScreen = () => {
  const habits = ["Habbit1", "Habbit2", "Habbit3", "Habbit4", "Habbit5"];

  return (
    <View style={styles.container}>
      {habits.map((habit, index) => (
        <HabitBox key={index} name={habit} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default HabitsScreen;
