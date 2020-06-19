import React from 'react'
import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/Header'
import Future from '../components/Future'
import New from '../components/New'

const home = () => {
    return(
        <LinearGradient colors={['#6cff95', '#1e524e']} style={styles.containerStyle}>
            <Header />
            <Future />
            <New />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1        
    }
})

export default home
