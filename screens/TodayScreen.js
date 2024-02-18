import React, { useState, useEffect } from "react";
import { AccentColorContext } from "../App";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAB } from "react-native-paper";

const TodayScreen = ({ navigation }) => {
  const { accentColor, setAccentColor } = React.useContext(AccentColorContext);
  const [habits, setHabits] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadHabits();
  }, []);

  const loadHabits = async () => {
    try {
      const habitsData = await AsyncStorage.getItem("habits");
      if (habitsData !== null) {
        setHabits(JSON.parse(habitsData));
      }
    } catch (error) {
      console.log("Error loading habits:", error);
    }
  };

  const saveHabits = async (updatedHabits) => {
    try {
      const habitsData = JSON.stringify(updatedHabits);
      await AsyncStorage.setItem("habits", habitsData);
    } catch (error) {
      console.log("Error saving habits:", error);
    }
  };

  const toggleHabit = (index) => {
    setHabits((prevHabits) => {
      const updatedHabits = [...prevHabits];
      updatedHabits[index].done = !updatedHabits[index].done;
      saveHabits(updatedHabits); // Save updated habits to AsyncStorage
      return updatedHabits;
    });
  };

  const addHabit = () => {
    navigation.navigate("AddHabit");
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
      <FAB.Group
        open={open}
        icon={open ? "close" : "plus"}
        actions={[
          {
            icon: "calendar-today",
            label: "Add a habit",
            onPress: addHabit,
            labelTextColor: "white",
          },
          {
            icon: "calendar-week",
            label: "Add a task",
            onPress: () => console.log("Add a task pressed"),
            labelTextColor: "white",
          },
        ]}
        onStateChange={({ open }) => setOpen(open)}
        onLongPress={() => console.log("onLongPress")}
        backdropColor="rgba(0, 0, 0, 0.5)"
        fabStyle={{ backgroundColor: accentColor }}
      />
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
