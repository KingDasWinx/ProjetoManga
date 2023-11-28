import { styled } from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 17.4px 45px;
    width: 100%;

    color: #fff;
    background-color: #1D193A;
    p{
        font-family: 'Rubik';
        font-weight: 500;
        font-size: 26px;
        
        cursor: pointer;

        &:hover{
            color: #50FA7B;
        }
    }

    .card-tipos{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        z-index: 9999999;
    }
    
    a{
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: 'Rubik';
        font-weight: 500;
        font-size: 26px;

        cursor: pointer;

        &:hover{
            color: #50FA7B;
        }
    }
        .arrow{
            transition: transform 0.7s ease;
        }

        .spin {
            transform: rotate(180deg);
        }

    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 35px;
    }

    .pesquisar-perfil{
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 30px;
    }

    .pesquisar{
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 7px 19px;
        gap: 4px;

        background-color: #6E4DBE;
        border-radius: 10px;

        font-size: 30px;
    }

    input{
        border: none;
        outline: none;

        background-color: transparent;

        font-size: 20px;

        &::placeholder{
            color: #fff;
        }
    }

    img{
        height: 60px;
        width: 60px;
        border-radius: 50%;

        background-color: grey;

        cursor: pointer;
    }

   

    @media screen and (max-width: 950px){
        p{
            font-size: 20px;
        }

        a{
            font-size: 20px;
        }

        .container{
            width: 100%;
            gap: 0;
            justify-content: space-around;
        }

        .pesquisar-perfil{
            gap: 15px;
        }

        .pesquisar{
            padding: 5px 7px;
        }
     
    }

    @media screen and  (max-width: 850px){
        padding: 10px 15px;
    }

    @media screen and  (max-width: 700px){
        .pesquisar{
            padding: 4px 5px;
        }

        input{
            font-size: 14px;
        }
    }

    @media screen and (max-width: 465px){
           padding: 10px 20px;
    }

    @media screen and (max-width: 420px){
           padding: 10px 10px;
    }

    @media screen and (max-width: 390px){
        padding: 10px 5px;

        .pesquisar-perfil{
            gap: 5px;
        }

        .pesquisar{
            padding: 7px 10px;
        }
    }

    ul{
        margin-top: 459px;
        position: absolute;
        width: 170px;

        gap: 20px;
        padding: 20px 25px;
        border-radius: 10px;

        z-index: 0;

        display: none;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        
        background-color: #251E59;
    }

    .aberto{
        animation: dropdown 0.5s ease-in-out;
        display: flex;
    }

    .fechado{
        animation: dropdown 0.5s ease-in-out;
        display: block;
    }

    li{
        font-family: 'Rubik';
        font-weight: 500;
        font-size: 22px;

        list-style: none;

        cursor: pointer;
    }

    @keyframes dropdown {
        0% {
            transform: translateY(-150%);
            opacity: 0;
        }

        20% {
            opacity: 0;
        }

        50% {
           
            opacity: 0;
        }

        75% {
            opacity: 0;
        }

        80% {
            opacity: 0.5;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
`
