import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const BASE_URL =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:5000'
        : 'https://fcc-filemetadata.gdoskas2012.now.sh';

ReactDOM.render(<App />, document.getElementById('root'));
