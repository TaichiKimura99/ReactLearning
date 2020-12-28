const storage = store =>next => action =>{

    const result = next(action);

    //Storeの内容をローカルストレージに反映
    //オブジェクトを渡すことはできないので、jsonの文字列を渡す
    localStorage.setItem('state',JSON.stringify(store.getState()));

    return result;
}

export default storage;