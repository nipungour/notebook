/**
 * @format
 * Text Input Component
 */

import React from 'react';
import { View, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { Colors } from '@app/constants';

const Input = props => {
  return (
    <View style={[styles.containerStyle, props.containerStyle]}>
      <TextInput style={[styles.input, props.style]} {...props} />
    </View>
  );
};

const styles = ScaledSheet.create({
  containerStyle: {
    height: '48@ms',
    width: '100%',
    borderColor: '#CECECE',
    borderWidth: '1.5@ms',
    marginBottom: '10@ms',
    borderRadius: '5@ms',
  },
  input: {
    width: '100%',
    height: '46@ms',
    backgroundColor: 'transparent',
  },
});

export { Input };
