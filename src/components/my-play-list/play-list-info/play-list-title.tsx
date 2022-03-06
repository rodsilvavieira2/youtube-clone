import { Text, TextProps } from "@chakra-ui/react";

type PlayListTitleProps = {
  children: string;
} & TextProps;

export const PlayListTitle = ({ children, ...props }: PlayListTitleProps) => {
  return (
    <Text
      fontSize="1.5rem"
      fontWeight="400"
      textTransform="capitalize"
      {...props}
    >
      {children}
    </Text>
  );
};
