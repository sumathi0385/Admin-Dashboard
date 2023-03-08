import * as React from 'react';
import { AccountingCard } from "./AccountingCard";

export function AccountingCardList() {
  const accountData = [
    {
      title: "Total Income",
      value: "$579,000",
      subtitle: "Saved 25%",
      backgroundImage: "radial-gradient(red, orange, yellow);"
    },
    {
      title: "Total Expenses",
      value: "$79,000",
      subtitle: "Saved 25%",
      backgroundImage: "radial-gradient(yellow, blue, purple)"
    },
    {
      title: "Cash on Hand",
      value: "$92,000",
      subtitle: "Saved 25%",
      backgroundImage: "radial-gradient(pink, white , green )"
    },
    {
      title: "Net Profit margin",
      value: "$149,000",
      subtitle: "Saved 55%",
      backgroundImage: "radial-gradient(green, grey, red)"
    }
  ];
  return (
    <div className="accountinglist-container">
      {accountData.map((acdata) => <AccountingCard accountsvalue={acdata} />)}




    </div>
  );
}
