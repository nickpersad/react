import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pagination from './pagination';

class Showing extends Component {
  constructor() {
        super();

        this.state = {
            exampleItems: [],
            pageOfItems: []
        };

        // the api request function
        var url = `https://api.themoviedb.org/3/discover/movie?api_key=ef77c3eda1e7e0c11a7c04c61b0d4151&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2017`

        fetch(url).then((res) => res.json()).then((data) => {

          this.setState({
            exampleItems: data['results'],
            pageOfItems: []
          })
        })

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
      return (
          <div className="col-xs-12 discovercont nopadding">
              <div className="discover-container col-xs-12">
                  {this.state.pageOfItems.map(item =>
                      <div key={item.id}>{item.title}</div>
                  )}
                  <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
              </div>
          </div>
        )
    }
}
module.exports = Showing;
