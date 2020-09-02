import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
//Const

const Camera = () => {
  const [state, guardarState] = useState({
    resourcePath: {},
  });

  const selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [],
      takePhotoButtonTitle: 'Tomar Foto',
      chooseFromLibraryButtonTitle: 'Buscar en mis Archivos',
      storageOptions: {
        skipBackup: true,
        path: 'images',
        maxWidth: 200,
        maxHeight: 200,
        quality: 0.2,
      },
    };

    ImagePicker.showImagePicker(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        guardarState({
          resourcePath: source,
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,' + state.resourcePath.data,
          }}
          style={{width: 100, height: 100}}
        />
        <Image
          source={{uri: state.resourcePath.uri}}
          style={{width: 200, height: 200}}
        />
        <Text style={{alignItems: 'center'}}>{state.resourcePath.uri}</Text>

        <TouchableOpacity onPress={selectFile} style={styles.button}>
          <Text style={styles.buttonText}>Select File</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
});
