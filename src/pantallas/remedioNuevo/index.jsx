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
import {Picker} from '@react-native-picker/picker';
import { newTratamiento } from "../../store/actions/formFiller.action";
import { useDispatch } from "react-redux";
import { styles } from "./styles";
import { theme } from "../../constantes/theme";
import { Card } from "../../componentes";
import RemedioList from "../remedioList";
import { useNavigation } from "@react-navigation/native";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";

const RemedioNuevo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [tratamiento, setTratamiento] = useState([]);

  const [medicamento, setMedicamento] = useState("");
  const [dosis, setDosis] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(null);

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }
  
  function close() {
    pickerRef.current.blur();
  }
  


  const onPressReset = () => {
    setMedicamento("");
    setDosis("");
    setTime(null);
    setDate("");
  };

  const medicationOptions = ["FHS", "HMG", "OTROS"];

  const handleConfirm = () => {
    const randomId = Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    const newTratamientoData = {
      id: randomId,
      medicamento: medicamento,
      dosis: dosis,
      date: date,
      time: time,
    };
  
    setTratamiento([...tratamiento, newTratamientoData]);
  
    dispatch(newTratamiento(newTratamientoData));
  
   
    setMedicamento("");
    setDosis("");
    setTime(null);
    setDate("");
    
  
    navigation.navigate("RemedioList", { tratamiento: newTratamientoData });
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>
            Ingrese los datos del medicamento.
          </Text>
          <Card style={styles.inputContainer}>
            <Text style={styles.formMiniTitle}>Tipo de Medicamento</Text>
            
              <Picker
                ref={pickerRef}
                selectedValue={medicamento}
                onValueChange={(itemValue, itemIndex) =>
                  setMedicamento(itemValue)
                }>
                <Picker.Item label="Elija un Medicamento" value="" />
                <Picker.Item label="FHS" value="FHS" />
                <Picker.Item label="HMG" value="HMG" />
                <Picker.Item label="OTROS" value="OTROS" />
              </Picker>

            <TextInput
              placeholder="Dosis"
              keyboardType="numeric"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              onChangeText={setDosis}
              value={dosis}
            />
            
            <TextInput
              placeholder="Fecha (DD/MM/AAAA)"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              onChangeText={(date) => setDate(date)}
              value={date}
            />

            <TextInput
              placeholder="Hora (HH:MM)"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              onChangeText={(time) => setTime(time)}
              value={time}
            />
            

            

            
            <View style={styles.formButton}>
              <Button
                title="Reset"
                onPress={onPressReset}
                color={theme.colores.primario}
              />
              <Button
                title="Confirm"
                onPress={handleConfirm}
                color={theme.colores.oscuro}
              />
            </View>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default RemedioNuevo;