import React from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';

export const FallbackComponent = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('../assets/error.png')} />
      <Text style={styles.title}>Something happened!</Text>
      <Text style={styles.description}>{props.error.toString()}</Text>
      <Button title={'Try again'} onPress={() => props.resetError} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#00171f',
    textAlign: 'center',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#00171f',
    textAlign: 'center',
    marginTop: 10,
  },
  icon: {height: 45, width: 45},
});
