import React from "react";
import ReactDOM from "react-dom";

import GroceryList from "./components/GroceryList";
import ListForm from "./components/ListForm";
import "./styles.css";

const groceries = [
  {
    name: "Bananas",
    id: 123,
    purchased: false
  },
  {
    name: "Torillas",
    id: 124,
    purchased: false
  },
  {
    name: "Milk",
    id: 1235,
    purchased: false
  },
  {
    name: "Pizza Sauce",
    id: 1246,
    purchased: false
  },
  {
    name: "Raw Honey",
    id: 1237,
    purchased: false
  },
  {
    name: "Granola",
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      groceryList: groceries
    };
  }
  // Class methods to update state
  toggleItem = clickedId => {
    const newGroceryList = this.state.groceryList.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          purchased: !item.purchased
        };
      } else {
        return item;
      }
    });

    this.setState({
      groceryList: newGroceryList
    });
  };

  addNewItem = itemText => {
    const newItem = {
      name: itemText,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      groceryList: [...this.state.groceryList, newItem]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ListForm addNewItem={this.addNewItem} />
        </div>
        <GroceryList
          groceries={this.state.groceryList}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
