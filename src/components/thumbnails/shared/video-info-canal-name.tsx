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
      display="-webkit-box"
      as="small"
      fontSize="0.75rem"
      color="text.secondary"
      maxW="29ch"
      textAlign="left"
      overflow="hidden"
      textOverflow="ellipsis"
      title={children}
      css={{
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "1",
      }}
      {...props}
    >
      {children}
    </Text>
  );
};
