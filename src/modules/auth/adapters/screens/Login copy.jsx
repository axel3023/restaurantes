import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function Login(props){
    console.log('props: ',props);
    const{name,lastname,isMan}=props;
    return(
        <View style={styles.container} >
            <Text>Inicio de Sesion</Text>
            <Text>{`${name} ${lastname} ${isMan ? 'Sexo Masculino' : 'Sexo Femenino'}`} </Text>
        </View>
    )
}

const styles = StyleSheet.create({ 
    
    container :{
        flex :1,
        backgroundColor:'#FFF',
       alignItems:'center',
       justifyContent:'center'
    }
})
