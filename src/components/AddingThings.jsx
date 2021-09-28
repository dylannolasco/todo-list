/* eslint-disable array-callback-return */
import React, {Component} from 'react';
import ItemList from './ItemList';
import  swal from 'sweetalert';
import '../ThingsToDo.css';

export default class AddingThings extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      itemList: []
    };
    this.same = 0;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  shouldComponentUpdate(nextProps, nextState) {
    const activities = this.state.itemList;
    let count = 0;
    activities.map(activity => {
      if (nextState.value.trim().toLowerCase() === activity.description) {
        count++;
        this.same = count;
      } else {
        this.same = count;
      }
    });
    return true;   
  }

  handleSubmit(event) {
    if(this.same === 0) {
      console.log(this.same);
      const newActivity = {
        description: this.state.value.trim().toLowerCase(),
        id: Date.now().toString()
      };
      this.setState((prevState) => {
        return {
          itemList: prevState.itemList.concat(newActivity)
        };
      });
      this.setState({value: ''});     
      event.preventDefault();
    } else {
      event.preventDefault();
      this.setState({value: ''});  
      this.mostrarAlerta();
    }
  }

  mostrarAlerta() {
    swal({
      title: "You have a same task to do!",
      text: "Type another task to be completed",
      icon: "warning",
      timer: "5000"
    });
  }

  onClickDelete(event) {
    const activities = this.state.itemList;
    const id = event.target.value;
    const updateList = activities.filter(activity => activity.id !== id)
    this.setState({itemList: updateList}); 
  }

  render () {
    return (
      <div className="to-do-list">
        <div className="inputBox">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="to-do" className="labelForm">Write a task to do: </label>
            <input 
              type="text" 
              id="to-do" 
              name="to-do"
              className="input"
              placeholder = "enter a task"
              value={this.state.value}
              onChange={this.handleChange}  
            />
            <button
              className="btn-input"
              disabled={this.state.value ? '' : "disabled"}
            >
              Add
            </button>
          </form>
        </div>
        <ItemList inputs={this.state.itemList} onClick={this.onClickDelete}/>
      </div>
    );
  }
}