import {Component} from "react"; // react 라는 라이브러리에서 Component라는 클래스를 로딩
import ToC from "./components/ToC" // ToC 라는 태그를 루트폴터(src) 하위의 components 하위의 ToC.js 파일에서 가져온다
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css';

// jsx : JavaScript를 확장한 문법 (html 태그를 따옴표로 표현하지 않아도 됨)
class App_class_nm extends Component {
    constructor(props){ // 먼저 실행되는 생성자
        super(props); // 모든 state 초기화
        this.state = { // state 값 설정
            subject:{title:'WEB', sub:'world wide web!'}
        }
    }
    /** props 컴포넌트에 설정값을 외부에서 주입
     * state 컴포넌트에 설정값을 내부에서 조작 */
    render() { // render() : class 안에 소속된 함수는 function을 생략해서 표현
        return ( // return 안에는 하나의 최상위 html 태그를 정의해야한다
            <div className="App_css">
                <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> {/* 하위 컴포넌트의 props에 상위 컴포넌트의 state값을 주입 */}
                <Subject title="React" sub="페이스북에서 개발한 자바스크립트 라이브러리"></Subject> {/* props값을 하드코딩 */}
                <ToC></ToC>
                <Content></Content>
            </div>
        );
    }
}

export default App_class_nm;
