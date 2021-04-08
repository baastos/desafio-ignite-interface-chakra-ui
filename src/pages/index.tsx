import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'
import { Slides } from '../components/Slides';

import Head from 'next/head'

import { Box, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { api } from '../services/api';


interface ContinentProps {
  id: string;
  name: string;
  image: string;
  summary: string;
  url: string;
}

export default function Home() {

  const [continents, setContinents] = useState<ContinentProps[]>([]);

  useEffect(() => {
    async function loadContinents() {
      const response = await api.get('continents');
      setContinents(response.data);
    }
    loadContinents()
  }, []);

  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Header />

      <Banner />

      <TravelTypes />

      <Box w={["60px", "90px"]} mx="auto" h="2px" bg="brand.700" my={["9", "20"]} />

      <Heading
        mb={["5", "14"]}
        fontSize={["lg", "4xl"]}
        lineHeight="10"
        fontWeight="500"
        textAlign="center"
        color="brand.700">
        Vamos nessa?<br />
        <br />
        Então escolha seu continente
        </Heading>

      <Slides continents={continents} />
    </>
  )
}
