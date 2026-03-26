// Componente de cabeçalho
// Ele recebe título e subtítulo por props
import './Header.css'

function Header({title, subtitle}){
    return(
        <header className="app-header">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    )
}
export default Header