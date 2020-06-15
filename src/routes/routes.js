import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import home from '../screens/home'
import { Header } from 'react-native/Libraries/NewAppScreen'

const stack = createStackNavigator()

const Routes = () => {
    return(
        <stack.Navigator initialRouteName="home" >
            <stack.Screen name="home" component={home} options={{headerShown: false}} /> 
        </stack.Navigator>
    )
}

export default Routes