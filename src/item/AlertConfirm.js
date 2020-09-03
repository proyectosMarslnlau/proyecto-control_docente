import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';
//-----------------------------------------------------------------
import AsyncStorage from '@react-native-community/async-storage';

const AlertConfirm = ({
  estado,
  guardarEstado,
  guardarFechaInicio,
  guardarBotonInicio,
  guardarBotonFinal,
  valor,
  reset,
}) => {
  console.log(estado);
  const onPressAction = () => {
    if (valor === 1) {
      guardarFechaInicio({
        aprobacion: true,
        tiempo: '02-09-2020',
      });
      //---------------------
      storeFecha('realizado');
      //---------------------
      guardarEstado(false);
    } else if (valor === 2) {
      guardarBotonInicio({
        aprobacion: true,
        tiempo: '21 : 20',
      });
      //---------------------
      storeHoraInicio('realizado');
      //---------------------
      guardarEstado(false);
    } else if (valor === 3) {
      guardarBotonFinal({
        aprobacion: true,
        tiempo: '21 : 23',
      });
      //---------------------
      storeHoraFinal('realizado');
      //---------------------
      guardarEstado(false);
    } else if (valor === 4) {
      alert('DATOS GUARDADOS');
      reset();
      guardarEstado(false);
    }
  };

  const storeFecha = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_fecha', value);
    } catch (e) {
      console.log(e);
    }
  };
  const storeHoraInicio = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_entrada', value);
    } catch (e) {
      console.log(e);
    }
  };
  const storeHoraFinal = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_salida', value);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <AwesomeAlert
        show={estado}
        showProgress={false}
        title="Confirmar"
        message="Desea Obtener Data de tiempo"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="No, cancel"
        cancelButtonColor="#882E2A"
        confirmText="Yes, obtener"
        confirmButtonColor="#3E5D24"
        onCancelPressed={() => {
          guardarEstado(false);
        }}
        onConfirmPressed={onPressAction}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: '#AEDEF4',
  },
  text: {
    color: '#fff',
    fontSize: 15,
  },
});
export default AlertConfirm;
