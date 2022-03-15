import {
  HStack,
  IconButton,
  IconButtonProps,
  StackProps,
  Text,
} from "@chakra-ui/react";

type ActionButtonProps = {
  children: string;
  containerProps?: StackProps;
  buttonProps?: IconButtonProps;
};

export const ActionButton = ({
  buttonProps,
  containerProps,
  children,
}: ActionButtonProps) => {
  return (
    <HStack
      spacing={["1"]}
      flexWrap={{ base: "wrap", lg: "nowrap" }}
      flexDirection={{ base: "column", lg: "row" }}
      {...containerProps}
    >
      <IconButton
        flexShrink={0}
        aria-label="fazer um clipe do video"
        variant="mutedIconButton"
        size="sm"
        isRound
        {...buttonProps}
      />

      <Text
        fontSize={["xs", "sm", "md"]}
        fontWeight="500"
        textTransform={["capitalize", "uppercase"]}
      >
        {children}
      </Text>
    </HStack>
  );
};
