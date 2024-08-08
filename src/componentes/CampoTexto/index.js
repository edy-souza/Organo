// FUNÇAO QUE IRÁ EXPORTAR FORMULÁRIO PARA O APP.JS

import './CampoTexto.css'        //Importação de estilos do CSS

const CampoTexto = (props) => {

     const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
      
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto