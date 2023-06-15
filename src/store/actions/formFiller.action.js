import { formTypes } from "../types/form.types";
import { FIREBASE_REALTIME_DB_URL } from "../../constantes";

const { CREAR_TRATAMIENTO, INSERT_MEDICAMENTO } = formTypes;


  export const newTratamiento = ( tratamiento ) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/medicamento.json`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: Date.now(),
            tratamiento
          }),
        });
  
        const result = await response.json();
  
        dispatch({
          type: CREAR_TRATAMIENTO,
          payload: result,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  export const insertMedicamento = (medicamento, dosis, date, time) => {
    return {
      type: INSERT_MEDICAMENTO,
      payload: {
        medicamento,
        dosis,
        date,
        time,
      },
    };
  };
  
  

