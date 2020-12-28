import {inputTask,addTask,fetchTasks} from '../actions/tasks';
import {connect} from 'react-redux';
import TodoApp from '../components/TodoApp';

//StoreのStateを引数に受け取る
function mapStateToProps({task,tasks}){
    //コンポーネントのpropsに必要なものをreturn
    return{
        task,
        tasks,
    };
}

//Storeのdispatchメソッドを受け取る
//dispatchをコンポーネントで書かなくてよくなる

function mapDispatchToProps(dispatch){
    //アクションの発行をreturn
    return {
        addTask(task){ //addTaskという名前をつけただけ
            dispatch(addTask(task));//addTaskアクションの発行
        },
        inputTask(task){
            dispatch(inputTask(task));
        },
        async fetchTasks(){
            //リクエストを送る
            const response = await fetch("http://localhost:3000/todos");
            //jsonをオブジェクトに書き換える。と思いきや、fetchが非同期処理
            //fetchが終わるまで待ってくれない。そのためundefindでエラーになる。
            //そこで、頭に、asyncをつける
            //json()も非同期処理なので、awaitをつける。アウェイと
            const tasks = await response.json();
            dispatch(fetchTasks(tasks));
        }
    }
}

//mapStateToPropsとmapDispatchToPropsの結果をTodoAppのpropsに渡す
//connectがポイント
export default connect(mapStateToProps,mapDispatchToProps)(TodoApp);