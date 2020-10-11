import React from 'react';

import './form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { method: 'Method', url: 'URL' };
    }
    render() {
        return (
            <main classname="formArea">
                <form onSubmit={this.submitHandler}>
                    <lable htmlFor="url">URL : <input type="text" name="url" id="url"></input><input type="submit" value="GO!" /></lable>
                    <lable htmlFor="GET">GET <input type="radio" name="method" id="GET" value="GET" />
                    <lable htmlFor="POST">POST <input type="radio" name="method" id="POST" value="POST" /></lable>
                    <lable htmlFor="PUT">PUT <input type="radio" name="method" id="PUT" value="PUT" />
                    <lable htmlFor="PUT">DELETE <input type="radio" name="method" id="DELETE" value="DELETE" /></lable></lable>
                    </lable>




                </form>

                <p>{this.state.method} {this.state.url}</p>

            </main>
        )
    }

    submitHandler = (e) => {
        e.preventDefault();
        const method = e.target.method.value;
        const url = e.target.url.value;
        this.setState({ method, url });
    }

}

export default Form;