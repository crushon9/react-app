import {Component} from "react";

class Subject extends Component {
    render() {
        console.log('Subject render');
        return (
            <header>
                <h1><a href="/" onClick={function (e) {
                    console.log(e)
                    e.preventDefault(); // 태그의 기본 동작을 막음 즉 a태그의 기본 동작인 페이지 reload를 막음
                    // 생성자에서는 this.state.mode = 'welcome'를 사용하여 값을 설정하고 컴포넌트를 그린다.
                    this.setState({ // 컴포넌트가 그려진 후 동적으로 state 값을 변경할때는 setState를 쓴다.
                        mode:'welcome'
                    });
                }.bind(this)}>{this.props.title}</a></h1> {/* bind(this) : 앞의 함수안에 this를 해당 컴포넌트로 bind해줌 */}
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;