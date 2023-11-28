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
          Docs
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
          <Button title="hi" handleClick={() => { console.log("hey"); void logMovies(); }} />
        </div>
      </header>
    </div>
  );
}

export default App;
