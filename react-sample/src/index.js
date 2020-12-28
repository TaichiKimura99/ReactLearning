// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// // DOMを返すオブジェクトを読み込めばエレメントとして使える。
// import Hello from './components/Hello';
// import Names from './components/Names';
// import Numbers from './components/Numbers';
// import Profile from './components/Profile';
// import App from './components/App';
// import reactDom from 'react-dom';

// const name = "kai";

// const fullnames = ['坂本龍馬','西郷隆盛','勝海舟']

// const profile ={
//   name: "坂本龍馬",
//   birthday: "1836/01/03",

// }

// // ReactDom,renderは受け取ったDOMを描画
// // 読み込んだコンポーネントをエレメントとして指定できる。
// //タグは２つ渡せない、、２つ渡すときは、divで括る必要がある

// ///{...profile}と書いた場合、オブジェクトの中身を展開する。

// // ReactDOM.render(
// //   <div>
// //     <Hello>ryoma</Hello>
// //     <Hello nickname = {42}/>
// //     <Hello nickname = {name}/>
// //     <Names fullnames = {fullnames}/>
// //     <Numbers />
// //     <Profile {...profile}/>
// //   </div>
// //   ,document.getElementById('root')
// // );
// reactDom.render(
//   <React.StrictMode>
//     <App/> 
//   </React.StrictMode>,
//   document.getElementById('root')
// )



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Hello from './components/Hello'

// ReactDOM.render(
//   <React.StrictMode>
//     <Hello />
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import {createStore,applyMiddleware} from 'redux';
import TodoApp from './containers/TodoApp';
import tasksReducer from './reducers/tasks'
//import Provider from 'react-redux/lib/components/Provider';
import {Provider} from 'react-redux';

import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/Header'
//import logger from  'redux-logger'
import logger from './middlewares/Logger'
//import storage from './middlewares/Storage';

//ローカルストレージからstoreの情報を取得
//これをinitialstateにしたい。
//const savedState = JSON.parse(localStorage.getItem('state'))

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//非同期処理の一つ
// console.log('start');
// //1000MS(1ミリ)　１秒待ってから処理を実行する。
// setTimeout(() => {
//   const a = 100;
//   const b = 200;
//   const sum = a + b;
//   console.log(sum);
// },1000)
//上の処理は１秒待ってから動くが、finishは先に動く。
//順番に動かない処理、非同期処理
//もっともよく使われる非同期処理=>リクエストの送信
//console.log('finish');


//storeを作成する importする必要がある
//INITに意味はない、savedstateが入っていれば、savedstateを初期値にしてください
const store = createStore(
  tasksReducer,
//  savedState ? savedState : tasksReducer(undefined,{type:'INIT'}),//Storeの初期値の設定
  //applyMiddleware(logger,storage)
  applyMiddleware(logger)
  );

//描画
// function renderApp(store){
//   render(
//     <TodoApp store={store} />,
//     document.getElementById('root')
//   );
// }

// //storeの監視
// //storeに変更があった場合に引数の処理を実行する
// store.subscribe(() => renderApp(store))
// renderApp(store);


render(
  <Provider store={store}>
    <Router>
      <Route exact path = "/" component={Header}/>
      <Route path = "/todo" component={TodoApp}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
// import Hello from './containers/Hello';
// import HelloReducer from './reducers/Hello'

// const store = createStore(HelloReducer);
// //Storeを使うためProvider
// render(
//   //Providerの中でstoreを使用できる
//   <Provider store={store}>
//     <Hello />
//   </Provider>,

//   document.getElementById('root')
// )   