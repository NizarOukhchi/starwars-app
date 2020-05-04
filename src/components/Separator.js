import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Separator = () => {
  return (
    <div
      css={css`
        margin: 30px 0;
        border-bottom: solid 1px #ccc;
        width: 100%;
      `}
    ></div>
  );
};

export default Separator;
