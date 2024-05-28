import { VStack, IconButton, Box, Heading, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState, useEffect } from 'react';

function App() {
  
  const [todos,setTodos]=useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <VStack p='4'>
       <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} isRound="true" size='lg' alignSelf='flex-end' onClick={toggleColorMode} />
       <Box>
        <Heading mb='8' fontWeight='extrabold' size='2xl' bgGradient='linear(to-r, cyan.400, purple.400, pink.400)' bgClip='text'>Todo Application</Heading>
      </Box>
      <TodoList todos={todos} />
      <AddTodo />
    </VStack>
  );
}

export default App;
