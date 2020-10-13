import React from 'react';

import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      url: '',
      method: '',
      body: {},
      request: {},
    };
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // persist the event to reset the form later
      e.persist();


      if (this.state.url && this.state.method) {

        // start loading
        this.props.progress(true);

        let request = {
          url: this.state.url,
          method: this.state.method,
          body: this.state.body,
        };

        // clear the form state url, method and body
        let url = '';
        let method = '';
        let body = '';
        this.setState({ request, url, method, body });

        // array to push the headers in
        let headers = [];

        // create an object to be saved in the local storage 
        let newObj = {
          body: this.state.body,
          header: headers,
          host: (this.state.url).split('/')[2],
          method: this.state.method,
          path: (this.state.url).split('/').slice(3).join('/'),
          url: this.state.url,
        };

        // get and delete don't have body
        if ((this.state.method === 'GET') || (this.state.method === 'DELETE')) {

          const raw = await fetch(request.url);

          // stop loading
          this.props.progress(false);

          // access headers
          raw.headers.forEach(item => headers.push(item));
          // read the response stream in the fetched body
          const fetchedResults = await raw.json();
          // pass the headers and the reselts in the props function to set the state of the app
          this.props.handler(headers, fetchedResults, this.state.loading);

          // create an id for the request
          let id = new Date().getTime();
          // get the history in the local storage 
          let localStorageObj = (localStorage.getItem('history')) ? JSON.parse(localStorage.getItem('history')) : {};
          // append the fetched results to a properety in the local storage object with the key of the new item id
          localStorageObj[id] = newObj;
          // save the updated object in the local storage again
          localStorage.setItem('history', JSON.stringify(localStorageObj));
          // render the history 
          this.props.renderHistory(localStorageObj);

        } else {

          const raw = await fetch((this.state.url),
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              method: this.state.method,
              body: (this.state.body),
            });

          // stop loading
          this.props.progress(false);

          // access headers
          raw.headers.forEach(item => headers.push(item));
          // read the response stream in the fetched body
          const fetchedResults = await raw.json();
          // pass the headers and the reselts in the props function to set the state of the app
          this.props.handler(headers, fetchedResults);

          // create an id for the request
          let id = new Date().getTime();
          // get the history in the local storage 
          let localStorageObj = (localStorage.getItem('history')) ? JSON.parse(localStorage.getItem('history')) : {};
          // append the fetched results to a properety in the local storage object with the key of the new item id
          localStorageObj[id] = newObj;
          // save the updated object in the local storage again
          localStorage.setItem('history', JSON.stringify(localStorageObj));
          // render the history 
          console.log(localStorageObj, 'what?');
          this.props.renderHistory(localStorageObj);
        }
        // reset the form 
        e.target.url.value = '';
        e.target.body.value = '';
        e.target.method = '';
      }

      else {
        alert('missing information');
      }
    } catch (e) {
      console.log(e);
    }
  }

  handleChangeURL = e => {
    const url = e.target.value;
    this.setState({ url });
  };
  handleChangeBody = e => {
    const body = e.target.value;
    if (body) {
      this.setState({ body });
    }
  };

  // it works this way but you need to click the history item two times
  // componentWillReceiveProps = () => {
  //   if ((this.props.historyRecall.url) && (this.props.historyRecall.method)) {
  //     this.historyRecall();
  //   }
  // }

  handleChangeMethod = e => {
    const method = e.target.id;
    this.setState({ method });
  };

  render() {
    // check if there is history that has been clicked then call the function to fill the form
    return (
      <form id='form' onSubmit={this.handleSubmit}>
        <label >
          <span>URL: </span>
          <input id='textInput' name='url' type='text' onChange={this.handleChangeURL} className={this.state.url ? this.state.url : ''} />
          <span>Body: </span>
          <input id='bodyTextInput' name='body' type='text' onChange={this.handleChangeBody} className={this.state.body ? this.state.body : ''} />
          <button type="submit">{this.props.prompt}</button>
        </label>
        <label className="methods">
          <span name='method' className={this.state.method === 'GET' ? 'active' : ''} id="GET" onClick={this.handleChangeMethod}>GET
          <span name='method' className={this.state.method === 'POST' ? 'active' : ''} id="POST" onClick={this.handleChangeMethod}>POST</span>
          <span name='method' className={this.state.method === 'PUT' ? 'active' : ''} id="PUT" onClick={this.handleChangeMethod}>PUT</span>
          <span name='method' className={this.state.method === 'DELETE' ? 'active' : ''} id="DELETE" onClick={this.handleChangeMethod}>DELETE</span>
          </span>
        </label>
      </form>
    );
  }
}

export default Form;