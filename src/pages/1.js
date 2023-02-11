import React, { useState } from 'react';
const GPAcalculator = () => {
    const [semesters, setSemesters] = useState([{
      semesterName: '',
      subjects: [{
        subjectName: '',
        subjectCode: '',
        groupName: '',
        subjectGrade: ''
      }]
    }]);
    const [semesterName, setSemesterName] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [subjectCode, setSubjectCode] = useState('');
    const [groupName, setGroupName] = useState('');
    const [subjectGrade, setSubjectGrade] = useState('');
    const [semesterGPA, setSemesterGPA] = useState(0);
    const [overallGPA, setOverallGPA] = useState(0);
  
    const handleSemesterNameChange = (e) => {
      setSemesterName(e.target.value);
    };
  
    const handleSubjectNameChange = (e) => {
      setSubjectName(e.target.value);
    };
  
    const handleSubjectCodeChange = (e) => {
      setSubjectCode(e.target.value);
    };
  
    const handleGroupNameChange = (e) => {
      setGroupName(e.target.value);
    };
  
    const handleSubjectGradeChange = (e) => {
      setSubjectGrade(e.target.value);
    };
  
    const handleAddSubject = (e) => {
      e.preventDefault();
      setSemesters(prevSemesters => [...prevSemesters, {
        subjectName,
        subjectCode,
        groupName,
        subjectGrade
      }]);
    };
  
    const handleCalculateSemesterGPA = () => {
      let totalPoints = 0;
      let totalSubjects = 0;
  
      semesters.forEach(subject => {
        switch (subject.subjectGrade) {
          case 'A+':
            totalPoints += 4.0;
            break;
          case 'A':
            totalPoints += 4.0;
            break;
          case 'A-':
            totalPoints += 3.7;
            break;
          case 'B+':
            totalPoints += 3.3;
            break;
          case 'B':
            totalPoints += 3.0;
            break;
          case 'B-':
            totalPoints += 2.7;
            break;
          case 'C+':
            totalPoints += 2.3;
            break;
          case 'C':
            totalPoints += 2.0;
            break;
          case 'C-':
            totalPoints += 1.7;
            break;
          case 'D+':
            totalPoints += 1.3;
            break;
          case 'D':
            totalPoints += 1.0;
            break;
          case 'F':
            totalPoints += 0;
            break;
          default:
            break;
        }
        totalSubjects += 1;
      });
  
      const semesterGPA = totalPoints / totalSubjects;
      setSemesterGPA(semesterGPA);
    };
}
   
  