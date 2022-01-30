import Modal from 'react-modal';
import { Content } from './styles';

interface NewTransactionModalProps  {
    isOpen:boolean,
    onRequestClose: () => void
}

export function NewTransactionModal( {isOpen,onRequestClose } :NewTransactionModalProps ){
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >

        <Content>
            <h2>Cadastra Transação</h2>

            <input 
                placeholder='Título'
            />
            <input 
                type="number" 
                placeholder='Valor'
            />
            <input 
                placeholder='Categoria' 
            />
            <button type="submit">
                Cadastrar
            </button>
        </Content>


        
      </Modal>
    );
}