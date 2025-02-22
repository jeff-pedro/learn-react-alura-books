import { livros } from "./dadosUltimosLancamentos";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || "#000"};
    font-size: ${props => props.tamanhoFonte || "18px"};
    text-align: ${props => props.alinhamento || "center"};
    margin: 0;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00" 
                tamanhoFonte="36px" 
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map(livro => (
                    <img src={livro.src} alt="um livro"/>
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>

    );
} 
export default UltimosLancamentos;