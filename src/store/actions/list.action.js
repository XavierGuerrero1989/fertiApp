import { listTypes } from "../types";
import { FIREBASE_REALTIME_DB_URL } from "../../constantes";

const { GET_LIST, DELETE_MEDICAMENTO, SELECT_MEDICAMENTOS } = listTypes

export const getList = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/medicamento.json`, {
                method: "GET",
                headers: {
                    "Content-Type": "aplication/json",
                },
            })

            const result = await response.json();

            const list = Object.keys(result).map((key) => ({
                ...result[key],
                id: key,
            }));

            dispatch({
                type: GET_LIST,
                list,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteMedicamento = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/medicamento/${id}.json`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "aplication/json",
                },
            })

            const result = await response.json();

            dispatch({
                type: DELETE_MEDICAMENTO,
                id,
            });
        } catch (error) {
            console.log(error);
        }
    };
};


export const selectMedicamentos = () => {
    return {
      type: SELECT_MEDICAMENTOS,
    };
  };