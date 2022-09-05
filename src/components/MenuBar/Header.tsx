import { Box, Text, Fade, Collapse } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { RiBriefcaseLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDisclosure } from "@chakra-ui/react";
const views = ["Home", "About", "Shop", "Pages", "Blog"];
const icons = [
  <FiSearch size="1.7em" style={{ cursor: "pointer" }} />,
  <BsPersonCircle size="1.7em" style={{ cursor: "pointer" }} />,
  <RiBriefcaseLine size="1.7em" style={{ cursor: "pointer" }} />,
];

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box
        display={"flex"}
        justifyContent="space-around"
        alignItems={"center"}
        shadow="md"
        height={"16"}
      >
        <Text fontSize={["md", "3xl"]} fontWeight={"bold"}>
          Funshion
        </Text>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={10}
        >
          <Box display={["none", "flex"]} gap={"4"}>
            {views.map((view) => (
              <Text cursor="pointer">{view}</Text>
            ))}
          </Box>
          <Box display={["none", "flex"]} gap={"4"}>
            {icons.map((icon) => icon)}
          </Box>
        </Box>
        <Box display={["inline", "none"]} onClick={onToggle}>
          <GiHamburgerMenu size="1.7em" cursor="pointer" />
        </Box>
      </Box>
      <Collapse in={isOpen}>
        <Box
          display={["flex", "none"]}
          flexDirection="column"
          justifyContent={"center"}
          gap={3}
          shadow="md"
          py={4}
          px={8}
        >
          <Box>
            {views.map((view) => (
              <Text cursor="pointer" fontSize={"md"}>
                {view}
              </Text>
            ))}
          </Box>
          <Box display={["flex"]} gap={"4"}>
            {icons.map((icon) => icon)}
          </Box>
        </Box>
      </Collapse>
    </>
  );
};
export default Header;
