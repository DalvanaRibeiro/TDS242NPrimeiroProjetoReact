
// Importando o componente Button
import Button from "./Button";

import './CardImagem.css'

// Criando o componente CardImagem
function CardImagem(props){
    return(
        <div className="card">
            <img src={props.imagem} alt={props.alt} className="card-img" />
            {/** Conteúdo do card */}
            <div className="card-content">
                <h2 className="card-title"> {props.titulo}</h2>
                {/** Descrição que vem por props tmbm */}
                <p className="card-description">
                    {props.descricao}
                </p>
                {/** Botão separado em outro componente  */}
                <Button texto={props.textoBotao} />
            </div>
        </div>
    )
}
export default CardImagem