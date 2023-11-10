import {Component} from "react";

class Subject extends Component {
    render() {
        console.log('Subject render');
        return (
            <header>
                <h1>
                    <a href="/" onClick={function (e) {
                    console.log(e)
                    e.preventDefault(); // 태그의 기본 동작을 막음 즉 a태그의 기본 동작인 페이지 reload를 막음
                    this.props.onChangePage();
                }.bind(this)}> {/* 앞의 함수안에 this를 해당 컴포넌트로 bind해줌 */}
                    {this.props.title}</a>
                </h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;