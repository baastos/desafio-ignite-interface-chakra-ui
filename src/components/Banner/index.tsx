import { Image, Flex, Box, Heading, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex w="100%" h="335px" bgImg="url(/Background.png)" bgPosition="100% 30%" bgSize="cover" bgRepeat="no-repeat" >
            <Flex w="100%" maxW={1160} mx="auto" justify="space-between" align="center">
                <Box>
                    <Heading color="white" fontWeight="500" fontSize="4xl">5 Continentes,<br /> infinitas possibilidades.</Heading>
                    <Text mt="5" color="white" fontSize="xl">Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou. </Text>
                </Box>
                <Box>
                    <Image maxW="417px" src="/Airplane.svg" alt="airplane" transform="translateY(48px)" />
                </Box>
            </Flex>
        </Flex>
    )
}