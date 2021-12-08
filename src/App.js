import { Component } from "react";
import { connect } from "react-redux";
import {
  add_reminder,
  remove_reminder,
  all_remove,
} from "./ActionsCreateor/ActionsCreateor";
import "./styled.css";
import img from "../src/shehab.png";

class App extends Component {
  state = {
    text: "",
    date: "",
    id: Math.random(),
  };

  change = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  changedate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  add_reminder = () => {
    const { reminder } = this.props;
    return reminder.map((res) => {
      return (
        <ul className="list-group" key={res.id}>
          <li>{res.text}</li>
          <li>{res.date}</li>
          <li
            onClick={() => this.props.remove_reminder(res.id)}
            className=" close_item  btn btn-danger"
          >
            X
          </li>
        </ul>
      );
    });
  };

  render() {
    return (
      <div className="app">
        <img src={img} />
        <div className="reminder-title">
          <h2>what should you do ?</h2>
        </div>

        <input onChange={this.change} className="form-control " type="text" />
        <input
          onChange={this.changedate}
          className="form-control "
          type="datetime-local"
        />

        <div className="d-grid gap-2">
          <button
            onClick={() =>
              this.props.add_reminder(this.state.text, this.state.date)
            }
            className="btn btn-primary"
            type="button"
          >
            Add rimender
          </button>
          <button
            onClick={() => this.props.all_remove()}
            className="btn btn-danger"
            type="button"
          >
            Clear rimender
          </button>
          {this.add_reminder()}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      reminder: state,
    };
  },
  { add_reminder, remove_reminder, all_remove }
)(App);
