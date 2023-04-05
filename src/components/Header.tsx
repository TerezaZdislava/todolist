import {Heading} from '@chakra-ui/react';

function Header() {
  return (
    // <Box bg="tomato" w="100%" p={4} color="white">
    <Heading size="md" bg="white" w="100%" p={4} color="black" style={{position: 'fixed'}}>
      To Do list
    </Heading>
    // </Box>
  );
}
export default Header;
