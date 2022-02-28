import { Link } from "react-router-dom";

import { Box } from "@chakra-ui/react";

type HistoryLinkProps = {
  children: string;
  to: string;
};

export const HistoryLink = ({ children, to }: HistoryLinkProps) => {
  return (
    <Box
      fontSize="sm"
      h="2.5rem"
      w="100%"
      color="text.secondary"
      as={Link}
      to={to}
    >
      {children}
    </Box>
  );
};
