import React from 'react';
import { Flex, Text } from '@chakra-ui/core';

const VehicleCard = ({ vehicle }) => {
  return (
    <Flex direction="column" align="center" p={5} shadow="md" borderWidth="1px">
      <Text fontSize="4xl">{vehicle.name}</Text>
      <Text fontSize="xl">model: {vehicle.model}</Text>
      <Text fontSize="xl">manufacturer: {vehicle.manufacturer}</Text>
      <Text fontSize="xl">Price: {vehicle.cost_in_credits} $</Text>
    </Flex>
  );
};

export default VehicleCard;
