import React, { Component } from "react";
import CardList from "./card-components/CardList";
import SearchBox from "./card-components/search-box.component.jsx";

class UD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
    
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search" onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </>
    );
  }
}

export default UD;
