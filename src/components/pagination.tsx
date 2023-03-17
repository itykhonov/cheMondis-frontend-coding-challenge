import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';

export interface IProps {
  pagesCount: number;
  currentPage: number;
  handlerPageClick: ({ selected }: { selected: number }) => void;
}

export const Pagination: FC<IProps> = ({
  pagesCount,
  currentPage,
  handlerPageClick
}: IProps) => {
  return (
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pagesCount}
      forcePage={currentPage - 1}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlerPageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
      renderOnZeroPageCount={() => null}
    />
  );
};
