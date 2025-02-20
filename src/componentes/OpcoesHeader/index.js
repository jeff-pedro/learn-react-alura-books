import './estilo.css';

const textoOpcoes = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
        { textoOpcoes.map(texto => (
          <li className='opcao'>{texto}</li>
        ) ) }
      </ul>
    );
}
export default OpcoesHeader;
