/**
 * @format
 * Notebook Screen
 */

import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/AntDesign';

import { Images, Colors } from '@app/constants';
import { Header, Button, Input } from '@app/component';
import { getStyle } from './styles';

function NoteBookScreen() {
  const styles = getStyle();

  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
  const [isDisplayDate, setShow] = useState(false);
  const [uploadFiles, setUploadFiles] = useState(false);
  const [uploadFile, setUploadFile] = useState(false);

  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const displayDatepicker = () => {
    showMode('date');
  };

  return (
    <>
      {/* header */}
      <Header title={'Notebook'} />
      <View style={{ flex: 1, backgroundColor: Colors.White }}>
        <View style={styles.subHeader}>
          <Text style={styles.title}>{'Page 2'}</Text>
        </View>
        {/* book container */}
        <View style={styles.container}>
          <View style={styles.commentSection}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>Upload you file </Text>
              <TouchableOpacity
                style={styles.uploadSection}
                onPress={() =>
                  DocumentPicker.pick({
                    type: DocumentPicker.types.images,
                  }).then(e => setUploadFiles(e[0]))
                }>
                <Image
                  source={
                    uploadFiles ? { uri: uploadFiles.uri } : Images.gallery
                  }
                  style={styles.fileEmpty}
                />
                <Text style={styles.titleBrowse}>
                  Drag you file here or{' '}
                  <Text style={styles.browseText}>browse</Text>
                </Text>
              </TouchableOpacity>
              <Input
                placeholder="Enter Comment"
                placeholderTextColor={Colors.Gray}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>Upload you file </Text>
              <TouchableOpacity
                style={styles.uploadSection}
                onPress={() =>
                  DocumentPicker.pick({
                    type: DocumentPicker.types.images,
                  }).then(e => setUploadFile(e[0]))
                }>
                <Image
                  source={uploadFile ? { uri: uploadFile.uri } : Images.gallery}
                  style={styles.fileEmpty}
                />
                <Text style={styles.titleBrowse}>
                  Drag you file here or{' '}
                  <Text style={styles.browseText}>browse</Text>
                </Text>
              </TouchableOpacity>
              <Input
                placeholder="Enter Comment"
                placeholderTextColor={Colors.Gray}
              />
            </View>
          </View>
          <Text numberOfLines={1} style={{ marginVertical: 20 }}>
            ______________________________________________________________
          </Text>
          <View style={styles.commentSection}>
            {/* Upload Sign */}
            <TouchableOpacity style={styles.signContainer}>
              <Icon
                name={'upload'}
                color={Colors.Black}
                size={16}
                style={{ paddingHorizontal: 5 }}
              />
              <Text style={styles.text}>Upload Sign</Text>
            </TouchableOpacity>
            <View style={styles.commentSection}>
              <Text style={styles.labText}>Lab Partner</Text>
              <Text style={styles.labTexts}>Witnessed By</Text>
            </View>

            {/* DatePicker */}
            <TouchableOpacity
              style={styles.datePickerContainer}
              onPress={displayDatepicker}>
              <Text style={styles.text}>DD-MM-YY</Text>
            </TouchableOpacity>
            {isDisplayDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={mydate}
                mode={displaymode}
                is24Hour={true}
                display="default"
                onChange={changeSelectedDate}
              />
            )}
          </View>
        </View>

        <Button title={'Save Notes'} />
      </View>
    </>
  );
}

export { NoteBookScreen };
