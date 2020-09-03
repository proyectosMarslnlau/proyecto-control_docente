import React, {useState} from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Picker} from '@react-native-community/picker';
//---------------------------------------------------------
const {width: DEVICE_WIDTH} = Dimensions.get('window');
const {height: DEVICE_HEIGHT} = Dimensions.get('window');
//---------------------------------------------------------
const SelectPlataformas = () => {
  const [state, guardarState] = useState({
    language: 'Seleccione una opcion',
  });
  return (
    <Picker
      selectedValue={state.language}
      style={styles.selector}
      onValueChange={(itemValue, itemIndex) =>
        guardarState({language: itemValue})
      }
      pickerStyleType={{
        fontFamily: 'Montserrat-Medium',
      }}>
      <Picker.Item
        label="Seleccion una Opcion"
        value="java"
        itemStyle={styles.options}
      />
      <Picker.Item label="Moodle" value="1" />
      <Picker.Item label="Sistema de Repositorio" value="2" />
      <Picker.Item label="Microsoft Teems" value="3" />
      <Picker.Item label="Zoom" value="4" />
      <Picker.Item label="Cisco" value="5" />
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
    fontFamily: 'Montserrat-Medium',
  },
  options: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
  },
});
export default SelectPlataformas;
