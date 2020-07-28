import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';




import Explore from './screens/Explore'
import createAppContainers from './screens/Saved'
import Trips from './screens/Trips'
import Inbox from './screens/Inbox'
import Profile from './screens/Profile'
import Saved from './screens/Saved';

// export default class App extends React.Component {
//   render(){
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
  
// }


// Explore: {
//   screen:Explore
// },
// Saved: {
//   screen:Saved
// },
// Trips: {
//   screen:Trips
// },
// Inbox: {
//   screen:Inbox
// }

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={Explore} 
        options={{
          tabBarIcon: ({ tintcolor }) => (
            <Ionicons name="ios-search" color={tintcolor} size={24} />
          ), }}/>
      <Tab.Screen name="발견" component={Saved}
        options={{
          tabBarIcon: ({ tintcolor }) => (
            <FontAwesome name="eye" color={tintcolor} size={24} />
          ), }}/>      
      <Tab.Screen name="여행" component={Trips}
        options={{
          tabBarIcon: ({ tintcolor }) => (
            <SimpleLineIcons name="plane" color={tintcolor} size={24} />
          ), }}/>      
      <Tab.Screen name="수신함" component={Inbox}
        options={{
          tabBarIcon: ({ tintcolor }) => (
            <SimpleLineIcons name="bubble" color={tintcolor} size={24} />
          ), }}/>      
      <Tab.Screen name="프로필" component={Profile}
        options={{
          tabBarIcon: ({ tintcolor }) => (
            <MaterialIcons name="face" color={tintcolor} size={24} />
          ), }}/>         
    </Tab.Navigator>
   </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
