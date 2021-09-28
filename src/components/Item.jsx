import React, {Component} from 'react';
import '../List.css';

export default class Item extends Component {
  render () {
    // console.log('render3');
    const activity = this.props.activity;
    const id = this.props.id;
    const deleteItem = this.props.onClick;
    return (
        <div className="to-do-text"><h2 className="activity-text">• {activity}</h2>
          <button onClick={deleteItem} value={id} className="delete-btn">
          X
          </button>
        </div>
    );
  }
}