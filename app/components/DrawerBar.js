import * as React from 'react';
import {useEffect, useState} from 'react';
import { RefreshControl, View, Text, Button } from 'react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import WelcomeScreen from "../screens/WelcomeScreen";
import styleNavDrawer from '../styles/styleNavDrawer';
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import DeleteCar from "../screens/DeleteCar";
// import mysql from "../database/mysql";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function HomePage({ navigation }) {
  return (
    <WelcomeScreen />
  );
}

function Page2({ navigation }) {
  return (
    <Screen1 />
  );
}
function Page3({ navigation }) {
  return (
    <Screen2 />
  );
}

function AddCar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AddCar Screen</Text>

    </View>
  );
}

function DC() {
  return (
    <DeleteCar />
  );
}


const Drawer = createDrawerNavigator();

class MyDrawer extends React.Component {
  render() {
    const [refreshing, setRefreshing] = React.useState(false)
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
      }, []);
    return (
    <NavigationContainer theme={styleNavDrawer}
    >

      <Drawer.Navigator screenOptions={{ headerShown: false}} refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
        <Drawer.Screen name="Home" component={HomePage}         /> 
        <Drawer.Screen name="Add Car"  component={AddCar}       />
        <Drawer.Screen name="Delete Car"  component={DC} />
        
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }
}

export default MyDrawer;
