import React, { useEffect } from 'react';
import './style.css';

interface DropdownProps {
  onItemClick: (value: string) => void;
  value: string;
  displayValue: string;
  isSelected: boolean;
  isHour: boolean;
}

export const OnHoursClick = (props: DropdownProps) => {
  let liItem: HTMLLIElement | null = null;

  useEffect(() => {
    if (props.isSelected && liItem) {
      liItem.focus();
      liItem.scrollIntoView();
    }
  }, [props.isSelected]);

  const clickHandler = () => {
    props.onItemClick(props.value);
    return (event: React.MouseEvent) => {
      event.preventDefault();
    };
  };
  return (
    <li
      onClick={clickHandler}
      className={props.isSelected ? 'selected-item' : ''}
      ref={(eref) => {
        liItem = eref;
      }}
    >
      {props.displayValue}
      {props.isHour && <span className={'colon'}>:</span>}
    </li>
  );
};
