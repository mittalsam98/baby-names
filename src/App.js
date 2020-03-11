import React,{Component}from 'react';
import './App.css';
import NameList from './components/NameList/NameList';
import SearchList from './components/SearchList/SearchList';
import ShortList from './components/ShortList/ShortList';

class App extends Component {

  state={
    filterText:'',
    favourites:[]
  }


  addFavourites=(id)=>{
    // console.log(this.state.favourites);
    const newSet = this.state.favourites.concat([id]);
    this.setState({favourites: newSet});
}

deleteFavourites=(id)=>{
let newState=this.state.favourites;
newState=[
  ...newState.slice(0,id),
  ...newState.slice(id+1)
]
this.setState({favourites:newState});

}


  render(){
  
  return (
    <div className="App">
      <header>
        <SearchList 
        filterText={this.state.filterText}
        data={this.props.state}
        />

      </header>
      <main>
      <ShortList 
      data={this.props.data}
      favourites={this.state.favourites}
      deleteFavourites={(id)=>this.deleteFavourites(id)}
      />
      <NameList 
      data={this.props.data}
      filter={this.state.filterText}
      favourites={this.state.favourites}
      addFavourites={(id)=>this.addFavourites(id)}
      />
      </main>
    </div>
  );
}
}

export default App;
