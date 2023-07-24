/**
 * @format
 * NoteBook Style
 */

import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '@app/constants';

export const getStyle = () => {
  return ScaledSheet.create({
    container: {
      // flex: 1,
      alignItems: 'center',
      height: 'auto',
      padding: '10@ms',
      marginHorizontal: '10@ms',
      borderColor: Colors.Gray,
      borderWidth: 1,
      borderRadius: '10@ms',
    },
    commentSection: {
      flexDirection: 'row',
      width: '100%',
    },
    uploadSection: {
      width: '97%',
      borderStyle: 'dashed',
      borderWidth: '1@ms',
      borderRadius: '10@ms',
      borderColor: Colors.Gray,
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20@ms',
      marginVertical: '5@ms',
      marginHorizontal: '2@ms',
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
    subHeader: {
      borderWidth: '1@ms',
      borderRadius: '10@ms',
      borderColor: Colors.Gray,
      justifyContent: 'center',
      alignItems: 'center',
      height: '45@ms',
      marginHorizontal: '10@ms',
      marginVertical: '10@ms',
    },
    title: {
      fontSize: '12@ms',
      fontWeight: '700',
      color: Colors.Black,
    },
    titleBrowse: {
      fontSize: '11@ms',
      fontWeight: '700',
      color: Colors.Black,
    },
    text: {
      fontSize: '12@ms',
      fontWeight: '400',
      color: Colors.Black,
    },

    browseText: {
      color: Colors.Primary,
    },
    signContainer: {
      flexDirection: 'row',
      borderWidth: '1@ms',
      borderRadius: '15@ms',
      borderColor: Colors.Black,
      justifyContent: 'center',
      alignItems: 'center',
      height: '30@ms',
      paddingHorizontal: '10@ms',
      marginHorizontal: '2@ms',
    },
    datePickerContainer: {
      borderWidth: '1@ms',
      borderRadius: '05@ms',
      borderColor: Colors.Black,
      justifyContent: 'center',
      alignItems: 'center',
      height: '30@ms',
      paddingHorizontal: '15@ms',
      marginHorizontal: '2@ms',
    },
    labText: {
      color: Colors.Black,
      textAlign: 'center',
      fontWeight: '600',
    },
    labTexts: {
      color: Colors.Black,
      textAlign: 'center',
      fontWeight: '600',
    },
  });
};
