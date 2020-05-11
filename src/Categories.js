import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, SafeAreaView, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
var {height, width} = Dimensions.get('window');



export default Categories = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://afsshoppingapp.com/api/category1.php')
      .then((response) => response.json())
      .then((json) => setData(json.categories))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView>
        <ScrollView>
                 <View style={styles.categoryView}>
                  {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                          <TouchableOpacity style={styles.divCategorie} onPress={() => navigation.navigate('ProductList', {catName: item.cat_name})}>
                            <Image
                              style={styles.catLogo}
                              resizeMode="contain"
                              source={{uri : item.cat_photo}} />
                              <Text style={{fontWeight: 'bold', fontSize: 22}} >{item.cat_name}</Text>
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
    imageBanner: {
        height: width/2,
        width: width-40,
        borderRadius: 10,
        marginHorizontal: 20
    },
    divCategorie: {
      backgroundColor: '#e2e2e2',
      margin: 6,
      alignItems: 'center',
      borderRadius: 10,
      padding: 10,
      flexDirection: 'row'
    },
    categoryView: {
      padding: 10,
      backgroundColor: 'white'
    },
    titleCatList: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 15
    },
    imageFood:{
        width:((width/2)-20)-10,
        height:((width/2)-20)-30,
        backgroundColor:'transparent',
        position:'absolute',
        top:-45
    },
    divFood:{
        width:(width/2)-20,
        padding:10,
        borderRadius:10,
        marginTop:55,
        marginBottom:5,
        marginLeft:10,
        alignItems:'center',
        elevation:8,
        shadowOpacity:0.3,
        shadowRadius:50,
        backgroundColor:'white',
    },
    catLogo: {
        width: 60,
        height: 60,
        marginRight: 10
    }
});