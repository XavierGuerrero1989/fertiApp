import { cameraFormTypes } from "../types/cameraForm.types";

const initialState = {
  formData: null,
};

const { UPLOAD_FORM_DATA, RETRIEVE_FORM_DATA  } = cameraFormTypes;

const cameraFormReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPLOAD_FORM_DATA:
        return {
          ...state,
          formData: action.payload,
        };
      case RETRIEVE_FORM_DATA:
        return {
          ...state,
          formData: action.payload,
        };
      default:
        return state;
    }
  };

export default cameraFormReducer;