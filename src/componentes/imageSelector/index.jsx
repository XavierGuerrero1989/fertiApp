import { requestCameraPermissionsAsync, launchCameraAsync  } from "expo-image-picker";
import { useState } from "react";
import { View, Button, Text, Image, Alert } from "react-native";

import { theme } from "../../constantes";
import { styles } from "./styles";

export const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permiso denegado", "Necesitamos permisos para usar la camara", [{ text: "Ok" }]);
      return false;
    }

    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await launchCameraAsync ({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <View style={styles.buttonCtn}>
        <Button title="Tomar Foto" color={theme.colores.primario} onPress={onHandleTakeImage} />
      </View>
    </View>
  );
};

export default ImageSelector;