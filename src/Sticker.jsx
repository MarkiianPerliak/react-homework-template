import { Component } from "react"
import stickers from "./sticker.json"

import styled from 'styled-components';

export class Sticker extends Component {
    state = {
        label: null,
        url: null
    }

    getInfo = (event) => {
    this.props.getChoiceData(event.target.alt, event.target.src)
    }

    render() {
        return (
            <>
                {stickers.map(sticker => {
                    return <Item><img key={sticker.id} onClick={this.getInfo} src={sticker.img} alt={sticker.label} /></Item>
                })}
            </>
        )
    }
}


const Item = styled.li`
background-color: #5b5f68ff;
width: min-content;
border: 1px white solid;
border-radius: 30px;
`
