import React, { useCallback } from "react";
import { View, Text, FlatList, TouchableHighlight, Button, Image, ScrollView, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { Card } from "../../componentes";
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from "../../constantes";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { deleteMedicamento, getList } from "../../store/actions";
import { selectMedicamentos, retrieveFormData, deleteImageCam } from "../../store/actions";

const RemedioList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const medicamento = useSelector((state) => state.list.data);
  const retrievedCamInfo = useSelector((state) => state.cameraForm.data);

  const handleDelete = (id) => {
    dispatch(deleteMedicamento(id))
  }

  const handleDelete1 = (id) => {
    dispatch(deleteImageCam(id))
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

  const renderItem1 = ({ item }) => (
    <Card style={styles.ListContainer}>
      <View>
        <Text style={styles.ItemMedicamento}>Tipo de Imagen: {item.tipe}</Text>
        <Text style={styles.ItemDosis}>Comentario: {item.coment}</Text>
        <Image source={{ uri: item.imageUrl }} style={styles.ItemImage} />
      </View>
      <View style={styles.deleteCTN}>
        <TouchableHighlight onPress={() => handleDelete1(item.id)}>
          <Icon name="trash-o" size={24} color="red" />
        </TouchableHighlight>
      </View> 
    </Card>
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(selectMedicamentos());
    }, [dispatch])
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(getList());
    }, [dispatch])
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(retrieveFormData());
    }, [dispatch])
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled>
        {medicamento && medicamento.length > 0 ? (
          <FlatList
            data={medicamento}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            nestedScrollEnabled
          />
        ) : (
          <Text>No tratamiento available</Text>
        )}

        <Text style={styles.subTitulo}>Información adicional</Text>
        {retrievedCamInfo && retrievedCamInfo.length > 0 ? (
          <FlatList
            data={retrievedCamInfo}
            renderItem={renderItem1}
            keyExtractor={(item, index) => index.toString()}
            nestedScrollEnabled
          />
        ) : (
          <Text>No retrieved information available</Text>
        )}

        <View style={styles.addButton}>
          <Button
            title="Agregar Medicamento"
            onPress={handleAdd}
            color={theme.colores.oscuro}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RemedioList;