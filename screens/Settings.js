import react from "react";
import { View, Text, StyleSheet } from "react-native";

const Settings = () => {
  return ( 
    <View style={styles.container}>
      <Text style={styles.pageHeader}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 20,
  },
  pageHeader:{
    marginVertical: 30,
  }

})
 
export default Settings;