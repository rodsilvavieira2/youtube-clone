import { HStack, Icon, Input, InputGroup } from "@chakra-ui/react";
import { YoutubeSearch } from "@icons";

export const HistoryInput = () => {
  return (
    <InputGroup>
      <HStack>
        <Icon as={YoutubeSearch} />

        <Input
          variant="unstyled"
          placeholder="Pesquisar no histórico de exibição"
        />
      </HStack>
    </InputGroup>
  );
};
