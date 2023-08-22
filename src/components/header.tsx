'use client'
import { Button, Flex, Text } from "@chakra-ui/react"
import { MudeLogo } from "../images/mude-logo"

export function Header(){
   return(
      <Flex justifyContent="space-between">
         <Flex height="10rem" width="10rem" marginTop="-3rem">
         <MudeLogo />
         </Flex>
         <Text color="#110229">INICIO</Text>
         <Text color="#110229">SERVIÇOS</Text>
         <Text color="#110229">PLANOS</Text>
         <Text color="#110229">CIDADES</Text>
         <Button color="#1d267a">LOGIN</Button>
      </Flex>
   )
}