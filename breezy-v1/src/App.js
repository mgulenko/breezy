import React, { Component } from 'react';
import './App.css';
import HomePage from './home_page/HomePage.js'
import ContactPage from './contact_page/ContactPage.js'
import { PageType } from './Definitions';
import MaterialsPage from './materials_page/MaterialsPage';
import ArtworkPage from './artwork_page/ArtworkPage';
import AboutPage from './about_page/AboutPage';

class App extends Component 
{
  state = 
  {
    currentPage : PageType.Home
  }

  render() 
  {

    let page = null;
    switch(this.state.currentPage)
    {
      case PageType.Home:
        page = (<HomePage/>);
        break;
      case PageType.ArtWork:
        page = (<ArtworkPage/>);
        break;
      case PageType.Materials:
        page = (<MaterialsPage/>);
        break;
      case PageType.About:
        page = (<AboutPage/>);
        break;
      case PageType.Contact:
        page = (<ContactPage/>);
        break;
      default:
          page = (<HomePage/>);
          break;
    }
    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
