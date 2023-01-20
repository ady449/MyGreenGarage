// import React from 'react';
import * as React from 'react';
import {RefreshControl, View,Text, ScrollView, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';
import styleNavDrawer from '../styles/styleNavDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import styleOutputLabel from '../styles/styleOutputLabel';
import styles from '../styles/styleScreen2';
import AppButton from '../components/AppButton';
import axios from 'axios';
// rsf

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function Car(CarName, carId, isLoading, dataSource) {
    
  
     if(isLoading === true){
            return(
                <View>
                <Text>Se incarca car {carId} </Text>
                </View>
              
            ) 
        } else {
            let labelred="red"
            let labelyellow="yellow"
            let cars = dataSource.map((val,key) => {
              
              
              if(carId === val.id){
                console.log("val.winsodws: ", val.widows_o)
                if(val.widows_o === 1){
                  val.widows_o = "inchis"
                  labelyellow = "white"
                }else{
                  val.widows_o = "deschis"
                }
                
                if(val.error === "0" | val.error === ""){
                  labelred="white"
                  
                }
                
                return(
                    <View style={{flexDirection:"row", flexWrap:"wrap"}} key={key}>

                        <View style={styleOutputLabel.containerStatus}>
                        <Text style={styleOutputLabel.Text}>Battery life</Text>
                        <OutputLabel text={val.batterylife} styl={"white"}/>
                        </View>

                      <View style={styleOutputLabel.containerStatus}>
                        <Text style={styleOutputLabel.Text}>Windows</Text>
                        
                        <OutputLabel text={val.widows_o} styl={labelyellow}/>
                        </View>

                      <View style={styleOutputLabel.containerStatus}>
                        <Text style={styleOutputLabel.Text}>VIN</Text>
                        <OutputLabel text={val.vin} styl={"white"}/>
                        </View>

                      <View style={styleOutputLabel.containerStatus}>
                        <Text style={styleOutputLabel.Text}>Battery Temp</Text>
                        <OutputLabel text={val.batterytemp} styl={"white"}/>
                        </View>
                        <View style={{flexDirection:"row", flexWrap:"wrap", width:"50%",height:"30%"}}>
                        <Text style={styleOutputLabel.Text}>Error</Text>
                        <OutputLabel text={val.error} styl={labelred}/>
                        </View>
                        <View style={{flexDirection:"row", flexWrap:"wrap",width:"50%", height:"30%" }}>
                        <Text style={styleOutputLabel.Text}>ITP</Text>
                        <OutputLabel text={val.itp} styl={"white"}/>
                        </View>
                      <View style={styleOutputLabel.containerStatus}> 
                        <Text style={styleOutputLabel.Text}>Insurance</Text>
                        <OutputLabel text={val.insurance} styl={"white"}/>
                        </View>
                        
                      </View>
            
                )
              
              }
            });
            

          return(cars)
        }
            
  
}


function Screen2({route, navigation}) {
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);
    const [isLoading, setIsLoading] = React.useState(true);
    const [dataSource, setdataSource] = React.useState([]);

    React.useEffect(() => {
    const source = axios.CancelToken.source();
    const url = `http://localhost:8163/cars`;
    const fetchUsers = async () => {
      try {
        const response = await axios.get(url, { cancelToken: source.token });
        setIsLoading(false);
        setdataSource(response.data);
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Data fetching cancelled');
        }else{
         console.log(error)
        }
      }
    };
    fetchUsers();
    return () => source.cancel("Data fetching cancelled");
  }, []);
          

        
    const {CarName, carId} = route.params;
    return (
      <View style={{flexWrap: 'nowrap'}} contentContainerStyle={styles.background}  refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
        <AppButton  title={CarName} s={{alignSelf:"center"}} onPress={() => navigation.goBack()}/>
        <Text style={styles.TextStatus}>STATUS</Text>
        {console.log("carid 1: ",carId)}
        {console.log("CarName 1: ",CarName)}
      
        {Car(CarName,carId, isLoading, dataSource)}
     </View>
    );
}

const OutputLabel = ({text, styl})=>(
    <View style={[styleOutputLabel.OutputLabel, {backgroundColor: styl}]}>
      <Text style={{fontSize: 16}}>{text}</Text>
      
    </View>
);

//1.9-1




export default Screen2;