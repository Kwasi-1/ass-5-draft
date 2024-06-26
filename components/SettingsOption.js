import { View, Text,StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons'; // or any other icon set

const SettingsOption = ({item}) => {
  return (  
    <View style={styles.container}>
      <Text style={styles.option}>{item.name}</Text>
      <Icon name="chevron-right" size={30} color="#777" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2'
  },
  option:{
    fontSize: 14,
  }
});
 
export default SettingsOption;