import React from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import Date from '../components/DatePicker'
import DatePicker from '../components/DatePicker'

const New = () => {
    return(
        <View style={styles.NewStyle} >
            <View style={styles.cardHeaderStyle}>
                <Text style={styles.titleStyle}>Incluir novo Gasto</Text>    
            </View>
            <View style={styles.cardStyle}>
                <View style={styles.LabelStyle}>
                    <Feather name="map-pin" size={22}/>
                    <TextInput style={styles.LocalInputStyle} placeholder="Local"/>
                </View>
                
                <View style={styles.LabelStyle} > 
                    <Feather name="dollar-sign" size={22}/>
                    <TextInput style={styles.DollarInputStyle} placeholder="Valor"/> 
                    
                    <DatePicker />                              
                </View>   

                <View style={styles.containerStyle}>                
                    <TouchableOpacity style={styles.cancelButtonStyle}>
                        <Feather name="x" size={22}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.checkButtonStyle}>
                        <Feather name="check" size={22}/>
                    </TouchableOpacity>
                </View>    
            </View>
                           
        </View>
    )
}

const styles = StyleSheet.create({
    NewStyle : {
        margin: 10 ,        
        justifyContent: 'space-between',
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

    containerStyle : {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal : 8,
        marginBottom : 8
    },

    checkButtonStyle : {
        backgroundColor: "#5cb654",
        borderRadius: 4,
        height: 50,
        width: "48%",
        justifyContent: "center",
        alignItems: "center"
    },

    cancelButtonStyle : {
        backgroundColor: "#b3b3b3",
        borderRadius: 4,
        height: 50,
        width: "48%",
        justifyContent: "center",
        alignItems: "center"
    },

    LocalInputStyle : {
        height : 30,
        width: '88%',
        borderColor : '#DDD',
        borderWidth : 1,
        backgroundColor : '#FFF',
        marginHorizontal: 20,
        padding : 8
    },

    DollarInputStyle : {
        height : 30,
        width: '38%',
        borderColor : '#DDD',
        borderWidth : 1,
        backgroundColor : '#FFF',
        marginLeft: 20,
        marginRight : 8,
        padding : 8
    },

    LabelStyle : {
        marginTop: 16,
        flexDirection: 'row',
        marginHorizontal: 8,        
    },

    cardHeaderStyle : {
        height : 30 ,
        width : "100%",
        backgroundColor : '#ccffda',
        position: "absolute"        
    },

    titleStyle : {
        fontWeight : 'bold',
        fontSize : 16,
        marginLeft : 4
    },

    cardStyle : {
        marginTop: 32
    }
   
})

export default New