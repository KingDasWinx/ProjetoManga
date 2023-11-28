import { styled } from "styled-components";

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;

    .swiper{
        margin-top: 72px;
        width: 85%;
        height: 91%;
    }

    .swiper-slide{
        object-fit: cover;
    }

    .img{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 100%;
    }

    .fundo{
        background-size: cover;
        background-repeat: no-repeat;
        
        z-index: 10;

        filter: brightness(59%) blur(8px);
        position: absolute;

        background-position: center;
        position: absolute;
        left: -19px;
        right: -8px;
        top: 50%;

        width: 1192px;
        height: 1875px;
    }

    .swiper-pagination-bullet{
        padding: 7px;
        color: #DAE4FA;
        background-color: rgba(217, 217, 217, 1);
        opacity: 1;
    }

    .swiper-pagination-bullet-active{
        padding: 7px;
        background-color: #50FA7B;
    }

    .texto-carrossel{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;

        max-width: 59%;
        height: 100%;
        padding: 50px 0 50px 50px;

        position: absolute;

        z-index: 10;
    }

    .nome-anime{
        color:  #DAE4FA;

        font-size: 50px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        z-index: 10;
    }

    h1{
        color: #DAE4FA;

        font-family: Rubik;
        font-size: 50px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        z-index: 99999;

        max-width: 20ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    p{
        color: #DAE4FA;

        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        max-width: 35ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
        display: -webkit-box;    /* fallback */
        max-height: 137px;      /* fallback */
        -webkit-line-clamp: 4; /* number of lines to show */
        -webkit-box-orient: vertical
    }

    .generos{
        display: flex;
        align-items: flex-start;
        justify-content: center;

        gap: 10px;
    }

    h3{
        padding: 2px 22px;

        border-radius: 6px;

        color: #DAE4FA;
        background-color: #6E4DBE;
    }

    button{
        padding: 15px;
        
        border: none;
        border-radius: 5px;

        background-color: #FAFF00;

        cursor: pointer;
    }

    button p{
        color: #000;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .capa{
        width: 394.203px;
        height: 575px;
        transform: rotate(7deg);

        z-index: -10;
    }
`

export const Historico = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: center;

    .container-historico,
    .container-atualizacao,
    .container-populares,
    .container-recomendados{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        width: 93%;
        height: 100%;;
        border-radius: 10px;
        margin-top: 70px;
    
        background-color: #251E59;
    }

    .slug{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        padding: 0 20px 0 20px;
    }

    .historico,
    .atualizacao,
    .populares,
    .recomendados{
        padding: 2px 14px 2px 14px;

        border-radius: 0 0 5px 5px;

        color: #DAE4FA;
        background-color: #6E4DBE;
    }

    .ver-tudo,
    .semana{
        padding: 2px 14px 2px 14px;

        border: none;
        border-radius: 0 0 5px 5px;

        color: #DAE4FA;
        background-color: #6E4DBE;

        cursor: pointer;

        &:hover{
            color: #50FA7B;
        }
    }

    p{
        color: #DAE4FA;

        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .tipos{
        display: flex;
        width: 90%;
        padding: 8px 60px;
        justify-content: space-between;
        align-items: center;

        border-radius: 5px;
        background-color: #6E4DBE;
    }

    .container-cards{
        display: flex;
        align-items: flex-start;
        justify-content: center;

        width: 100%;
        padding: 35px;

       flex-wrap: wrap;

       gap: 45px;
    }

    .card-titulo{
        display: flex;
        align-items: flex-start;
        justify-content: last baseline;
        flex-direction: column;

    }
    
    .titulo{
        display: flex;
        align-items: flex-start;
        justify-content: last baseline;
        flex-direction: column;

        max-width: 100%;
    }

    .card-titulo p{
        color: #DAE4FA;

        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        max-width: 15ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
        display: -webkit-box;    /* fallback */
        max-height: 137px;      /* fallback */
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
    }

    .cards{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 158.667px;
        height: 238px;

        border-radius: 5px;
    }

    img{
        width: 100%;
        height: 100%;
    }
`