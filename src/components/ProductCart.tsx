import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAdd, handleDelete } from '../redux/slice/handlecart'
import { icon } from '../assets'
import { handleFavourite, handleRemoveFavourite } from '../redux/slice/favouriteSlice'
import color from '../utils/color'

const ProductCart = ({items}) => {
  const dispatch = useDispatch()
  const [favourite,setFavourite] = useState(false)
  const {item,loading,error} = useSelector((state) => state.cart)
  console.log(items.id)
  const quant = item.find((item) => item.id === items.id);

  // console.log('items',items)
  return (
    <View style={styles.maincontainer}>
      <View style={styles.leftcontainer}>
        <Text style={styles.title}>{items.title}</Text>
        <Text style={styles.desc}>{items.description.slice(0,50)} ...</Text>
        <View style = {styles.pricecontainer}>
          <Text style={styles.text}>${items.price}</Text>
          <Text style={styles.text}>⭐️ {items.rating.rate}</Text>
        </View>
        {/* <View>
        <Text style={styles.text}> {items.rating.count}</Text>
        </View> */}
      </View>
      <View style={styles.favourites}>

        {favourite ? 
        <TouchableOpacity onPress={()=>{[setFavourite(false),dispatch(handleRemoveFavourite(items))]}}><Image source={icon.heart} style={styles.star}/></TouchableOpacity> :
        <TouchableOpacity onPress={()=>{[setFavourite(true),dispatch(handleFavourite(items))]}}><Image source={icon.whiteheart} style={styles.star}/></TouchableOpacity> 
      }
      </View>
      <View style={styles.rightcontainer}>
        <Image style={styles.image} source={{uri:items.image}}/>
        <View style={styles.quantity}>
          <TouchableOpacity onPress={()=>dispatch(handleDelete(items))}><Text style={styles.subquantity}>-</Text></TouchableOpacity>
          <Text style={styles.quantitytext}>{quant?.quantity || 0}</Text>
          <TouchableOpacity onPress={()=>dispatch(handleAdd(items))}><Text style={styles.plusquantity}>+</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductCart

const styles = StyleSheet.create({
  maincontainer:{
    backgroundColor:'white',
    // flexDirection:'row',
    marginHorizontal:10,
    marginVertical:10,
    // paddingVertical:10,
    // paddingHorizontal:10,
    borderRadius:10,
    width:'45%',

    shadowOffset:{
      height:2,
      width:2,
    },
    shadowColor:color.darkslategrey,
    shadowRadius:10,
    shadowOpacity:0.5,
  },
  leftcontainer:{
    flex:2,
    borderTopEndRadius:10,
    borderTopStartRadius:10,
    // backgroundColor:'green',
    paddingHorizontal:10,
    paddingVertical:10,
    backgroundColor:color.darkslategrey,
    // justifyContent:'flex-end',
    // alignSelf:'flex-end'
  },
  image:{
    flex:1,
    height:150,
    width:'70%',
    resizeMode:'stretch',
  },
  rightcontainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:10,
  },
  lables:{
    color:'black',
    fontWeight:'bold',
    fontSize:10

  },
  title:{
    fontSize:16,
    fontWeight:'700',
    marginBottom:10,
    textAlign:'center',
    color:color.white,
  },
  desc:{
    fontSize:13,
    fontWeight:'400',
    // color:'grey',
    color:color.white,
  },
  pricecontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
  },
  text:{
    fontWeight:'800',
    color:color.white,

  },
  quantity:{
    flexDirection:'row',
    marginTop:10,
    justifyContent:'center',
    alignItems:'center'
  },
  subquantity:{
      marginHorizontal:4,
      paddingHorizontal:10,
      paddingVertical:5,
      borderTopLeftRadius:5,
      borderBottomLeftRadius:5,
      color:color.white,
      backgroundColor:color.darkslategrey,
      fontWeight:'bold',
  },
  plusquantity:{
    marginHorizontal:4,
      paddingHorizontal:10,
      paddingVertical:5,
      borderTopRightRadius:5,
      borderBottomRightRadius:5,
      color:color.white,
      backgroundColor:color.darkslategrey,
    fontWeight:'bold',
  },
  quantitytext:{
    // marginHorizontal:2,
    color:color.white,
    fontWeight:'bold',
    paddingHorizontal:10,
    paddingVertical:5,
    backgroundColor:color.darkslategrey,
  },
  star:{
    height:20,
    width:20,
  },
  favourites:{
    alignSelf:'flex-start',
    marginLeft:10,
    marginTop:10,
  },
})