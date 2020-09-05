import { createGlobalStyle } from 'styled-components';

import PokemonSolid from '../assets/fonts/PokemonSolid.ttf';


export default createGlobalStyle`
    @font-face {
        font-family: 'PokemonSolid';
        src: local('PokemonSolid'),
        url(${PokemonSolid}) format('truetype');
        font-weight: 300;
        font-style: normal;
        
    }

    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }

    body{
        background-color: #ededed   ;
    }
`;