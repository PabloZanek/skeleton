import React, { useMemo, useState } from 'react';
import Button from './Button';

const Dropdown = ({
  label,
  trigger,
  content,
}) => {
  const [opened, updateOpened] = useState(false);

  const openStatus = useMemo(
    () => {
      if (opened) {
        return 'block';
      }

      return 'hidden';
    },
    [opened],
  );

  return (
    <div className="dropdown cursor-pointer" onClick={() => updateOpened(!opened)}>
      {
        trigger
        || (
          <Button type="primary" className="dropbtn">
            {label}
          </Button>
        )
      }
      <div className={`dropdown-content shadow-xl rounded-b-lg p-2 ${openStatus}`}>
        {content}
      </div>
    </div>
  );
};

export default Dropdown;
