import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Foundation, FontAwesome, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 

const Menu = () => {

    const navigation = useNavigation();

    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => navigation.navigate('history')}>
                    <View style={styles.cardStyle}>                        
                        <Text style={styles.titleStyle}>Histórico</Text>                            
                        <FontAwesome name="history" size={46} color="black" />                  
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('simulation')}>
                    <View style={styles.cardStyle}>                        
                        <Text style={styles.titleStyle}>Simulação</Text>
                        <Foundation name="graph-trend" size={46} color="black" />                      
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('cost')}>
                    <View style={styles.cardStyle}>                        
                        <Text style={styles.titleStyle}>Contas fixas</Text>     
                        <MaterialCommunityIcons name="cash-marker" size={46} color="black" />                 
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('user')}>
                    <View style={styles.cardStyle}>                        
                        <Text style={styles.titleStyle}>Conta</Text>     
                        <FontAwesome5 name="user-alt" size={46} color="black" />                 
                    </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardStyle : {
        height: 100,
        width: 120,
        margin: 10,
        padding : 8,
        justifyContent: 'space-between',
        alignItems : 'center',
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

    titleStyle : {
        fontSize : 16, 
        fontWeight : 'bold'
    }
})

export default Menu