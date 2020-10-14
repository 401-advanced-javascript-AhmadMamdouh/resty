import React from 'react';
import axios from 'axios';
import md5 from 'md5';


import Header from './components/header/header';
import Form from './components/form/form';
import Footer from './components/footer/footer';
import Results from './components/results/results';
import History from './components/history/history';

class App extends React.Component { 

  constructor (props) {
    super(props);
    this.state = {
      requestData:null,
      resultsIn: null,
      loading: false,
      pastSearches: JSON.parse(localStorage.getItem('pastSearches')),
      method:'GET',
      // url:'http://',
      // data:'',
    };
  }

  
  talkToApi = async (requestObj) => {

    this.toggleLoading()
    this.setState({ url: requestObj.url, data: requestObj.data});
    this.setState({ method: requestObj.method})

    try {
      let results = await axios(requestObj);
      this.getResults(results);
      this.saveToLocalStorage(requestObj)
    } catch(e) {
      console.log(e)
      this.toggleLoading();
      this.setState({resultsIn:'error', requestData:'Bad Request'});
    }
  }

  toggleLoading = () => this.setState({loading: !this.state.loading});

  getResults = (requestData) => {
    this.toggleLoading();
    this.setState({ requestData, resultsIn:'results' })
  }

  saveToLocalStorage = async (requestObj) => {
    const hash = md5(JSON.stringify(requestObj))

    await this.setState({pastSearches: { ...this.state.pastSearches, [hash]: requestObj }});

    let stringifiedObj = JSON.stringify(this.state.pastSearches);

    localStorage.setItem('pastSearches', stringifiedObj);
  }

  render = () => (
    <div className="App">
      <Header />
      <main>
        <Form handleInput={this.talkToApi} defaultUrl={this.state.url} defaultMethod={this.state.method} defaultData={this.state.data}  />
        <History pastSearches={this.state.pastSearches} talkToApi={this.talkToApi}/>
        <Results data={this.state.requestData} resultsIn={this.state.resultsIn} loading={this.state.loading} />
      </main>
      <Footer />
    </div>
  );
}

export default App;