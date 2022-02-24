import { v4 } from "uuid";

import { HStack } from "@chakra-ui/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import faker from "@faker-js/faker";

import { TagItem } from "./tag-item";

const onClick = () => console.log("click");

const tabItems = [
  {
    id: v4(),
    tagName: faker.lorem.words(3),
    onClick,
  },
  {
    id: v4(),
    tagName: faker.lorem.words(3),
    onClick,
  },
  {
    id: v4(),
    tagName: faker.lorem.words(3),
    onClick,
  },
  {
    id: v4(),
    tagName: faker.lorem.words(3),
    onClick,
  },
  {
    id: v4(),
    tagName: faker.lorem.words(3),
    onClick,
  },
  {
    id: v4(),
    tagName: faker.lorem.words(3),
    onClick,
  },
  {
    id: v4(),
    tagName: faker.lorem.words(3),
    onClick,
  },
  {
    id: v4(),
    tagName: faker.lorem.words(3),
    onClick,
  },
];

export const TagBar = () => {
  return (
    <HStack
      h="3.5rem"
      alignItems="center"
      borderBottom="1px solid"
      borderTop="1px solid"
      borderColor="shape"
      overflow="hidden"
      maxW="100%"
      position="static"
      top={0}
      px="6"
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
