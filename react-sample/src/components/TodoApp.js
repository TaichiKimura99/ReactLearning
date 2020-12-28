//Actionの発行はContainerの役割なので不要
//import {inputTask,addTask} from '../actions/tasks';

import React from "react";

//------------
//コンポーネント
//------------
//引数はstore
//{store}とかくと、propsの中からstoreだけ抜き出す
// function TodoApp({store}){
// ContainerのmapStateToPropsとmapDispatchToPropsの値を受け取る。
//function TodoApp({task,tasks,inputTask,addTask}){
class TodoApp extends React.Component{
  //Storeから値を取り出すのは、Containerの役割なので不要
  //const{task,tasks}=store.getState();
   
  //store.dispatchで、Actionを発行する
    //アロー演算子を使うことでbindを使わないようにできる。
    
    //コンポーネントが読み込まれた直後に実行される。
    async componentDidMount(){
      //データをrailsサーバーから取得して、Storeに代入したい。
      //コンテナでfetchを宣言したので、それを呼び出す
      //引数はいらない、なぜなら、rubyからデータを取得するから
      await this.props.fetchTasks();
    }

    render(){
      const{
        task,
        tasks,
        inputTask,
        addTask
      }=this.props;
      return (
      <div>
        {/* <input type="text" onChange={(e)=>store.dispatch(inputTask(e.target.value))}/>
        <input type="button" value="add" onClick={() => store.dispatch(addTask(task))} /> */}
        <input type="text" onChange={(e)=>inputTask(e.target.value)}/>
        <input type="button" value="add" onClick={() => addTask(task)} />
        <ul>
          {
            //tasksの一つ目に中身、２つ目に配列インデックスを入れる。
            tasks.map(function(task,i){
              // return(
              //   <li key={i}>{item}</li>
              // )
          return(
                <li key={task.id}>{task.task}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

  export default TodoApp;