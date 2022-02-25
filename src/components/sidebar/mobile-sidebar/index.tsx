import { Brand } from "components/header/brand";
import { useRef } from "react";
import { useDispatch } from "react-redux";

import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { toggleMobileSidebarOpen } from "@redux/slices";

import { SidebarContent } from "../shared";

type MobileSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const dispatch = useDispatch();

  const onToggleMobileSidebar = () => dispatch(toggleMobileSidebarOpen());

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="xs"
    >
      <DrawerOverlay />
      <DrawerContent width="fit-content !important" overflowY="auto">
        <Stack>
          <Flex px="1.2rem" w="100%" py="3">
            <Brand onToggleSidebar={onToggleMobileSidebar} />
          </Flex>

          <SidebarContent />
        </Stack>
      </DrawerContent>
    </Drawer>
  );
};
