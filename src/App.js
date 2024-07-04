import React from 'react';
import './App.css';
import Cronometro from './Cronometro.js';

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Cronômetro</h1>
            </header>
            <main>
                <Cronometro />
            </main>
        </div>
    );
}
