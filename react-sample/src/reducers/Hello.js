//初めにからでいいので初期値を持っていてないといけない
const initialState ={
    displayName: 'Sano',
    inputName: 'Taiki',
}

//stateとactionを必ず受け取ることになっている。
//state・・・Storeに保存される情報
//action・・・Storeの操作の種類
//Reducerがreturnした内容がStoreの内容になる
export default function reducer(state = initialState,action){
    switch(action.type){
        case 'CLICK_BUTTON':
            return {
                ...state,
                displayName: action.payload.value,
            }
        case 'INPUT_TEXT':
            return {
                ...state,
                inputName: action.payload.value,
            }
        default :
            return state;
    };
}


//まずはどんな情報が必要なのかをinitialState