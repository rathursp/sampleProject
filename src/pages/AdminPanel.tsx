// src/pages/AdminPanel.tsx
import React, { useState } from 'react';
import inventoryData from '../data/inventory.json';
import pricesData from '../data/prices.json';

const AdminPanel = () => {
  const [inventory, setInventory] = useState(inventoryData);
  const [prices, setPrices] = useState(pricesData);

  const handleInventoryChange = (item: string, value: number) => {
    setInventory(prev => ({
      ...prev,
      [item]: { ...prev[item], stock: value }
    }));
  };

  const handlePriceChange = (item: string, value: number) => {
    setPrices(prev => ({
      ...prev,
      [item]: value
    }));
  };

  const handleSave = () => {
    console.log('Updated Inventory:', inventory);
    console.log('Updated Prices:', prices);
    // You can add logic here to send updates to a backend or localStorage
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🛒 Admin Panel</h2>
      {Object.keys(inventory).map(item => (
        <div key={item} style={{ marginBottom: '1rem' }}>
          <h4>{item}</h4>
          <label>
            Stock:
            <input
              type="number"
              value={inventory[item].stock}
              onChange={e => handleInventoryChange(item, Number(e.target.value))}
              style={{ marginLeft: '1rem' }}
            />
          </label>
          <label style={{ marginLeft: '2rem' }}>
            Price:
            <input
              type="number"
              value={prices[item] || 0}
              onChange={e => handlePriceChange(item, Number(e.target.value))}
              style={{ marginLeft: '1rem' }}
            />
          </label>
        </div>
      ))}
      <button onClick={handleSave}>💾 Save Changes</button>
    </div>
  );
};

export default AdminPanel;
