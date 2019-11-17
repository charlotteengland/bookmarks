import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  state = {
    store: {
      lists: [],
      allCards: {},
    }
  }

  handleDeleteItem(item){
    const newItems = this.state.cardItems.filter(itm => itm !== item)
  this.setState({
    cardItems: newItems
  })
  }
  
  handleRandomItem(){
    console.log('handle random item called')
  }

  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={this.state.list.id}
              header={this.state.list.header}
              cards={this.state.list.cardIds.map(id => store.allCards[id])}
              onDeleteItem={this.handleDeleteItem}
              onRandomItem={this.handleRandomItem}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;