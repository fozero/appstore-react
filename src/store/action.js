
import * as types from './action-types'

export const saveSearchList = (searchList) => {
  return {
    type: types.SAVE_SERACH_LIST,
    searchList
  }
}