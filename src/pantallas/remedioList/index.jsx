import React, { useCallback, useEffect } from "react";
import { View, Text, FlatList, TouchableHighlight, Button} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { Card } from "../../componentes";
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from "../../constantes";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { deleteMedicamento, getList } from "../../store/actions";

const RemedioList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const medicamento = useSelector((state) => state.list.data);

  const handleDelete = (id) => {
    dispatch(deleteMedicamento(id))
  }

  const handleAdd = () => {
    navigation.navigate("RemedioNuevo");
  };

  const renderItem = ({ item }) => (
    <Card style={styles.ListContainer}>
    <View>
      <Text style={styles.ItemMedicamento}>Medicamento: {item.tratamiento.tratamiento.medicamento}</Text>
      <Text style={styles.ItemDosis}>Dosis: {item.tratamiento.tratamiento.dosis}</Text>
      <Text style={styles.ItemDate}>Fecha de Inicio: {item.tratamiento.tratamiento.date}</Text>
      <Text style={styles.ItemTime}>Hora de Aplicacion: {item.tratamiento.tratamiento.time}</Text>
    </View>
      
    <View style={styles.deleteCTN}>
      <TouchableHighlight onPress={() => handleDelete(item.id)}>
        <Icon name="trash-o" size={24} color="red" />
      </TouchableHighlight>
    </View> 
        
    </Card>
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(getList());
    },[dispatch]),
  );

  return (
    <View style={styles.container}>
      {medicamento.length > 0 ? (
        <FlatList
          data={medicamento}
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
