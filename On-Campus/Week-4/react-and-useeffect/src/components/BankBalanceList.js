import React, { useState, useEffect } from "react"
import useIdleTimeout from "../effects/useIdleTimeout"
import useClickCounterInTitle from "../effects/useClickCounterInTitle"

const BankBalanceList = props => {
  const [bankBalances, setBankBalances] = useState([
    { name: "Checking Account", balance: 0 },
    { name: "Savings Account", balance: 0 }
  ])
  
  useIdleTimeout(10000, [])
  const [clickCount, setClickCount] = useClickCounterInTitle()

  const updateAccounts = event => {
    event.preventDefault()
    setBankBalances([
      { name: "Checking Account", balance: Math.random() * 60000 },
      { name: "Savings Account", balance: Math.random() * 400000 }
    ])
  }

  const bankAccountListItems = bankBalances.map(account => {
    return (
      <li 
        onClick={() => {
          setClickCount(clickCount + 1)
        }}
        key={account.name}>
        <strong>{account.name}</strong> - ${account.balance.toFixed(2)}
      </li>
    )
  })

  return (
    <div className="bank-accounts">
      <p>
        <a href="#" onClick={updateAccounts}>
          Refresh
        </a>
      </p>
      <ul>{bankAccountListItems}</ul>
    </div>
  )
}

export default BankBalanceList
