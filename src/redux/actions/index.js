import * as types from '../reducers/ActionTypes';

const updateData = (data) => ({
  type: types.UPDATE_DATA,
  data
})
const clearData = (data) => ({
  type: types.CLEAR_DATA,
  data
})

const updateTestData = (data) => ({
  type: types.UPDATE_TEST_DATA,
  data
})
const storingData = (data) => ({
  type: types.STORING_DATA,
  data
})
const clearStoringData = (data) => ({
  type: types.CLEAR_STORING_DATA,
  data
})

export { updateData, clearData, updateTestData }