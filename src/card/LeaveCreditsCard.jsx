import React from 'react';
import union from '../assets/union.svg';

const LeaveCreditsCard = () => {
  const leaveData = [
    { type: 'Vacation', count: 7 },
    { type: 'Sick', count: 5 },
    { type: 'Bereavement', count: 3 },
    { type: 'Emergency Leave', count: 2 },
    { type: 'Offset Leave', count: 0 },
    { type: 'Compensatory Time Off', count: 0 }
  ];

  return (
    <div className="leave-credits-card">
      <div className="leave-credits-card-header">
        <div className="leave-credits-card-header-content">
          <img src={union} alt="union" className="union" />
          <h2>Leave Credits</h2>
          <button className="leave-credits-button">Apply</button>
        </div>
      </div>

      <div className="leave-credits-list">
        {leaveData.map((leave, index) => (
          <div key={index} className="leave-credits-item">
            <span>{leave.type}</span>
            <span>{leave.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveCreditsCard;
