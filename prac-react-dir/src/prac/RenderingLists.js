import React from 'react';

const RenderingLists = () => {
    
    const items = [
        {id: 1, name: "Item One"},
        {id: 2, name: "Item Two"},
        {id: 3, name: "Item Three"}
    ]

    const script = `
    const items = [
        {id: 1, name: "Item One"},
        {id: 2, name: "Item Two"},
        {id: 3, name: "Item Three"}
    ]
  return (
    <div>
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    </div>
  );
    `
  return (
    <div>
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>

    <h1>Rendering List</h1>
    <p>render and display list and key.</p>
    <code>{script}</code>
    </div>
  );
};

export default RenderingLists;
