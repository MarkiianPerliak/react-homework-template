import styled from 'styled-components';

export const Choice = (data) => {
    return (
        <Wrapper>
            <Favourite>FAVOURITE CARD</Favourite>
            <Name>Card Name: <GreenName>{data.name}</GreenName></Name>
            <img src={data.src} alt="" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-color: #282c34;
width: min-content;
  margin-left: auto;
  margin-right: auto;
    border: 1px white solid;
  border-radius: 30px;
`

const Favourite = styled.h2`
color: white;
`

const Name = styled.p`
color: white;
`

const GreenName = styled.span`
color: lightgreen;
`