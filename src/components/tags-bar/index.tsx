import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";

import { Flex, HStack, StackProps } from "@chakra-ui/react";
import faker from "@faker-js/faker";
import { Tag } from "@types";

import { TagItem } from "./tag-item";

const onClick = () => console.log("click");

const tabItems = Array.from({ length: 15 }, () => ({
  id: v4(),
  tagName: faker.lorem.words(3),
  onClick,
}));

const MotionStack = motion<StackProps>(HStack);

type TagsBarProps = {
  tags: Tag[];
};

export const TagsBar = ({ tags }: TagsBarProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagsContainerRef = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [tagsContainerWidth, setTagsContainerWidth] = useState(0);

  useEffect(() => {
    setContainerWidth(containerRef.current?.offsetWidth ?? 0);
    setTagsContainerWidth(tagsContainerRef.current?.offsetWidth ?? 0);
  }, [tags]);

  return (
    <Flex
      h="3.5rem"
      px="4"
      bg="primary"
      position="relative"
      alignItems="center"
      borderBottom="1px solid"
      borderTop="1px solid"
      borderColor="shape"
      overflow="hidden"
      css={{
        touchAction: "pan-y",
      }}
      w="100%"
      ref={containerRef}
    >
      <MotionStack
        alignItems="center"
        drag="x"
        dragConstraints={{
          left: (tagsContainerWidth - containerWidth + 20) * -1,
          right: 0,
        }}
        ref={tagsContainerRef}
      >
        {tags.map((item) => (
          <TagItem key={item.id} {...item} />
        ))}
      </MotionStack>
    </Flex>
  );
};
