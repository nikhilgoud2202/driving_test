import * as types from '../reducers/ActionTypes';

const updateData = (data) => ({
  type: types.UPDATE_DATA,
  data
})

const updateParkingData = (data) => ({
    type: types.UPDATE_PARKING_DATA,
    data
  })

export {updateData}