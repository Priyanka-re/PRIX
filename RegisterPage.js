import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

const RegisterPage = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match.');
      return;
    }
    navigateTo('Home');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri:'https://us.123rf.com/450wm/yupiramos/yupiramos1807/yupiramos180707854/114982205-young-couple-together-with-speech-bubble-vector-illustration-design.jpg?ver=6'}} // Replace with your image URL
        style={styles.image}
      />
      <Text style={styles.title}>REGISTER</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFACD',
  },
  image: {
    width: 100, // Set the width of the image
    height: 100, // Set the height of the image
    marginBottom: 30, // Space between image and the title
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 500,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    
  },
});

export default RegisterPage;