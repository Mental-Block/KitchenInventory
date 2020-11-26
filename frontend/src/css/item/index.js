import styled from "styled-components"

export const StyledItem = styled.div`
    padding: 2em;
    box-shadow: -5px 5px 20px ${(props) => props.theme.grey},
    5px 5px 20px ${(props) => props.theme.grey};
    border-radius: 8px;
    background: ${(props) => props.theme.snow};
    width: 320px;
    height: 472.63px;
`

export const StyledItemImg = styled.img`
    width: auto;
    max-width: 100%;
    height: 150px;
    margin: 0 auto;
`;

export const StyledItemGrid = styled.div`
        padding: 8em 4em;
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(auto-fill, minmax(auto, 320px));
        grid-template-rows: auto;
        gap: 2rem;
`