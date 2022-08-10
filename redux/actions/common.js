import * as constants from "../constants/common";

export const setLoading = (payload) => ({
  type: constants.SET_LOADING,
  payload,
});

export const setSections = (payload) => ({
  type: constants.SET_SECTIONS,
  payload,
})

export const setCurrentSection = (payload) => ({
  type: constants.SET_CURRENT_SECTION,
  payload,
})

export const setStepLoading = (payload) => ({
  type: constants.SET_STEP_LOADING,
  payload,
})

export const setCurrentType = (payload) => ({
  type: constants.SET_CURRENT_TYPE,
  payload,
})

export const setMenu = (payload) => ({
  type: constants.SET_MENU,
  payload,
})
