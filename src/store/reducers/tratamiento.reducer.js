import { formTypes } from "../types/form.types";

const { CREAR_TRATAMIENTO, ELIMINAR_TRATAMIENTO } = formTypes;


const initialState = [];

const tratamientoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREAR_TRATAMIENTO:
      const newTratamiento = action.payload;
      return [...state, newTratamiento];

    case ELIMINAR_TRATAMIENTO:
      const tratamientoId = action.payload;
      return state.filter((tratamiento) => tratamiento.id !== tratamientoId);

    default:
      return state;
    }
};

export default tratamientoReducer;
