import React from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

const New = () => {
    return(
        <View style={styles.NewStyle} >
            <View>
                <Text>Incluir novo Gasto</Text>    
            </View>
            <View style={styles.LabelStyle}>
                <Feather name="map-pin" size={22}/>
                <TextInput style={styles.LocalInputStyle} placeholder="Local"/>
            </View>
            
            <View style={styles.LabelStyle} > 
                <Feather name="dollar-sign" size={22}/>
                <TextInput style={styles.DollarInputStyle} placeholder="Valor"/> 
                
                    <TouchableOpacity style={styles.calendarButtonStyle}>
                        <View >
                            <Feather name="calendar" size={22}/>
                        </View>
                    </TouchableOpacity>                                
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
    )
}

const styles = StyleSheet.create({
    NewStyle : {
        padding: 8,
        marginHorizontal: 10 ,        
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

    containerStyle : {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        backgroundColor: "#e02041",
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
        width: '58%',
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
    },

    calendarButtonStyle : {
        backgroundColor: "#4da6ff",
        borderRadius: 4,
        height: 30,
        width: "28%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default New