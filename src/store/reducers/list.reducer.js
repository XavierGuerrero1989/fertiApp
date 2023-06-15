import { listTypes} from "../types";

const { GET_LIST, DELETE_MEDICAMENTO, SELECT_MEDICAMENTOS } = listTypes


const initialState = {
    data: [],
}; 

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                data: action.list,
            };

        case SELECT_MEDICAMENTOS:
                return {
                    ...state,
                    data: action.list,
                };
            
        case DELETE_MEDICAMENTO:
            return {
                ...state,
                data: state.data.filter((item) => item.id !== action.id),
            };
            default:
                return state;
        }
};

export default listReducer;