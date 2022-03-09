import { Text, TextProps } from "@chakra-ui/react";

type VideoInfoTitleProps = {
  children: string;
} & TextProps;

export const VideoInfoTitle = ({ children, ...props }: VideoInfoTitleProps) => {
  return (
    <Text
      display="-webkit-box"
      fontSize="sm"
      maxH="2.5rem"
      whiteSpace="normal"
      textTransform="capitalize"
      overflow="hidden"
      textOverflow="ellipsis"
      lineHeight="1.25rem"
      fontWeight="500"
      w="100%"
      title={children}
      as="strong"
      css={{
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "2",
      }}
      {...props}
    >
      {children}
    </Text>
  );
};
