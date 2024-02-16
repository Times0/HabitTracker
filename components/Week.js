import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import * as Haptics from "expo-haptics";

export default function Week() {
  const [checked, setChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleChecked = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <View style={styles.container}>
      {checked.map((isChecked, index) => (
        <Checkbox
          key={index}
          style={styles.checkbox}
          value={isChecked}
          onValueChange={() => toggleChecked(index)}
        />
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
  },
  checkbox: {},
});
