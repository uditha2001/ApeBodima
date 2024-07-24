import React, { useState } from 'react';

const App = () => {
  const [allFeatures, setAllFeatures] = useState([
    { name: 'Beds', count: 4 },
    { name: 'Chairs', count: 4 },
    { name: 'Tables', count: 4 },
    { name: 'Nets', count: 4 },
  ]);

  const [availableFeatures, setAvailableFeatures] = useState([]);

  const addFeature = (feature) => {
    setAvailableFeatures([...availableFeatures, feature]);
  };

  const removeFeature = (index) => {
    const newFeatures = [...availableFeatures];
    newFeatures.splice(index, 1);
    setAvailableFeatures(newFeatures);
  };

  const updateFeatureCount = (index, count) => {
    const newFeatures = [...availableFeatures];
    newFeatures[index].count = count;
    setAvailableFeatures(newFeatures);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h2>Available Features</h2>
        {availableFeatures.map((feature, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span>{feature.name}</span>
            <input
              type="number"
              value={feature.count}
              onChange={(e) => updateFeatureCount(index, parseInt(e.target.value))}
              style={{ marginLeft: '10px', marginRight: '10px' }}
            />
            <button onClick={() => removeFeature(index)}>Remove</button>
          </div>
        ))}
      </div>
      <div>
        <h2>All Features</h2>
        {allFeatures.map((feature, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span>{feature.name}</span>
            <button onClick={() => addFeature(feature)} style={{ marginLeft: '10px' }}>
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
