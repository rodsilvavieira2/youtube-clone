import { MdArrowBackIosNew } from "react-icons/md";

import { Flex, FlexProps, HStack, IconButton, Input } from "@chakra-ui/react";
import faker from "@faker-js/faker";

import { MicButton, SearchSuggestion } from "../shared";

const suggestions = Array.from({ length: 14 }, () => ({
  id: faker.datatype.uuid(),
  text: faker.lorem.words(10),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: "search" as any,
}));

type MobileSearchInputProps = {
  onClose: () => void;
  containerProps?: FlexProps;
};

export const MobileSearchInput = ({
  containerProps,
  onClose,
}: MobileSearchInputProps) => {
  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="primary"
      h="3rem"
      px="2"
      {...containerProps}
    >
      <HStack w="100%">
        <IconButton
          aria-label="voltar"
          icon={<MdArrowBackIosNew />}
          variant="mutedIconButton"
          fontSize="sm"
          onClick={onClose}
        />

        <Input placeholder="Pesquisar no YouTube" variant="unstyled" />

        <MicButton />
      </HStack>

      <SearchSuggestion
        items={suggestions}
        styleProps={{
          position: "fixed",
          top: "3rem",
          zIndex: "popover",
          left: 0,
          right: 0,
          bottom: 0,
          bg: "primary",
        }}
      />
    </Flex>
  );
};
