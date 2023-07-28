'use client'
import { Button, Flex, Image, Text } from "@chakra-ui/react"

export default function Header() {
   return (
      <Flex
         alignItems="center"
         justifyContent="space-between"
         padding="2rem"
         mb="0.5rem"
      >
         <Flex>
            <Image src="" />
         </Flex>
         <Flex gap="4rem">
            <Text>INÍCIO</Text>
            <Text>SERVIÇOS</Text>
            <Text>AGENTES</Text>
            <Text>BLOG</Text>
         </Flex>
         <Flex>
            <Button colorScheme='teal' variant='outline'>Login</Button>
         </Flex>
      </Flex>
   )
}