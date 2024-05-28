import React from 'react'
import { VStack, StackDivider, HStack, Text, Spacer, IconButton, Badge } from '@chakra-ui/react';
import { FaTrash } from "react-icons/fa";




const TodoList = ({todos}) => {
  if(!todos.length) {
  return (
    <Badge>
      No Todos, yay!!!
    </Badge>
  );
}

return (
  <VStack divider={<StackDivider />} borderWidth='2px' borderColor='gray.100' borderRadius='lg' padding='4' w='100%' maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}} alignItems='stretch'>

  </VStack>
);
}

export default TodoList
