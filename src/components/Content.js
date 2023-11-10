import {Component} from "react";

class Content extends Component {
    render() {
        console.log('Content render');
        var list = [];
        var li = this.props.li; /* 주입된 props 는 render 함수 안에서 꺼낼수있음 */
        for (var i = 0; i < li.length; i++) {
            list.push(
                <li key={li[i]}>{li[i]}</li>
            );
        }
        return (
            <article>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
                <ol>
                    {list}
                </ol>

            </article>
        );
    }
}

export default Content;