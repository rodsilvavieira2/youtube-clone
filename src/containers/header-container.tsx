import { useDispatch } from "react-redux";

import { useBreakpointValue } from "@chakra-ui/react";
import { Header } from "@components";
import { useGetUserInfoQuery } from "@redux/api/user";
import {
  toggleMobileSidebarOpen,
  toggleIsDeskTopSidebarOpen,
} from "@redux/slices";

export const HeaderContainer = () => {
  const { isLoading, data } = useGetUserInfoQuery();

  const { userName, avatarUrl } = data || {};

  const dispatch = useDispatch();

  const isOnMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Header
      onToggleSidebar={() =>
        dispatch(
          isOnMobile ? toggleMobileSidebarOpen() : toggleIsDeskTopSidebarOpen()
        )
      }
      isLoading={isLoading}
      avatarUrl={avatarUrl}
      userName={userName}
    />
  );
};
