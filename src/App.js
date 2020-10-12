import React from 'react';



import Header from './components/header/header';
import Form from './components/form/form';
import Results from './components/results/results'
import Footer from './components/footer/footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, results: [] };
  }
  handlerForm = (headers, results) => {
    const result = { headers, response: results };
    this.setState({ count: results.count, results: result });
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Form prompt='GO!' handler={this.handlerForm} />
          <Results response={this.state.results} headers={this.state.results.headers} />
        </main>
        <Footer />

      </>
    )
  }


}



export default App;
