import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../app/Dropdown';

const DropdownFilter = ({
  label,
  content,
}) => (
  <Dropdown
    trigger={(
      <div className="text-black-400 space-x-2">
        <span>{label}</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    )}
    content={content}
  />
);

export default DropdownFilter;
