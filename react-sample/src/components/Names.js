// const fullnames = ['坂本龍馬','西郷隆盛','勝海舟']

// propsの中身
// {
//     nickname: ryoma
// }

//ulタグで名前の配列をリスト表示するコンポーネントを作成する
function Names(props){
    const list = [];
    for(let i = 0 ;i<props.fullnames.length;i++){
        list.push(<li>{props.fullnames[i]}</li>);
    }
    // 配列を渡すと展開してくれる
    return <ul>{list}</ul>;
}

export default Names;