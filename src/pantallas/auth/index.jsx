import { useReducer, useState } from "react";
import { View, Text, Modal, Button, TouchableOpacity, ActivityIndicator, TextInput, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { theme } from "../../constantes";
import { clearError, signIn, signUp } from "../../store/actions";
import { UPDATE_FORM, onInputChange } from "../../utils/form";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
  }
};

const Auth = () => {
  const dispatch = useDispatch();
  const { error, isLoading, hasError } = useSelector((state) => state.auth);
  const [isLogin, setIsLogin] = useState(true);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = isLogin ? "Login" : "Registrarse";
  const buttonTitle = isLogin ? "Login" : "Registrarse";
  const messageText = isLogin ? "No estas registrada?" : "Ya te encuentras registrada?";

  const onHandleChangeAuth = () => {
    setIsLogin(!isLogin);
  };

  const onHandleAuth = () => {
    dispatch(
      isLogin
        ? signIn({ email: formState.email.value, password: formState.password.value })
        : signUp({ email: formState.email.value, password: formState.password.value })
    );
  };

  const onHandleButtonModal = () => {
    dispatch(clearError());
  };

  const onHandlerInputChange = ({ value, name }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.imagen} source={require('../../../assets/logo.png')} />
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={styles.input}
          placeholder="email@email.com"
          placeholderTextColor={theme.colores.primario}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandlerInputChange({ value: text, name: "email" })}
          value={formState.email.value}
          label="Email"
          error={formState.email.error}
          touched={formState.email.touched}
          hasError={formState.email.hasError}
        />
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor={theme.colores.primario}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandlerInputChange({ value: text, name: "password" })}
          value={formState.password.value}
          label="Password"
          error={formState.password.error}
          touched={formState.password.touched}
          hasError={formState.password.hasError}
        />
        <View style={styles.buttonText}>
          <TouchableOpacity style={styles.buttonText} onPress={onHandleChangeAuth}>
            <Text style={styles.buttonText}>{messageText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submitContainer}>
          <Button
            disabled={!formState.isFormValid}
            title={buttonTitle}
            color={theme.colores.primario}
            onPress={onHandleAuth}
          />
        </View>
      </View>
      <Modal visible={hasError || isLoading} transparent animationType="fade">
        <View style={styles.containerStyle}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{error ? error : "Loading"}</Text>
            {error ? (
              <Button title="OK" color={theme.colores.primario} onPress={onHandleButtonModal} />
            ) : (
              <ActivityIndicator size="small" color={theme.colores.primario} />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Auth;