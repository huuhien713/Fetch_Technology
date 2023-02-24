import React from 'react'
import styled from 'styled-components' 
import StatusBar from './StatusBar';
import MainPage from './MainPage';
import NavBar from './NavBar';

const Layout = () => {
    return (
        <Container>
            <StatusBar />
            <MainPage />
            <NavBar />
        </Container>
    )
}

export default Layout

const Container = styled.div`
  margin: auto;
  overflow: hidden; 
`