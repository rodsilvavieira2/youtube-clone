import { Stack } from "@chakra-ui/react";
import { YoutubePauseCircle, YoutubeSetting, YoutubeTrash } from "@icons";

import { HistoryActionsItem } from "./history-actions-item";

export const HistoryActions = () => {
  return (
    <Stack pt="1rem" px="1rem">
      <HistoryActionsItem icon={<YoutubeTrash />}>
        limpar todo o hitórico de exibição
      </HistoryActionsItem>

      <HistoryActionsItem icon={<YoutubePauseCircle />}>
        pausar o histórico de visualizações
      </HistoryActionsItem>

      <HistoryActionsItem icon={<YoutubeSetting />}>
        gerencia todo o historico
      </HistoryActionsItem>
    </Stack>
  );
};
