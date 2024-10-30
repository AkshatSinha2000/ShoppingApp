import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductCart from '../../components/ProductCart'
import { SafeAreaView } from 'react-native-safe-area-context'

const Cart = () => {
  const {item,loading,error} = useSelector((state) => state.cart)
  const renderItem = ({item}) =>{
    return (
    <ProductCart 
      items = {item}
      />
    
  )}
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={item}
      keyExtractor={id=>id}
      renderItem={renderItem}
      bounces={false}
      numColumns={2}
      />
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    
  }
})