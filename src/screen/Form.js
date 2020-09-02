import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
  SafeAreaView,
} from 'react-native';
//--------------------------------------------------------
import Select from '../item/Select';
//
import {Button, Input, Slider, CheckBox} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import Camera from '../item/Camera';
//---------------------------------------------------------
const {width: DEVICE_WIDTH} = Dimensions.get('window');
const {height: DEVICE_HEIGHT} = Dimensions.get('window');
//---------------------------------------------------------
const Form = () => {
  //
  const [slider, guardarSlider] = useState(0);
  //
  const [check, guardarCheck] = useState(true);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.seccion_1}>
          <View style={styles.entradas}>
            <Text style={styles.left}>BIENVENIDO : </Text>
            <Text style={styles.right}>Ing Marcelo Poma Calle</Text>
          </View>
          <View style={styles.entradas}>
            <Text style={styles.left}>Materias Actuales del docente : </Text>
            <Select />
          </View>
          <View style={styles.entradas}>
            <Text style={styles.left}>Tema Estudiado </Text>
            <View style={styles.right}>
              <Input
                placeholder="BASIC INPUT"
                multiline={true}
                numberOfLines={2}
                style={styles.tema}
              />
            </View>
          </View>
          <View style={styles.entradas}>
            <Text style={styles.left}>Numero de Estudiantes : </Text>
            <View style={styles.right_entradas}>
              <Input
                style={styles.estudiantes}
                keyboardType="numeric"
                placeholder="Cantidad"
                leftIcon={<Icon name="user" size={15} color="black" />}
              />
            </View>
          </View>
          <View style={styles.entradas}>
            <Text style={styles.left}>Obtener Fecha de Inicio de Clase </Text>
            <View style={styles.right}>
              <Button
                icon={<Icon name="arrow-right" size={15} color="white" />}
                title="Obtener Hora de Inicio "
                style={styles.boton}
              />
            </View>
          </View>
          <View style={styles.entradas}>
            <Text style={styles.left}>Obtener Fecha de Fin de Clase</Text>
            <View style={styles.right}>
              <Button
                icon={<Icon name="arrow-right" size={15} color="white" />}
                title="Obtener Hora de Final "
                style={styles.boton}
              />
            </View>
          </View>
          <View style={styles.entradas}>
            <Text style={styles.left}>Plataforma utilizada </Text>
            <Select />
          </View>

          <View style={styles.entradas}>
            <Text style={styles.left}>Avance : </Text>
            <View style={styles.right}>
              <Slider
                value={slider}
                onValueChange={guardarSlider}
                maximumValue={100}
                minimumValue={0}
                step={1}
              />
              <Text>Value: {slider}</Text>
            </View>
          </View>

          <View style={styles.entradas}>
            <Text style={styles.left}>BIENVENIDO : </Text>
            <View>
              <CheckBox
                title="Click Here"
                checked={check}
                onPress={() => guardarCheck(!check)}
              />
            </View>
          </View>
          <Camera />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'red',
  },
  seccion_1: {
    width: DEVICE_WIDTH,

    backgroundColor: 'green',
  },
  entradas: {
    flexGrow: 3,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  left: {
    flex: 1,
    width: DEVICE_WIDTH * 0.4,
    backgroundColor: 'green',
  },
  right: {
    width: DEVICE_WIDTH * 0.6,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  right_entradas: {
    width: DEVICE_WIDTH * 0.6,
    height: DEVICE_HEIGHT * 0.8 * 0.1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  tema: {
    color: 'black',
    borderRadius: 5,
  },
  estudiantes: {
    color: 'black',
    width: DEVICE_WIDTH * 0.5,
    height: DEVICE_HEIGHT * 0.05,
  },
  boton: {
    width: DEVICE_WIDTH * 0.1,
    backgroundColor: 'yellow',
  },
});
export default Form;
