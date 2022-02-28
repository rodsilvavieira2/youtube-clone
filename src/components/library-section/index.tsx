import { IconType } from "react-icons";

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { LibraryThumbnail } from "@components";
import { BasicVideoData } from "@types";

type LibrarySectionProps = {
  title: string;
  icon: IconType;
  items: BasicVideoData[];
  maxItems?: number;
  amount?: number;
};

export const LibrarySection = ({
  items,
  title,
  icon,
  maxItems = 4,
  amount,
}: LibrarySectionProps) => {
  return (
    <Box borderBottom="1px solid" borderColor="shape" paddingBottom={8}>
      <Flex alignItems="center" justifyContent="space-between">
        <HStack spacing={4}>
          <Icon fontSize="1.6rem" as={icon} />

          <HStack>
            <Heading fontSize="md">{title}</Heading>

            {amount && <Text color="text.secondary">{amount}</Text>}
          </HStack>
        </HStack>

        <Button
          textTransform="uppercase"
          variant="ghost"
          color="highlight"
          _active={{
            bg: "bg",
          }}
          _focus={{ bg: "bg" }}
          fontSize="sm"
        >
          ver tudo
        </Button>
      </Flex>

      <SimpleGrid
        mt="4"
        minChildWidth="13.125rem"
        gap="2"
        columns={4}
        rowGap={10}
      >
        {items.slice(0, maxItems).map((item) => (
          <LibraryThumbnail key={item.id} {...item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
