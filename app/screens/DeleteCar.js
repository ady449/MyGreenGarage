import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading:true,
            dataSource:null,
        }
    }

    componentDidMount() {

        return fetch("http://localhost:3000/cars")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                })
            })
            .catch((error) => {
                console.log(error)
            })
            // .done();
    }
    // useEffect(()=>{
    //     return fetch("http://localhost:3000/cars")
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             this.setState({
    //                 isLoading: false,
    //                 dataSource: responseJson,
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    //         // .done();

    // })
    render(){
        if(this.state.isLoading){
            return(
                <View style={styles.container}><Text>Se incarca</Text></View>
            )
        } else {
        
            let cars = this.state.dataSource.map((val,key) => {
                return <View key={key}><Text>{val.nume}</Text></View>
            })

            return(

                <View style={styles.container}>
                   {cars}
            {/* <Text>ADI</Text> */}
                </View>

            )};
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})