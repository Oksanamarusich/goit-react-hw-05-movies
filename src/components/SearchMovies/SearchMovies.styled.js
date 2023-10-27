import styled from 'styled-components';

export const SearchContainer = styled.div`
padding: 80px;
`
export const SearchInput = styled.input`
width: 50%;
    height: 46px;
    line-height: 46px;
    font-size: 1.1em;
    color: rgba(0,0,0,.5);
    border:1px solid ${props => props.theme.colors.blue};
    border-radius: 30px;
    padding: 10px 20px;
    outline: 0;

`;

export const Button = styled.button`
 height: 46px;
    line-height: 46px;
    font-size: 1.1em;
    background-color: ${props=>props.theme.colors.blue};
`
