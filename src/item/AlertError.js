import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
//-----------------------------------------------
const AlertError = ({alerta, guardarAlerta}) => {
  if (alerta.mensaje == null) return null;
  console.log(alerta);
  return (
    <View>
      <AwesomeAlert
        show={alerta.estado}
        showProgress={true}
        title="Error"
        message={alerta.mensaje}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="ACEPTAR"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          guardarAlerta({
            estado: false,
            mensaje: null,
          });
        }}
      />
    </View>
  );
};

export default AlertError;
