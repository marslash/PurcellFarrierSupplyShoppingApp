import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, SafeAreaView, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';

var {height, width} = Dimensions.get('window');



export default ProductList = ({ route, navigation }) => {

    const { catName } = route.params;
    const categoryName = catName;
    const apiLink = 'http://afsshoppingapp.com/api/productList.php?item_category=';
    const prodImageLink = 'http://afsshoppingapp.com/products/images/';
    const url = apiLink.concat(categoryName);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const tempArray = [];
    
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView>
        <ScrollView>
                 <View>
                  {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        numColumns = {2}
                        columnWrapperStyle={styles.prodListView}
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                          <TouchableOpacity style={styles.divProduct} onPress={() => navigation.navigate('ProductScreen', {itemName: item.item_name, itemPrice: item.item_price, itemShippingFee: item.item_shipping_fee, itemPhoto: item.item_photo})}>
                            <Image
                              style={styles.imageProdList}
                              resizeMode="contain"
                              source={{uri : prodImageLink.concat(item.item_photo)}} />
                              <View style={{height:((width/2)-20)-50, backgroundColor:'transparent', width:((width/2)-20)-10, marginBottom: 15}} />
                              <Text style={{fontWeight:'bold',fontSize:22,textAlign: "center",marginTop: 25}} >{item.item_name}</Text>
                              <Text style={{fontSize:20,color:"green"}}>${item.item_price}</Text>
                          </TouchableOpacity>
                        )}
                      />
                  )}
                </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    prodListView: {
      flex: 1,
      justifyContent: 'space-around',
      backgroundColor: '#e2e2e2',
      alignContent: 'space-around'
    },
    imageProdList:{
        width: width/2,
        height:((width/2)-20)-30,
        backgroundColor:'transparent',
        position:'absolute', 
        marginBottom: 10,
        marginTop: 10
    },
    divProduct:{
        width:(width/2)-5,
        height:350,
        padding:10,
        borderRadius:10,
        
        marginTop:10,
        alignItems: 'center',
        
        backgroundColor:'white',
        position: 'relative',
        borderColor: '#a2a2a2',
        borderWidth: 1
    }
});