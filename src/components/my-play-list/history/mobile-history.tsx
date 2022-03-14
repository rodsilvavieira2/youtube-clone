import { Button, HStack, StackProps } from "@chakra-ui/react";

type MobileHistoryProps = {
  containerProps: StackProps;
};

export const MobileHistory = ({ containerProps }: MobileHistoryProps) => {
  return (
    <HStack {...containerProps}>
      <Button
        flex="0 1  33.33%"
        variant="unstyled"
        fontSize="xs"
        textTransform="uppercase"
        whiteSpace="normal"
      >
        limpar todo o historico de exibição
      </Button>

      <Button
        flex="0 1  33.33%"
        variant="unstyled"
        fontSize="xs"
        textTransform="uppercase"
        whiteSpace="normal"
      >
        pauser histórico de visualizações
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
