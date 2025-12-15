import { Component } from 'react';
import styled from 'styled-components';
import { Sticker } from './Sticker.jsx';
import { Choice } from "./Choice.jsx"


export class StickerList extends Component {
    state = {
        label: null,
        url: null
    }

    getChoiceData = (name, src) => {
        this.setState({label: name, url: src})
    }

    render() {
        return (
            <div className="wrapper">
                <Choice name={this.state.label} src={this.state.url} />
                <List className="StickerList">
                    <Sticker getChoiceData={this.getChoiceData} />
                </List>
            </div>
        )
    }
}

const List = styled.ul`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    list-style: none;
`