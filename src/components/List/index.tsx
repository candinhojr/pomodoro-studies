import React from "react";

function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Node",
      time: "01:30:00",
    },
  ];

  return (
    <div>
      {tasks.map((item, index) => (
        <div key={index}>
          <h3>{item.task}</h3>
          <p>{item.time}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
