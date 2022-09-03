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
        <Text fontWeight={"bold"} fontSize={["sm", "md"]}>
          Free shipping on all UK orders!
        </Text>
        <Stack direction="row">
          <Avatar
            name="Facebook"
            src={facebook}
            cursor={"pointer"}
            size={["sm"]}
          />
          <Avatar
            name="Instagram"
            size={["sm"]}
            src={instagram}
            cursor={"pointer"}
          />
          <Avatar
            name="pinterest"
            src={pinterest}
            cursor={"pointer"}
            size={["sm"]}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Promotions;
