// Storeに対して操作の種類だけActionを作る
export const clickButton =(value) =>({
    type: 'CLICK_BUTTON',
    payload:{
        value
    }
});

export const inputText = (value)=>({
    type: 'INPUT_TEXT',
    payload:{
        value
    }
});