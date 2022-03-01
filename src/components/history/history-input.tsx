import { HStack, Icon, Input, InputGroup } from "@chakra-ui/react";
import { YoutubeSearch } from "@icons";

export const HistoryInput = () => {
  return (
    <InputGroup pl="3">
      <HStack>
        <HStack
          as="label"
          pb="2"
          position="relative"
          borderBottom="1px solid"
          borderColor="border.primary"
          _focusWithin={{
            _after: {
              transform: "scale(1)",
            },
          }}
          _after={{
            content: "''",
            h: "2px",
            bg: "text.primary",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            transform: "scale(0)",
            transition: "all 0.3s",
          }}
        >
          <Icon as={YoutubeSearch} fontSize="1.4rem" />

          <Input
            variant="unstyled"
            placeholder="Pesquisar no histórico de exibição"
          />
        </HStack>
      </HStack>
    </InputGroup>
  );
};
