import { Box, Stack } from "@chakra-ui/react";

import { HistoryActions } from "./history-actions";
import { HistoryInput } from "./history-input";
import { HistoryRadioGroup } from "./history-radio-group";

export const DesktopHistoryListControls = () => {
  return (
    <Box
      display={{ base: "none", lg: "flex" }}
      w="40%"
      bg="bg"
      py="6"
      px="1.75rem"
    >
      <Stack position="fixed">
        <HistoryInput />

        <HistoryRadioGroup />

        <HistoryActions />
      </Stack>
    </Box>
  );
};
