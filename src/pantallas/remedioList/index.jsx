import React from "react";
import { View, Text, FlatList, TouchableHighlight, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { Card } from "../../componentes";
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from "../../constantes";
import { useNavigation } from "@react-navigation/native";
import { deleteTratamiento } from "../../store/actions/formFiller.action";

const RemedioList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const tratamientosActive = useSelector((state) => state.tratamientos);

  const handleDelete = (id) => {
    dispatch(deleteTratamiento(id))
  }

  const handleAdd = () => {
    navigation.navigate("RemedioNuevo");
  };

  const renderItem = ({ item }) => (
    <Card style={styles.ListContainer}>
    <View>
      <Text style={styles.ItemMedicamento}>Medicamento: {item.medicamento}</Text>
      <Text style={styles.ItemDosis}>Dosis: {item.dosis}</Text>
      <Text style={styles.ItemDate}>Fecha de Inicio: {item.date}</Text>
      <Text style={styles.ItemTime}>Hora de Aplicacion: {item.time}</Text>
    </View>
      
    <View style={styles.deleteCTN}>
      <TouchableHighlight onPress={() => handleDelete(item.id)}>
        <Icon name="trash-o" size={24} color="red" />
      </TouchableHighlight>
    </View> 
        
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
            <View style={styles.addButton}>
              <Button
                title="Agregar Medicamento"
                onPress={handleAdd}
                color={theme.colores.oscuro}
              />
            </View>
    </View>
    
  );
};

export default RemedioList;
