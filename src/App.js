import React from 'react';
import { Route } from 'react-router-dom';
// import './App.scss';


import Header from './components/header/header';
import Form from './components/form/form';
import Results from './components/results/results';
import History from './components/history/history';
import HistoryPage from './components/history/history-page';
import Footer from './components/footer/footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, count: 0, results: {}, history: {}, method: '', url: '', body: '' };
  }

  formHandler = (headers, results, loading) => {
    const result = { headers, response: results };
    this.setState({ loading, count: results.count, results: result });
  }

  renderHistory = (history) => {
    this.setState({ history }, function () {
      console.log('ppppppp', this.state);
    });
  }

  historyRecall = (e) => {
    let recalled = e.currentTarget.innerText;
    recalled = recalled.split('*');
    this.setState({
      method: recalled[1],
      url: recalled[3],
      body: recalled[5],
    }, function () {
      // get the form elements and fill them with the recalled (clicked) history item
      document.getElementById('textInput').setAttribute('value', recalled[3]);
      document.getElementById('bodyTextInput').setAttribute('value', (recalled[5]) ? (recalled[5]) : '');
      
      // get the input after setting the attribute
      let textInput =  document.getElementById('textInput');
      let bodyTextInput =  document.getElementById('bodyTextInput');
    
      // trigger the onChange functions on the input to set the state in the form
      textInput.dispatchEvent(new Event('input', { bubbles: true }));
      bodyTextInput.dispatchEvent(new Event('input', { bubbles: true }));

    });


    // this.setState({ history:{url: recalled[3], body: recalled[5]} });

  };

  loading = (bool) => {
    this.setState({ loading: bool });
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Route exact path="/resty">

            <Form prompt='GO!'
              handler={this.formHandler}
              url={this.state.url}
              method={this.state.method}
              renderHistory={this.renderHistory}
              progress={this.loading}
            />

            <Results
              response={this.state.results}
              headers={this.state.results.headers}
              progress={this.state.loading}
              history={this.state.history}
              historyRecall={this.historyRecall}
            />

            <History
              history={this.state.history}
              historyRecall={this.historyRecall}
              renderHistory={this.renderHistory}
            />

          </Route>

          <Route exact path="/history">
            <HistoryPage historyList={this.state.history} />
          </Route>

        </main>
        <Footer />
      </>
    );
  }
}

export default App;