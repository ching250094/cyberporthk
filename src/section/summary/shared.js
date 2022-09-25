import styled from 'styled-components'
import breakpoints from '../../style/breakpoints'

export const Container = styled.div`
    font-size: 1.2rem;
    > div {
        margin-top: 2rem;  
    }
`


export const Data = styled.div`
    color: #87C846;
    font-size: 3rem;
    font-weight: 500;

    > div {
        font-size: 1.5rem;
        font-weight: 400;
    }
`


export const Statistics = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;

    > div {
        width: 40%;
        margin-bottom: 3rem;

        > * {
            margin-bottom: 1rem;
        }
    }

    ${Data} {
        color: ${p => p.dataColor};
    }

    @media only screen and ${breakpoints.mobile} {
        width: 100%;

        > div {
            width: 50%;
        }
    }
`