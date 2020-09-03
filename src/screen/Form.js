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
//---------------------------------------------------------
import Icon from 'react-native-vector-icons/FontAwesome';
//----------------------------------------------------
import Camera from '../item/Camera';
//-----------------------------------------------------
import AlertConfirm from '../item/AlertConfirm';
//---------------------------------------------------------
const {width: DEVICE_WIDTH} = Dimensions.get('window');
const {height: DEVICE_HEIGHT} = Dimensions.get('window');
//---------------------------------------------------------
const Form = () => {
  //
  const [slider, guardarSlider] = useState(10);
  //
  const [check, guardarCheck] = useState(false);
  //
  const [fechaInicio, guardarFechaInicio] = useState({
    aprobacion: false,
    tiempo: '',
  });
  const [botonInicio, guardarBotonInicio] = useState({
    aprobacion: false,
    tiempo: '',
  });
  const [botonFinal, guardarBotonFinal] = useState({
    aprobacion: false,
    tiempo: '',
  });
  //
  const [estado, guardarEstado] = useState(false);
  //
  const [valor, guardarValor] = useState(0);
  //------------------------------------********************--------
  const onPressFecha = () => {
    guardarValor(1);
    guardarEstado(true);
  };

  //-------------------------- *****************------
  const onPressHoraInicio = () => {
    guardarValor(2);
    guardarEstado(true);
  };

  const onPressHoraFinal = () => {
    guardarValor(3);
    guardarEstado(true);
  };

  const confirmar = () => {
    guardarValor(4);
    guardarEstado(true);
  };

  const reset = () => {
    guardarBotonFinal({
      aprobacion: false,
      tiempo: '',
    });
    guardarFechaInicio({
      aprobacion: false,
      tiempo: '',
    });
    gutadarBotonInicio({
      aprobacion: false,
      tiempo: '',
    });
    //
    guardarEstado(false);
    guardarValor(0);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.seccion_0}>
          <Text style={styles.texto_titulo_principal}>Control de Clases</Text>
        </View>
        <View style={styles.seccion_1}>
          <View style={styles.entradas}>
            <Text style={styles.left}>BIENVENIDO : </Text>
            <Text style={styles.titulo_docente}>Ing Machicao</Text>
          </View>
          <View style={styles.entradas}>
            <Text style={styles.left}>Materias Actuales del docente : </Text>
            <Select />
          </View>
          <View style={styles.entradas}>
            <Text style={styles.left}>Tema Estudiado </Text>
            <View style={styles.right}>
              <Input
                placeholder="Titulo del Tema Avanzado"
                multiline={true}
                numberOfLines={2}
                style={styles.tema_input}
              />
            </View>
          </View>
          <View style={styles.entradas}>
            <Text style={styles.left}>Numero de Estudiantes : </Text>
            <View style={styles.right_entradas}>
              <Input
                style={styles.estudiantes_input}
                keyboardType="numeric"
                placeholder="Cantidad"
                leftIcon={<Icon name="user" size={15} color="white" />}
              />
            </View>
          </View>

          <View style={styles.entradas}>
            <Text style={styles.left}>Obtener Fecha de Clase</Text>
            <View style={styles.right}>
              {fechaInicio.aprobacion ? (
                <Button
                  icon={
                    <Icon
                      name="check"
                      size={20}
                      color="white"
                      style={styles.icono}
                    />
                  }
                  title={fechaInicio.tiempo}
                  style={styles.boton}
                  buttonStyle={{
                    backgroundColor: '#64C55F',
                  }}
                  titleStyle={{
                    fontFamily: 'Exo2-Medium',
                    color: 'black',
                  }}
                />
              ) : (
                <Button
                  icon={
                    <Icon
                      name="star"
                      size={15}
                      color="white"
                      style={styles.icono}
                    />
                  }
                  title="Obtener Fecha de Inicio"
                  style={styles.boton}
                  buttonStyle={{
                    backgroundColor: '#4C2872',
                  }}
                  titleStyle={{
                    fontFamily: 'Exo2-Medium',
                  }}
                  onPress={onPressFecha}
                />
              )}
            </View>
          </View>
          <View style={styles.entradas}>
            <Text style={styles.left}>Obtener Hora Inicial de Clase </Text>
            <View style={styles.right}>
              {botonInicio.aprobacion ? (
                <Button
                  icon={
                    <Icon
                      name="check"
                      size={20}
                      color="white"
                      style={styles.icono}
                    />
                  }
                  title={botonInicio.tiempo}
                  style={styles.boton}
                  buttonStyle={{
                    backgroundColor: '#64C55F',
                  }}
                  titleStyle={{
                    fontFamily: 'Exo2-Medium',
                    color: 'black',
                  }}
                />
              ) : (
                <Button
                  icon={
                    <Icon
                      name="edit"
                      size={15}
                      color="white"
                      style={styles.icono}
                    />
                  }
                  title="Obtener Hora de Inicio "
                  style={styles.boton}
                  buttonStyle={{
                    backgroundColor: '#4C2872',
                  }}
                  titleStyle={{
                    fontFamily: 'Exo2-Medium',
                  }}
                  onPress={onPressHoraInicio}
                />
              )}
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
                style={styles.slider}
              />
              <Text style={styles.titulo_progreso}>Progreso: {slider} %</Text>
            </View>
          </View>

          <View style={styles.entradas}>
            <Text style={styles.left}>Respaldo : </Text>
            <View>
              <CheckBox
                title="Click Aqui"
                checked={check}
                onPress={() => guardarCheck(!check)}
                containerStyle={styles.check}
                textStyle={styles.text_check}
                checkedColor={'white'}
              />
            </View>
          </View>
          <View style={styles.entradas}>
            <Text style={styles.left}>Obtener Hora Final de Clase </Text>
            <View style={styles.right}>
              {botonFinal.aprobacion ? (
                <Button
                  icon={
                    <Icon
                      name="check"
                      size={20}
                      color="white"
                      style={styles.icono}
                    />
                  }
                  title={botonFinal.tiempo}
                  style={styles.boton}
                  buttonStyle={{
                    backgroundColor: '#64C55F',
                  }}
                  titleStyle={{
                    fontFamily: 'Exo2-Medium',
                    color: 'black',
                  }}
                />
              ) : (
                <Button
                  icon={
                    <Icon
                      name="edit"
                      size={15}
                      color="white"
                      style={styles.icono}
                    />
                  }
                  title="Obtener Hora Final  "
                  style={styles.boton}
                  buttonStyle={{
                    backgroundColor: '#4C2872',
                  }}
                  titleStyle={{
                    fontFamily: 'Exo2-Medium',
                  }}
                  onPress={onPressHoraFinal}
                />
              )}
            </View>
          </View>
          <Camera />
        </View>
        <View style={styles.seccion_3}>
          <Button
            icon={
              <Icon name="check" size={15} color="white" style={styles.icono} />
            }
            title="REGISTRAR "
            style={styles.boton_envio}
            buttonStyle={{
              backgroundColor: '#379783',
              marginVertical: 8,
              width: DEVICE_WIDTH * 0.8,
            }}
            titleStyle={{
              fontFamily: 'Exo2-Medium',
            }}
            onPress={confirmar}
          />
          <Button
            icon={
              <Icon
                name="arrow-left"
                size={15}
                color="white"
                style={styles.icono}
              />
            }
            title="CANCELAR"
            style={styles.boton_envio}
            buttonStyle={{
              backgroundColor: '#C45E3B',
              marginVertical: 8,
              width: DEVICE_WIDTH * 0.8,
            }}
            titleStyle={{
              fontFamily: 'Exo2-Medium',
            }}
          />
        </View>
      </View>
      {/* */}
      <AlertConfirm
        estado={estado}
        valor={valor}
        guardarEstado={guardarEstado}
        fechaInicio={fechaInicio}
        guardarFechaInicio={guardarFechaInicio}
        botonInicio={botonInicio}
        guardarBotonInicio={guardarBotonInicio}
        botonFinal={botonFinal}
        guardarBotonFinal={guardarBotonFinal}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#591822',
  },
  seccion_0: {
    width: DEVICE_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  texto_titulo_principal: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Exo2-Medium',
  },
  seccion_1: {
    width: DEVICE_WIDTH,
    backgroundColor: 'white',
    paddingHorizontal: 5,
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
    fontFamily: 'Montserrat-Medium',
  },
  right: {
    width: DEVICE_WIDTH * 0.6,
    backgroundColor: 'white',
    borderRadius: 10,
    backgroundColor: '#3B9E99',
  },
  right_entradas: {
    width: DEVICE_WIDTH * 0.6,
    height: DEVICE_HEIGHT * 0.8 * 0.1,
    backgroundColor: '#3B9E99',
    borderRadius: 10,
  },
  tema_input: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    width: DEVICE_WIDTH * 0.55,
  },
  estudiantes_input: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    width: DEVICE_WIDTH * 0.5,
    height: DEVICE_HEIGHT * 0.05,
  },
  boton: {
    width: DEVICE_WIDTH * 0.1,
    backgroundColor: '#231132',
  },
  titulo_docente: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE_WIDTH * 0.6,
    backgroundColor: 'white',
    borderRadius: 10,
    backgroundColor: '#3B9E99',

    fontFamily: 'Exo2-Medium',
  },
  slider: {
    marginHorizontal: 5,
  },
  titulo_progreso: {
    color: '#fff',
    marginLeft: 5,
  },
  check: {
    color: 'white',
    backgroundColor: '#992F3B',
  },
  icono: {
    marginHorizontal: 5,
  },
  text_check: {
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
  },
  seccion_3: {
    flex: 1,
    marginVertical: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  boton_envio: {
    marginVertical: 10,
    marginHorizontal: 20,
    width: DEVICE_WIDTH,
  },
});
export default Form;
