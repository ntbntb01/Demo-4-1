import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, TextInput, Button} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const productList = Array(10).fill(null).map((e, i) => ({
  id: i,
  img: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/20/photo-6-1618924912530234980573.jpg',
  
}))
export default function Home({navigation}) {
  return(
    <ScrollView>
      <View style = {{flexDirection:'row',height:50}}>
        <TouchableOpacity style ={{alignSelf:'center'}}>
          <Ionicons style={{}} name ="reorder-three-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style = {{fontSize:22, alignSelf:'center',marginLeft:100}}>FOREVER 21</Text>
      </View>
      <View style={styles.searchSection}>
        <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
        <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
        />
        <TouchableOpacity>
        <Ionicons style={styles.a} name="md-mic-outline" size={25} color="#000"/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons style={styles.b} name="barcode-sharp" size={25} color="#000"/>
        </TouchableOpacity>
      </View>
      <Text style = {styles.c}>All Special Offers(12)</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
      <Image
        style={styles.d}
        source={{
          uri: 'https://thongcongnghetgiare.net/uploads/tieu-su-quynh-alee/tieu-su-quynh-alee-1.jpg',
        }}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
      <Image
        style={{height:250, width:'auto', marginTop:10}}
        source={{
          uri: 'https://thongcongnghetgiare.net/uploads/tieu-su-quynh-alee/tieu-su-quynh-alee-8.jpg',
        }}
      />
      </TouchableOpacity>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#E6E6E6',
},
a:{
  paddingTop: 10,
  paddingRight: 0,
  paddingBottom: 10,
  paddingLeft: 170,
},
b:{
  marginRight:25,
  marginLeft:15
},
c:{
  color:'#A4A4A4',
  textAlign:'center',
  fontSize:13,
  marginTop:15,
  marginBottom:15
},
d:{
  width:'auto',
  height:250,
},
})