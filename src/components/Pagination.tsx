import React from 'react';

interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="mt-8 flex h-[40px] justify-between items-center">
      <button className='rounded-lg bg-[#141517] text-white px-[16px] py-[8px] hover:bg-[#455ce9] cursor-pointer' onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button 
            key={index + 1} 
            onClick={() => handlePageClick(index + 1)} 
            className={`m-4 cursor-pointer px-[16px] py-[8px] rounded-lg border  ${currentPage === index + 1 ? 'active' : ''}`}>
          {index + 1}
        </button>
      ))}
      <button className=' rounded-lg bg-[#141517] text-white px-[16px] py-[8px] border-none  hover:bg-[#455ce9] cursor-pointer' onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
