import { MdOutlineSearch, MdMic } from "react-icons/md";

import {
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";

export const SearchInput = () => {
  return (
    <HStack w="45%">
      <InputGroup as="label">
        <Input placeholder="Pesquisar..." borderRadius={0} />

        <InputRightAddon px="5" as="button" borderRadius={0} bg="button.bg">
          <Icon fontSize="1.4rem" as={MdOutlineSearch} />
        </InputRightAddon>
      </InputGroup>

      <IconButton
        isRound
        as="button"
        variant="activeIconButton"
        icon={<MdMic />}
        aria-label="iniciar captura de áudio"
      />
    </HStack>
  );
};
