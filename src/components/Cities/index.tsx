
import { Grid, Heading } from '@chakra-ui/react'

import City from './City'

interface CitiesProps {
  topCities: number;
  cities: {
    name: string;
    country: string;
    countryCode: string;
    image: string;
  }[]
}

export function Cities({ cities, topCities }: CitiesProps) {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">Cidades +{topCities}</Heading>
      <Grid templateColumns={["1fr", "repeat(4, 1fr)"]} gap={['20px', '45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>
        {cities.map((city, idx) => (
          <City
            key={idx}
            name={city.name}
            country={city.country}
            countryCode={city.countryCode}
            image={city.image}
          />
        ))}
      </Grid>
    </>
  )
}