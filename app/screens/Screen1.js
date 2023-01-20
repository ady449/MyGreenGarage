import React from 'react';
import {RefreshControl, View,Text, ScrollView, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, TouchableHighlight} from 'react-native';
import Screen2 from "./Screen2";
import ViewCar from './ViewCar';
// import WelcomeScreen from './WelcomeScreen'; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SwipeButton from '@dillionverma/react-native-swipe-button';
import styleOutputLabel from '../styles/styleOutputLabel';
import SetTemp from "../screens/SetTemp";
import AppButton from "../components/AppButton";

// import SwipeButton from 'rn-swipe-button';
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
// rsf
function Screen1({route, navigation}) {
    const {CarName, carId } = route.params;
    const renderSwipeButton = () => (<SwipeButton />)
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    }, []);

    const Stack = createStackNavigator();
    return (
    
      <View >
      <ScrollView contentContainerStyle={{alignItems: 'center'}} refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
          <AppButton key={carId} title={CarName} s={styles.appButtonContainer} onPress={() => navigation.goBack()} />
          <TouchableHighlight onPress={() => navigation.navigate('Screen2', {CarName: CarName, carId: carId})}>

              <Image style={styles.carimg} source={require("../img/tesla2.png")} />
          
          </TouchableHighlight>
          <SwipeButton Icon={<Text></Text>} onComplete={() => Alert.alert("Car locked")} title="Swipe to unlock the car" height={50} containerStyle={styles.swipebuton}/>
          <AppButton title="View Car" s={styles.appButtonContainer2}  onPress={() => navigation.navigate('ViewCar')}/>
        <View style={{alignItems: 'center'}}>
          <SetTemp/>
        </View>
        
      </ScrollView>
      </View>
    );
}


// rnss
const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgba(222, 242, 241, 1)',
        flexGrow:1, 
        alignItems:'center', 
        justifyContent: 'center'
    },
    TitleText:{ 
        textDecorationLine: 'underline',
        fontSize: 30,
        paddingTop: 30,
        alignSelf: 'center'
    },
    NavBar: {
        with: "100%",
        elevation:8,
        height: 50,
        backgroundColor: 'rgba(43, 122, 120, 1)'
    },
    Button1: {
        color: 'rgba(53, 167, 156, 1)',
        borderWidth: 1,
        position: 'absolute',
        width: 50,
        height: 80,
        borderRadius: 20,
    },
    // // appButtonContainer: {
    // //     elevation: 10,
    // //     backgroundColor: 'rgba(53, 167, 156, 1)',
    // //     borderRadius: 10,
    // //     // padding: 50,
    // //     marginTop: 25,
    // //     marginBottom: 25,
    // //     marginHorizontal: "10%",

    // //     paddingVertical: 30,
    // //     paddingHorizontal: "35%",
    // // },
    appButtonContainer2: {
        elevation: 8,
        backgroundColor: 'rgba(53, 167, 146, 1)',
        borderRadius: 10,
        // padding: 50,
        marginTop: 25,
        marginBottom: 10,
        marginHorizontal: "20%",
        paddingVertical: 20,
        alignItems: "center"
    },
    // appButtonContainer3: {
    //     elevation: 8,
    //     backgroundColor: 'rgba(53, 167, 146, 1)',
    //     borderRadius: 10,
    //     // padding: 50,
    //     marginTop: 25,
    //     marginBottom: 10,
    //     marginHorizontal: "20%",
    //     paddingVertical: 20,
    //     alignItems: "center"
    // },
    appButtonText: {
      color: "white",
      fontSize: 17,
      
    },
    dropdownicon: {
      // justityContent: 'flex-end'
      position: 'absolute',
      right: 0,
      margin: 10,
    },
    carimg:{
        
        height: 200,
        resizeMode: "contain",
       
    }
     
    
})

const styles2 = StyleSheet.create({
  appButtonContainer2: {
          elevation: 8,
          backgroundColor: 'rgba(53, 167, 146, 1)',
          borderRadius: 10,
          // padding: 50,
          marginTop: 25,
          marginBottom: 10,
          marginHorizontal: "20%",
          paddingVertical: 20,
          alignItems: "center"
      }

})




export default Screen1;