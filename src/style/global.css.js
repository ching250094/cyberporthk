import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    body {
        margin:0;
        padding:0;
        font-size: 16px;

        #root {
            width:100%;
            height:100vh;
        }

        .app {
            height:100%;
        }
    }
`