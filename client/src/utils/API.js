import axios from 'axios';
import arrayFunctions from "./arrayFunctions";

const API = {
  APIget: function (topic, startDate, endDate, callBack) {
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
      params: {
        'api-key': "7ded42fd32ec48dd9cd664d0eafb7351",
        'q': topic,
        'begin_date': arrayFunctions.replaceSlashes(startDate),
        'end_date': arrayFunctions.replaceSlashes(endDate)
      }
    }).then(res => {
      callBack({name:"results", values: res.data.response.docs});
    });
  },
  APIgetsaved: function (callBack) {
    axios.get("/api/articles/").then(res => {
      // console.log(res);
      callBack({name:"saved", values: res.data});
    });
  },
  APIsave: function (title, body, url, callBack) {
    axios.post("/api/articles/add", {title: title, body: body, url: url}).then(res => {
      // console.log(res);
      callBack({name:"saved", values: res.data});
    });
  },
  APIdelete: function (id, callBack) {
    axios.delete(`/api/articles/remove/${id}`).then(res => {
      callBack({name:"saved", values: res.data});
    });
  }
};

export default API;