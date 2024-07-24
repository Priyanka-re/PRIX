import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const GetStartedPage = ({ navigateTo }) => {
  return (
    <ImageBackground 
      source={{ uri:'https://i.pinimg.com/736x/51/1e/38/511e38c3a06fcfe57868c07662299c06.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>DOMINO'S</Text>
        <View style={styles.buttonContainer}>
          <Button title="Get Started" onPress={() => navigateTo('Login')} color="brown" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Register" onPress={() => navigateTo('Register')} color="#DAA520" />
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