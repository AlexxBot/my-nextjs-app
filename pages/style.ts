import css from 'styled-jsx/css'
import { colors } from '../styles/theme'

export default css`

section{
  display: grid;
  place-items: center;
  place-content: center;
  height: 100%;
  
}
img{
  width: auto;
  height: 120px;
  margin-bottom: 50px;
  object-fit:cover;
}

h2 {
  color: ${colors.secondary};
  font-weight: 800;

}
h3{
  color: ${colors.primary};
}

input {
    margin-bottom: 10px;
    padding : 5px;
    border-radius: 10px; 
}
`