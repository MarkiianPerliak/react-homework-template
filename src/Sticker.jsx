import { Component } from "react"
import stickers from "./sticker.json"

export class Sticker extends Component {
    state = {
        name: null,
        url: null
    }

    getInfo = () => this.setState({name: {sticker.label}})

    render() {
        return (
            <>
                {stickers.map(sticker => {
                    return <li><img src={sticker.img} alt={sticker.label} /></li>
                })}
            </>
        )
    }
}

