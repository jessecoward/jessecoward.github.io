import React, { useState } from 'react';

const gpaMap = {
  A: 4.0,
  B: 3.0,
  C: 2.0,
  D: 1.0,
  F: 0.0
};

const calculateGPA = (grades) => {
  if (grades.length === 0) {
    return 0;
  }

  let total = 0;
  let totalCredits = 0;

  grades.forEach(grade => {
    const [letterGrade, creditHoursString] = grade && grade.split(" ");
    if (!letterGrade || !creditHoursString) {
      return;
    }

    const creditHours = parseInt(creditHoursString, 10);
    if (isNaN(creditHours)) {
      return;
    }

    const gpa = gpaMap[letterGrade.toUpperCase()];
    if (gpa === undefined) {
      return;
    }

    total += gpa * creditHours;
    totalCredits += creditHours;
  });

  return total / totalCredits;
};

const HomePage = () => {
  const [grades, setGrades] = useState([]);
  const [gpa, setGPA] = useState(0);
  const [major, setMajor] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [semesters, setSemesters] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState({
    name: "",
    code: "",
    group: "",
    grade: ""
  });

  const handleMajorChange = (e) => {
    setMajor(e.target.value);
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setNewSubject({
      ...newSubject,
      [e.target.name]: e.target.value
    });
  };

  const handleAddSemester = (e) => {
    e.preventDefault();
    setSemesters([...semesters, selectedSemester]);
    setSelectedSemester("");
  };

  const handleAddSubject = (e) => {
    e.preventDefault();
    setSubjects([...subjects, newSubject]);
    setNewSubject({ name: "", code: "", group: "", grade: "" });
  };

  return (
    <div>
      <h1>GPA Calculator</h1>
      <form>
        <label htmlFor="major">Choose Major: </label>
        <select id="major" value={major} onChange={handleMajorChange}>
          <option value="">Select</option>
          <option value="IT">IT</option>
          <option value="CS">CS</option>
        </select>
        <br />
        <br />
        <label htmlFor="semesterName">Create Semester: </label>
        <input type="text" id="semesterName" value={semesterName} onChange={handleSemesterNameChange} />
        <button type="button" onClick={handleAddSemester}>Add</button>
        <br />
        <br />
        <label>Selected Semester: </label>
        <select value={selectedSemester} onChange={handleSemesterChange}>
          <option value="">Select</option>
          {semesters.map(semester => (
            <option key={semester.name} value={semester.name}>{semester.name}</option>
          ))}
        </select>
        <br />
        <br />
        {selectedSemester && (
          <div>
            <label htmlFor="subjectName">Add Subject: </label>
            <input type="text" id="subjectName" value={subjectName} onChange={handleSubjectNameChange} />
            <input type="text" value={subjectCode} onChange={handleSubjectCodeChange} />
            <input type="text" value={groupName} onChange={handleGroupNameChange} />
            <input type="text" value={subjectGrade} onChange={handleSubjectGradeChange} />
            <button type="button" onClick={handleAddSubject}>Add</button>
            <br />
            <br />
            <table>
              <thead>
                <tr>
                  <th>Subject Name</th>
                  <th>Subject Code</th>
                  <th>Group Name</th>
                  <th>Subject Grade</th>
                  <th>Semester</th>
                </tr>
              </thead>
              <tbody>
                {semesters.find(semester => semester.name === selectedSemester).subjects.map(subject => (
                  <tr key={subject.name}>
                    <td>{subject.name}</td>
                    <td>{subject.code}</td>
                    <td>{subject.groupName}</td>
                    <td>{subject.grade}</td>
                    <td>{selectedSemester}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <button type="button" onClick={handleCalculateSemesterGPA}>Calculate Semester GPA</button>
          </div>
        )}
      </form>
      <br />
      <br />
      <button type="button" onClick={handleCalculateOverallGPA}>Calculate Overall GPA</button>
      <br />
      <br />
      <p>SemesterGPA: {semesterGPA}</p>
      <p>Overall GPA: {overallGPA}</p>
      </div>
      );
    };

export default GPAcalculator;

