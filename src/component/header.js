/**
 * @format
 * Label Component
 */

import React from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { Colors } from '@app/constants';

const Header = ({ title }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  containerStyle: {
    borderWidth: '1@ms',
    borderColor: Colors.Black,
    justifyContent: 'center',
    alignItems: 'center',
    height: '70@ms',
  },
  textStyle: {
    fontWeight: '600',
    color: Colors.Black,
    width: '100%',
  },
});

export { Header };
