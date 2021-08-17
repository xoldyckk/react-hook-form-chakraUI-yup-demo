import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Heading
      as="h1"
      isTruncated
      m={2}
      fontFamily="Permanent Marker"
      textAlign="center"
      fontSize={{ base: "24px", md: "40px", lg: "56px" }}
      color="deeppink"
      textShadow="1px 1px darkmagneta"
    >
      React Hook Form
    </Heading>
  );
};

export default Header;
