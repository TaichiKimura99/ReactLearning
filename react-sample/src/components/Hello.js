
//propsにはコンテナで受け取った値が入っている。
export default function Hello({displayName,inputName,clickButton,inputText}){
    return (
    <div>
        <h1>Hello {displayName} </h1>
        <input type ="text" value={inputName} onChange={(e)=>{inputText(e.target.value)}}/>
        <button onClick={()=>{clickButton(inputName)}} >追加</button>
    </div>
    );
}

// import PropTypes from 'prop-types';

// const fullnames = {
//     ryoma: '坂本龍馬',
//     taka: '西郷隆盛',
//     kai: '勝海舟',
// };

// //関数オブジェクト
// const getFullName = nickname => fullnames[nickname];

// // function SimpleHello(){
// //     //HTMLをリターン
// //     return <h1>Hello World</h1>;
// // }



// //関数でコンポーネントをつくる
// function HelloComponent(props) {
//     // const nickname = "ryom";
//     if (props.nickname in fullnames) {
//         //JSX のなかに{}でjavacriptを埋め込むことができる。
//         return <h1>Hello {getFullName(props.nickname)}</h1>;
//     } else {
//     return <h1>{props.children}</h1>;
//     }
// }

// //HelloComponentのpropsのnicknameは大文字で！
// HelloComponent.propTypes={
//     nickname: PropTypes.string
// }

// //importされた時にデフォルトで返すオブジェクトを指定する。
// export default HelloComponent;

// // importされた時に、デフォルトで返すオブジェクト
// //export default HelloComponent;