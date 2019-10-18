import React from 'react';
import './App.css';

import { BASE_URL } from './index';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>File Metadata</h1>

                <form
                    action={`${BASE_URL}/metadata`}
                    method="post"
                    encType="multipart/form-data"
                >
                    <input type="file" name="upfile" />
                    <input type="submit" />
                </form>
            </header>
        </div>
    );
}

export default App;
