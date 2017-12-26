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
      // let url = `http://api.giphy.com/v1/gifs/search?q=the+dark+knight&api_key=mCBE3kU90eQny60ZkZ9VYS56uVDPhFD2&limit=1`

  }

  componentDidUpdate() {
    let movieName = 'The Dark Knight'

    if (this.props !== undefined && this.props.data) {
      movieName = this.props.data.original_title
    }

    movieName = movieName.replace(/\s+/g, '+').toLowerCase()
    let url = `http://api.giphy.com/v1/gifs/search?q=${movieName}&api_key=mCBE3kU90eQny60ZkZ9VYS56uVDPhFD2&limit=1`

    fetch(url).then((res) => res.json()).then((data) => {
      // console.log(data['data'])
      this.setState({
        gifArr: data['data'],
        embed: data['data'][0]['embed_url']
      })
    })
  }

  render() {
    return (
      <div className="giphy-container col-xs-12">
        <div className="row">
          {this.state.gifArr.map(item =>
            <div key={item.id} className="col-xs-12">
              <h2>{item.title}</h2>
              <iframe src={`${item.embed_url}`} frameBorder="0" className="giphy-embed"></iframe>
            </div>
          )}
        </div>
      </div>
    )
  }
}
module.exports = Gif;