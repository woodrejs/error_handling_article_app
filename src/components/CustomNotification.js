import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export const CustomNotification = ({customTitle, customDescription}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('../assets/error.png')} />
      <View style={styles.box}>
        <Text style={styles.title}>{customTitle}</Text>
        <Text style={styles.description}>{customDescription}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e63946',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {marginLeft: 20},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#00171f',
  },
  description: {fontSize: 14, color: '#00171f'},
  icon: {height: 45, width: 45},
});
