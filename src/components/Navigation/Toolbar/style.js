import styled from 'styled-components';

export const Header = styled.header`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #002b36;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
    color: white;

    nav{
        height: 100%;
    }

    @media(max-width: 499px){
        .desktopOnly{
            display: none;
        }
    }

`;
