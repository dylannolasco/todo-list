import React, {Component} from 'react';
import AddingThings from './AddingThings';
import '../ThingsToDo.css';

export default class Container extends Component {
  render () {
    return (
      <div className="container-p">
        <h1 className="title-p">List to do</h1>
        <AddingThings/>
      </div>
    );
  }
}