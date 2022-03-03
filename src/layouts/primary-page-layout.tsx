import {
  DesktopSidebarContainer,
  MobileSidebarContainer,
  PageLayoutContentContainer,
} from "@containers";

export const PrimaryPageLayout = () => {
  return (
    <>
      <DesktopSidebarContainer />

      <MobileSidebarContainer />

      <PageLayoutContentContainer />
    </>
  );
};
