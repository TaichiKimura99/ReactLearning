//tasks今までユーザが入力されたデータ
//初めに作る
const initialState = {
    task:'',
    tasks:[],
}
  
//--------
//◆reducer
//--------
//storeの操作（Actionの種類によって操作を切り替える）
function tasksReducer(state=initialState,action){
    switch(action.type){
      case 'INPUT_TASK':
        // storeに保存したい内容をreturn
        //stateの中身を全てstoreに保存する。
        //ただし、taskだけはaction.payload.task(ユーザーの入力値)
        return {
          ...state,
          task: action.payload.task
        };
      case 'ADD_TASK':
        return{
          ...state,
          tasks: state.tasks.concat([action.payload.task])
        };
      case 'FETCH_TASKS':
        return {
          ...state,
          tasks: action.payload.tasks
        }
      default:
        return state;
    }
}

export default tasksReducer;