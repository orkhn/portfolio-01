import * as styled from './themeTogglerStyles';

import { useState } from 'react';

function ThemeToggler({ themeToggler }) {
  const [checked, setChecked] = useState(true);
  const onInputChange = () => {
    setChecked(checked);
    themeToggler();
  };

  return (
    <styled.ThemeToggler>
      <label className="switch">
        <input
          type="checkbox"
          onChange={onInputChange}
          defaultChecked={!checked}
        />
        <span className="slider" />
      </label>
    </styled.ThemeToggler>
  );
}

export default ThemeToggler;
