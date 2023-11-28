import React, { useEffect, useState } from 'react';

import Header from "../components/Header";
import { Historico, Main } from "../styles/Styled-Home";

import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay"

function Home() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://marginally-prime-primate.ngrok-free.app/home');

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const jsonData = await response.json();
                setData(jsonData);
                const limiteDeGeneros = 4;

                const mangasComGenerosLimitados = jsonData.mangas.map((manga) => ({
                    ...manga,
                    generos: manga.generos.slice(0, limiteDeGeneros)
                }));

                const mangasComMangasLimitados = jsonData.mangasAtualizacoes.slice(0, 12);
                setData((prevData) => ({
                    ...prevData,
                    mangas: mangasComGenerosLimitados,
                    mangasAtualizacoes: mangasComMangasLimitados,
                }));

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    console.log(data);

    return (
        <>
            {loading ? (
                <div class="loading"></div>
            ) : (
                <>
                    <Header />

                    <Main>
                        <Swiper
                            modules={[Pagination, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay={{
                                delay: 5000
                            }}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {data?.mangas?.map((manga) => (
                                <SwiperSlide className='SwiperSlide' key={manga.startReadingUrl}>
                                    <div className="img">
                                        <div className="texto-carrossel">
                                            <h1 className='nome-anime'>{manga.nome}</h1>
                                            <p>{manga.sinopse}</p>
                                            <div className="generos">
                                                {manga.generos.map((genero, index) => (
                                                    <h3 key={index}>{genero}</h3>
                                                ))}
                                            </div>
                                            <button><p>Ler agora</p></button>
                                        </div>
                                        <div className="fundo" style={{ backgroundImage: `url(${manga.capa})`, lightgray: 50 }}></div>
                                        <img className='capa' src={manga.capa} alt={manga.nome} />
                                    </div>
                                </SwiperSlide>
                            ))}
                            ...
                        </Swiper>
                    </Main>

                    <Historico>
                        <div className="container-historico">
                            <div className="slug">
                                <div className="historico">
                                    <p>Historico</p>
                                </div>
                                <button className="ver-tudo">
                                    <p>Ver tudo</p>
                                </button>
                            </div>
                            <div className="cards">
                                <img src="" alt="" srcset="" />
                            </div>
                        </div>

                        <div className="container-atualizacao">
                            <div className="slug">
                                <div className="atualizacao">
                                    <p>Ultimas atualizações</p>
                                </div>
                                <button className="ver-tudo">
                                    <p>Ver tudo</p>
                                </button>
                            </div>
                            <div className="container-cards">
                                {data?.mangasAtualizacoes?.map((manga) => (
                                    <div className='card-titulo'>
                                        <div className="cards">
                                            <img src={manga.imgSrc} alt="" />
                                        </div>
                                        <div className="titulo">
                                            <p>{manga.titulo}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="container-populares">
                            <div className="slug">
                                <div className="populares">
                                    <p>Populares</p>
                                </div>
                                <button className="semana">
                                    <p>Semana</p>
                                </button>
                            </div>
                            <div className="container-cards">
                                {data?.mangasEmAlta?.map((manga) => (
                                    <div className="cards">
                                        <img src={manga.imgSrc} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="container-recomendados">
                            <div className="slug">
                                <div className="recomendados">
                                    <p>Recomendados</p>
                                </div>
                            </div>
                            <div className="tipos">
                                {data?.mangasRecomendados?.map((manga) => (
                                    <p>{manga.genero}</p>
                                ))}
                            </div>
                            <div className="container-cards">
                                {data?.mangasRecomendados?.map((mangas) => (
                                    <div className="cards">
                                        <img src={mangas.imgSrc} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Historico>
                </>
            )}
        </>
    )
}

export default Home;