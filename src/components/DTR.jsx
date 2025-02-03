import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import AttendanceCard from '../card/AttendanceCard';
import LeaveCreditsCard from '../card/LeaveCreditsCard';
import data from '../data/data.json';
import TimeInOutDialog from '../modal/TimeInOutDialog'; 

const DTR = () => {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const employeeId = 1;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState(null);
  const [currentRecordId, setCurrentRecordId] = useState(null);

  useEffect(() => {
    setRecords(data.timeRecords || []);
  }, []);

  const handleTimeIn = () => {
    const now = new Date();
    const newRecord = {
      id: records.length + 1,
      employeeId,
      date: now.toISOString().split('T')[0],
      timeIn: now.toTimeString().split(' ')[0],
      timeOut: '',
    };
    setRecords([newRecord, ...records]);
  };

  const handleTimeOut = (id) => {
    const now = new Date();
    const updatedRecords = records.map((record) => {
      if (record.id === id && !record.timeOut) {
        return {
          ...record,
          timeOut: now.toTimeString().split(' ')[0],
        };
      }
      return record;
    });
    setRecords(updatedRecords);
  };


  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(records.length / recordsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const openTimeInModal = () => {
    setCurrentAction('timeIn');
    setIsModalOpen(true);
  };

  const openTimeOutModal = (id) => {
    setCurrentRecordId(id);
    setCurrentAction('timeOut');
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const confirmTimeIn = () => {
    handleTimeIn();
    closeModal();
  };


  const confirmTimeOut = () => {
    handleTimeOut(currentRecordId);
    closeModal();
  };

  return (
    <div className="dtr-container">
      <Navbar />
      <div className="dtr-content" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <AttendanceCard
          records={currentRecords}
          onTimeIn={openTimeInModal}
          onTimeOut={openTimeOutModal} 
        />
        <LeaveCreditsCard />
        

        {records.length > recordsPerPage && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i + 1} onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <TimeInOutDialog
          onCancel={closeModal}
          onConfirm={currentAction === 'timeIn' ? confirmTimeIn : confirmTimeOut}
          action={currentAction}
        />
      )}
    </div>
  );
};

export default DTR;
