import { Image, Flex, Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex w="100%" h={["163px", "335px"]} bgImg="url(/Background.png)" bgPosition="100% 30%" bgSize="cover" bgRepeat="no-repeat" >
            <Flex w="100%" maxW={1160} mx="auto" justify="space-between" align="center">
                <Box p="6">
                    <Heading color="white" fontWeight="500" fontSize={["xl", "4xl"]}>5 Continentes,<br /> infinitas possibilidades.</Heading>
                    <Text mt="5" color="white" fontSize={["xs", "xl"]}>Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou. </Text>
                </Box>
                <Box>
                    {isWideVersion && <Image maxW="417px" src="/Airplane.svg" alt="airplane" transform="translateY(48px)" />}
                </Box>
            </Flex>
        </Flex>
    )
}