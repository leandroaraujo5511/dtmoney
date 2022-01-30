import { useState } from 'react'
import LogoImg from '../../assets/logo.svg'
import { Container,Content } from './styles'
import Modal from 'react-modal'


interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header( {onOpenNewTransactionModal} : HeaderProps){
    
  
    
    
    return(
        <Container>
            <Content>
                <img src={LogoImg} alt="dt money" /> 
                <button type='button' onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>


                
            </Content>           
        </Container>
    )
}