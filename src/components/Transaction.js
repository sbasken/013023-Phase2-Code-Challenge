import React from "react";

function Transaction({ transaction, onDeleteTransaction }) {
  const { id, date, description, category, amount } = transaction

  const handleDelete = () => {
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: "Delete"
    })
      .then(res => res.json())
      .then(() => onDeleteTransaction(id))
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td onClick={handleDelete}>🗑️</td>
    </tr>
  );
}

export default Transaction;
