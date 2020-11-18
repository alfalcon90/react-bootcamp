import React, { Component } from 'react';
import UserCreate from './components/UserCreate';
import LanguageSelector from './components/LanguageSelector';
import { LanguageStore } from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />

          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}
