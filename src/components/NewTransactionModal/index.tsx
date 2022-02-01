import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Content,TransitionTypeContainer,RadioBox } from './styles';
import closeImg from '../../assets/fechar.svg'
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import { api } from '../../services/api';

interface NewTransactionModalProps  {
    isOpen:boolean,
    onRequestClose: () => void
}

export function NewTransactionModal( {isOpen,onRequestClose } :NewTransactionModalProps ){
    
    const [type, setType] =  useState('deposit');
    const [title, setTitle] =  useState('');
    const [value, setValue] =  useState(0);
    const [category, setCategory] =  useState('');

    

    
    function handleCreateNewTransiction(event: FormEvent){
        event.preventDefault()

        const data = {
            title, 
            value, 
            type, 
            category
        }
        api.post('/transactions', data)
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
                value={value}
                onChange={event => {setValue(Number(event.target.value))}}
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