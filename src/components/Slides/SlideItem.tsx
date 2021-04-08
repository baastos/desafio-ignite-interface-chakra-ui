import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Link from 'next/link'

interface SlideItemProps {
    name: string;
    image: string;
    summary: string;
    url: string
}

export function SlideItem({ image, name, summary, url }: SlideItemProps) {
    return (
        <Flex
            w="100%"
            h={450}
            bg={`linear-gradient(0deg,
     rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), 
        url(${image})`}
            bgSize="cover"
            bgPosition="100% 50%"
            bgRepeat="no-repeat"
            direction="column"
            justify="center"
            align="center"
            textAlign="center"
        >
            <Link href={`continents/${url}`} passHref>
                <a>
                    <Heading color="brand.100" fontSize="5xl" fontWeight="700">{name}</Heading>
                    <Text fontSize="2xl" color="brand.100" fontWeight="700" mt="4">{summary}</Text>
                </a>

            </Link>


        </Flex>

    )
}

