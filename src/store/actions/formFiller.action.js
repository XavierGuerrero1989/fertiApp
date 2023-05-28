import { formTypes } from "../types/form.types";

const { CREAR_TRATAMIENTO, ELIMINAR_TRATAMIENTO } = formTypes;

export const newTratamiento = (tratamiento) => ({
    type: CREAR_TRATAMIENTO,
    payload: tratamiento
  });

export const deleteTratamiento = (tratamiento) => ({
    type: ELIMINAR_TRATAMIENTO,
    tratamiento
});
