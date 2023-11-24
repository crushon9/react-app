import {Component} from "react";

class CreateContent extends Component {
    render() {
        return (
            <article>
                <h2>Create</h2>
                <form action="/create_proc" method="post"
                      onSubmit={function (e) { /*onSubmit : html 고유기능*/
                        e.preventDefault();
                        alert("submit!!")
                }.bind(this)}>
                    <p><input type="text" name="title" placeholder="title"/></p>
                    <p><textarea name="desc" placeholder="description"/></p>
                    <p><input type="submit"/></p>
                </form>
            </article>
        );
    }
}

export default CreateContent;