import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [ transactions, setTransactions ] = useState([])
  const [ searchWord, setSearchWord ] = useState("")

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id)
    setTransactions(updatedTransactions)
  }

  const filterTransactions = (keyword) => {
    setSearchWord(keyword)
  }

  const filteredTransactions = transactions.filter(transaction => (searchWord === "" ) ? transactions : transaction.description.toLowerCase().includes(searchWord.toLowerCase()))

  const addTransaction = (newTransaction) => {
    const updatedTransactions = [...transactions, newTransaction]
    setTransactions(updatedTransactions)
  }


  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(res => res.json())
      .then(setTransactions)
  }, [])

  return (
    <div>
      <Search onFilterTransactions={filterTransactions}/>
      <AddTransactionForm onAddTransaction={addTransaction}/>
      <TransactionsList transactions={filteredTransactions} onDeleteTransaction={deleteTransaction}/>
    </div>
  );
}

export default AccountContainer;
