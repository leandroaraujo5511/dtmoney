import Modal from 'react-modal'

import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionOpem, setIsNewTransactionOpem ] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionOpem(true)
  }
  function handleCloseNewTransactionModal(){
      setIsNewTransactionOpem(false)
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard/>

      <NewTransactionModal 
        isOpen={isNewTransactionOpem}
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle/>
    </>
  );
}

