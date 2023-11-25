import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Discovery from "./pages/Discovery";
import LastUpdate from "./pages/LastUpdate";
import MangaDetails from "./pages/MangaDetails";
import MangaViewer from "./pages/MangaViewer";
import Search from "./pages/Search";
import TopRated from "./pages/TopRated";
import Comic from "./pages/BookType/Comic";
import Doujinshi from "./pages/BookType/Doujinshi";
import LightNovel from "./pages/BookType/LightNovel";
import Manga from "./pages/BookType/Manga";
import Manhua from "./pages/BookType/Manhua";
import Manhwa from "./pages/BookType/Manhwa";
import OneShot from "./pages/BookType/OneShot";


const Rotas = () => {
  return(
    <Routes>
        { /* Pagina inicial e suas rotas */ }
        <Route path="/" element={<Home/>} />
        <Route path="/descobrir" element={<Discovery/>} />
        <Route path="/atualizacoes" element={<LastUpdate/>} />
        <Route path="/busca" element={<Search/>} />
        <Route path="/em-alta" element={<TopRated/>} />

        { /* Detalhes e capitulos */ }
        <Route path="/manga/:MangaSlug" element={<MangaDetails/>} />
        <Route path="/ler-manga/:CapituloSlug" element={<MangaViewer/>} />
        
        { /* Rotas tipos mangas */ }
        <Route path="/comic" element={<Comic/>} />
        <Route path="/doujinshi" element={<Doujinshi/>} />
        <Route path="/light-novel" element={<LightNovel/>} />
        <Route path="/manga" element={<Manga/>} />
        <Route path="/manhua" element={<Manhua/>} />
        <Route path="/manhwa" element={<Manhwa/>} />
        <Route path="/one-shot" element={<OneShot/>} />


    </Routes>
  )
};

export default Rotas;