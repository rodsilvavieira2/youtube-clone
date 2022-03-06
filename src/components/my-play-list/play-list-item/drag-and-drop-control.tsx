import { BoxProps, Center, Icon } from "@chakra-ui/react";
import { YoutubeDoubleBarMenu } from "@icons";

type DragAndDropControlProps = {
  stylesProps?: BoxProps;
};

export const DragAndDropControl = ({
  stylesProps,
}: DragAndDropControlProps) => {
  return (
    <Center cursor="grab" w="2.25rem" flexShrink={0} {...stylesProps}>
      <Icon fontSize="1.5rem" as={YoutubeDoubleBarMenu} />
    </Center>
  );
};
