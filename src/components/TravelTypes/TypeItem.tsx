import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";

interface TypeItemProps {
    title: string;
    icon: string;
}

export function TypeItem({ title, icon }: TypeItemProps) {
    return (
        <Flex direction='column' align="center" >
            <Image src={`/${icon}.svg`} alt={icon} />
            <Text mt="6" fontWeight="600" color="brand.700">{title}</Text>

        </Flex>
    )
}