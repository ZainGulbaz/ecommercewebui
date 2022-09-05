import { Box, Text, Image, Button, Stack } from "@chakra-ui/react";
import toppick from "../../assets/toppick.png";
import tracking from "../../assets/tracking.svg";

const TopPicks = () => {
  let deliveryArr = [1, 2, 3, 4];
  return (
    <>
      <Box
        display={"flex"}
        flexDir={["column", "row"]}
        justifyContent={["center", "space-around"]}
        alignItems={"center"}
        height={["auto", "80vh"]}
        wordBreak={"break-word"}
        px={8}
        gap={16}
        mt={4}
      >
        <Box flex={1}>
          <Text fontSize={["md", "4xl"]} fontWeight="bold">
            Top Designers Pick
          </Text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            nostrum optio quis voluptatibus deserunt consequuntur aliquam
            perferendis cum nesciunt, quidem dolor quasi vel facilis velit nobis
            dolorum ipsum molestias veniam?
          </p>
          <Button
            bgColor={"#F09522"}
            size="md"
            width={["50%", "20%"]}
            mt={8}
            color="white"
            _hover={{ backgroundColor: "black" }}
          >
            Shop Now
          </Button>
          <Box
            bgColor={"black"}
            color="white"
            px={8}
            py={4}
            marginTop={8}
            width={["100%", "50%"]}
          >
            <Text fontWeight={"bold"}>50% Discount</Text>
            <Text fontSize={["md", "4xl"]} fontWeight={"bold"}>
              05 : 72 : 35 : 20
            </Text>
            <Stack direction="row" gap={8}>
              <Text fontSize="xs">Days</Text>
              <Text fontSize="xs">Hours</Text>
              <Text fontSize="xs">Minutes</Text>
              <Text fontSize="xs">Seconds</Text>
            </Stack>
          </Box>
        </Box>
        <Box flex={1}>
          <Image src={toppick} boxSize={["200px", "auto"]} />
        </Box>
      </Box>
      <Box display={"flex"} gap="8" p={4} marginTop={12}>
        {deliveryArr.map((delivery) => {
          return (
            <Stack direction="row">
              <Image src={tracking} />
              <Box lineHeight={"15px"}>
                <Text
                  fontWeight="bold"
                  fontSize={["xs", "md"]}
                  casing={"uppercase"}
                >
                  Fast Delivery
                </Text>
                <Text fontSize={["xs", "md"]}>
                  Lorem ipsum dolor sit amet consectetur
                </Text>
              </Box>
            </Stack>
          );
        })}
      </Box>
    </>
  );
};

export default TopPicks;
