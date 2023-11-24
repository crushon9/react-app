import {Component} from "react";

class ToC extends Component {
    render() {
        // 태그에서 주입된 props 는 render 함수 안에서 꺼낼수있음
        var data = this.props.data;
        var list = [];
        for (var i = 0; i < data.length; i++) {
            list.push(
                <li key={data[i].id}>
                    <a
                        href={"/content/"+data[i].id} // 페이지리로드되면서 url 변경
                        data-id1={data[i].id} // data-id : dataset 안에 id로 저장됨
                        onClick={function (id2, e) { // 하위(자식) 컴포넌트가 상위(부모) 컴포넌트를 제어할 때 자식의 이벤트로 props로 설정한 함수에 인자를 넘겨주고 그 인자를 받아서 setState로 값 변경
                            e.preventDefault(); // 태그의 기본 동작을 막음 즉 a태그의 기본 동작인 페이지 reload를 막음
                            // this.props.onChangePage(e.target.dataset.id1);
                            this.props.onChangePage(id2);
                        }.bind(this, data[i].id/*id2*/)}
                        /* bind(this) : 앞에 연결된 함수안의 this를 해당 컴포넌트obj로 bind 즉 this는 <ToC>
                         *              this 뒤에 파라미터를 추가하면 앞에 연결된 함수의 첫번째 순서부터 파라미터로 들어옴 e파라미터는 제일 마지막에 들어옴 */
                    >{data[i].title}</a>
                </li>
            );
        }
        return (
            <nav>
                <ul>
                    {list}
                </ul>
            </nav>
        );
    }
}

export default ToC;