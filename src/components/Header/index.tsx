import { Flex, IconButton, Icon } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { FaChevronLeft } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Link from "next/link";

export function Header() {
    const { asPath } = useRouter();
    const isDashboard = asPath === "/"

    return (
        <Flex p="6" h="100" w="100%" maxW={1160} mx="auto" align="center" justify="center" >
            {!isDashboard &&
                <Link href="/" passHref>
                    <IconButton
                        as="a"
                        display="flex"
                        justifySelf="start"
                        variant="unstyled"
                        aria-label="back to dashboard"
                        icon={<Icon fontSize={[20, 40]} as={FaChevronLeft} />}
                    />
                </Link>

            }

            <Flex flex="1" justify="center" align="center">
                <Logo />

            </Flex>
        </Flex>
    )
}



