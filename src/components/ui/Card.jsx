// children representa o conteúdo colocado dentro do card
import './Card.css'
function Card({ children}){
    return <div className="card">{children}</div>
}


export default Card