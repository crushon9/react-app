import {Component} from "react";

class ToC extends Component {
    render() {
        var data = this.props.data; /* 태그에서 주입된 props 는 render 함수 안에서 꺼낼수있음 */
        console.log('ToC render');
        var list = [];
        for (var i = 0; i < data.length; i++) {
            list.push(
                <li key={data[i].id}>
                    <a
                        href={"/content/"+data[i].id}
                        data-id1={data[i].id} // data-id : dataset 안에 id로 저장됨
                        onClick={function (id2, e) { // 하위(자식) 컴포넌트가 상위(부모) 컴포넌트를 제어할 때 자식의 이벤트로 props로 설정한 함수에 인자를 넘겨주고 그 인자를 받아서 setState로 값 변경
                            e.preventDefault();
                            // this.props.onChangePage(e.target.dataset.id1);
                            this.props.onChangePage(id2);
                        }.bind(this, data[i].id/*id2*/)} /* bind(this) 뒤에 파라미터를 넣어주면 onClick function의 첫번째 파라미터로 들어옴 */
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