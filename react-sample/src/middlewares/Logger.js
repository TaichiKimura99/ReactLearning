const logger = store => next => action =>{
    //storeの中身をコンソールに出力する
    console.log(store.getState());

    //actionの中身をコンソールに出力する
    console.log(action);
    
    //まずはこれをかく
    //アクションの実行
    const result = next(action);

    console.log(store.getState());

    return result;
}

export default logger;