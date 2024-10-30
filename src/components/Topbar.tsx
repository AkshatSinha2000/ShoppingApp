import {StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {icon, image} from '../assets';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../navigation/screen';
import color from '../utils/color';

const Topbar = () => {
  const {item,loading,error} = useSelector((state) => state.cart)
  const {favourite} = useSelector((state) => state.favourite)
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.innercontainer}>
        <View style={styles.leftcontainer}>
          <Image source={image.logo} style={styles.logo} />
        </View>
        <View style={styles.rightcontainer}>
          <Image source={icon.heart} style={styles.image}/>
          {favourite.length > 0 ? <Text style={styles.favouritetext}>{favourite.length}</Text> : null }
          <TouchableOpacity onPress={()=>navigation.navigate(screen.Cart)}>
          <Image source={icon.cart} style={styles.image} />
          </TouchableOpacity>
          {item.length > 0 ? <Text style={styles.carttext}>{item.length}</Text> : null }
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Topbar;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: color.darkslategrey,
    
    
  },
  innercontainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  rightcontainer: {
    flexDirection: 'row',
  },
  image: {
    height: 30,
    width: 30,
    marginLeft:10
  },
  leftcontainer:{
    marginLeft:10
  },
  logo:{
    height:60,
    width:45,
    // borderRadius:100,
    // backgroundColor:'lavender',
  },
  favouritetext:{
    color:color.white,
    position:'absolute',
    left:30,
    top:-5,
    paddingHorizontal:5,
    borderRadius:100,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'flex-start',
    alignSelf:'flex-start',
  },
  carttext:{
    color:color.white,
    position:'absolute',
    left:70,
    top:-5,
    paddingHorizontal:5,
    borderRadius:100,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'flex-start',
    alignSelf:'flex-start',
  }
});
