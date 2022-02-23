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
      borderBottom="1px solid"
      borderTop="1px solid"
      borderColor="border.primary"
      overflowX="auto"
      maxW="100%"
    >
      {tabItems.map((item) => (
        <TagItem key={item.id} {...item} />
      ))}
    </HStack>
  );
};
