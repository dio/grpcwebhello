import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { YAMLServiceClient } from 'hello-api/v1/hello_pb_service';
import { ToJSONRequest, ToJSONBytesRequest } from 'hello-api/v1/hello_pb';
import str2ab from 'string-to-arraybuffer';

function host() {
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = window.location.port;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

const client = new YAMLServiceClient(host());

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      const req = new ToJSONRequest();
      req.setYaml('- ok');
      client.toJSON(req, (a, b, c) => {
        console.log(a, b, c);
      });

      const reqBytes = new ToJSONBytesRequest();
      reqBytes.setYaml(str2ab('- ok'));
      client.toJSONBytes(req, (a, b, c) => {
        console.log(a, b, c);
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
