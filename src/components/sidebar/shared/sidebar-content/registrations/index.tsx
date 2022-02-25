import { useEffect, useState } from "react";

import { Button, Flex, Text } from "@chakra-ui/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import faker from "@faker-js/faker";
import { YoutubeArrowDown } from "@icons";

import { Subscription, SubscriptionProps } from "./subscription";

type Data = {
  id: string;
} & SubscriptionProps;

const subscriptions = [
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: false,
    isWithNewContent: false,
    avatarUrl: faker.internet.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: false,
    isWithNewContent: false,
    avatarUrl: faker.internet.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: false,
    isWithNewContent: false,
    avatarUrl: faker.internet.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: false,
    isWithNewContent: false,
    avatarUrl: faker.internet.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: false,
    isWithNewContent: false,
    avatarUrl: faker.internet.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: false,
    isWithNewContent: false,
    avatarUrl: faker.internet.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: false,
    isWithNewContent: false,
    avatarUrl: faker.internet.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: false,
    isWithNewContent: false,
    avatarUrl: faker.internet.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: false,
    isWithNewContent: false,
    avatarUrl: faker.internet.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: false,
    isWithNewContent: false,
    avatarUrl: faker.internet.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: false,
    isWithNewContent: false,
    avatarUrl: faker.internet.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: false,
    isWithNewContent: false,
    avatarUrl: faker.internet.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: false,
    isWithNewContent: false,
    avatarUrl: faker.internet.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: true,
    isWithNewContent: true,
    avatarUrl: faker.internet.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    canalName: faker.lorem.words(2),
    isLive: true,
    isWithNewContent: true,
    avatarUrl: faker.internet.avatar(),
  },
];

export const Registrations = () => {
  const [state, setState] = useState<Data[]>([]);

  useEffect(() => {
    setState(subscriptions.slice(1, 7));
  }, []);

  const onShowMore = () => setState(subscriptions);

  const onShowLess = () => setState(subscriptions.slice(1, 7));

  return (
    <Flex flexDir="column">
      <Text
        color="text.secondary"
        textTransform="uppercase"
        px="1.5rem"
        py="0.5rem"
        fontWeight="500"
      >
        inscrições
      </Text>

      <Flex flexDir="column">
        {state.map((item) => (
          <Subscription key={item.id} {...item} />
        ))}

        <Button
          _hover={{
            bg: "button.bg",
          }}
          _focus={{
            boxShadow: "none",
          }}
          fontWeight="400"
          fontSize="0.875rem"
          bg="transparent"
          justifyContent="flex-start"
          onClick={state.length > 7 ? onShowLess : onShowMore}
          leftIcon={<YoutubeArrowDown />}
          px="1.5rem"
          iconSpacing={6}
        >
          {state.length > 7
            ? "Mostrar menos"
            : `Mostrar mais ${subscriptions.length - 7}`}
        </Button>
      </Flex>
    </Flex>
  );
};
