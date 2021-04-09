import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TypeItemProps {
    title: string;
    icon: string;
}

export function TypeItem({ title, icon }: TypeItemProps) {
    const isMobile = useBreakpointValue({
        base: false,
        sm: true
    })
    return (
        <Flex direction={["row", "column"]} alignItems="center" justify="center" >

            { isMobile ?
                <Image
                    src={`/${icon}.svg`}
                    alt={icon}
                />
                :
                <Text
                    mr="2"
                    fontSize="4xl"
                    color="yellow.500"
                >•</Text>}

            <Text
                display="flex"
                fontWeight="600"
                color="brand.700"
                fontSize={["md",
                    "2xl"]}>
                {title}
            </Text>
        </Flex >
    )
}