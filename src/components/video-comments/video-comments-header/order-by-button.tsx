import {
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { YoutubeOderBy } from "@icons";

export const OrderByButton = () => {
  return (
    <Menu>
      <MenuButton
        aria-label="ordernar por"
        as={IconButton}
        icon={<YoutubeOderBy />}
        variant="mutedIconButton"
      />

      <MenuList>
        <MenuOptionGroup defaultValue="main">
          <MenuItemOption value="main">Principais Comentários</MenuItemOption>

          <MenuItemOption value="recent">Mais recentes primeiro</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
