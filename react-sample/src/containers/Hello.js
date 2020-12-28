//Storeの情報をコンポーネントに渡す役割「必要な分だけ」

//import connect from "react-redux/lib/connect/connect";
import {connect} from "react-redux"
import Hello from "../components/Hello"
import {clickButton,inputText} from '../actions/Hello';


// mapStateToPropsで返した値がコンポーネントに送られる
// コンポーネントに渡す値を設定するメソッド
function mapStateToProps({displayName,inputName}){
    
    // Helloコンポーネントに必要なものだけreturnすればOK
    //displayName: を省略できる。
    return {
        displayName,
        inputName,
    }

}
function mapDispatchToProps(dispatch){
    return{
        clickButton(value){
            //actionをリデューサに送ること
            dispatch(clickButton(value));
        },
        inputText(value){
            dispatch(inputText(value));
        }
    };
}

//二つの結果w結合
//helloコンポーネントに入れて、
//Helloコンポーネントに加えるので、これを参照すれば、helloコンポーネントを
//参照しなくていい。
export default connect(mapStateToProps,mapDispatchToProps)(Hello)