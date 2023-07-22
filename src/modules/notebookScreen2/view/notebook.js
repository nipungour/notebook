import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

// Screens
import { Images, Colors } from '@app/constants';
import { Header, Button } from '@app/component';
import { getStyle } from './styles';

function NoteBookScreen() {
  const styles = getStyle();

  // DatePicker
  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
  const [isDisplayDate, setShow] = useState(false);

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
    <View>
      
      <View style={styles.container}>       
        {/* header */}
        <Header title={'Page2'} />
        {/* book container */}
        <View style={styles.bookcontainertSection}>
          <View style={styles.commentSection}>
            <View>
              <Text style={styles.title}>Upload you file </Text>
              <View style={styles.bookContainertBorder}>
                <Image source={Images.gallery} style={styles.image} />
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
            <View>
              <Text style={styles.title}>Upload you file </Text>
              <View style={styles.bookContainertBorder}>
                <Image source={Images.gallery} style={styles.image} />
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
      </View>
    </View>
  );
}

export { NoteBookScreen };
