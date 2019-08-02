import React, { Component } from "react";
import qs from "qs";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default class Giphy extends Component {
  state = {
    data: [],
    query: ""
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      query: value
    });

    this.search(value);
  };

  search = query => {
    let queryString = qs.stringify({
      api_key: API_KEY,
      q: query,
      limit: 5,
      lang: "en"
    });
    fetch(
      `http://api.giphy.com/v1/gifs/search${
        queryString ? "?" + queryString : ""
      }`
    )
      .then(results => results.json())
      .then(data => {
        this.setState({ data: data.data });
      })
      .catch(err => console.error(err));
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Giphy</h1>
        <form>
          <input
            type="text"
            className="search-box"
            placeholder="Search giphs username..."
            onChange={this.handleChange}
          />
          {data.map(person => (
            <ul key={person.id}>
              <li>{person.username}</li>
            </ul>
          ))}
        </form>
      </div>
    );
  }
}
