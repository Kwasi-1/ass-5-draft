import { View, Text, Image, StyleSheet } from "react-native";
import { memo } from "react";
import transaction from "../data/transactions";

const TransactionItem = memo(({ item}) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionLogoContainer}>
      <Image source={item.logo} style={styles.transactionLogo} />
    </View>
    <View style={styles.transactionInfo}>
      <Text style={styles.transactionName}>{item.name}</Text>
      <Text style={styles.transactionCategory}>{item.category}</Text>
    </View>
    <View>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
    </View>
  </View>


));

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: 74,
    padding: 15,
    marginHorizontal: 8,
    marginBottom: 10,
  },
  transactionLogoContainer: {
    width: 40,
    height:40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', 
    marginRight: 20
  },
  transactionLogo: {
    width: 16,
    height: 16,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '600',
    // marginBottom: 3,
    // lineHeight: 19.2
  },
  transactionCategory: {
    fontSize: 13,
    color: '#999',
    // lineHeight: 20.8

  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-end',
    color: '#0D0D26',
    marginBottom: 3,
    lineHeight: 19.2
  },

});

export default TransactionItem;