import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlogList from './modules/blog/blogList';
import {useRoutes, A} from 'hookrouter';


const routes = {
  '/blog': () => BlogList();

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <A href='/blog'>Blog </A>

        <BlogList/>
      </header>
    </div>
  );
}

export default App;
