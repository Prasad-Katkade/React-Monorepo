import React from "react";
import { Link, Button } from "ui";
import "./App.css";

function App(): JSX.Element {
  async function logMovies(): Promise<void> {
    const response: Response = await fetch("http://localhost:8000/products");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const movies: unknown[] = await response.json();
    console.log(movies);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
          Client
          <div className="Turborepo">Turborepo Example</div>
        </h1>
        <div>
          <Link className="App-link" href="https://turbo.build/repo">
            Turborepo Docs
          </Link>
          <span> | </span>
          <Link className="App-link" href="https://reactjs.org">
            React Docs
          </Link>
          <Button handleClick={():void => { console.log("hey"); void logMovies(); }} title="hi" />
        </div>
      </header>
      <p className="bg-orange-300">hellooo</p>
    </div>
  );
}

export default App;
