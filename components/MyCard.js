import { View, Text, Image, StyleSheet } from "react-native";

const MyCard = () => {
  return (  
    <View style={styles.container}>
      <Image source={require('../assets/Card.png')} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  }
});

export default MyCard;