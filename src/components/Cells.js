import { Component } from "react";

export default class  Cells extends Component {
    render() {
        let cell = this.props.cell;
        return <input className="cell" value={cell.value}/>
    }
}