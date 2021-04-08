import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, A11y, Virtual } from 'swiper'
import { Flex } from '@chakra-ui/react';
import { SlideItem } from './SlideItem';


SwiperCore.use([Navigation, Pagination, Autoplay, A11y, Virtual]);

interface ContinentProps {
    id: string;
    name: string;
    image: string;
    summary: string;
    url: string;
}

interface SlidesProps {
    continents: ContinentProps[]
}

export function Slides({ continents }: SlidesProps) {

    return (
        <Flex width="100%" maxW={1240} height={450} mx="auto" mb="10">

            <Swiper
                pagination={{ clickable: true }}
                navigation
                slidesPerView={1}
                autoplay={{ delay: 4000 }}
                style={{ width: "100%", flex: '1' }}
            >

                {continents.map(c => (
                    <SwiperSlide key={c.id}>

                        <SlideItem image={c.image} name={c.name} summary={c.summary} url={c.url} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </Flex>

    )
}

