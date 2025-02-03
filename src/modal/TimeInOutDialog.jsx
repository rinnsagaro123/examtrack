import React from 'react';

const TimeInOutDialog = ({ onCancel = () => {}, onConfirm = () => {}, action }) => {
  const title = action === 'timeIn' ? 'Time In' : 'Time Out';
  const message = action === 'timeIn' ? 'Are you sure you want to time in?' : 'Are you sure you want to time out?';

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999 
    }}>
      <div style={{
        width: 400,
        padding: 25,
        backgroundColor: '#ffffff',
        borderRadius: 6,
        border: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        gap: 25
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 22
        }}>
          <h2 style={{
            margin: 0,
            fontSize: 20,
            lineHeight: '20px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            color: '#151515'
          }}>
            {title}
          </h2>

          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 16,
            lineHeight: '20px',
            fontWeight: 500,
            color: '#0f172a'
          }}>
            {message}
          </div>

          <div style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'flex-end'
          }}>
            <button
              onClick={onConfirm}
              style={{
                padding: '8px 16px',
                backgroundColor: '#1e1e1e',
                color: '#ffffff',
                border: 'none',
                borderRadius: 6,
                fontSize: 16,
                lineHeight: '24px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              Yes
            </button>
            <button
              onClick={onCancel}
              style={{
                padding: '8px 16px',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: '1px solid #e2e8f0',
                borderRadius: 6,
                fontSize: 16,
                lineHeight: '24px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeInOutDialog;
