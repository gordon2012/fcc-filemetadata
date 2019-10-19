import React from 'react';
import './App.css';

import { BASE_URL } from './index';

function App() {
    async function test() {
        const res = await fetch(`${BASE_URL}/test`);
        const data = await res.json();
        console.log(data);
    }
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
                    <button type="button" onClick={test}>
                        Test
                    </button>
                </form>
            </header>
        </div>
    );
}

export default App;
