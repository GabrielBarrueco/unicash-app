import React from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native'

const Future = () => {
    return(
        <View>   
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.cardStyle}>                        
                        <View style={styles.cardHeaderStyle}>
                            <Text style={styles.titleStyle}>Uber</Text>
                        </View>  
                        <View style={styles.infoViewStyle}>
                            <Text style={styles.infoTextStyle}>Valor: R$8,29</Text>
                            <Text style={styles.infoTextStyle}>08/06/2020</Text>
                        </View>                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.cardStyle}>
                        <View style={styles.cardHeaderStyle}>
                            <Text style={styles.titleStyle}>Farmácia</Text>
                        </View>
                        <View style={styles.infoViewStyle}>
                            <Text style={styles.infoTextStyle}>Valor: R$42,99</Text>
                            <Text style={styles.infoTextStyle}>08/06/2020</Text>
                        </View>  
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.cardStyle}>
                        <View style={styles.cardHeaderStyle}>
                            <Text style={styles.titleStyle}>Mercado</Text>
                        </View>
                        <View style={styles.infoViewStyle}>
                            <Text style={styles.infoTextStyle}>Valor: R$12,99</Text>
                            <Text style={styles.infoTextStyle}>09/06/2020</Text>
                        </View>                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.cardStyle}>
                        <View style={styles.cardHeaderStyle}>
                            <Text style={styles.titleStyle}>Bar</Text>
                        </View>
                        <View style={styles.infoViewStyle}>
                            <Text style={styles.infoTextStyle}>Valor: R$18,50</Text>
                            <Text style={styles.infoTextStyle}>11/06/2020</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle : {
        height: 110,
        width: 130,
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
        elevation: 4,
    },

    listStyle : {
        justifyContent: 'space-between'
    },

    cardHeaderStyle : {
        height : 20 ,
        width : "100%",
        backgroundColor : '#ccffda',
        position: "absolute"        
    },

    titleStyle : {
        fontWeight : 'bold',
        marginLeft: 4
    },

    infoViewStyle : {
        marginTop : 20,
        justifyContent : 'space-around'
    },

    infoTextStyle : {
        marginTop : 6,
        marginLeft: 4,
    }


})

export default Future