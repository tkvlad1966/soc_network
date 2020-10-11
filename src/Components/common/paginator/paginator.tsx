import React, { FC, useState } from "react";
import s from "./Paginator.module.css";

type PropsType = {
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  totalCountUsers: number;
  sizePage: number;
};

const Paginator: FC<PropsType> = ({
  currentPage,
  onPageChange,
  totalCountUsers,
  sizePage,
}) => {
  let countPage = Math.ceil(totalCountUsers / sizePage);
  let pages: Array<number> = [];
  let [numberPortion, setNumberPortion] = useState(0);
  const onClickNext = () => {
    setNumberPortion(numberPortion + 1);
  };
  const onClickPrev = () => {
    setNumberPortion(numberPortion - 1);
  };

  pages = Array.from({ length: 10 }, (_, i) => numberPortion * 10 + i + 1);

  // for (
  //   let i = numberPortion * 10 - 9;
  //   i < numberPortion * 10 + 1 && i <= countPage;
  //   i++
  // ) {
  //   pages.push(i);
  // }

  return (
    <div>
      {numberPortion > 0 && <button onClick={onClickPrev}>prev</button>}
      {pages.map((num) => (
        <span
          className={num === currentPage ? s.selected : s.unselected}
          onClick={() => {
            onPageChange(num);
          }}
          key={num}
        >
          {num}
        </span>
      ))}
      {countPage > numberPortion && <button onClick={onClickNext}>next</button>}
    </div>
  );
};

export default Paginator;
