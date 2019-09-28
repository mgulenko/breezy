import React, { Component } from 'react';
import './App.css';
import HomePage from './home_page/HomePage.js'
import ContactPage from './contact_page/ContactPage.js'
import { PageType } from './Definitions';

class App extends Component 
{
  state = 
  {
    currentPage : PageType.Contact
  }

  render() 
  {

    let page = null;
    switch(this.state.currentPage)
    {
      case PageType.Home:
        page = (<HomePage/>);
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
