import React from 'react';
import API from '../utils/API';

class Form extends React.Component {
  constructor(props) {
    super(props);
  };

  state = {
    topic: "",
    startDate: "",
    endDate: "",
  };

  handleClick = (event) => {
    event.preventDefault();
    API.APIget(this.state.topic, this.state.startDate, this.state.endDate, this.props.updateMainState);
    this.setState({
      topic: "",
      startDate: "",
      endDate: "",
    });
  };

  handleChange = (event) => {
    const { name , value } = event.target;
    this.setState({[name]:value});
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div class="form-group">
            <label for="searchInput">Topic</label>
            <input name="topic" value={this.state.topic} onChange={this.handleChange} type="text" class="form-control" id="searchInput" aria-describedby="emailHelp" placeholder={`e.g. "Space Race"`}/>
          </div>

          <div class="form-group">
            <label for="startInput">Start date</label>
            <input name="startDate" value={this.state.startDate} onChange={this.handleChange} type="text" class="form-control" id="startInput" aria-describedby="emailHelp" placeholder={`YYYY/MM/DD`}/>
          </div>

          <div class="form-group">
            <label for="endInput">End date</label>
            <input name="endDate" value={this.state.endDate} onChange={this.handleChange} type="text" class="form-control" id="endInput" aria-describedby="emailHelp" placeholder={`YYYY/MM/DD`}/>
          </div>

          <button onClick={this.handleClick} type="submit" class="btn btn-primary">Submit</button>

        </form>
      </React.Fragment>
    );
  };
};

export default Form;