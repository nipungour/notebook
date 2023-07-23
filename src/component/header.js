/**
 * @format
 * Label Component
 */

import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '@app/constants';

const Header = ({ title }) => {
  return (
    <View style={styles.containerStyle}>
      <StatusBar backgroundColor={Colors.Primary} translucent />
      <TouchableOpacity>
        <Icon name={'arrow-back'} color={Colors.White} size={22} />
      </TouchableOpacity>

      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '90@ms',
    backgroundColor: Colors.Primary,
    width: '100%',
    borderBottomRightRadius: '20@ms',
    borderBottomLeftRadius: '20@ms',
    borderColor: 'transparent',
    flexDirection: 'row',
    paddingHorizontal: '25@ms',
    paddingTop: StatusBar.currentHeight,
  },
  textStyle: {
    fontWeight: '600',
    color: Colors.White,
    width: '100%',
    textAlign: 'center',
    fontSize: '18@ms',
  },
});

export { Header };
