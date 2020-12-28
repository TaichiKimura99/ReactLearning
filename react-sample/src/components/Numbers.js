//関数コンポーネント
function Numbers(){
    //return 3.16
    //return 3.16;
    const list=(
        <ul>
            {[1,2,3].map(num=><li>{num}</li>)}
        </ul>
    )
    return list;

}

export default Numbers;
//Namesの下に描画