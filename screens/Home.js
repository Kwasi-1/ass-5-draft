import react from "react";
import Header from "../components/Header";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import MyCard from "../components/MyCard";
import Action from "../components/Action";
import transaction from "../data/transactions";
import actionData from "../data/ActionData";
import TransactionItem from "../components/TransactionItem";


const Home = () => {
  const renderHeader = () => (
    <View style={styles.container}>
      <Header/>
      <MyCard/>
      <FlatList 
        data={actionData}
        horizontal
        renderItem={({item}) => <Action item ={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false} 
      />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Transaction</Text>
        <Text style={styles.sectionSubTitle}>See All</Text>
      </View>
    </View>
  );

  return ( 
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={'#fff'}
      />

    <FlatList
      data={transaction}
      keyExtractor={item => item.id}
      renderItem={({item }) => <TransactionItem item = {item}/>}
      ListHeaderComponent={renderHeader}
       style = {{backgroundColor: '#fff'}}
    />
     
    </View>
   );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    padding: 20
  },  
  sectionHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  sectionTitle:{
    fontSize: 18,
    fontWeight: '500',
  },
  sectionSubTitle:{
    color: 'blue'
  }
});
 
export default Home;