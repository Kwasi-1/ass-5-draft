import react from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Header = () => {
  return (  
    <View style={styles.header}>
      <View style={styles.userProfile}>
        <Image source={require('../assets/profile.png')} style={styles.profile} />
        <View>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.userName}>Eric Atsu</Text>
        </View>
      </View>
      <View style= {styles.searchIconContainer}>
        <Image source={require('../assets/search.png')} style={styles.searchIcon} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#fff'
  },
  userProfile:{
    flexDirection: 'row'  
  },
  profile:{
    width: 44,
    height:44,
    borderRadius: 22,
    marginRight: 15
  },
  welcomeText:{
    fontSize: 13,
    color: '#aaa'
  },
  userName:{
    fontSize: 17,
    fontWeight: '600'
  },
  searchIconContainer:{
    width: 36,
    height:36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: '#f5f5f5',
  }

});
 
export default Header;
