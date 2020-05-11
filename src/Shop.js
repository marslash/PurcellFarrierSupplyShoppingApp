import React, { Component } from 'react';
import { Text, FlatList, Image, StyleSheet, Dimensions, View, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
var {height, width} = Dimensions.get('window');


export default class Shop extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            dataBanner:[],
            dataNewArrivals: [],
            dataBestSellers: [],
            selectCatg: 0
        }
        global.myCart = 0;
    }

    componentDidMount() {
        const url = "http://afsshoppingapp.com/api/api-test01.json"
        return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataBanner: responseJson.banner,
                dataNewArrivals: responseJson.newArrivals,
                dataBestSellers: responseJson.bestSellers
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }
    
    render() {
        return(
          <SafeAreaView>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: "#f2f2f2", width: width, alignItems: "center"}}>
                    
                    <Image style={{height:60,width:width/2,margin:10}} resizeMode="contain" source={require("../image/PFSAPP.png")} />
                    <Swiper style={{height: width/2}} showsButtons={false} autoplay={true} autoplayTimeout={2}>
                        {
                            this.state.dataBanner.map((itembann)=>{
                                return(
                                    <Image style={styles.imageBanner} resizeMode="contain" source={{uri: itembann}}/>
                                )
                            })
                        }
                    </Swiper>
                    
                </View>
                <View style={{width: width, borderRadius: 20, paddingVertical: 20, backgroundColor: 'white'}}>
                      <Text style={styles.titleCatg}>Welcome to our Shop</Text>
                      <Text style={styles.titlePromotion}>New Arrivals</Text>
                      <FlatList
                        horizontal={true}
                        data={this.state.dataNewArrivals}
                        renderItem={({ item }) => this._renderItem(item)}
                        keyExtractor = { (item,index) => index.toString() }
                      />
                      <Text style={styles.titlePromotion}>Best Sellers</Text>
                      <FlatList
                        //horizontal={true}
                        data={this.state.dataBestSellers}
                        numColumns={2}
                        renderItem={({ item }) => this._renderItemFood(item)}
                        keyExtractor = { (item,index) => index.toString() }
                        />
                </View>
            </ScrollView>
          </SafeAreaView>
        );
    }
    _renderItem(item) {
        return(
          <TouchableOpacity style={[styles.divCategorie,{backgroundColor:item.color}]}
          onPress={()=>this.setState({selectCatg:item.id})}>
            <Image
              style={{width: 100, height: 80}}
              resizeMode="contain"
              source={{uri : item.image}} />
              <Text style={{fontWeight: 'bold', fontSize: 22}}>{item.name}</Text>
          </TouchableOpacity>
        )
        
      }
      _renderItemFood(item){
        let catg = this.state.selectCatg
        if(catg==0||catg==item.categorie)
        {
          return(
            <TouchableOpacity style={styles.divFood}>
              <Image
                style={styles.imageFood}
                resizeMode="contain"
                source={{uri : item.image}} />
                <View style={{height:((width/2)-20)-90, backgroundColor:'transparent', width:((width/2)-20)-10, marginBottom: 5}} />
                <Text style={{fontWeight:'bold',fontSize:22,textAlign:'center',marginTop: 5}}>
                  {item.name}
                </Text>
                {/* <Text>Descp Food and Details</Text> */}
                <Text style={{fontSize:20,color:"green"}}>${item.price}</Text>
              </TouchableOpacity>
            )
        }
      }
    
}



const styles = StyleSheet.create({
    imageBanner: {
        height: width/2,
        width: width-40,
        borderRadius: 10,
        marginHorizontal: 20
    },
    divCategorie: {
      backgroundColor: 'red',
      margin: 5,
      alignItems: 'center',
      borderRadius: 10,
      padding: 10
    },
    titleCatg: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10
    },
    titlePromotion: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10
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
    }
});