// FUNÇÃO QUE IRÁ EXPORTAR O FORMULÁRIO PARA O APP.JS

import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'    //Importação de estilos do CSS para Formulário

const Formulario = (props) => { 

    const [nome , setNome] = useState ('')
    const [geração , setGeracao] = useState ('')
    const [imagem , setImagem] = useState ('')
    const [time , setTime] = useState ('')
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            geração,
            imagem,
            time
        })
        setNome ('')      //Essa ação vai limpar o formulário assim que clicar no botão CRIAR CARD
        setGeracao ('')  //Essa ação vai limpar o formulário assim que clicar no botão CRIAR CARD
        setImagem ('')   //Essa ação vai limpar o formulário assim que clicar no botão CRIAR CARD
        setTime ('')    //Essa ação vai limpar o formulário assim que clicar no botão CRIAR CARD
    }
    return (
        <section className='formulario'>     
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Pokémon</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do pokémon"
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />   
                <CampoTexto 
                    obrigatorio={true} 
                    label="Geração" 
                    placeholder="Digite a geração do pokémon"
                    valor = {geração}
                    aoAlterado = {valor => setGeracao(valor)}
                />   
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                /> 
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Time' 
                    itens={props.times}
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)}

                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario