import {
  Box,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

const introduction = {
  title: "Funshion",
  description:
    "It is long established fact that a reader will be distracted by the readable content of page when lookign at its layout",
};
const help = {
  title: "Need help",
  description: (
    <Box>
      <Text cursor="pointer">Support</Text>
      <Text cursor="pointer">Get Started</Text>
      <Text cursor="pointer">Terms of like</Text>
      <Text cursor="pointer">Privacy Policy</Text>
    </Box>
  ),
};
const company = {
  title: "Company",
  description: (
    <Box>
      <Text cursor="pointer">Support</Text>
      <Text cursor="pointer">Get Started</Text>
      <Text cursor="pointer">Terms of like</Text>
      <Text cursor="pointer">Privacy Policy</Text>
    </Box>
  ),
};
const support = {
  title: "Support",
  description: (
    <Box>
      <Text cursor="pointer">Support</Text>
      <Text cursor="pointer">Get Started</Text>
      <Text cursor="pointer">Terms of like</Text>
      <Text cursor="pointer">Privacy Policy</Text>
    </Box>
  ),
};

const components = [introduction, help, company, support];

const Footer = () => {
  return (
    <>
      <Box
        bg="black"
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"space-around"}
        height={["auto", "60vh"]}
        px="24"
        marginTop={"10vh"}
      >
        <Box
          display={["none", "flex"]}
          justifyContent="center"
          alignItems={"center"}
          color="white"
          gap={16}
          borderBottom="2px"
          height={"80%"}
        >
          {components.map((component) => {
            return (
              <Box width={["100%", "20%"]}>
                <Text fontWeight={"bold"}>{component.title}</Text>
                <Text>{component.description}</Text>
              </Box>
            );
          })}
        </Box>

        {components.map((component) => {
          return (
            <Accordion
              defaultIndex={[1]}
              allowMultiple
              display={["inline", "none"]}
            >
              <AccordionItem borderTop="none">
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" color="white">
                      {component.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="white">
                  {component.description}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          );
        })}
        <Text
          marginTop={"4"}
          color="white"
          fontSize={["xs", "md"]}
          marginBottom={"2"}
        >
          Copyright &copy; Funshion.All Rights Reserved
        </Text>
      </Box>
    </>
  );
};

export default Footer;
