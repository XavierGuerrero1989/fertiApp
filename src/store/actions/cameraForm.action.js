import { cameraFormTypes } from "../types/cameraForm.types";
import { FIREBASE_REALTIME_DB_URL } from "../../constantes";

const { UPLOAD_FORM_DATA, RETRIEVE_FORM_DATA, DELETE_FORM_DATA } = cameraFormTypes;

export const uploadFormData = (formData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/cameraForm.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      dispatch({
        type: UPLOAD_FORM_DATA,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};



  export const retrieveFormData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/cameraForm.json`, {
                method: "GET",
                headers: {
                    "Content-Type": "aplication/json",
                },
            })

            const result = await response.json();

            const camData = Object.keys(result).map((key) => ({
                ...result[key],
                id: key,
            }));

            dispatch({
                type: RETRIEVE_FORM_DATA,
                camData,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteImageCam = (id) => {
  return async (dispatch) => {
      try {
          const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/cameraForm/${id}.json`, {
              method: "DELETE",
              headers: {
                  "Content-Type": "aplication/json",
              },
          })

          const result = await response.json();

          dispatch({
              type: DELETE_FORM_DATA,
              id,
          });
      } catch (error) {
          console.log(error);
      }
  };
};