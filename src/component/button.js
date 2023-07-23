/**
 * @format
 * Button Component
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { Colors } from '@app/constants';

const Button = ({
  containerStyle,
  btnStyle,
  labelStyle,
  children,
  title,
  ...rest
}) => {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <TouchableOpacity style={[styles.btnStyle, btnStyle]}>
        <Text style={[styles.labelStyle, labelStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    width: '70%',
    height: '48@ms',
    backgroundColor: Colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:'25@ms',
  },
  labelStyle: {
    textTransform: 'none',
    fontSize: '16@ms',
    fontWeight: '600',
    paddingTop: '3@ms',
    color: Colors.White,
    fontWeight: 400,
  },
});

export { Button };
