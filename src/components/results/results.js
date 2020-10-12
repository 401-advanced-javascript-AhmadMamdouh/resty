import React from 'react';
import ReactJson from 'react-json-view';

import './results.scss';

function Results (props){
    return(
        <div id="resultDiv">
            <section className="results">
                <span>Headers</span>
                <ReactJson id="headersID" src={props.headers} theme="shapeshifter:inverted" />
                <span>Response</span>
                <ReactJson id="responseID" src={props.response} theme="shapeshifter:inverted" />
            </section>
        </div>
    );
}

export default Results;
