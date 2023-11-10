import {Component} from "react";

class ToC extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="1.html">intro</a></li>
                    <li><a href="2.html">install</a></li>
                    <li><a href="3.html">coding & run</a></li>
                    <li><a href="4.html">deploy</a></li>
                </ul>
            </nav>
        );
    }
}

export default ToC;