import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button';

const MyCoupons = () => {
    return (
        <Container>
            <h5>Available Coin balance</h5>
            <span>340</span>
            <div></div>
            <p>You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.</p>
            <Link to=''>
                <span>
                    View tier benefits
                </span>
                <div>
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 14L8 8L2 2" stroke="#0062FF" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                    </svg>
                </div>
            </Link>
            <Button />
            <p>Updated : 02/11/2021</p>
        </Container>
    )
}

export default MyCoupons

const Container = styled.div`
    position: absolute;
    height: 416px;
    left: 20px;
    right: 20px;
    top: 208px;
    padding: 24px;
    border-radius: 8px;
    border: 1px solid #FAFAFB;
    box-shadow: 0px 12px 18px rgba(23, 23, 37, 0.04);
    background-color: #fff;
    background-image: url(./img/BackGround.png);

    h5 {
        font-weight: 600;
        font-size: 14px;
        color: #B5B5BE;
        margin-bottom: 8px;
    }

    & > span {
        display: block;
        width: 81px;
        height: 56px;
        font-weight: 400;
        font-size: 48px;
        line-height: 56px;
        color: #171725;
        letter-spacing: -0.5px;
    }
    
    & > div {
        position: relative;
        margin: 34px 0;
        width: 100%;
        height: 5px;
        background: #E2E2EA;
        border-radius: 2.5px;

        &:after {
            content: '';
            position: absolute;
            width: 65%;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: 2.5px;
            background-color: #0062FF;
        }
    }
    
    & > p:nth-of-type(1) {
        padding-right: 18px;
        color: #92929D;
        margin-bottom: 16px;
    }

    a {
        display: flex;
        align-items: center;
        color: #0062FF;
        text-decoration: none;
        margin-bottom: 24px;

        & > span {
            font-weight: 400;
        }

        & > div {
            display: inline-block;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    & > p:nth-of-type(2) {
        line-height: 20px;
        text-align: center;
        letter-spacing: -0.5px;
        color: #B5B5BE;
    }
`