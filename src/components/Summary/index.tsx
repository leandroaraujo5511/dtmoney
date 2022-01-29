import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";




export function Summary(){
    return(
       <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={entradasImg} alt="Entradas" />                   
               </header>
               <strong>1000,00R$</strong>
           </div>

           <div>
               <header>
                   <p>Saidas</p>
                   <img src={saidasImg} alt="Saídas" />                   
               </header>
               <strong>-500,00R$</strong>
           </div>

           <div className='highlight-backgroud'>
               <header>
                   <p>Total</p>
                   <img src={totalImg} alt="Total" />                   
               </header>
               <strong>500,00R$</strong>
           </div>

       </Container>
    );
}