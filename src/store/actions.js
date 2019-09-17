
import * as types from './mutation-type'


export default {
  changeBase({commit},{baseInfo}){
    commit(types.CHANGE_BASEINFO,{baseInfo})
  },
  changeOther({commit},{otherInfo}){
    commit(types.CHANGE_OTHERINFO,{otherInfo})
  }
}
