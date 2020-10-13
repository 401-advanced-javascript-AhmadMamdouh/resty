import React from 'react';
import ReactJson from 'react-json-view';
import Loader from 'react-loader-spinner';
import { If, Then } from '../if/if';


import './results.scss';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let sorted = Object.keys(this.props.history).sort(function (a, b) { return b - a; });
        let method, url, body;
        if (this.props.history[sorted[0]]) {
            method = this.props.history[sorted[0]].method;
            url = this.props.history[sorted[0]].url;
            body = JSON.stringify(this.props.history[sorted[0]].body);

        }

        if (!this.props.progress) {
            return (
                <If condition={Object.keys(this.props.response).length !== 0}>
                    <Then>
                        <div id="resultsDiv">
                            <section className="results">
                                <span>Headers</span>
                                <ReactJson id="headersID" src={this.props.headers} theme="shapeshifter:inverted" />
                                <span>Response</span>
                                <ReactJson id="responseID" src={this.props.response} theme="shapeshifter:inverted" />

                            </section>
                        </div>

                        <If condition={sorted.length !== 0}>
                            <li className='temphistory' onClick={this.props.historyRecall}>
                                Method*{method}*URL*{url}*Body*{body}
                            </li>
                        </If>
                    </Then>
                </If>
            );
        } else {
            return <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
        }
    };


}



export default Results;
