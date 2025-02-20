import './estilo.css';
import logo from '../../imagens/logo.svg';

function Logo() {
    return (
        <div className='logo'>
        <img src={logo} alt='logo do app'></img>
        <p><strong>Alura</strong>Books</p>
        </div>
    );
}
export default Logo;
