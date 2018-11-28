import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Torilla from "./components/PatBranch/Tortilla";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Git as a Group!!!</h3>
          <h4>
            A small practice repo to practice properly pulling, merging and
            committing to a group github project
          </h4>
          <div className="dumb-holder">
            <div>
              <h5>Here is the order:</h5>
              <ol className="gitList">
                <li>Create Project (already been done for you)</li>
                <li>Clone repository into your own project folder</li>
                <li>Git checkout -b branchName</li>
                <li>Yarn/NPM install</li>
                <li>code...</li>
                <li>Git commit</li>
                <li>Git checkout to master (git checkout master)</li>
                <li>
                  Git pull (checks for any other changes to master branch)
                </li>
                <li>Git checkout branchName</li>
                <li>Git merge master (merge any updates to your branch)</li>
                <li>Yarn/npm i to check for new packages</li>
                <li>Check for any conflicts.</li>
                <li>No conflicts then git commit/push origin branchName</li>
                <li>
                  I (mentor name here) will double check for any conflicts and
                  then merge
                </li>
                <li>Checkout back to master and pull again</li>
                <li>Checkout back to branchName and merge master</li>
                <li>Repeat from 5</li>
              </ol>
            </div>
            <div>
              <h5>Signed in:</h5>
              <ul>
                <li>Spencer Blah</li>
                <h1>Jason</h1>
                <li>T-Bone Sad Skrilla (Tim)</li>
                <li>Jimmy Shee</li>
                <li>Ben!</li>
                <li>
                  Patric <Torilla />
                </li>
                <li>Daniel</li>
                <h1>Tyler</h1>
              </ul>
              
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
