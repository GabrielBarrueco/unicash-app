import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const History = () => {
    return(
        <View style={styles.cardStyle}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle : {
        height: 100,
        width: 120,
        margin: 10,
        padding : 4,
        justifyContent: 'space-between',
        marginBottom: 10,
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 1,
    },
})

export default History