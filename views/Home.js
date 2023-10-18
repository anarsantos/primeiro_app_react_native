import React from 'react'
import { Text, View,Image, TouchableOpacity } from 'react-native';
import {css} from '../css/Css';

export default function Home({navigation})
{
    ;
    return(
        <View style={css.container2}>            
            <TouchableOpacity style={css.button__home} onPress={()=>navigation.navigate('Login')}>
                 <Image source={require('../img/buttonLogin.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Rastreio')}>
                 <Image source={require('../img/buttonRastreio.png')}/>
            </TouchableOpacity>         
        </View>
    );
}