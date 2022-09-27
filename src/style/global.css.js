import { createGlobalStyle } from 'styled-components'
import breakpoints from './breakpoints'


export default createGlobalStyle`
    :root {
        font-size: 16px;
        @media only screen and ${breakpoints.mobile} {
            font-size: 12px;
        }
    }


    body {
        margin:0;
        padding:0;
        font-family: "TruenoLt";

        #root {
            width:100%;
            height:100%;
        }

        .app {
            height:100%;
            width: 100%;
            overflow: hidden;
        }
    }
`