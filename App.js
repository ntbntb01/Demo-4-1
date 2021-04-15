// import React from 'react'
// import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// // const DATA = [
// //   {
// //     id: 1,
// //     photo: 'https://anhdepblog.com/wp-content/uploads/2020/09/anh-gai-xinh-facebook-21.jpg',
// //     name: 'ao 2 day',
// //     price: '2000$',
// //     star: 4
// //   }
// // ]
// const DATA = Array(10).fill('').map((e, i) => ({
//   id: i + 1,
//   photo: 'https://anhdepblog.com/wp-content/uploads/2020/09/anh-gai-xinh-facebook-21.jpg',
//   name: `ao 2 day ${i + 1}`,
//   price: '2000$',
//   heart: i % 2 === 0
// }))

// export default function App() {
//   const renderItem = ({ item }) => (
//     <View style={{ width: '45%', }}>
//       <Image
//         style={styles.imgStyle}
//         source={{ uri: item.photo, }}
//       />
//       <View style={styles.rowPrice}>
//         <Text>{item.price}</Text>
//         <Ionicons name="heart" size={30} color={item.heart ? 'red' : 'grey'} />
//       </View>
//       <Text>{item.name}</Text>
//     </View>
//   );
//   return (
//     <View>
//       <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'grey' }}>
//         <TouchableOpacity style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>SORT</Text>
//           <Ionicons name="chevron-down-outline" size={30} color="black" />
//         </TouchableOpacity>
//         <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text style={{ textAlign: 'center', }}>REFINE</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={{ textAlign: 'center', marginTop: 15, marginBottom: 20 }}>405 styles</Text>
//       <FlatList
//         data={DATA}
//         numColumns={2}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         columnWrapperStyle={{ justifyContent: 'space-around', marginBottom: 10, flex: 1 }}
//         style={{ marginBottom: 100 }}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   rowPrice: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10
//   },
//   imgStyle: {
//     height: 300,
//     width: 'auto'
//   }
// });
// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
// import * as React from 'react';
// import { Text, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// // import { Ionicons } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Home from './src/screens/Home'
// import Detail from './src/screens/Detail'
// import ProductList from './src/screens/ProductList'
// import Me from './src/screens/Me'
// import Cart from './src/screens/Cart'
// import WhistList from './src/screens/WhistList'

// import { createStackNavigator } from '@react-navigation/stack'

// const Tab = createBottomTabNavigator();
// const Stack = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'ios-list-box' : 'ios-list';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'gray',
//         }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="WhisList" component={WhisList} />
//         <Tab.Screen name="Me" component={Me} />
//         <Tab.Screen name="Detail" component={Detail} />
//         <Tab.Screen name="ProductList" component={ProductList} />
//         <Tab.Screen name="Cart" component={Cart} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home'
import ProductList from './src/screens/ProductList'
import Detail from './src/screens/Detail'
import WishList from './src/screens/WhistList'
import Cart from './src/screens/Cart'
import Me from './src/screens/Me'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={ProductList} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeStact') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'WishList') {
              iconName = focused ? 'alarm-sharp' : 'alarm-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'airplane-sharp' : 'airplane-outline';
            } else if (route.name === 'Me') {
              iconName = focused ? 'airplane-sharp' : 'airplane-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="HomeStact" component={HomeStack} />
        <Tab.Screen name="WishList" component={WishList} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Me" component={Me} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}