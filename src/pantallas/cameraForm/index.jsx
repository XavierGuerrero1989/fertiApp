import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Button,
  TextInput,
  Keyboard,
  ScrollView,
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from "react-redux";
import { styles } from "./styles";
import { theme } from "../../constantes/theme";
import { Card, ImageSelector } from "../../componentes";
import { useNavigation } from "@react-navigation/native";
import { uploadFormData } from "../../store/actions/cameraForm.action";

const CameraForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [tipe, setTipe] = useState("");
  const [coment, setComent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleConfirmCamera = async () => {
    // Perform any necessary validation on tipe, coment, and selected image

    // Prepare the form data to be uploaded
    const formData = {
      tipe: tipe,
      coment: coment,
      imageUrl: selectedImage,
    };

    // Dispatch the form data to be uploaded to Firebase Realtime Database
    dispatch(uploadFormData(formData));

    // Navigate to the RemedioList page or perform any other necessary action
    navigation.navigate("RemedioList");
  };

  const onPressResetCamera = () => {
    setTipe("");
    setComent("");
    setSelectedImage(null);
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <Card style={styles.inputContainer}>
            <Text style={styles.formMiniTitle}>Elija el tipo de Imagen a subir.</Text>

            <Picker
              selectedValue={tipe}
              onValueChange={(itemValue, itemIndex) => setTipe(itemValue)}
            >
              <Picker.Item label="Elija una Opcion" value="" />
              <Picker.Item label="Receta" value="FHS" />
              <Picker.Item label="Foto de Remedio" value="HMG" />
              <Picker.Item label="OTROS" value="OTROS" />
            </Picker>

            <Text style={styles.formMiniTitle}>Ingrese comentarios para la imagen.</Text>

            <TextInput
              placeholder="Comentarios"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              onChangeText={setComent}
              value={coment}
            />

            <ImageSelector onImage={setSelectedImage} />

            <View style={styles.formButton}>
              <Button
                title="Resetear"
                onPress={onPressResetCamera}
                color={theme.colores.primario}
              />
              <Button
                title="Cargar"
                onPress={handleConfirmCamera}
                color={theme.colores.oscuro}
              />
            </View>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default CameraForm;