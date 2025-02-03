import React, { useState } from 'react';
import vector from '../assets/Vector.svg';

const AttendanceCard = ({ records, onTimeIn, onTimeOut }) => {
  const [isTimeIn, setIsTimeIn] = useState(true);

  const handleButtonClick = () => {
    if (isTimeIn) {
      onTimeIn(); 
      setIsTimeIn(false); 
    } else {
      onTimeOut(records[0].id); 
      setIsTimeIn(true); 
    }
  };

  const tableContainerStyle = {
    padding: '24px 32px',
    overflowX: 'auto',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const headerCellStyle = {
    padding: '8px',
    borderBottom: '1px solid #e2e8f0',
    color: '#0f172ab2',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontWeight: 400,
    lineHeight: '20px',
  };

  const cellStyle = {
    padding: '8px',
    borderBottom: '1px solid #e2e8f0',
    color: '#0f172a',
    fontSize: '16px',
    fontFamily: 'Inter',
    fontWeight: 400,
    lineHeight: '20px',
  };

  return (
    <div className="attendance-card">
      <div className="attendance-card-header">
        <div className="attendance-card-header-content">
          <img src={vector} alt="Vector" className="vector" />
          <h2>My Attendance</h2>
          <button
            className="attendance-card-button"
            onClick={handleButtonClick}
            style={{
              backgroundColor: !isTimeIn ? 'black' : '',
              color: !isTimeIn ? 'white' : '',
            }}
          >
            {!isTimeIn ? 'Time Out' : 'Time In'}
          </button>
        </div>
      </div>
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...headerCellStyle, textAlign: 'left' }}>Date</th>
              <th style={{ ...headerCellStyle, textAlign: 'center' }}>Time In</th>
              <th style={{ ...headerCellStyle, textAlign: 'right' }}>Time Out</th>
            </tr>
          </thead>
          <tbody>
            {records.map((row, index) => (
              <tr key={index}>
                <td style={{ ...cellStyle, textAlign: 'left' }}>{row.date}</td>
                <td style={{ ...cellStyle, textAlign: 'center' }}>{row.timeIn}</td>
                <td style={{ ...cellStyle, textAlign: 'right' }}>{row.timeOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

AttendanceCard.defaultProps = {
  style: {},
};

export default AttendanceCard;
