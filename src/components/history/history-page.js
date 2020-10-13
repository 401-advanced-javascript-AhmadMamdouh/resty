import React from 'react';

// import '../reset.scss';
import './history.scss';


class HistoryPage extends React.Component{
    constructor(props){
        super(props);
        this.state = (props.historyList) ? (props.historyList) :{};
    }

    componentDidMount(){
        let history = JSON.parse(localStorage.getItem('history'));
        this.setState({history});
    }

    render(){
        let obj = (this.state.history) ? (this.state.history) : {};

        let historyItems  = Object.keys(obj).map(key => {
            obj[key].id= key;
            return obj[key];
        });
        return(
            <ul id='historyList'>
                {Object.keys(historyItems).map(objKey=>{
                    return (
                        <li className='history' key={objKey}>
                            <span>ID : {historyItems[objKey].id}</span>
                            <span>Method : {historyItems[objKey].method}</span>
                            <span>URL : {historyItems[objKey].url}</span>
                            <span>Body : {JSON.stringify(historyItems[objKey].body)}</span>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default HistoryPage;