import React from 'react'
import { View, StyleSheet } from 'react-native'

import Header from '../components/Header'
import Future from '../components/Future'
import New from '../components/New'

const home = () => {
    return(
        <View style={styles.containerStyle}>
            <Header />
            <Future />
            <New />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        backgroundColor: '#5cb654'
    }
})

export default home
