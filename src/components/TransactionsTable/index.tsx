import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de software</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Entrada</td>
                        <td>01/05/2021</td>
                    </tr>
                   
                    <tr>
                        <td>Pagamento de aluguel</td>
                        <td className="withdraw">-R$ 1.000</td>
                        <td>Saida</td>
                        <td>21/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );

}