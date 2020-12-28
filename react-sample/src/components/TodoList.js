// import React from 'react';
// import TodoItem from './TodoItem';

// class TodoList extends React.Component{
//     render(){
//         //this.propsで属性に指定した値を取得できる
//         //liタグの配列を使う
//         //todoItemタグの配列を作った。
//         this.props.tasks.map(todo=>{
//             return <TodoItem {...todo} key={todo.id}/>;
//         });

//         return (
//             <div>
//                 <ul>
//                     {list}
//                 </ul>
//             </div>
//         );
//     }
    

// }

// export default TodoList;

import React from 'react';
import TodoItem from './TodoItem';
class TodoList extends React.Component {
    render() {
        // this.propsで属性に指定した値を取得できる
        // TodItemタグ要素の配列
        const list = this.props.tasks.map(todo => {
            return <TodoItem {...todo} key={todo.id} />;
        });
        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}
export default TodoList;