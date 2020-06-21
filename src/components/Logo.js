import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import Constants from 'expo-constants';

import logoImg from '../assets/dinheiro.png'


const Logo = () => {
    return(
        <View style={styles.containerStyle}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>UniCash</Text>
            </View>
        </View>            
    )
}

const styles = StyleSheet.create({

    containerStyle: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: "row",
        alignItems: "center"
    },
    
      headerText: {
        fontSize: 40,
        color: "#737380",
        fontWeight : 'bold'
    }
})

export default Logo