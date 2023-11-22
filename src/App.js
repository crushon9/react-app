import {Component} from "react"; // react 라는 라이브러리에서 Component라는 클래스를 로딩
import ToC from "./components/ToC" // ToC 라는 태그를 root폴더(src) 하위의 components 하위의 ToC.js 파일에서 가져온다
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css';

// jsx : JavaScript를 확장한 문법 (html 태그를 따옴표로 표현하지 않아도 됨)
class App_class_nm extends Component {
    constructor(props){ // 컴포넌트를 render 하기 전에 실행되는 생성자
        super(props); // 모든 state 초기화
        this.state = { // state 값 설정
            subject:{title:'React', sub:'페이스북에서 개발한 자바스크립트 라이브러리'},
            welcome:{title:'Welcome', desc:'Hello, React!!'},
            contents:[{id:1,title:'intro' ,desc: 'react 특징 컴포넌트 기반',
                        li:['가독성', '재사용성', '유지보수']},
                    {id:2,title:'install' ,desc:'npm/npx 을 이용하여 create-react-app 설치',
                        li:['npm - nodejs 프로그램 (영구설치)', 'npx - 임시로 설치해서 삭제하고 사용할때마다 다시 다운하여 늘 최신상태 유지']},
                    {id:3,title:'coding & run' ,desc:'수정한 코드는 실시간 반영',
                        li:['init : cmd에서 create-react-app 실행하면 실행위치 폴더에 자동 세팅','coding : src폴더의 하위파일 코드편집','run : npm run start']},
                    {id:4,title:'deploy' ,desc:'원본을 그대로 배포하면 파일용량이 크고 보안문제가 있음',
                        li:['​npm run build 명령 : build 폴더 안에 용량이 줄어든 코드파일 자동생성','npm install -g serve : 서브설치 (npm을 통해 설치가능한 간단한 웹서버)','serve -s build : 서브를 실행시킬때 build 디렉토리를 루트로 하겠다']},
            ],
            mode:'welcome', // default 값
            selected_cnt_id:1, // default 값
        }
    }
    /** [props & state]
     * props 컴포넌트에 설정값을 태그호출시 외부에서 props={ } 형태로 주입, read-only 내부에서 수정불가
     * state 컴포넌트에 설정값을 내부 코드에서 조작, constructor()로 미리 값을 세팅하거나, setState를 통해 동적으로 값 변경
     * 상위(부모) 컴포넌트가 하위(자식) 컴포넌트를 제어할 때 상위state값을 하위props로 주입하여 제어
     * 하위(자식) 컴포넌트가 상위(부모) 컴포넌트를 제어할 때 부모가 함수로 setState 선언 자식은 이벤트를통해얻은 인자를 props로 선언된 부모함수의 파라미터로 전달 */
    render() {
        /** render() (class 안에 소속된 함수는 function을 생략해서 표현)
         * 리액트에서는 props, state가 바뀌면 해당되는 컴포넌트의 render함수가 호출되며 화면이 다시 그려진다 */
        console.log('**App render**');
        var _title, _desc, _li = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _li = '';
        } else if (this.state.mode === 'read') {
            for(var i = 0; i < this.state.contents.length; i++){
                var content = this.state.contents[i];
                if (content.id === this.state.selected_cnt_id) {
                    _title = content.title;
                    _desc = content.desc;
                    _li = content.li;
                    break;
                }
            }
        }
        return ( // return 안에는 하나의 최상위 html 태그를 정의해야한다
            <div className="App_css">
               {/** <Subject title="React" sub="페이스북에서 개발한 자바스크립트 라이브러리"></Subject> props 값을 하드코딩할수도 있음 */}
                <Subject
                    title={this.state.subject.title} // 하위(자식) 컴포넌트의 props에 상위(부모) 컴포넌트의 state값을 주입
                    sub={this.state.subject.sub}
                    onChangePage={function () { // props로 함수를 정의할수도 있음
                        this.setState({ // 컴포넌트가 그려진 후 동적으로 state 값을 변경할때는 setState를 쓴다.
                            mode:'welcome' // state값이 변하므로 render()가 호출됨
                        });
                    }.bind(this)}
                >
                </Subject>
                <ToC
                    data={this.state.contents}
                    onChangePage={function (id) {
                        this.setState({
                            mode:'read',
                            selected_cnt_id:Number(id),
                        });
                    }.bind(this)}
                >
                </ToC>
                <Content title={_title} desc={_desc} li={_li}></Content>
            </div>
        );
    }
}

export default App_class_nm;
