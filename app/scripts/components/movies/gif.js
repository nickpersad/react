import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Gif extends Component {
  constructor() {
      super();

      this.state = {
          gifArr: [],
          embed: ''
      };

      // the api request function
      let url = `http://api.giphy.com/v1/gifs/search?q=deadpool&api_key=mCBE3kU90eQny60ZkZ9VYS56uVDPhFD2&limit=1`

      fetch(url).then((res) => res.json()).then((data) => {
        console.log(data['data'])
        this.setState({
          gifArr: data['data'],
          embed: data['data'][0]['embed_url']
        })
      })
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="giphy-container col-xs-12">
        <div className="row">
          {this.state.gifArr.map(item =>
            <div key={item.id} className="col-xs-12">
              <h2>{item.title}</h2>
              <iframe src={`${item.embed_url}`} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </div>
          )}
        </div>
      </div>
    )
  }
}
module.exports = Gif;