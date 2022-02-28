import { v4 } from "uuid";

import { HStack } from "@chakra-ui/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import faker from "@faker-js/faker";

import { TagItem } from "./tag-item";

const onClick = () => console.log("click");

const tabItems = Array.from({ length: 15 }, () => ({
  id: v4(),
  tagName: faker.lorem.words(3),
  onClick,
}));

export const TagBar = () => {
  return (
    <HStack
      h="3.5rem"
      px="6"
      bg="primary"
      alignItems="center"
      borderBottom="1px solid"
      borderTop="1px solid"
      borderColor="shape"
      overflow="hidden"
      maxW="100%"
      css={{
        "&::-webkit-scrollbar": {
          width: "0px",
        },
      }}
    >
      {tabItems.map((item) => (
        <TagItem key={item.id} {...item} />
      ))}
    </HStack>
  );
};
