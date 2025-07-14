import {
  VStack,
  Image,
  Text,
  Wrap,
  WrapItem,
  Link,
  useColorModeValue,
  Box,
  HStack,
} from "@chakra-ui/react";
import ProjectTech from "./ProjectTech";

interface Props {
  ImageURL: string;
  Title: string;
  Description: string;
  Technologies: string[];
  Source?: string;
  Demo?: string;
}

const Project = ({
  ImageURL,
  Title,
  Description,
  Technologies,
  Source,
  Demo,
}: Props) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const secondaryText = useColorModeValue("gray.600", "gray.300");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const accentColor = useColorModeValue("blue.500", "#0BCEAF");
  const techBorderColor = useColorModeValue("blue.500", "#0BCEAF");

  return (
    <Box width="100vw" px={[4, 10]} py={6}>
      <VStack
        bg={cardBg}
        borderRadius="2xl"
        width="100%"
        maxW="100%"
        height="100%"
        border="1px solid"
        borderColor={borderColor}
        overflow="hidden"
        boxShadow="lg"
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{
          transform: "scale(1.01)",
          boxShadow: "xl",
        }}
      >
        <Image
          width="100%"
          height={["200px", "300px"]}
          objectFit="cover"
          src={ImageURL}
          alt={`${Title} project image`}
        />
        <VStack align="start" width="100%" padding={6} spacing={4}>
          <Text fontWeight="bold" fontSize="2xl" color={textColor}>
            {Title}
          </Text>
          <Text color={secondaryText} fontSize="md">
            {Description}
          </Text>

          <Wrap spacing={2} marginTop={2}>
            {Technologies.map((t) => (
              <WrapItem key={t}>
                <ProjectTech
                  label={t}
                  borderColor={techBorderColor}
                  textColor={textColor}
                />
              </WrapItem>
            ))}
          </Wrap>

          {(Source || Demo) && (
            <HStack spacing={4} pt={3}>
              {Source && (
                <Link
                  href={Source}
                  color={accentColor}
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="sm"
                  fontWeight="bold"
                  _hover={{ textDecoration: "underline" }}
                >
                  🔗 Source Code
                </Link>
              )}
              {Demo && (
                <Link
                  href={Demo}
                  color={accentColor}
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="sm"
                  fontWeight="bold"
                  _hover={{ textDecoration: "underline" }}
                >
                  🚀 Live Demo
                </Link>
              )}
            </HStack>
          )}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Project;
