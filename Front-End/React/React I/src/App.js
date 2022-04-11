import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <table>
                <thread>
                    <tr>
                        <th>Autores</th>
                        <th>Livros</th>
                        <th>Preços</th>
                        <th>Remover</th>
                    </tr>
                </thread>
                <tbody>
                    <tr>
                        <th>Paulo</th>
                        <th>React</th>
                        <th>1000</th>
                        <td><button>Remover</button></td>
                    </tr>
                    <tr>
                        <th>Nico</th>
                        <th>React</th>
                        <th>1000</th>
                        <td><button>Remover</button></td>

                    </tr>
                    <tr>
                        <th>Daniel</th>
                        <th>React</th>
                        <th>1000</th>
                        <td><button>Remover</button></td>

                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default App;
