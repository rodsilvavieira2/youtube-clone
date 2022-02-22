import { BsGrid3X3Gap } from "react-icons/bs";
import { MdOutlineNotifications } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";

import { Avatar, HStack, IconButton } from "@chakra-ui/react";

export const AccountActions = () => {
  return (
    <HStack>
      <IconButton
        isRound
        variant="mutedIconButton"
        icon={<RiVideoAddLine />}
        aria-label="manipule videos"
      />

      <IconButton
        isRound
        variant="mutedIconButton"
        icon={<BsGrid3X3Gap />}
        aria-label="ver outras áreas"
      />

      <IconButton
        isRound
        variant="mutedIconButton"
        icon={<MdOutlineNotifications />}
        aria-label="ver notificações"
      />

      <Avatar size="sm" name="rodrigo silva" />
    </HStack>
  );
};
