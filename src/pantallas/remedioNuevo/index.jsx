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
import { newTratamiento } from "../../store/actions/formFiller.action";
import { useDispatch } from "react-redux";
import { styles } from "./styles";
import { theme } from "../../constantes/theme";
import { Card } from "../../componentes";
import RemedioList from "../remedioList";
import { useNavigation } from "@react-navigation/native";

const RemedioNuevo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [tratamiento, setTratamiento] = useState([]);

  const [medicamentoFHS, setMedicamentoFHS] = useState("");
  const [dosisFHS, setDosisFHS] = useState("");
  const [dateFHS, setDateFHS] = useState("");
  const [timeFHS, setTimeFHS] = useState(null);

  const [medicamentoHSM, setMedicamentoHSM] = useState("");
  const [dosisHSM, setDosisHSM] = useState("");
  const [dateHSM, setDateHSM] = useState("");
  const [timeHSM, setTimeHSM] = useState(null);


  const onPressReset = () => {
    setMedicamentoFHS("");
    setDosisFHS("");
    setTimeFHS(null);
    setDateFHS("");
    setMedicamentoHSM("");
    setDosisHSM("");
    setTimeHSM(null);
    setDateHSM("");
  };

  const handleConfirm = () => {
    const newTratamientoData = {
      medicamentoF: medicamentoFHS,
      dosisF: dosisFHS,
      dateF: dateFHS,
      timeF: timeFHS,
      medicamentoH: medicamentoHSM,
      dosisH: dosisHSM,
      dateH: dateHSM,
      timeH: timeHSM,
    };
  
    setTratamiento([...tratamiento, newTratamientoData]);
  
    dispatch(newTratamiento(newTratamientoData));
  
   
    setMedicamentoFHS("");
    setDosisFHS("");
    setTimeFHS(null);
    setDateFHS("");
    setMedicamentoHSM("");
    setDosisHSM("");
    setTimeHSM(null);
    setDateHSM("");
  
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
            <Text style={styles.formMiniTitle}>FSH</Text>
            <TextInput
              placeholder="Medicamento"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              onChangeText={setMedicamentoFHS}
              value={medicamentoFHS}
            />
            <TextInput
              placeholder="Dosis"
              keyboardType="numeric"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              onChangeText={setDosisFHS}
              value={dosisFHS}
            />
            
            <TextInput
              placeholder="Fecha FHS (DD/MM/AAAA)"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              onChangeText={(dateFHS) => setDateFHS(dateFHS)}
              value={dateFHS}
            />

            <TextInput
              placeholder="Hora FHS (HH:MM)"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              onChangeText={(timeFHS) => setTimeFHS(timeFHS)}
              value={timeFHS}
            />
            

            <Text style={styles.formMiniTitle}>HSM</Text>
            <TextInput
              placeholder="Medicamento"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              onChangeText={setMedicamentoHSM}
              value={medicamentoHSM}
            />
            <TextInput
              placeholder="Dosis"
              keyboardType="numeric"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              onChangeText={setDosisHSM}
              value={dosisHSM}
            />

            <TextInput
              placeholder="Fecha HSM (DD/MM/AAAA)"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              onChangeText={(dateHSM) => setDateHSM(dateHSM)}
              value={dateHSM}
            />

            <TextInput
              placeholder="Hora HSM (HH:MM)"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              onChangeText={(timeHSM) => setTimeHSM(timeHSM)}
              value={timeHSM}
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