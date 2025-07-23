import React, { useEffect, useState } from 'react';

const FutureScope = () => {
  const [scope, setScope] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5002/future')
      .then(res => res.json())
      .then(data => setScope(data));
  }, []);

  return (
    <div>
      <h2>Future Scope of Mechanical Engineering</h2>
      <ul>
        {scope.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FutureScope;
