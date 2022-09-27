import styled, { css } from 'styled-components'
import startupObjImg from '../../assets/images/summary/startup_2.png'
import startupImg from '../../assets/images/summary/startup_1.png'
import startupBg from '../../assets/images/summary/startup_bg.png'
import breakpoints from '../../style/breakpoints'
import MainContainer, { Heading, TitleTag } from './mainContainer'
import { Data } from './shared'

const ImageGroup = styled.div`
    display: flex;
    img {
        width: 25rem;
        margin-right: 5rem;
    }

    @media only screen and ${breakpoints.pad} {
        img {
            width: 20rem;
        }
    }
`

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
`

const Item = styled.div`
    margin: ${p => p.margin};
`

const RightStats = styled.div`
    width: 50%;
    height: 350px;
    background: url(${startupObjImg});
    position: absolute;
    background-size: 40%;
    background-repeat: no-repeat;
    top: 40%;
`

const TextContainer = styled.div`
    position: absolute;
    top: 40%;
    left: 8%;
    transform: translateY(-50%);
    width: 30%;
    line-height: 1.5;

    * + * {
        text-align: right;
    }
`

const headingCss = css`
    ${Heading}{
        color: #C19A44;
    }
    ${TitleTag}{
        background-color: #C19A44;
    }
`

const Container = styled.div`
    font-size: 1.2rem;
    display: flex;

    ${Data} {
        color: #C19A44;
        > span {
            font-size: 1.7rem;
            padding-right: 12px;
            vertical-align: middle;
        }
    }

    @media only screen and ${breakpoints.pad} {
        margin-top: 2rem;
        flex-direction: column;

        ${Item} {
            margin: 0 0 2rem;
        }

        ${RightStats} {
            background: none;
            width: 100%;
            position: relative;
            height: auto;
        }

        ${TextContainer} {
            position: relative;
            width: 100%;
            top: 0;
            left: 0;
            transform: none;

            * + * {
                text-align: left;
            }
        }
    }
`

export default function StartupAchievements() {
    return (
        <MainContainer background={startupBg} heading='START-UP ACHIEVEMENTS' renderImage={() => renderImage()} css={headingCss}>
            <Container>
                <LeftSide>
                    <Item margin="3rem 2rem 3rem 6rem">
                        <div>Accumulated funds raised</div>
                        <Data><span>HK$</span>33,903 m</Data>
                    </Item>
                    <Item margin="3rem 0 1rem">
                        <div>Accelerator programmes admitted</div>
                        <Data>219</Data>
                    </Item>
                    <Item margin="5rem 2rem 3rem 6rem">
                        <div>Accumulated industry awards</div>
                        <Data>1,159</Data>
                    </Item>
                </LeftSide>
                <div>
                    <RightStats>
                        <TextContainer>
                            <div>Accumulated property rights attained</div>
                            <Data>441</Data>
                        </TextContainer>
                    </RightStats>
                </div>
            </Container>
        </MainContainer >
    )

    function renderImage() {
        return (
            <ImageGroup>
                <img src={startupImg} />
            </ImageGroup>
        )
    }

}