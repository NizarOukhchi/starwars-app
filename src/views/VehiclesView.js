import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Flex, Heading, Link } from '@chakra-ui/core';
import axios from 'axios';

import Separator from '../components/Separator';
import Nav from '../components/Nav';
import VehicleCard from '../components/VehicleCard';

const VehiclesView = () => {
  const [vehicles, setVehicles] = useState([]);
  const [currentVehicle, setCurrentVehicle] = useState({});

  useEffect(() => {
    axios.get('https://swapi.dev/api/vehicles').then((res) => {
      setVehicles(res.data.results);
      setCurrentVehicle(res.data.results[0]);
    });
  }, []);

  const selectVehcile = (index) => {
    const newCurrent = vehicles[index];
    setCurrentVehicle(newCurrent);
  };

  return (
    <Flex direction="column" align="center">
      <Heading
        css={css`
          margin-bottom: 20px;
        `}
      >
        Starwars vehicles
      </Heading>

      <Nav />

      <Separator />

      <Flex direction="column" align="center">
        {vehicles.map((item, index) => (
          <Link
            key={index}
            color="teal.500"
            onClick={() => selectVehcile(index)}
          >
            {item.name}
          </Link>
        ))}
      </Flex>

      <Separator />

      <VehicleCard vehicle={currentVehicle} />
    </Flex>
  );
};

export default VehiclesView;
