
//---------
//◆アクション
//---------
//storeをどうしたいか。例　追加と入力
//入力のアクション payloadは慣習的な名前
export const inputTask =(task)=>({
    type: 'INPUT_TASK',
    payload: {
      task
    }
  });
//追加のアクション
export const addTask =(task)=>({
    type: 'ADD_TASK',
    payload:{
      task
    }
  });

//export default ではない、


//tasksを受け取ってreducerに渡す
//tasksはrailsサーバーから受け取る予定
export const fetchTasks = (tasks) => ({
  type: 'FETCH_TASKS',
  payload:{
    tasks
  }
});