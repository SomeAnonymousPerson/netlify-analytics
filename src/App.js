import React from 'react';
import logo from './logo.svg';
import './App.css';

import data from './data/data.js';

import SectionRenderer from './renderer/SectionRenderer';

function App() {
  const sections = data.sections.map((section, index) => {
    const { Component, content } = section;
    return (
      <SectionRenderer key={index} component={Component} content={content} />
    );
  });

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
      {sections}
    </div>
  );
}

export default App;
