import React from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native'

const Future = () => {
    return(
        <View>   
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.cardStyle}>
                        <Text>Local</Text>  
                        <Text>Valor: R$42,99</Text>
                        <Text>08/06/2020</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.cardStyle}>
                        <Text>Local</Text>
                        <Text>Valor: R$42,99</Text>
                        <Text>08/06/2020</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.cardStyle}>
                        <Text>Local</Text>
                        <Text>Valor: R$42,99</Text>
                        <Text>08/06/2020</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.cardStyle}>
                        <Text>Local</Text>
                        <Text>Valor: R$42,99</Text>
                        <Text>08/06/2020</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle : {
        height: 100,
        width: 120,
        margin: 10,
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

    listStyle : {
        justifyContent: 'space-between'
    }
})

export default Future