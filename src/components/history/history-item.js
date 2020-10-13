import React from 'react';
import './history.scss';

function HistoryItems(props) {
    return (
        <li className='history' onClick={props.historyRecall}>
            <span>Method*{props.method}*URL*{props.url}*Body{props.body}</span>
        </li>
    );
}

export default HistoryItems;