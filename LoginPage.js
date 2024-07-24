import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

const LoginPage = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password') {
      navigateTo('Home');
    } else {
      Alert.alert('Invalid Credentials', 'Please enter valid email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/019/607/567/small/fast-food-vector-clipart-design-graphic-clipart-design-free-png.png' }} // Replace with your image URL
        style={styles.image}
      />
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#fde994',
  },
  image: {
    width: 200, // Set the width of the image
    height: 140, // Set the height of the image
    marginBottom: 20, // Space between image and the title
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#800000'
  },
  input: {
    width: 300,
    padding: 20,
    marginVertical: 10,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 5,
   // backgroundColor:
  },
});

export default LoginPage;