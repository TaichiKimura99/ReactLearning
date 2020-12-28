// import React from 'React';
// class TodoInput extends React.Component{
//     render(){
//         return (
//             <div>
//                 <input placeholder="新規Todoを入力してください。" />
//                 <button>登録</button>
//             </div>
//         );
//     }
// }

// export default TodoInput;

import React from 'react';
class TodoInput extends React.Component {
    constructor(props){
        super(props);

        //入力された内容を持つState
        //inputタグの内容と完全に一致させたい。
        //1.inputタグの内容が変更されたら、stateに反映(bundleClick)
        //2.Stateの内容が変更されたら、inputタグに反映(value={this.state.inputValue})(今回はしなくていい)
        this.state={
            inputValue : '',
        }

        //this実行しているtodoinput
        //bindのthisを
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    //入力された内容をStateに反映するメソッド
    //eにはイベントを起こしたオブジェクトが代入される、他の引数名でもいいですが慣習的に
    handleChange(e){
        this.setState({
            inputValue: e.target.value,
        })
    }

    handleClick(){
        this.props.addTodo(this.state.inputValue);
    }

    render() {
        return (
            <div>
                <input onChange ={this.handleChange} value ={this.state.inputValue} placeholder="新規TODOを入力してください。" />
                <button onClick={this.handleClick}>登録</button>
            </div>
        );
    }
}
export default TodoInput;