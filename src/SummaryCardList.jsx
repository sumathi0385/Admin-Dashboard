import * as React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CommentIcon from '@mui/icons-material/Comment';
import { SummaryCard } from "./SummaryCard";

export function SummaryCardList() {

  const summaryList = [{
    title: "EARNING'S (MONTHLY)",
    value: "$40,000",
    icon: <CalendarMonthIcon />,
    borderLeft: "6px solid blue",
    //backgroundColor:"crimson" ,
    backgroundImage: "linear-gradient(to bottom right, red, yellow)"
  },
  {
    title: "EARNING'S (YEARLY)",
    value: "$215,000",
    icon: <AttachMoneyIcon />,
    borderLeft: "6px solid green",
    //backgroundColor:"orange" ,
    backgroundImage: "linear-gradient(to bottom right, cadetblue, orange)"
  },
  {
    title: "TASKS",
    value: "50%",
    icon: <AssignmentIcon />,
    borderLeft: "6px solid cadetblue",
    //backgroundColor:"purple",
    backgroundImage: "linear-gradient(to bottom right, purple, pink)"
  },
  {
    title: "PENDING REQUEST",
    value: "18",
    icon: <CommentIcon />,
    borderLeft: "6px solid orange",
    //backgroundColor:"darkgreen",
    backgroundImage: "linear-gradient(to bottom right, blue, pink)"
  }
  ];

  return (
    <div className="summary-cardlist">
      {summaryList.map((summary) => <SummaryCard summary={summary} />)}


    </div>
  );
}
