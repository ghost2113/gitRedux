const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'


export function counter(state=0, action) {
  // console.log(state, action)
  // let state = state||0
  switch (action.type) {
    case ADD_GUN:
      return state +1
    case  REMOVE_GUN:
      return state - 1
    default:
      return 10
  }
}

//action 
export function addGUN(){
  return {type:ADD_GUN}
}

export function removeGUN(){
  return {type:REMOVE_GUN}
}
export function asyncGUN(){
  return dispatch => {
    setTimeout(() => {
      // 异步结束后，手动执行dispatch
      dispatch(addGUN());
    }, 2000);
  };
}

