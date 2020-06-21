import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Header = () => {
    return(
        <View style={styles.headerStyle} >
            <Text style={styles.TitleStyle} >Orçamento</Text>
            <Text style={styles.moneyStyle} >R$ 1478,62</Text>
            <Text style={styles.TitleStyle} >Gastos mês de maio</Text>
            <Text style={styles.moneyStyle} >R$ 753,20</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle : {
        marginTop: 14,
        padding: 8,
        margin: 10 ,        
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
        elevation: 4,
    }, 

    TitleStyle : {
        fontSize: 20
    },

    moneyStyle : {
        fontSize: 26
    }
})

export default Header