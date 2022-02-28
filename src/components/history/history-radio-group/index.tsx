import { Heading, Stack, RadioGroup } from "@chakra-ui/react";

import { HistoryRadioGroupItem } from "./history-radio-group-item";

export const HistoryRadioGroup = () => {
  return (
    <Stack>
      <Heading fontWeight="400" size="sm">
        Tipo de hístorico
      </Heading>

      <RadioGroup defaultValue="exhibition">
        <HistoryRadioGroupItem
          radioProps={{
            name: "source",
            value: "exhibition",
          }}
          label="Hístorico de exibição"
        />

        <HistoryRadioGroupItem
          radioProps={{
            name: "source",
            value: "community",
          }}
          label="Comunidade"
        />
      </RadioGroup>
    </Stack>
  );
};
