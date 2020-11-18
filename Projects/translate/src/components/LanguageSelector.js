import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        <div>
          Select a language:
          <i
            onClick={() => this.context.onLanguageChange('en')}
            className="flag us"
          ></i>
          <i
            onClick={() => this.context.onLanguageChange('nl')}
            className="flag nl"
          ></i>
        </div>
      </div>
    );
  }
}
