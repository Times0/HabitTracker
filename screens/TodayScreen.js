import React, { useState } from "react";
import { AccentColorContext } from "../App";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TodayScreen = () => {
  const { accentColor, setAccentColor } = React.useContext(AccentColorContext);
  const [habits, setHabits] = useState([
    { name: "Habit1", done: false },
    { name: "Habit2", done: false },
    { name: "Habit3", done: false },
    { name: "Habit4", done: false },
    { name: "Habit5", done: false },
  ]);

  const toggleHabit = (index) => {
    setHabits((prevHabits) => {
      const updatedHabits = [...prevHabits];
      updatedHabits[index].done = !updatedHabits[index].done;
      return updatedHabits;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Habits</Text>
      {habits.map((habit, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.habitCard,
            habit.done ? styles.habitCardDone : { borderColor: accentColor },
          ]}
          onPress={() => toggleHabit(index)}
        >
          <Text style={[styles.habitText, { color: "white" }]}>
            {" "}
            {habit.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  habitCard: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  habitCardDone: {
    borderColor: "green",
  },
  habitText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TodayScreen;
