import { Text, TextProps } from "@chakra-ui/react";

type VideoInfoDescriptionProps = {
  children: string;
} & TextProps;

export const VideoInfoDescription = ({
  children,
  ...props
}: VideoInfoDescriptionProps) => {
  return (
    <Text
      as="small"
      display="-webkit-box"
      color="text.secondary"
      overflow="hidden"
      textOverflow="ellipsis"
      title={children}
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
