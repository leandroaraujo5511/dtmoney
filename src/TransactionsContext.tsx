import { createContext, useEffect, useState , ReactNode} from "react";
import { api } from "./services/api";


interface TransictionType{    
    id: number,
    title: string,
    type: string,
    category:string,
    amout:number,
    createdAt: string,
       
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext  =  createContext<TransictionType[]>([]);



export function TransactionsProvider({children} : TransactionsProviderProps){
    
    const [transactions, setTransactions] =  useState<TransictionType[]>([])
    
    useEffect(()=>{
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    },[])

    return (
        <TransactionsContext.Provider value={transactions}>  
            {children}
        </TransactionsContext.Provider>
    )
}