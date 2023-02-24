import React from 'react'
import styled from 'styled-components'
import MyCollection from '../../Modules/MyCollection'
import MyCoupons from '../../Modules/MyCoupons'
import TitlePage from '../../Modules/TitlePage'


function MainPage() {
    return (
        <Container>
            <TitlePage />
            <MyCoupons />
            <MyCollection />
        </Container>
    )
}

export default MainPage

const Container = styled.div`
    position: relative;
`
