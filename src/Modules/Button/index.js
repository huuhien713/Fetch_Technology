import React from 'react';
import styled from 'styled-components'

const Button = () => {
    return (
        <Container>
            My Coupons
        </Container>
    )
}

export default Button

const Container = styled.button`
    width: 100%;
    height: 60px;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    background: #171725;
    margin-bottom: 16px;
    transition: all 0.5s;

    &:hover {
        cursor: pointer;
        border-color: #0062FF;
        background-color: #0062FF;
    }
`