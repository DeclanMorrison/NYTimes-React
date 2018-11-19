import React from "react";
import moment from 'moment';

const Result = (props) => {
  return(
    <div class="card">
      <div class="card-header">
        {props.title}
        <br/>
        {props.type === "saved" ? `Saved: ${moment(props.date).format("MMMM Do, YYYY")}` : `Published: ${moment(props.date).format("MMMM Do, YYYY")}`}
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{props.body}</p>
          {props.type === "result" ? 
          <button onClick={() => props.saveArticle(props.title, props.body, props.url)} className="btn btn-primary">Save</button> :
          <button onClick={() => props.deleteArticle(props.id)} className="btn btn-danger">Delete</button>}
          {<a href={props.url} className="btn btn-secondary">Go To Site</a>}
        </blockquote>
      </div>
    </div>
  )
};

export default Result;