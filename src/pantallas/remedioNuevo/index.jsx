import { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Button,
  TextInput,
  Keyboard,
} from "react-native";
import DatePicker from "@react-native-community/datetimepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./styles";
import { theme } from "../../constantes/theme";
import { Card } from "../../componentes";

const RemedioNuevo = ({ remedioSetter, formSetter }) => {
  const [medicamento, setMedicamento] = useState("");
  const [dosis, setDosis] = useState("");

  const [time, setTime] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onPressBack = () => {
    formSetter(false);
    remedioSetter(false);
  };

  const openTimePicker = async () => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 12,
        minute: 0,
        is24Hour: false,
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        const selectedTime = new Date();
        selectedTime.setHours(hour);
        selectedTime.setMinutes(minute);
        setTime(selectedTime);
      }
    } catch (error) {
      console.warn("Cannot open time picker", error);
    }
  };

  const onTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setTime(selectedTime);
    }
    setShowPicker(false);
  };

  const openTimeSelector = () => {
    setShowPicker(true);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Ingrese los datos del medicamento.</Text>
        <Card style={styles.inputContainer}>
          <TextInput
            placeholder="Medicamento"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit
            // OnchangeText={(medicamento) => setText(medicamento)}
            // value={ medicamento }
          />
          <TextInput
            placeholder="Dosis"
            keyboardType="numeric"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit
            // OnchangeText={(dosis) => setText(dosis)}
            // value={ dosis }
          />

          <TextInput
            value={date.toLocaleDateString()}
            placeholder="Selecciona fecha de inicio"
            onFocus={openDatePicker}
          />
          <Button
            title="Selecciona fecha de inicio"
            color={theme.colores.primario}
            onPress={openDatePicker}
          />
          {showDatePicker && (
            <DatePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}

          <TextInput
            value={time ? time.toLocaleTimeString() : ""}
            placeholder="Selecciona Hora de inicio"
            onFocus={openTimePicker}
          />
          <Button
            title="Selecciona Hora de inicio"
            color={theme.colores.primario}
            onPress={openTimeSelector}
          />
          {showPicker && (
            <DateTimePicker
              value={time || new Date()}
              mode="time"
              display="default"
              onChange={onTimeChange}
            />
          )}
          <View style={styles.formButton}>
            <Button
              title="Back"
              onPress={onPressBack}
              color={theme.colores.oscuro}
            />
            <Button
              title="Reset"
              onPress={() => {}}
              color={theme.colores.primario}
            />
            <Button
              title="Confirm"
              onPress={() => {}}
              color={theme.colores.oscuro}
            />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RemedioNuevo;
