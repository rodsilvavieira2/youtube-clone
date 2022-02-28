import { IconButton } from "@chakra-ui/react";
import { YoutubeSearch } from "@icons";

export const SearchButton = () => {
  return (
    <IconButton
      bg="bg"
      border="1px solid"
      borderLeft="none"
      borderRadius={0}
      w="4rem"
      borderColor="border.primary"
      icon={<YoutubeSearch />}
      aria-label="pesquisar"
      _focus={{
        bg: "button.focus",
        boxShadow: "none",
      }}
      _hover={{}}
    />
  );
};
