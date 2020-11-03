import { Component } from "react";
import Cells from "./Cells"

export default class  Board extends Component {
    render() {
        let sudoku = this.props.sudoku;
        return JSON.stringify(sudoku)
    }
}