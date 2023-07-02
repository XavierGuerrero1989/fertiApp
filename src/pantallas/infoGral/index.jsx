import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Linking } from "react-native";
import { Card } from "../../componentes";
import { styles } from "./styles";

const InfoGeneral = () => {
  const handleLinkPress = () => {
    Linking.openURL("https://fertilis.com.ar/preguntas-frecuentes/");
  };

  return (
    <ScrollView style={styles.Container}>
      <Text style={styles.texto}>INFORMACION GENERAL IMPORTANTE</Text>
      <Text style={styles.texto}>1) Mantener la medicacion en la heladera.</Text>
      <Text style={styles.texto}>2) En caso de transporte de la misma, hacerlo en un medio refrigerado.</Text>
      <Text style={styles.texto}>3) Respetar los horarios de aplicacion de la medicina.</Text>
      <Text style={styles.texto}>
        4) Para obtener respuestas a preguntas frecuentes, visita
        <TouchableOpacity onPress={handleLinkPress}>
          <Text style={styles.textoLink}> preguntas frecuentes</Text>
        </TouchableOpacity>
        .
      </Text>
    </ScrollView>
  );
};

export default InfoGeneral;