import styled from "styled-components"

export const StyledCard = styled.div`
    padding: 2em;
    box-shadow: -5px 5px 20px ${(props) => props.theme.grey},
    5px 5px 20px ${(props) => props.theme.grey};
    border-radius: 8px;
    background: ${(props) => props.theme.white};
`

export const StyledCardGrid = styled.div`
        padding: 4em;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
        grid-template-rows: auto;
        gap: 2rem;
`