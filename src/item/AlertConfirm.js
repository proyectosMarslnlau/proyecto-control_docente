import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';
const AlertConfirm = ({
  estado,
  guardarEstado,
  guardarFechaInicio,
  guardarBotonInicio,
  guardarBotonFinal,
  valor,
}) => {
  console.log(estado);
  const onPressAction = () => {
    if (valor === 1) {
      guardarFechaInicio({
        aprobacion: true,
        tiempo: '02-09-2020',
      });
      guardarEstado(false);
    } else if (valor === 2) {
      guardarBotonInicio({
        aprobacion: true,
        tiempo: '21 : 20',
      });
      guardarEstado(false);
    } else if (valor === 3) {
      guardarBotonFinal({
        aprobacion: true,
        tiempo: '21 : 23',
      });
      guardarEstado(false);
    } else if (valor === 4) {
      alert('DATOS GUARDADOS');
      guardarEstado(false);
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
