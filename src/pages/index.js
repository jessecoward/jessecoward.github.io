import React, { useState } from 'react';

const gpaMap = {
  A: 4.0,
  
  B: 3.0,

  C: 2.0,
 
  D: 1.0,
  F: 0.0
};

const calculateGPA = (grades) => {
  if (!grades) {
    return 0;
  }

  let total = 0;
  let totalCredits = 0;

  grades.split('').forEach(letterGrade => {
    const gpa = gpaMap[letterGrade.toUpperCase()];
    if (gpa === undefined) {
      return;
    }

    total += gpa;
    totalCredits++;
  });

  return total / totalCredits;
};

const HomePage = () => {
  const [grades, setGrades] = useState('');
  const [gpa, setGPA] = useState(0);

  const handleChange = (e) => {
    setGrades(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGPA(calculateGPA(grades));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="grades">Grades:</label>
          <input type="text" id="grades" onChange={handleChange} />
        </div>
        <button type="submit">Calculate GPA</button>
      </form>
      <p>GPA: {gpa}</p>
    </div>
  );
};

export default HomePage;
