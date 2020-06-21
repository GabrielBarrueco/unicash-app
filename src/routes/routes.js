import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import home from '../screens/home'
import cost from '../screens/cost'
import history from '../screens/history'
import simulation from '../screens/simulation'
import user from '../screens/user'

const stack = createStackNavigator()

const Routes = () => {
    return(
        <stack.Navigator initialRouteName="home" >
            <stack.Screen name="home" component={home} options={{headerShown: false}} />
            <stack.Screen name="cost" component={cost} options={{headerShown: false}} />
            <stack.Screen name="history" component={history} options={{headerShown: false}} />
            <stack.Screen name="simulation" component={simulation} options={{headerShown: false}} />
            <stack.Screen name="user" component={user} options={{headerShown: false}} />
        </stack.Navigator>
    )
}

export default Routes