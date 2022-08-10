import * as constants from "../constants/common";

const initialState = {
  isLoading: false,
  sections: [],
  loadingSteps: [1, 2], // first number current step, second all steps
  currentType: "connect",
  menu: false,
};

export default function commonReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case constants.SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case constants.SET_SECTIONS:
      return {
        ...state,
        sections: [...state.sections, payload],
      };
    case constants.SET_CURRENT_SECTION:
      return {
        ...state,
        currentSection: payload,
      };
    case constants.SET_STEP_LOADING:
      return {
        ...state,
        loadingSteps: [state.loadingSteps[0] + 1, state.loadingSteps[1]],
      };
    case constants.SET_CURRENT_TYPE:
      return {
        ...state,
        currentType: payload,
      };
    case constants.SET_MENU:
      return {
        ...state,
        menu: payload,
      };
    default:
      return state;
  }
}
