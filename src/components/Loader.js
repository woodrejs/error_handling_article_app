import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loader = props => {
  return (
    <View style={styles.loadingContainer} testID="Loader" {...props}>
      <ActivityIndicator size={props.size} color={'gray'} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
