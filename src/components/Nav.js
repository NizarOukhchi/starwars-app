import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Flex, Link } from '@chakra-ui/core';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <Flex justify="center">
      <Link
        color="teal.500"
        as={NavLink}
        to="/vehicles"
        css={css`
          margin-right: 20px;
          &.active {
            font-weight: bold;
          }
        `}
      >
        Vehicles
      </Link>

      <Link
        color="teal.500"
        as={NavLink}
        to="/starships"
        css={css`
          margin-right: 20px;
          &.active {
            font-weight: bold;
          }
        `}
      >
        Starships
      </Link>
      <Link
        color="teal.500"
        as={NavLink}
        to="/species"
        css={css`
          &.active {
            font-weight: bold;
          }
        `}
      >
        Species
      </Link>
    </Flex>
  );
};

export default Nav;
