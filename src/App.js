import React, { Component } from 'react';
import miniData from './miniData';
import ConjugatorContainer from './components/conjugatorPage/ConjugatorContainer';
import { Route, Link } from 'react-router-dom';
import OptionsContainer from './components/optionsPage/OptionsContainer';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: miniData,
      verbTenses: []
    };
  }

  filterData = event => {
    event.preventDefault();
    const test = Object.values(miniData).filter(
      verb => verb.infinitive === 'hablar'
    );
    this.setState({
      data: test
    });
  };

  setTenses = event => {
    event.preventDefault();
    console.log('Clicked!');
    this.setState({
      verbTenses: [...this.state.verbTenses, event.target.value]
    });
  };

  render() {
    console.log('verb tenses =', this.state.verbTenses);
    return (
      <div>
        <StyledLink to="/">Spanish Conjugator</StyledLink>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <ConjugatorContainer {...props} data={this.state.data} />
            )}
          />
        </div>
        <div>
          <Route
            path="/options"
            render={props => (
              <OptionsContainer
                {...props}
                filterData={this.filterData}
                setTenses={this.setTenses}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
