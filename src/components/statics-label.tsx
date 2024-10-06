import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React from "react";

const StaticsLabel = () => {
  return (
    <StatGroup>
      <Stat>
        <StatLabel>Up</StatLabel>
        <StatNumber>345,670</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          23.36%
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Low</StatLabel>
        <StatNumber>45</StatNumber>
        <StatHelpText>
          <StatArrow type="decrease" />
          9.05%
        </StatHelpText>
      </Stat>
    </StatGroup>
  );
};

export default StaticsLabel;
