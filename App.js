import React from "react";
import AppNavigator from "./appNavigator";
import { useState, Context } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

export const AccentColorContext = React.createContext();

function App() {
  const [accentColor, setAccentColor] = useState("#a54edb");
  return (
    <AccentColorContext.Provider value={{ accentColor, setAccentColor }}>
      <View style={styles.container}>
        <AppNavigator />
        <StatusBar barStyle="auto" />
      </View>
    </AccentColorContext.Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
export default App;
