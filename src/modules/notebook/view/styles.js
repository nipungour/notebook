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
      backgroundColor: Colors.White,
      width: '100%',
      padding: '10@ms',
    },
    commentSection: {
      flexDirection: 'row',
      width: '100%',
    },
    uploadSection: {
      width: '90%',
      borderStyle: 'dashed',
      borderWidth: '1@ms',
      borderRadius: '10@ms',
    },
    fileEmpty: {
      width: '50@ms',
      height: '50@ms',
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

    browseText: {
      color: Colors.Primary,
    },
  });
};
