import { formTypes } from "../types/form.types";

const { CREAR_TRATAMIENTO, INSERT_MEDICAMENTO } = formTypes;


const initialState = [];

const tratamientoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREAR_TRATAMIENTO:
      const newTratamiento = action.payload;
      return [...state, newTratamiento];

    case INSERT_MEDICAMENTO:
      const newMedicamento = action.payload;
      return [...state, newMedicamento];

    default:
      return state;
    }
};

export default tratamientoReducer;
