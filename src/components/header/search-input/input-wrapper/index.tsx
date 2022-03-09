import { useState } from "react";

import {
  Flex,
  Center,
  Icon,
  Input,
  IconButton,
  FlexProps,
} from "@chakra-ui/react";
import faker from "@faker-js/faker";
import { YoutubeSearch, YoutubeClose } from "@icons";

import { SearchSuggestion } from "../../shared";

const suggestions = Array.from({ length: 14 }, () => ({
  id: faker.datatype.uuid(),
  text: faker.lorem.words(10),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: "search" as any,
}));

type InputWrapperProps = {
  containerProps?: FlexProps;
};

export const InputWrapper = ({ containerProps }: InputWrapperProps) => {
  const [inputValue, setInputValue] = useState("");

  const onClearSearch = () => setInputValue("");

  return (
    <Flex
      ml="2.125rem"
      border="1px solid"
      borderColor="border.primary"
      as="label"
      flex={1}
      height="100%"
      padding="2px 6px"
      alignItems="center"
      position="relative"
      _focusWithin={{
        borderColor: "highlight",
        boxShadow: "inset 0 0 3px  rgba(3,3,3,0.5)",
        marginLeft: "0",
        ".search-icon": {
          display: "inline-flex",
        },
        ".search-suggestion": {
          display: "block",
        },
      }}
      {...containerProps}
    >
      <Center w="2.5rem" className="search-icon" display="none">
        <Icon as={YoutubeSearch} className="search-icon" fontSize="1.4rem" />
      </Center>

      <Input
        aria-label="pesquisar"
        placeholder="Pesquisar"
        height="100%"
        variant="unstyled"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        _placeholder={{
          color: "text.secondary",
        }}
      />

      {inputValue.length > 2 && (
        <IconButton
          size="xs"
          aria-label="limpar busca"
          icon={<YoutubeClose />}
          variant="ghost"
          isRound
          _focus={{
            bg: "button.focus",
          }}
          _hover={{}}
          onClick={onClearSearch}
        />
      )}

      <SearchSuggestion
        styleProps={{
          className: "search-suggestion",
          display: "none",
          top: "100%",
          left: 0,
          right: 0,
        }}
        items={suggestions}
      />
    </Flex>
  );
};
