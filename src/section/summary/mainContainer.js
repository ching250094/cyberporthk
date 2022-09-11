import styled from 'styled-components'

const Container = styled.div`
    background: url(${p => p.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;

    ${p => p.css}
`

export const TitleTag = styled.div`
    align-self: flex-end;
    color: #FFFFFF;
    font-size: 1.4em;
    padding: .5rem .8rem;
    margin-top: 3rem;
    margin-right: 2rem;
    z-index: 10;
`

const ContentContainer = styled.div`
    margin-left: 7.5rem;
    margin-top: 4rem;
    z-index: 10;
`

export const Heading = styled.div`
    font-size: 2.5rem;
`

const ImageGroup = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
`

export default function MainContainer({ background, children, renderImage, heading, css }) {
    return (
        <Container background={background} css={css}>
            <TitleTag>Annual Summary</TitleTag>
            <ContentContainer>
                <Heading>{heading}</Heading>
                {children}
            </ContentContainer>
            <ImageGroup>
                {renderImage?.()}
            </ImageGroup>
        </Container>
    )
}