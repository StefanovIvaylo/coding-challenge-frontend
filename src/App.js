import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/sidenav.css';
import SideNav from './components/sidenav';
import AsideRight from './components/aside-right';
import './styles/app.css';
import MovieComponents from './components/movie-components';


const API_KEY = "1c6788569d817f6e1f0929ea9eedbad3";
const BASE_IMG_URL = "http://image.tmdb.org/t/p/w185";

class App extends Component {

  state = {
      movieContent: [],
      inputValue: '',
      clicked: [false,false,false],
  };

  handleToggleClass = event => {
    
    let clicked = [...this.state.clicked];

      clicked[event.target.id] ? clicked[event.target.id] = false : clicked[event.target.id] = true;
      this.setState({clicked})
  
  }

  getSearch = () => {
    let name = this.state.inputValue.split(' ').join('+');
    let url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query=" + name;

    try{
      if(name.length > 0){
        fetch(url).then(res => res.json()).then(json => {
          let movieContent = this.handleResponse(json, []);
          this.setState({movieContent});
        })
      }
    }
    catch(e){
      console.log("err", e);
    }
    
  }

  handleInputChange = (event) => {
    let inputValue = event.target.value;
    this.setState({ inputValue }, () => {
      inputValue.length === 0 ? this.init() : this.getSearch();
    })
  }

  getGenre = (ids) => {
    let genresArr = []

    try{
      ids.forEach( (id, i) => {
        let url = "http://api.themoviedb.org/3/genre/" + id + "?api_key="+ API_KEY;
        
        fetch(url).then(res => res.json()).then(json => {
          genresArr.push(json.name);
          if(genresArr.length === ids.length){
            this.forceUpdate();
          }
        })
      })
      return genresArr;
    }
    catch(e){
      console.log(e);
    }
  }

  handleResponse = (data, arr) => {
    data.results.forEach( (val) => {
      let posterPath = BASE_IMG_URL + val.poster_path;
      let name = val.title;
      let genres = this.getGenre(val.genre_ids)
      let rating = val.vote_average;
      let description = val.overview;
      arr.push( 
            { 
              poster: posterPath,
              name: name,
              genres: genres,
              rating: rating,
              description: description
            }
      )
    })
    return arr;
  }

  init = () => {
    let url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="+ API_KEY;

    try{
      fetch(url).then(res => res.ok
        ? res.json()
        : Promise.reject(`Can't communicate with REST API server (${res.statusText})`)).then(json => {
        let movieContent = this.handleResponse(json, []);
        this.setState({movieContent});
      })
    }
    catch(e){
      console.log("err", e)
    }
  }

  componentDidMount(){
    this.init();
  }

  render() {
    return (
      <React.Fragment>
      <div className="container-fluid">
        <div className="row wrapper">
            <SideNav />
            <div className="col-sm-3 order-sm-6 page-element">
                <AsideRight onToggleClass={this.handleToggleClass} clicked={this.state.clicked} inputValue={this.state.inputValue} onInput={this.handleInputChange} />
            </div>
            <main id="main-element" className="col-sm-6 order-sm-1 page-element">
                {this.state && this.state.movieContent && <MovieComponents movieContent={this.state.movieContent} />}
            </main>
          </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
