import React from 'react';

import { BASE_URL } from './index';

function App() {
    return (
        <div className="app">
            <header className="App-header"></header>

            <main>
                <h1 className="masthead">File Metadata Microservice</h1>

                <div className="container">
                    <div className="card">
                        <h2 className="masthead">User Stories</h2>
                        <ol>
                            <li>
                                I can submit a form object that includes a file
                                upload.
                            </li>
                            <li>
                                The from file input field has the{' '}
                                <code>name</code> attribute set to{' '}
                                <code>upfile</code>.
                            </li>
                            <li>
                                When I submit something, I will receive the file
                                name, and size in bytes within the JSON
                                response.
                            </li>
                        </ol>

                        <h2 className="masthead">Usage</h2>
                        <p className="masthead">Please upload a File.</p>
                    </div>

                    <div className="card">
                        <form
                            action={`${BASE_URL}/metadata`}
                            method="post"
                            encType="multipart/form-data"
                        >
                            <code className="response">
                                <input type="file" name="upfile" />
                            </code>

                            <div className="buttons">
                                <div>
                                    <button>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <footer>
                A{' '}
                <a
                    href="https://freecodecamp.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    freeCodeCamp
                </a>{' '}
                APIs and Microservices Project
            </footer>
        </div>
    );
}

export default App;
