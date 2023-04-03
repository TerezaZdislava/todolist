import {Heading, Box} from '@chakra-ui/react';

function Header() {
  return (
    // <Box bg="tomato" w="100%" p={4} color="white">
    <Heading as="h5" size="sm" bg="white" w="100%" p={4} color="black">
      To Do list
    </Heading>
    // </Box>
  );
}
export default Header;
