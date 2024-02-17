import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AccentColorContext } from "../App";

export default function Week() {
  const [checkedDays, setCheckedDays] = useState([]);
  const { accentColor } = React.useContext(AccentColorContext);

  const currentDate = new Date();
  const weekStart =
    currentDate.getDate() -
    currentDate.getDay() +
    (currentDate.getDay() === 0 ? -6 : 1); // adjust when week starts on Sunday
  const days = Array.from({ length: 7 }, (_, i) =>
    new Date(currentDate.setDate(weekStart + i)).getDate()
  );

  const toggleDay = (day) => {
    setCheckedDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  return (
    <View style={styles.container}>
      {days.map((day, index) => (
        <TouchableOpacity
          key={day}
          style={[
            styles.day,
            { backgroundColor: checkedDays.includes(day) ? "green" : "white" },
            currentDate.getDate() === day && {
              borderWidth: 2,
              borderColor: accentColor,
            },
          ]}
          onPress={() => toggleDay(day)}
        >
          <Text
            style={{
              color: checkedDays.includes(day)
                ? "white"
                : currentDate.getDate() === day
                ? "black"
                : "#535353",
            }}
          >
            {day}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    flexWrap: "wrap",
    margin: 10,
  },
  day: {
    padding: 10,
    borderRadius: 5,
  },
});
