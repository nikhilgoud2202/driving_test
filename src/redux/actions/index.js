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

const testCompleted = (testCompleted) => ({
  type: types.TEST_COMPLETED,
  testCompleted
})

export { updateData, clearData, updateTestData, testCompleted }