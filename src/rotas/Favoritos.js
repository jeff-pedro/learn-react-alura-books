import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFavoritos } from "../servicos/favoritos";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 100%;
        color: #FFF;
    }
    img {
        width: 200px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    width: 100%;
    text-align: center;
    padding-top: 35px;
`

function Favoritos() {
    const [favoritos, setFavoritos] = useState([]);

    async function fetchFavoritos() {
        const favoritosDaAPI = await getFavoritos();
        console.log(favoritosDaAPI);
        
        setFavoritos(favoritosDaAPI);
    }

    useEffect(() => {
        fetchFavoritos();
    }, [])
    
    console.log(favoritos);
    return (
        <AppContainer>
            <div>
                <Titulo>Aqui estão seus livros favoritos:</Titulo>
                <ResultadoContainer>
                    {favoritos.length !== 0 ? favoritos.map(favorito => (
                        <Resultado>
                            <p>{favorito.nome}</p>
                            <img src={favorito.src} alt="um livro"/>
                        </Resultado>
                        )) : null
                    }
                </ResultadoContainer>
            </div>
        </AppContainer>
    ); 
}
export default Favoritos;
