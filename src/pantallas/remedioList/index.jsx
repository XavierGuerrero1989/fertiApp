import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { Card } from "../../componentes";

const RemedioList = ({ route }) => {
  const tratamientoParsed = route.params?.tratamiento || [];

  const renderItem = ({ item }) => (
    <Card style={styles.ListContainer}>
        <Text style={styles.ItemTitle}>Categoria: {item.category}</Text>
        <Text style={styles.ItemMedicamento}>Medicamento: {item.medicamento}</Text>
        <Text style={styles.ItemDosis}>Dosis: {item.dosis}</Text>
        <Text style={styles.ItemDate}>Fecha de Inicio: {item.date}</Text>
        <Text style={styles.ItemTime}>Hora de Aplicacion: {item.time}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      {tratamientoParsed.length > 0 ? (
        <FlatList
          data={tratamientoParsed}
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