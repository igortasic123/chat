import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'


const LoginScreen = ({navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <View style = {styles.container}>
      <Input
        placeholder="Email"
        label = "Email"
        leftIcon={{ type: 'material', name: 'email' }}
        value={email}
        onChangeText={setEmail}
        />
        <Input
        placeholder="Password"
        label = "Password"
        leftIcon={{ type: 'material', name: 'lock' }}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
        <Button title="Login" style = {styles.button} />
        <Button title="Register" type="outline" 
        style = {styles.button} 
        onPress = {() => navigation.navigate('Register')
  }/>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    }

})
