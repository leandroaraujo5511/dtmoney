import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/fechar.svg'
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'

import { Content,TransitionTypeContainer,RadioBox } from './styles';


interface NewTransactionModalProps  {
    isOpen:boolean,
    onRequestClose: () => void
}

export function NewTransactionModal( {isOpen,onRequestClose } :NewTransactionModalProps ){
    
    const {createTransanction} = useTransactions()

    const [type, setType] =  useState('deposit');
    const [title, setTitle] =  useState('');
    const [amout, setAmout] =  useState(0);
    const [category, setCategory] =  useState('');

   

    
    async function handleCreateNewTransiction(event: FormEvent){
        event.preventDefault()

        await createTransanction({
            title,
            amout, 
            category,
            type
        })

        setType('deposit')
        setTitle('')
        setAmout(0)
        setCategory('')
        onRequestClose();


    }
    
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
          <button 
            type='button' 
            onClick={onRequestClose} 
            className='react-modal-close'
          >
              <img src={closeImg} alt="Fechar Modal" />
          </button>
        <Content onSubmit={handleCreateNewTransiction}>
            <h2>Cadastra Transação</h2>

            <input 
                placeholder='Título'
                value={title}
                onChange={event => {setTitle(event.target.value)}}
            />
            <input 
                type="number" 
                placeholder='Valor'
                value={amout}
                onChange={event => {setAmout(Number(event.target.value))}}
            />

            <TransitionTypeContainer>
                <RadioBox
                    type='button'
                    onClick={() => {setType('deposit')}}
                    isActive={type === 'deposit'}
                    ActiveColor='green'
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox
                    type='button'
                    onClick={() => {setType('withdraw')}}
                    isActive={type === 'withdraw'}
                    ActiveColor='red'
                >
                    <img src={outcomeImg} alt="Saida" />
                    <span>Saída</span>
                </RadioBox>
                
            </TransitionTypeContainer>


            <input 
                placeholder='Categoria' 
                value={category}
                onChange={event => {setCategory(event.target.value)}}
                
            />
            <button type="submit">
                Cadastrar
            </button>
        </Content>        
      </Modal>
    );
}