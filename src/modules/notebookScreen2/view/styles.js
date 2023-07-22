/**
 * @format
 * NoteBook Style
 */

import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '@app/constants';

export const getStyle = () => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.White,
      width: '100%',
    },
    head: {
      height: '70@ms',
    },
    headerTitle: {
      fontWeight: 'bold',
      color: Colors.White,
      textAlign: 'center',
      fontSize: '19@ms',
    },
    title: {
      fontSize: '22@ms',
      fontWeight: '700',
      color: Colors.Black,
    },
    text: {
      fontSize: '14@ms',
      fontWeight: '400',
      color: Colors.Black,
    },
    bookcontainertSection: {
      borderWidth: '1@ms',
      borderColor: Colors.Black,
    },
    commentSection: {
      flexDirection: 'row',
    },
    bookContainertBorder: {
      width: '100%',
      borderStyle: 'dashed',
      borderWidth: '1@ms',
      borderRadius: '10@ms',
      margin: '20@ms',
    },
    browseText: {
      color: Colors.Primary,
    },
  });
};
