import { Grid, GridItem } from "@chakra-ui/react";
import { TypeItem } from "./TypeItem";

export function TravelTypes() {
    return (
        <Grid
            flexWrap="wrap"
            gridTemplateColumns="repeat(5,1fr)"
            gap={5}
            maxW={1160}
            width="100%"
            mx="auto"
            justify="space-between"
            mt="20"
        >
            <GridItem>
                <TypeItem icon="cocktail" title="Vida noturna" />
            </GridItem>

            <GridItem>
                <TypeItem icon="beach" title="Praia" />

            </GridItem>

            <GridItem>
                <TypeItem icon="building" title="Moderno" />

            </GridItem>

            <GridItem>
                <TypeItem icon="museum" title="Clássico" />

            </GridItem>

            <GridItem>
                <TypeItem icon="earth" title="E mais..." />

            </GridItem>






        </Grid>
    )
}