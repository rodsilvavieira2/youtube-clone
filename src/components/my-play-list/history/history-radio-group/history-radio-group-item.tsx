import { InputGroup, Text, Radio, RadioProps } from "@chakra-ui/react";

type HistoryRadioGroupItemProps = {
  label: string;
  radioProps?: RadioProps;
};

export const HistoryRadioGroupItem = ({
  label,
  radioProps,
}: HistoryRadioGroupItemProps) => {
  return (
    <InputGroup
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      as="label"
      p="1rem"
      borderBottom="1px solid"
      borderColor="border.primary"
    >
      <Text fontSize="sm">{label}</Text>

      <Radio {...radioProps} colorScheme="blue" />
    </InputGroup>
  );
};
