
import {  useTransactions } from '../../hooks/useTransactions';
import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";



export function Summary(){
     const {transactions} = useTransactions()

    const sumary = transactions.reduce((acc, transactions) => {
        if(transactions.type === 'deposit'){
           acc.deposit  += transactions.amout 
           acc.total += transactions.amout 
        }else{
            acc.withdraws += transactions.amout
            acc.total -= transactions.amout 

        }

        return acc;

    }, {
        deposit: 0,
        withdraws: 0,
        total: 0
    })


    return(
       <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={entradasImg} alt="Entradas" />                   
               </header>
               <strong>
                   {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency:'BRL'
                    }).format(sumary.deposit)}
                </strong>
           </div>

           <div>
               <header>
                   <p>Saidas</p>
                   <img src={saidasImg} alt="Saídas" />                   
               </header>
               <strong>
                   -
                   {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency:'BRL'
                    }).format(sumary.withdraws)}
                </strong>
           </div>

           <div className='highlight-backgroud'>
               <header>
                   <p>Total</p>
                   <img src={totalImg} alt="Total" />                   
               </header>
               <strong>
                   {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency:'BRL'
                    }).format(sumary.total)}
                </strong>
           </div>

       </Container>
    );
}