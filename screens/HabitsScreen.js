import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FAB } from "react-native-paper";
import HabitBox from "../components/HabitBox";
import { AccentColorContext } from "../App";

const HabitsScreen = () => {
  const { accentColor } = React.useContext(AccentColorContext);
  const habits = [
    "Habbit1",
    "Habbit2",
    "Habbit3",
    "Habbit4",
    "Habbit6",
    "Habbit8",
    "Habbit9",
    "Habbit10",
  ];
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        {habits.map((habit, index) => (
          <HabitBox key={index} name={habit} />
        ))}
      </ScrollView>
      <FAB.Group
        open={open}
        icon={open ? "close" : "plus"}
        actions={[
          {
            icon: "calendar-today",
            label: "Add a habit",
            onPress: () => console.log("Add a habit pressed"),
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
    alignItems: "center",
  },
});

export default HabitsScreen;
