/**
 * @format
 * Notebook Screen
 */

import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DocumentPicker from 'react-native-document-picker';

import { Images, Colors } from '@app/constants';
import { Header, Button, Input } from '@app/component';
import { getStyle } from './styles';

function NoteBookScreen() {
  const styles = getStyle();

  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
  const [isDisplayDate, setShow] = useState(false);
  const [uploadFiles, setUploadFiles] = useState(false);

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
      {/* book container */}
      <View style={styles.container}>
        <View style={styles.commentSection}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Upload you file </Text>
            <View style={styles.uploadSection}>
              <Image
                source={uploadFiles ? { uri: uploadFiles.uri } : Images.gallery}
                style={styles.fileEmpty}
              />
              <Text
                style={styles.title}
                onPress={() =>
                  DocumentPicker.pick({
                    type: DocumentPicker.types.images,
                  }).then(e => setUploadFiles(e[0]))
                }>
                Drag you file here or{' '}
                <Text style={styles.browseText}>browse</Text>
              </Text>
              <Input
                placeholder="Enter Comment"
                placeholderTextColor={Colors.Gray}
              />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Upload you file </Text>
            <View style={styles.uploadSection}>
              <Image source={Images.gallery} style={styles.fileEmpty} />
              <Text style={styles.title}>
                Drag you file here or{' '}
                <Text style={styles.browseText}>browse</Text>
              </Text>
              <Input
                placeholder="Enter Comment"
                placeholderTextColor={Colors.Gray}
              />
            </View>
          </View>
        </View>
        {/* Upload Sign */}
        <View style={styles.commentSection}>
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Upload Sign</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={displayDatepicker}>
            <Text style={styles.appButtonText}>DD-MM-YY</Text>
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
    </>
  );
}

export { NoteBookScreen };
