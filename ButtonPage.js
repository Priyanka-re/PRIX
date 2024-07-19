import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import ReusableButton from './ReusableButton'; 

const ButtonPage = () => {
  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
    <ImageBackground style={styles.background}>
      <Text style={styles.text}>REUSABLE BUTTONS</Text>
      <View style={styles.container}>
        <ReusableButton 
          iconName="check" 
          buttonText="Success Button" 
          buttonColor="green" 
          onPress={handlePress} 
        />
        <ReusableButton 
          iconName="exclamation" 
          buttonText="Danger Button" 
          buttonColor="red" 
          onPress={handlePress} 
        />
        <ReusableButton 
          iconName="warning" 
          buttonText="Warning Button" 
          buttonColor="#FAD02E" 
          onPress={handlePress} 
        />
        <ReusableButton 
          iconName="info" 
          buttonText="Info Button" 
          buttonColor="brown" 
          onPress={handlePress} 
        />
        <ReusableButton 
          iconName="star" 
          buttonText="Primary Button" 
          buttonColor="#7FFFD4" 
          onPress={handlePress} 
        />
        <ReusableButton 
          iconName="angle-right" 
          buttonText="Secondary Button" 
          buttonColor="#483D8B" 
          onPress={handlePress} 
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: "#800000",
    textAlign: 'center',
    paddingVertical: 30,
    fontWeight: '600',
  },
  background: {
    flex: 1,
    backgroundColor: '#F0E68C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
});

export default ButtonPage;