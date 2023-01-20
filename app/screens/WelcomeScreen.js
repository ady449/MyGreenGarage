import React, {useEffect, useState} from 'react';
import { RefreshControl, View,Text, ScrollView, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';
import styleNavDrawer from '../styles/styleNavDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import ViewCar from './ViewCar';
import SetTemp from './SetTemp';
import styles from "../styles/styleWelcomeS";
import AppButton from '../components/AppButton';
// import '../connectivity/db';
// import cryp from '../App.js'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function RendCars ({navigation}, boolLoading, dataSource) {
     
     if(boolLoading === true){
            return(
                <View><Text>Se incarca</Text></View>
            )
    } else {
    
      let cars = dataSource.map((val,key) => {console.log(val.id)
          return(
            <AppButton key={key} title={val.nume} onPress={() => navigation.navigate('Screen1', {CarName: val.nume , carId: val.id })} />
            
          )
      })

      return(
          cars
    )};


}


function WelcomeScreen({ navigation }) {
   const [refreshing, setRefreshing] = React.useState(false);
   const [dataSource, setDataSource] = useState([]);
   const [boolLoading, setboolLoading] = useState(true)


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
      }, []);


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        async function fetchData(){
            
            fetch("http://localhost:8163/cars", {signal: signal})
            .then((response) => response.json())
            .then((responseJson) => { setboolLoading(false),setDataSource(responseJson) })
            .catch((error) => {
              if (error.name === 'AbortError') {
                console.log('successfully aborted');
              } else {
                console.log(error)
              }
            })
            .done()
            return () => {controller.abort()}
        }
        fetchData();
        
    },[]);
    return (
     // sa pun aici datele fetch uite de pe localhost

      <View>
        <ScrollView contentContainerStyle={styles.background} 
           refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}         
          >
            <Text style={styles.TitleText}>
                The list of cars
            </Text>

          {RendCars({navigation}, boolLoading , dataSource)}
        </ScrollView>
      </View>
    );
}



const Stack = createStackNavigator();

function App() {
  return (
    // <NavigationContainer theme={styleNavDrawer}>
    <Stack.Navigator  >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="ViewCar" component={ViewCar} />
      <Stack.Screen name="SetTemp" component={SetTemp} />
      
    </Stack.Navigator>
    // </NavigationContainer>
    

  );
}



export default App;