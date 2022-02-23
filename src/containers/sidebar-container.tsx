import { useSelector } from "react-redux";

import { Sidebar } from "@components";
import { selectIsDeskTopSidebarOpen } from "@redux/slices";

export const SidebarContainer = () => {
  const isDeskTopSidebarOpen = useSelector(selectIsDeskTopSidebarOpen);

  return <Sidebar isSidebarOpen={isDeskTopSidebarOpen} />;
};
