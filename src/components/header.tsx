'use client'
import { Button, Flex, Text } from "@chakra-ui/react"
import { MudeLogo } from "../images/mude-logo"

export function Header(){
   return(
      <Flex justifyContent="space-between">
         <Flex height="10rem" width="10rem" marginTop="-3rem">
         <MudeLogo />
         </Flex>
         <Text>INICIO</Text>
         <Text>SERVIÇOS</Text>
         <Text>PLANOS</Text>
         <Text>CIDADES</Text>
         <Button colorScheme="blue">LOGIN</Button>
      </Flex>
   )
}