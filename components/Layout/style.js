import css from 'styled-jsx/css'
import { colors, fonts } from '../../styles/theme'
import { addOpacityToColor } from '../../styles/utils'

const backGroundColor = addOpacityToColor(colors.primary, 0.1)

export const globalStyles = css.global`
    html,
    body {
        background-color: ${backGroundColor};
        
        padding: 0px;
        margin: 0px;
        font-family: ${fonts.base};
        
    }

    *{
        box-sizing: border-box
    }
    `
export default css`
    div {
        display: grid;
        place-items: center;
        height: 100vh
    }

    main {
        background: #fff;
        border-radius : 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, .3);
        width: 400px;
        height: 600px;


    }

`