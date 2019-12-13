import React, { Component } from 'react';
import TreeDecoList from './TreeDecoList';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="hero container is-info">
          <div className="hero-body">
            <h1 className="title">Treehub</h1>
          </div>
        </section>
        <section className="container">
          <TreeDecoList />
        </section>
      </div>
    );
  }
}