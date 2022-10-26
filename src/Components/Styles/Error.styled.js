import styled from "styled-components"


export const ErrorCss = styled.div`
padding: 24px;

h1 {
    color: red;
    font-size: 100px;
}
p {
    font-size: 30px;
}
@media screen and (max-width:768px) {
    h1 {
        flex-direction: column;
        font-size: 60px;
    }
}
`