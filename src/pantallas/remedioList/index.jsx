import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import { Card } from "../../componentes";

const RemedioList = () => {
  const tratamientosActive = useSelector((state) => state.tratamientos);

  const renderItem = ({ item }) => (
    <Card style={styles.ListContainer}>
      <Text style={styles.ItemMedicamento}>Medicamento F: {item.medicamentoF}</Text>
      <Text style={styles.ItemDosis}>Dosis F: {item.dosisF}</Text>
      <Text style={styles.ItemDate}>Fecha de Inicio F: {item.dateF}</Text>
      <Text style={styles.ItemTime}>Hora de Aplicacion F: {item.timeF}</Text>
      <Text style={styles.ItemMedicamento}>Medicamento H: {item.medicamentoH}</Text>
      <Text style={styles.ItemDosis}>Dosis H: {item.dosisH}</Text>
      <Text style={styles.ItemDate}>Fecha de Inicio H: {item.dateH}</Text>
      <Text style={styles.ItemTime}>Hora de Aplicacion H: {item.timeH}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      {tratamientosActive.length > 0 ? (
        <FlatList
          data={tratamientosActive}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>No tratamiento available</Text>
      )}
    </View>
  );
};

export default RemedioList;
