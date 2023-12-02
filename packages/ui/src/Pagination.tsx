import React, { useEffect, useState } from "react";

interface PaginationProps {
  totalPages: number;
  handlePageChange: (indexOfLastItem: number, indexOfFirstItem: number) => void;
}

export function Pagination({
  totalPages,
  handlePageChange,
}: PaginationProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(0);
  useEffect(() => {
    const indexOfLastItem = currentPage * 10;
    const indexOfFirstItem = indexOfLastItem - 10;
    handlePageChange(indexOfLastItem, indexOfFirstItem);
  }, [currentPage]);
  useEffect(() => {
    setCurrentPage(1);
  }, []);
  return (
    <div className="flex w-full gap-2 mt-7 justify-center">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          className={`text-slate-50 border  border-gray-200 rounded bg-transparent h-8 w-8 ${
            index + 1 === currentPage ? "bg-white text-slate-800" : ""
          }`}
          key={index + 1}
          onClick={(): void => setCurrentPage(index + 1)}
          type="button"
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
