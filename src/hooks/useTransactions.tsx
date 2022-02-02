import { createContext, useEffect, useState , ReactNode, useContext} from "react";
import { api } from "../services/api";


interface TransictionType{    
    id: number,
    title: string,
    type: string,
    category:string,
    amout:number,
    createdAt: string,
       
}

type  TransactionsImput =  Omit<TransictionType, 'id'| 'createdAt'>

interface TransactionsProviderProps {
    children: ReactNode;
}




interface TrasactionsContextData {
    transactions: TransictionType[]
    createTransanction: (transactions:TransactionsImput ) => Promise<void>;
}
const TransactionsContext  =  createContext<TrasactionsContextData>(
    {} as TrasactionsContextData
);



export function TransactionsProvider({children} : TransactionsProviderProps){
    
    const [transactions, setTransactions] =  useState<TransictionType[]>([])
    
    useEffect(()=>{
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    },[])


    async function createTransanction(transactionsImput :TransactionsImput){
    
        const response = await api.post('/transactions', {
            ...transactionsImput,
            createdAt: new Date()
        })

        const { transaction } = response.data;
        console.log({transaction})
        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransanction}}>  
            {children}
        </TransactionsContext.Provider>
    );
}



export function useTransactions(){
    const context =  useContext(TransactionsContext)

    return context;
}