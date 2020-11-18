import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export default class Button extends Component {
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({ language }) => (language === 'en' ? 'Submit' : 'Voorleggen')}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}
