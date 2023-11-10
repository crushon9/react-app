import {Component} from "react";

class ToC extends Component {
    render() {
        console.log('ToC render');
        var list = [];
        var data = this.props.data; /* 주입된 props 는 render 함수 안에서 꺼낼수있음 */
        for (var i = 0; i < data.length; i++) {
            list.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);
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