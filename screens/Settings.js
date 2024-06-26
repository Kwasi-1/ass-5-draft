import react from "react";
import { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// import { Icon } from "react-native-vector-icons/EvilIcons";
import Icon from 'react-native-vector-icons/Fontisto';
import SettingsOption from "../components/SettingsOption";
import options from "../data/options";



const Settings = () => {
  const renderHeader = () => (
    <Text style={styles.pageHeader}>Settings</Text>
  );
  
  const renderFooter = () => (
    <View style={styles.themeSection}>
      <Text style={styles.themeText}>Theme</Text>  
      <ToggleIcon/>
    </View> 
  );

  return ( 
    <View style={styles.container}>
      <FlatList
        data={options}
        keyExtractor={item => item.id}
        renderItem={({item}) => <SettingsOption item={item}/>}

        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
     
    </View>
  );
}

const ToggleIcon = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <TouchableOpacity onPress={toggle}>
      <Icon name={isOn ? 'toggle-on' : 'toggle-off'} size={40} color={isOn ? 'green' : 'gray'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  pageHeader:{
    marginVertical: 30,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600'
  },
  themeSection:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    paddingRight: 5,
  },
  themeText:{
    fontSize: 20,
  }

})
 
export default Settings;