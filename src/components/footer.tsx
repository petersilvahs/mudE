'use client'
import { Flex, Image, Input, Text } from "@chakra-ui/react"
import { MudeLogo } from "../images/mude-logo"

export function Footer() {
   return (
      <Flex
         position="absolute"
         bottom="0"
         left="6rem"
         padding="2rem"
      >
         <Flex flexDirection="column">
            <Flex height="10rem" width="10rem" marginBottom="-3rem">
               <MudeLogo />
            </Flex>
            <Text>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               <br />
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               <br />
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               <br />
               nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Flex height="2rem" width="2rem" gap="1rem">
               <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook logo" />
               <Image src="https://img.freepik.com/icones-gratis/instagram_318-566741.jpg" alt="Instagram logo" />
               <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f8dc5431091769.5640f77be5837.png" alt="X logo" />
               <Image src="https://img.freepik.com/icones-gratis/linkedin_318-157468.jpg" alt="Linkedin logo" />
            </Flex>
            <Text>Copyright © 2023 MudE.</Text>
         </Flex>
         <Flex flexDirection="column" marginLeft="10rem" marginTop="2.5rem">
            <Text>Home</Text>
            <Text>Serviços</Text>
            <Text>Cidades disponíveis</Text>
            <Text>Planos disponíveis</Text>
            <Text>Cadastre-se para dirigir</Text>
         </Flex>
         <Flex flexDirection="column" marginLeft="10rem" marginTop="2.5rem">
            <Text>Home</Text>
            <Text>Serviços</Text>
            <Text>Cidades disponíveis</Text>
            <Text>Planos disponíveis</Text>
            <Text>Cadastre-se para dirigir</Text>
         </Flex>
         <Flex flexDirection="column" marginLeft="10rem" marginTop="2.5rem">
            <Text>Inscreva-se</Text>
            <Input
               borderRadius="0.5rem"
               placeholder="nome@gmail.com"
            />
         </Flex>
      </Flex>
   )
}