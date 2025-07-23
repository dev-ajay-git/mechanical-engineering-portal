import React, { useEffect, useState } from 'react';

const Benefits = () => {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/benefits')
      .then(res => res.json())
      .then(data => setBenefits(data));
  }, []);

  return (
    <div>
      <h2>Benefits of Mechanical Engineering</h2>
      <ul>
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Benefits;
