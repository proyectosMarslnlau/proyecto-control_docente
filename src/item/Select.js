import React, {useState} from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Picker} from '@react-native-community/picker';
//---------------------------------------------------------
const {width: DEVICE_WIDTH} = Dimensions.get('window');
const {height: DEVICE_HEIGHT} = Dimensions.get('window');
//---------------------------------------------------------
const Select = () => {
  const [state, guardarState] = useState({
    language: 'java',
  });
  return (
    <Picker
      selectedValue={state.language}
      style={styles.selector}
      onValueChange={(itemValue, itemIndex) =>
        guardarState({language: itemValue})
      }>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};

const styles = StyleSheet.create({
  container: {},
  selector: {
    color: 'black',
    height: 50,
    width: DEVICE_WIDTH * 0.6,
    backgroundColor: 'white',
  },
});
export default Select;
