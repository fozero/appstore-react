
import * as types from './action-types'

let defaultState = {
  searchList: []//搜索结果列表
}

// 修改state
export default(state = defaultState, action={})=>{
  switch (action.type) {
    case types.SAVE_SERACH_LIST:
      return {
        ...state,
        searchList: action.searchList
      }
    default:
      return state
  }
}