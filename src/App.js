import './App.css';
import sudokuGenerator from 'sudoku'
import Board from './components/Board'
import { Component } from 'react';

function createSudokuBoard() {
  let rawSudokuBoard = sudokuGenerator.makepuzzle();
  let sudokuBoard = Array.from(Array(9), () => new Array(9));
  for (let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
      sudokuBoard[i][j] = rawSudokuBoard[i*9+j];
    }
  }
  return sudokuBoard;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sudoku: createSudokuBoard(),
    };
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sudoku Solver</h1>
        </header>
        <Board sudoku={this.state.sudoku}/>
      </div>
    );
  }
}

export default App;
