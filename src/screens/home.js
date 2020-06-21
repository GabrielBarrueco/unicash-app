import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/Header'
import Future from '../components/Future'
import New from '../components/New'
import Menu from '../components/Menu'
import Logo from '../components/Logo'

const home = ({ navigation }) => {
    return(
        <LinearGradient colors={['#99ffb6', '#1e524e']} style={styles.containerStyle}>
            <ScrollView>
                <Logo />
                <Header />
                <Future />
                <New />
                <Menu />
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1        
    }
})
//<div>Ícones feitos por <a href="https://www.flaticon.com/br/autores/dimitry-miroliubov" title="Dimitry Miroliubov">Dimitry Miroliubov</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div>
export default home
