import React, {useState} from "react";
import {StyleSheet, Image} from 'react-native';
import {Button, Text, View,TouchableOpacity} from "react-native";
import styleOutputLabel from '../styles/styleOutputLabel';
import AppButton from "../components/AppButton";
class SetTemp extends React.Component {
   constructor() {
     super();
     this.state = { val: 16 }
     this.updateminus= this.updateminus.bind(this)
     this.updateplus = this.updateplus.bind(this)
   }
 

   updateplus() {
     this.setState({ val: this.state.val + 1 })
   }
   updateminus(){
       this.setState({ val: this.state.val - 1 })
   }
   render() {
    //  console.log('render');
     const {navigation} = this.props;
     
     return(
 
     <View >
        <View >
            <Text style={styles.txt}>Set Temp</Text>
        </View>
        <View style={styles.view}>
            <TouchableOpacity style={styles.button} onPress={()=>{
            }}>
                <OutputLabel text={this.state.val}></OutputLabel>
            </TouchableOpacity>
            <View>
                {this.state.val < 36 ? <AppButton title="+" onPress={this.updateplus} /> : <AppButton title="+" onPress={console.log(this.state.val)}/>}
                {this.state.val > 16 ? <AppButton title="-" onPress={this.updateminus} /> : <AppButton title="-" onPress={console.log(this.state.val)} />}
            </View>
        </View>
     </View>
     )
   }
}

const OutputLabel = ({text})=>(
    <View style={styleOutputLabel.OutputLabel2}>
      <Text style={{fontSize: 20}}>{text}</Text>
      <Image style={styles.celsius} source={require("../img/celsius_icon.png")} />
    </View>
);
const styles = StyleSheet.create({
    button:{
        alignSelf:"center",
    },
    view: {
        flexDirection:"row",
        // alignSelf: "center",
        // marginHorizontal: 10,
        // marginLeft: 10,
        // marginRight: 40,
        
    },
    celsius:{
        width:40,
        height:40,
    },
    txt:{
        fontSize:20,
        color:"black",
        fontWeight:"bold",
        alignSelf: "center",
    }
})

export default SetTemp;