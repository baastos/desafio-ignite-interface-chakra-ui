import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import { Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger } from "@chakra-ui/popover";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { RiInformationLine } from 'react-icons/ri'
import { Cities } from "../../components/Cities";

interface ContinentProps {

    continent: {
        name: string;
        description: string;
        summary: string;
        image: string;
        url: string;
        countries: number;
        languages: number;
        topCities: number;
        cities: {
            name: string;
            country: string;
            countryCode: string;
            image: string;
        }[]
    }
}

export default function Continent({ continent }: ContinentProps) {
    return (
        <>
            <Head>
                <title>Worldrip | {continent.name}</title>
            </Head>
            <Header />
            <Flex
                w="100%"
                h={["150px", "500px"]}
                bgImage={`url(${continent.image})`}
                bgPosition={["100% 40%", "100% 50%"]}
                bgRepeat="no-repeat"
                bgSize="cover">

                <Flex
                    align={["center",
                        "flex-end"]}
                    justify={["center",
                        "flex-start"]}
                    mb="20"
                    w="100%"
                    maxW={1160}
                    mx="auto"
                >
                    <Heading
                        color="brand.100"
                        fontWeight="600"
                        fontSize={["2xl", "5xl"]}
                        mb={[0, 16]}
                    >{continent.name}</Heading>
                </Flex>
            </Flex>
            <Flex direction="column" maxW={1160} mx="auto" px={["5", "20"]} mb="10">
                <Grid align="center" templateColumns={["1fr", "1.2fr 1fr"]} gap={[5, 20]} my={[8, 20]}>
                    <Text fontSize={["lg", "2xl"]} color="brand.700" textAlign="justify" >
                        {continent.description}
                    </Text>

                    <Stack direction="row" justify="space-between" align="center" >
                        <Box textAlign="center">
                            <Heading
                                color="yellow.500"
                                fontWeight="600"
                                fontSize={["2xl",
                                    "5xl"]}>
                                {continent.languages}
                            </Heading>
                            <Text fontSize={["sm", "md"]} color="brand.700" fontWeight="600">Países</Text>
                        </Box>

                        <Box textAlign="center">
                            <Heading color="yellow.500" fontWeight="600" fontSize={["2xl", "5xl"]}>{continent.countries}</Heading>
                            <Text color="brand.700" fontSize={["sm", "md"]} fontWeight="600">Linguas</Text>
                        </Box>

                        <Box textAlign="center">
                            <Heading color="yellow.500" fontWeight="600" fontSize={["2xl", "5xl"]}>{continent.topCities}</Heading>
                            <Text
                                fontSize={["sm", "md"]}
                                color="brand.700"
                                fontWeight="600">
                                cidades {continent.topCities - continent.cities.length}+
                                    <Popover >
                                    <PopoverTrigger>
                                        <IconButton
                                            w="10px"
                                            h="10px"

                                            aria-label={continent.name}
                                            bg="transparent"
                                            p="0"
                                            m="0">
                                            <Icon
                                                as={RiInformationLine}
                                                color="brand.700"
                                                fontSize={16}

                                            />
                                        </IconButton>
                                    </PopoverTrigger >
                                    <PopoverContent fontSize={["sm", "md"]} color="text" borderColor="yellow.300">
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverBody>São mais de {continent.topCities} cidades</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Text>
                        </Box>
                    </Stack>
                </Grid>
                <Cities cities={continent.cities} topCities={continent.topCities} />

            </Flex>

        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await api.get('/continents');

    const continents = response.data;

    const paths = continents.map(continent => ({
        params: {
            url: continent.url
        },
    }))
    return {
        paths,
        fallback: true
    }

}

export const getStaticProps: GetStaticProps<ContinentProps> = async (context) => {

    const { url } = context.params;

    const response = await api.get('/continents');

    const continents = response.data;

    const continent = continents.find(continent => continent.url === url);

    return {
        props: {
            continent
        },
        revalidate: 1800
    }
}