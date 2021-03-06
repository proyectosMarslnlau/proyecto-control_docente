import React, {Fragment, useState, useEffect} from 'react';

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
//-----------------------------------------------------------------
import AsyncStorage from '@react-native-community/async-storage';
//---------------------------------------------------------
const {width: DEVICE_WIDTH} = Dimensions.get('window');
const {height: DEVICE_HEIGHT} = Dimensions.get('window');
//---------------------------------------------------------
const Login = ({navigation}) => {
  useEffect(() => {
    getData();
  }, []);
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
        storeData('logueado');
        setModalVisible(false);
        reset();
        navigation.navigate('form');
      }, 2000);
      //navigation.navigate('form');
    }
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_ingreso', value);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_ingreso');
      if (value === 'logueado') {
        navigation.navigate('form');
      }
    } catch (e) {
      console.log(e);
    }
  };
  const reset = () => {
    guardarUser('');
    guardarPass('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.seccion_1}>
        <View style={styles.seccion_1_1}>
          <Image
            source={require('../resourse/img/etnf.jpg')}
            style={styles.imagen}
          />
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
                  leftIcon={<Icon name="user" size={18} color="black" />}
                  onChangeText={onChangeUsuario}
                  inputStyle={{
                    fontSize: 15,
                    fontFamily: 'Montserrat-Medium',
                  }}
                  value={user}
                />
                <Input
                  placeholder="Password"
                  leftIcon={<Icon name="lock" size={18} color="black" />}
                  onChangeText={onChangePass}
                  value={pass}
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
                  style={styles.boton}
                  title="Ingresar"
                  onPress={onPressForm}
                  buttonStyle={{
                    backgroundColor: '#2F8383',
                  }}
                  titleStyle={{
                    fontFamily: 'Exo2-Medium',
                  }}
                />
              </View>
            </Fragment>
          </View>
        </KeyboardAvoidingView>
      </View>

      <View style={styles.seccion_2}></View>
      <View style={styles.seccion_3}>
        <Text style={styles.titulo_footer}>
          {'\u00A9'}Carrera de Ingenieria Electrónica
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
  imagen: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.28,
  },
  //------------------------------------ formulario
  seccion_1_2: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.7 * 0.6,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titulo_formulario: {
    marginHorizontal: 10,
    marginBottom: 5,
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
  },
  entradas: {
    width: DEVICE_WIDTH * 0.8,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  icono: {
    marginHorizontal: 5,
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
    fontFamily: 'Exo2-Italic',
  },
  boton: {
    fontFamily: 'Exo2-Medium',
    color: 'black',
  },
});
export default Login;
