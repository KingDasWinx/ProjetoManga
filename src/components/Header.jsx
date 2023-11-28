import { HeaderStyled } from "../styles/Styled-Header";
import imagem from "../assets/Perfil-Negrales.jpg"
import { useState } from "react";

function Header() {

    const [conta, setConta] = useState(false)

    function rotateIcon() {
        const icon = document.getElementById('chevron-icon');
        icon.classList.toggle('spin');
    }

    function DropDown() {
        const drop = document.getElementById("drop")
        drop.classList.toggle("aberto")
        rotateIcon();
    }

    return (
        <>
            {conta ? (
                <div className="oi">oii</div>
            ) : (
                <HeaderStyled>
                    <p>Murasaki</p>
                    <div className="container">
                        <a href>Mangas</a>
                        <div className="card-tipos">
                            <a id="click" onClick={DropDown} href>Tipos<ion-icon id="chevron-icon" class="arrow" name="chevron-down"></ion-icon></a>
                            <ul id="drop">
                                <li>Mangá</li>
                                <li>One-Shot</li>
                                <li>Doujishi</li>
                                <li>Light Novel</li>
                                <li>Manhwa</li>
                                <li>Manhua</li>
                                <li>Comic</li>
                            </ul>
                        </div>
                        <a href>Gêneros</a>
                    </div>
                    <div className="pesquisar-perfil">
                        <div className="pesquisar">
                            <ion-icon name="search"></ion-icon>
                            <input type="text" placeholder="Pesquisa..." />
                        </div>
                        <img src={imagem} alt="fds" />
                    </div>
                </HeaderStyled>
            )}
        </>
    )
}

export default Header;