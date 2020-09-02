import React, {Fragment, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
//Importamos de react native elemets
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
//Importamos el alerta de Error
import AlertError from '../item/AlertError';
//Importmaos el modal
import ModalLoading from '../item/ModalLoading';

//---------------------------------------------------------
const {width: DEVICE_WIDTH} = Dimensions.get('window');
const {height: DEVICE_HEIGHT} = Dimensions.get('window');
//---------------------------------------------------------
const Login = ({navigation}) => {
  //----------------------------------------
  const [user, guardarUser] = useState('');
  const [pass, guardarPass] = useState('');

  const [alerta, guardarAlerta] = useState({
    estado: false,
    mensaje: null,
  });

  const [isModalVisible, setModalVisible] = useState(false);
  //--------------------------------------
  const onChangeUsuario = (valor) => {
    guardarUser(valor);
  };
  const onChangePass = (valor) => {
    guardarPass(valor);
  };
  const onPressForm = () => {
    if (user.trim() === '' || pass.trim() === '') {
      guardarAlerta({
        estado: true,
        mensaje: 'Datos Incompletos Revise nuevamente',
      });
    } else {
      //MNos aseguramos que no salga la alerta
      guardarAlerta({
        estado: false,
        mensaje: null,
      });
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('form');
      }, 2000);
      //navigation.navigate('form');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.seccion_1}>
        <View style={styles.seccion_1_1}>
          <Image source={require('../resourse/img/logo.jpg')} />
        </View>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <View style={styles.seccion_1_2}>
            <Text style={styles.titulo_formulario}>
              Ingrese sus Credenciales
            </Text>
            <Fragment>
              <View style={styles.entradas}>
                <Input
                  placeholder="Usuario"
                  leftIcon={<Icon name="user" size={20} color="black" />}
                  onChangeText={onChangeUsuario}
                />
                <Input
                  placeholder="Password"
                  leftIcon={<Icon name="lock" size={20} color="black" />}
                  onChangeText={onChangePass}
                />
                <Button
                  icon={
                    <Icon
                      name="unlock"
                      size={15}
                      color="white"
                      style={styles.icono}
                    />
                  }
                  title="INGRESAR "
                  onPress={onPressForm}
                />
              </View>
            </Fragment>
          </View>
        </KeyboardAvoidingView>
      </View>

      <View style={styles.seccion_2}></View>
      <View style={styles.seccion_3}>
        <Text style={styles.titulo_footer}>
          Facultad de Ingenieria Electronica
        </Text>
      </View>
      {/*MENSAJE DE ERROR*/}
      <AlertError alerta={alerta} guardarAlerta={guardarAlerta} />
      <ModalLoading
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seccion_1: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.6,
    backgroundColor: 'white',
  },
  //------------------------------------- Imagen
  seccion_1_1: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.7 * 0.4,
    alignItems: 'center',
    backgroundColor: '#591822',
  },
  //------------------------------------ formulario
  seccion_1_2: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.7 * 0.6,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-end',
  },
  titulo_formulario: {
    marginHorizontal: 10,
    fontFamily: 'Cochin',
    fontSize: 20,
  },
  entradas: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  icono: {
    marginHorizontal: 4,
  },
  //-------------------------------------------------
  seccion_2: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.35,
    backgroundColor: 'white',
  },
  seccion_3: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.05,
    backgroundColor: '#af253b',
  },
  titulo_footer: {
    borderTopColor: 'black',
    marginHorizontal: 10,
    color: '#fff',
  },
});
export default Login;
