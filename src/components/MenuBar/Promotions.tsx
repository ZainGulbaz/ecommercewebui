import { Box, Avatar, Stack, Text } from "@chakra-ui/react";
import instagram from "../../assets/instagram.jfif";
import facebook from "../../assets/facebook.png";
import pinterest from "../../assets/pinterest.png";

const Promotions = () => {
  return (
    <>
      <Box
        bg="black"
        w="100%"
        py={4}
        color="white"
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Text fontWeight={"bold"} fontSize={["xs", "md"]}>
          Free shipping on all UK orders!
        </Text>
        <Stack direction="row">
          <Avatar
            name="Facebook"
            src={facebook}
            cursor={"pointer"}
            size={["xs", "sm"]}
          />
          <Avatar
            name="Instagram"
            size={["xs", "sm"]}
            src={instagram}
            cursor={"pointer"}
          />
          <Avatar
            name="pinterest"
            src={pinterest}
            cursor={"pointer"}
            size={["xs", "sm"]}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Promotions;
