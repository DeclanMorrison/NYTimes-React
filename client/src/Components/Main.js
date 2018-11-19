import React from 'react';
import Card from './Card';
import Form from './Form';
import Result from './Result';
import API from '../utils/API';

class Main extends React.Component {
  state = {
    "results": [],
    "saved": []
  }

  updateMainState = (array) => {
    const { name, values } = array;
    this.setState({[name]:values});
  };

  handleSaveArticle = (title, body, url) => {
    API.APIsave(title, body, url, () => API.APIgetsaved(this.updateMainState));
    
  };

  handleDeleteArticle = (id) => {
    API.APIdelete(id, () => API.APIgetsaved(this.updateMainState));
  }

  componentDidMount = () => {
    API.APIgetsaved(this.updateMainState);
  };
  
  render() {
    return (
      <React.Fragment>
        <Card title="Search for articles" >
          <Form updateMainState={this.updateMainState}></Form>
        </Card>

        <br/>

        <Card title="Results">
          {(this.state.results).map(article => <Result type="result" key={article.headline.main} saveArticle={this.handleSaveArticle} date={article.pub_date} title={article.headline.main} body={article.snippet} url={article.web_url}></Result>)}
        </Card>

        <br/>

        <Card title="Saved">
          {(this.state.saved).map(article => <Result type="saved" key={article.title} deleteArticle={this.handleDeleteArticle} id={article._id}  date={article.date} title={article.title} body={article.body} url={article.url}></Result>)}
        </Card>
      </React.Fragment>
    )
  };

};

export default Main;