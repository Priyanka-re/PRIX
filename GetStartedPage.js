import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const GetStartedPage = ({ navigateTo }) => {
  return (
    <ImageBackground 
      source={{ uri:'https://mrwallpaper.com/images/hd/coffee-stained-beige-aesthetic-laptop-6820fm8nqv16bn7p.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME TO PRIX</Text>
        <View style={styles.buttonContainer}>
          <Button title="Get Started" onPress={() => navigateTo('Login')} color="brown" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Register" onPress={() => navigateTo('Register')} color="#4CAF50" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  title: {
    fontSize: 32, // Increased font size
    fontWeight: 'bold',
    color: '#800000', 
    marginVertical: 20,
    paddingTop: 110,
  },
  buttonContainer: {
    marginVertical: 10, // Adds vertical space between buttons
    width: '40%', // Ensures the buttons have the same width
  },
});

export default GetStartedPage;