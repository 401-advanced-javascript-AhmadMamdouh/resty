import React from 'react';

// import '../reset.scss';
import './history.scss';
import HistoryItem from './history-item';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = { history: (props.history) } ? { history: (props.history) } : {};

    }

    componentDidMount = () => {
        let history = JSON.parse(localStorage.getItem('history'));
        this.setState({ history });
    }
    render() {
        let obj = (this.state.history) ? (this.state.history) : {};
        let historyItems = Object.keys(obj).map(key => obj[key]);

        return (
            <ul id='historyLog'>
                {Object.keys(historyItems).map(objKey => {
                    let body = (Object.keys(historyItems[objKey].body).length === 0 && obj.constructor === Object) ? '' : (historyItems[objKey].body);

                    return <HistoryItem 
                    key={objKey}
                    method={historyItems[objKey].method}
                    url={historyItems[objKey].url}
                    body={body}
                    historyRecall={this.props.historyRecall}
                    />;
                })}
            </ul>
        )
    }
}

export default History;