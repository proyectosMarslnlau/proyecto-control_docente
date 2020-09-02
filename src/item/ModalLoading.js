import React, {useEffect} from 'react';

import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Modal from 'react-native-modal';

//---------------------------------------------------------
const {width: DEVICE_WIDTH} = Dimensions.get('window');
const {height: DEVICE_HEIGHT} = Dimensions.get('window');
//---------------------------------------------------------
//-----------------------------------------------
const ModalLoading = ({navigation, isModalVisible, setModalVisible}) => {
  useEffect(() => {}, []);
  return (
    <View>
      <Modal
        isVisible={isModalVisible}
        animationInTiming={500}
        animationOutTiming={800}>
        <View
          style={{
            width: DEVICE_WIDTH * 0.9,
            height: DEVICE_HEIGHT * 0.12,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            borderRadius: 5,
          }}>
          <Image
            source={require('../resourse/img/loading.gif')}
            style={styles.loading}
          />
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    width: DEVICE_WIDTH * 0.22,
    height: DEVICE_HEIGHT * 0.22,
  },
});
export default ModalLoading;
