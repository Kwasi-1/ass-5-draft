import { View,Text, Image, StyleSheet, FlatList } from "react-native";

const Action = ({ item }) => {
  
  return (  
    <View style={styles.container}>
      <View style={styles.actionButtonContainer}>
        <Image source={item.button}/>
      </View>
      <Text style={styles.actionName}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:18
  },
  actionButtonContainer:{
    height: 46,
    width: 46,
    borderRadius: 23,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionName:{
    fontSize: 14,
  }
});
 
export default Action;