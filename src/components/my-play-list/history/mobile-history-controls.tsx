import { Button, HStack } from "@chakra-ui/react";

export const MobileHistoryControls = () => {
  return (
    <HStack display={{ base: "flex", lg: "none" }} p="1.5rem">
      <Button
        flex="0 1  33.33%"
        variant="unstyled"
        fontSize="xs"
        textTransform="uppercase"
        whiteSpace="normal"
      >
        limpar todo o histórico de exibição
      </Button>

      <Button
        flex="0 1  33.33%"
        variant="unstyled"
        fontSize="xs"
        textTransform="uppercase"
        whiteSpace="normal"
      >
        pausar histórico de visualizações
      </Button>

      <Button
        flex="0 1  33.33%"
        variant="unstyled"
        fontSize="xs"
        textTransform="uppercase"
        whiteSpace="normal"
      >
        gerenciar todo o histórico
      </Button>
    </HStack>
  );
};
