//reactcomponentを継承するため
import React from 'react'

import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends React.Component{
    
    //インスタンスの初期化
    //インスタンスを生成する際に自動で呼び出される。
    constructor(props){    
        super(props);
        this.state= {
            //タスクの配列
            tasks: [
                {
                    title:"デフォルトタスク",
                    id:0
                },
            ], 
            uniqueId: 1,
        }
        //関数を直接別コンポーネントに渡す場合に指定が必要
        //thisはこのインスタンスのthisですよという指定
        this.addTodo = this.addTodo.bind(this);
        this.resetTodo=this.resetTodo.bind(this);
    }

    addTodo(title){
        //this.stateの中身を左に代入
        //stateの中のstate.tasksとstate.uniqueIdを
        //tasksとuniqueIdに代入している。
        const{
            tasks,
            uniqueId,
        }=this.state;
        // const tasks = this.state.tasks;
        // const uniqueId = this.state.tasks;

        //tasksに受け取った引数のtodo
        // tasks.push({
        //     title,
        //     id:uniqueId,
        // });
        //→tasks自身を書き換えてしまうのでよくない。

        const task = {
            title:title,
            id:uniqueId,
        };
        // tasks.push(task);
        

        //tasks自体は変更されず
        //新しくtaskを追加した配列を生成する。
        //state(tasks)を直接変更するのは望ましくないのでこの形
        const newTasks = tasks.concat(task);


        //stateに代入
        this.setState({
            tasks:newTasks,
            uniqueId: uniqueId + 1,
        });

        // const st = {
        //     tasks: tasks,
        //     uniqueId: uniqueId + 1,
        // }
        // this.setState(st);


    }
    resetTodo(){
        this.setState(
            {
                tasks: [],
            }
        );


    }


    //renderが返すDOMが画面に描画される
    render(){
        //タスク一覧の初期値を作成


        return (
            <div>
                <h1>TODO App</h1>
                <button onClick={()=>{this.resetTodo()}}>reset</button>
                <TodoInput addTodo={this.addTodo}/>
                <TodoList tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default App;