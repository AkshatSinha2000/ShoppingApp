import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductById} from '../../redux/slice/handleApiCall';
import Topbar from '../../components/Topbar';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductCart from '../../components/ProductCart';
import Pagination from '../../components/Pagination';
import color from '../../utils/color';

const Home = () => {
  useEffect(() => {
    dispatch(fetchProductById());
  }, [dispatch]);
  const dispatch = useDispatch();
  const {products, error, loading} = useSelector(state => state.products);
  const {start, end, currentPage} = useSelector(state => state.pagination);

  const list = products.slice(start, end);
  // console.log('Product-------------->',start,end)

  const renderItem = ({item}) => {
    return <ProductCart items={item} />;
  };

  return (
    <View style={styles.maincontainer}>
      <Topbar />
      <View style={styles.container}>
 

        <FlatList
          data={list}
          keyExtractor={id => id}
          renderItem={renderItem}
          bounces={false}
          numColumns={2}
          />
        <Pagination />
   
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  maincontainer: {
    flex:1,
  },
  container: {
    paddingBottom:180,
    backgroundColor: color.gainsboro,
  },
});
