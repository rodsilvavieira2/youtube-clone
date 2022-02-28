import { Stack } from "@chakra-ui/react";
import { YoutubeBock } from "@icons";

import { HistoryActionsItem } from "./history-actions-item";

export const HistoryActions = () => {
  return (
    <Stack>
      <HistoryActionsItem
        text="limpar todo o hitórico de exibição"
        icon={<YoutubeBock />}
      />

      <HistoryActionsItem
        text="pausar o histórico de visualizações "
        icon={<YoutubeBock />}
      />

      <HistoryActionsItem
        text="gerencia todo o historico"
        icon={<YoutubeBock />}
      />
    </Stack>
  );
};
