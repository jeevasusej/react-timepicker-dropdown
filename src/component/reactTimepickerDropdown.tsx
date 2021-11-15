import React, { ReactChild, useState } from 'react';
import { usePopper } from 'react-popper';
import { OnHoursClick } from './onHoursClick';
import './style.css';

const defaultProps = {
  Use12Hours: false,
  Steps: 15,
};
export interface Props {
  /**
   * Hours format - 12Hrs/24Hrs
   */
  Use12Hours: boolean;
  /**
   * This is for minutes steps (Not for hours). Default value is 15.
   */
  Steps: number;
  /**
   * The function to be called on input change
   */
  OnChange: (value: string) => void;
}

export const ReactTimepickerDropdown = (props: Props) => {
  const [
    referenceElement,
    setReferenceElement,
  ] = useState<HTMLInputElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [visible, setVisibility] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  const handleInputClick = () => {
    setVisibility(!visible);
  };

  const handleDropdownClick = (value: string) => {
    setInputValue(value);
    setVisibility(!visible);
    if (props.OnChange) {
      props.OnChange(value);
    }
  };

  const getWrapper = (
    elements: JSX.Element[],
    classNames: string,
    key: number
  ) => {
    return (
      <ul className={classNames} key={key}>
        {elements}
      </ul>
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var value = e.target.value;
    setInputValue(value);
  };
  // stackoverflow.com/questions/36125038/generate-array-of-times-as-strings-for-every-x-minutes-in-javascript
  const get12HoursElement = () => {
    var hours = [],
      mins = [];
    var tt = 0; // start time
    var ap = ['AM', 'PM']; // AM-PM
    let hrValue = '',
      minValue = '',
      displayValue = '',
      hh = 0,
      mm = 0,
      formathrs = props.Use12Hours ? 12 : 24,
      ampm = '';
    let pm12Found = false,
      isSelected = false;
    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
      hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      mm = tt % 60; // getting minutes of the hour in 0-55 format

      ampm = props.Use12Hours
        ? hh % formathrs == 0
          ? pm12Found
            ? 'PM'
            : 'AM'
          : ap[Math.floor(hh / 12)]
        : '';

      if (props.Use12Hours && hh == 11 && ampm === 'AM') {
        pm12Found = true;
      }
      hrValue = (
        '0' + (props.Use12Hours && hh % formathrs == 0 ? 12 : hh % formathrs)
      ).slice(-2);
      minValue = ('0' + mm).slice(-2) + ' ' + ampm;
      displayValue = hrValue + ':' + minValue;
      isSelected =
        (displayValue || '').trim().toUpperCase() ===
        (inputValue || '').trim().toUpperCase();
      hours.push(
        <OnHoursClick
          onItemClick={handleDropdownClick}
          value={displayValue}
          key={i + '' + hrValue}
          displayValue={hrValue}
          isSelected={isSelected}
          isHour={true}
        />
      );
      mins.push(
        <OnHoursClick
          onItemClick={handleDropdownClick}
          value={displayValue}
          key={i + '' + i + hrValue}
          displayValue={minValue}
          isSelected={isSelected}
          isHour={false}
        />
      );

      tt = tt + props.Steps;
    }
    var dropdwon = [];
    dropdwon.push(getWrapper(hours, 'rtp-hours', 0));
    dropdwon.push(getWrapper(mins, 'rtp-mins', 2));
    return dropdwon;
  };

  return (
    <React.Fragment>
      <input
        type="text"
        ref={setReferenceElement}
        onClick={handleInputClick}
        value={inputValue}
        className={'rtp-wrapper-input'}
        onChange={handleChange}
      />
      {visible && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className={'rtp-wrapper'}
        >
          {get12HoursElement()}
          <div ref={setArrowElement} style={styles.arrow}></div>
        </div>
      )}
    </React.Fragment>
  );
};

ReactTimepickerDropdown.defaultProps = defaultProps;
