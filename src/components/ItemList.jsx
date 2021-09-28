import React, {Component} from 'react';
import Item from './Item';
import '../List.css';


export default class ItemList extends Component {
  render () {
    let activities = this.props.inputs;
    let onClickDelete = this.props.onClick;
    return (
      <div className="completeList">
        {activities.map(activity => (<Item key={activity.id} id={activity.id} activity={activity.description} onClick={onClickDelete}/>))}
      </div>
    );
  }
}
