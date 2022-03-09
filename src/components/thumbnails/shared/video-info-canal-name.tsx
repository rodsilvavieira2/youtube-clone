import { Text, TextProps } from "@chakra-ui/react";

type VideoInfoCanalNameProps = {
  children: string;
} & TextProps;

export const VideoInfoCanalName = ({
  children,
  ...props
}: VideoInfoCanalNameProps) => {
  return (
    <Text
      as="small"
      fontSize="0.75rem"
      color="text.secondary"
      maxW="29ch"
      textAlign="left"
      whiteSpace="nowrap"
      overflow="hidden"
      textOverflow="ellipsis"
      title={children}
      {...props}
    >
      {children}
    </Text>
  );
};
