import React from 'react'
import styled from 'styled-components'

const TitlePage = () => {
    return (
        <Container>
            <div>
                <Circle>
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 14L1 8L7 2" stroke="#171725" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                    </svg>
                </Circle>
            </div>
            <h1>Silver Tier</h1>
            <p>In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</p>
        </Container>
    )
}

export default TitlePage

const Container = styled.div`
    padding: 0 24px;
    background-color: #171725;

    & > div {
        padding: 16px 0;
    }

    h1 {
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        color: #fff;
    }

    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #B5B5BE;
        padding: 8px 0 216px;
    }
`

const Circle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;

    svg {
        transition: all 0.5s;        
    }

    &:hover {
        cursor: pointer;
        background-color: #D5D5DC;
    }
    
    &:hover svg{
        animation: moveX 0.5s linear;
    }
`