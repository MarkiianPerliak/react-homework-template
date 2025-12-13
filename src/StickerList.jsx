import { Component } from "react"
import { Sticker } from './Sticker.jsx';

export class StickerList extends Component {
    render() {
        return (
            <ul className="StickerList">
                <Sticker />
            </ul>
        )
    }
}