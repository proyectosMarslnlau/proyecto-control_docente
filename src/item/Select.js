import React, {useState} from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Picker} from '@react-native-community/picker';
//---------------------------------------------------------
const {width: DEVICE_WIDTH} = Dimensions.get('window');
const {height: DEVICE_HEIGHT} = Dimensions.get('window');
//---------------------------------------------------------
const Select = () => {
  const [state, guardarState] = useState({
    language: 'Seleccione una opcion',
  });
  return (
    <Picker
      selectedValue={state.language}
      style={styles.selector}
      onValueChange={(itemValue, itemIndex) =>
        guardarState({language: itemValue})
      }>
      <Picker.Item
        label="Seleccion una Opcion"
        value="java"
        itemStyle={styles.options}
      />
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
    color: 'white',
    height: 50,
    width: DEVICE_WIDTH * 0.6,
    borderRadius: 10,
    backgroundColor: '#3B9E99',
  },
  options: {
    color: 'white',
  },
});
export default Select;
