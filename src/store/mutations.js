import * as types from './mutation-type'


export default {
  [types.CHANGE_BASEINFO](state,{baseInfo}){
    state.baseInfo=baseInfo;
  },
  [types.CHANGE_OTHERINFO](state,{otherInfo}){
    state.otherInfo=otherInfo;
  },
}
