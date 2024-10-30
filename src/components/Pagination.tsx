import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleNext, handlePrev } from '../redux/slice/handlepagination'

const Pagination = () => {

  const dispatch = useDispatch()
  const {currentPage} = useSelector((state)=>state.pagination);
  const {loading,error,products} = useSelector((state)=>state.products);
  const total = products.length / 5;
  
  return (
    <View style={styles.quantity}>
      {currentPage > 1 &&
          <TouchableOpacity onPress={()=>dispatch(handlePrev(currentPage))}><Text>-</Text></TouchableOpacity>
          }
              <Text>{currentPage}</Text>
              {currentPage < total &&
          <TouchableOpacity onPress={()=>dispatch(handleNext(currentPage))}><Text>+</Text></TouchableOpacity>
              }
        </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
  quantity:{
    flexDirection:'row',
    marginTop:10,
    alignItems:'center',
    justifyContent:'center'
  }
})