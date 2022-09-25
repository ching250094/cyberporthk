import styled from 'styled-components'

export const bg = {
    talents: "radial-gradient(circle, rgba(111,217,248,1) 27%, rgba(0,185,241,1) 81%, rgba(0,185,241,1) 100%)",
    industry: "radial-gradient(circle, rgba(133,193,255,1) 0%, rgba(75,163,255,1) 31%, rgba(0,91,185,1) 71%, rgba(0,85,173,1) 81%, rgba(0,85,173,1) 100%)",
    economies: "radial-gradient(circle, rgba(135,200,70,1) 27%, rgba(72,159,115,1) 81%, rgba(72,159,115,1) 100%)",
    marketing: "radial-gradient(circle, rgba(203,217,65,1) 27%, rgba(135,200,70,1) 81%, rgba(135,200,70,1) 100%)"
}


export const Circle = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 6px 6px 13px #C8C8C8;
    background-color: #999999;
    z-index: 10;
`

export const CircleText = styled.div`
    position: absolute;
    color: #FFF;
    font-size: 1.1rem;
    margin-left: ${p => p.marginLeft}px;
    z-index: 10;
`
