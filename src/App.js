import React from 'react';
import './App.css';


function Card({ headerText, backgroundColor, content}) {
  return (
    <div className = "Card" style={{ backgroundColor: backgroundColor}}>
      <h2>{headerText}</h2>
      <p>{content}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Creative</h1>
        <p className="App-subtitle">We build custom software solutions for small businesses</p>
      </header>
      <main>
        <div className="App-list">
          <Card headerText={"Web development"} backgroundColor={"#DAF7A6"} content={"Website design, ERP systems, and SEO consulting"}/>
          <Card headerText={"Mobile app development"} backgroundColor={"#FFC300"} content={"Custom phone applications, to give you an edge"}/>
          <Card headerText={"Data engineering"} backgroundColor={"#FF5733"}content={"Date engineering to help you succeed, using data science and AI"}/>
        </div>
      </main>
      <footer>
        <p className="App-footer">&copy; Creative 2023. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
