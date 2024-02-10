import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";

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
  };

  return (
    <View style={styles.container}>
      {checked.map((isChecked, index) => (
        <CheckBox
          key={index}
          checked={isChecked}
          onPress={() => toggleChecked(index)}
          containerStyle={styles.checkbox}
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
  checkbox: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
});
