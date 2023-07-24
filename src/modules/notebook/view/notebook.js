/**
 * @format
 * Notebook Screen
 */

import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/AntDesign';

import { Images, Colors } from '@app/constants';
import { Header, Button, Input } from '@app/component';
import { getStyle } from './styles';

function NoteBookScreen() {
  const styles = getStyle();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [uploadFiles, setUploadFiles] = useState(false);
  const [uploadFile, setUploadFile] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
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
          <View style={{ flexDirection: 'row', marginVertical: 20 }}>
            <View style={{ width: '33%' }}>
              <TouchableOpacity style={styles.signContainer}>
                <Icon
                  name={'upload'}
                  color={Colors.Black}
                  size={16}
                  style={{ paddingHorizontal: 5 }}
                />
                <Text style={styles.text}>Upload Sign</Text>
              </TouchableOpacity>
              <Text style={styles.labText}>Lab Partner</Text>
            </View>
            <View style={{ width: '33%' }} />
            <View style={{ width: '33%' }}>
              {/* DatePicker */}
              <TouchableOpacity
                style={styles.datePickerContainer}
                onPress={showDatePicker}>
                <Text style={styles.text}>
                  {' '}
                  {selectedDate
                    ? selectedDate.toLocaleDateString()
                    : DD - MM - YY}
                </Text>
              </TouchableOpacity>
              <Text style={styles.labTexts}>Witnessed By</Text>
              <DateTimePickerModal
                date={selectedDate}
                isVisible={datePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
          </View>
        
        </View>
        <Button title={'Save Notes'} />
      
      </View>
    </>
  );
}

export { NoteBookScreen };
