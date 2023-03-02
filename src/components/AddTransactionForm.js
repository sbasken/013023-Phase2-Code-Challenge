import React, { useState } from "react";

function AddTransactionForm({ onAddTransaction }) {
  const [ formData, setFormData ] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0
  })

  const { date, description, category, amount } = formData

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newTransaction => onAddTransaction(newTransaction))
  }

  const handleInputChange = (e) => {
    const key = e.target.name
    const value = (e.target.name === 'amount') ? parseFloat(e.target.value) : e.target.value
    setFormData({...formData,
      [key]: value
    })
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={(e)=>handleSubmit(e)}>
        <div className="inline fields">
          <input 
            type="date" 
            name="date" 
            value={date} 
            onChange={handleInputChange}
          />
          <input 
            type="text" 
            name="description" 
            value={description} 
            onChange={handleInputChange} 
            placeholder="Description" 
          />
          <input 
            type="text" 
            name="category" 
            value={category} 
            onChange={handleInputChange} 
            placeholder="Category" 
          />
          <input 
            type="number" 
            name="amount" 
            value={amount} 
            onChange={handleInputChange} 
            placeholder="Amount" 
            step="0.01" 
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
