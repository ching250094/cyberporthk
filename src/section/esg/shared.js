
import styled from 'styled-components'

export function Card({ src, text, css }) {
    return (
        <BaseCard css={css}>
            <img src={src} />
            <div>{text}</div>
        </BaseCard>
    )
}

const BaseCard = styled.div`
    background-color: #FFF;
    text-align: center;
    box-shadow: 6px 6px 13px #C8C8C8;

    img {
        max-width: 300px;
        min-width: 280px;
        padding: 1.5rem 1.5rem 1rem;
    }

    div {
        font-size: 1.5rem;
        padding-bottom: 2rem;
        width: 80%;
        margin: 0 auto;
    }
    ${p => p.css};
`

export const BaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 80%;

`

export const TextCard = styled.div`
    background-color: #FFF;
    box-shadow: 6px 6px 13px #C8C8C8;
    width: 100%;
    border-radius: 25px;
    padding: 2rem;
    line-height: 1.5;
    font-size: 14px;
    * + * {
        margin-top: 5rem;
    }

    ${p => p.css};

`