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
    <Box width="100%" maxW="400px" px={2} py={4}>
      <VStack
        bg={cardBg}
        borderRadius="xl"
        width="100%"
        height="100%"
        border="1px solid"
        borderColor={borderColor}
        overflow="hidden"
        boxShadow="md"
        transition="all 0.3s ease"
        _hover={{
          transform: "scale(1.02)",
          boxShadow: "lg",
        }}
      >
        <Image
          width="100%"
          height="180px"
          objectFit="cover"
          src={ImageURL}
          alt={`${Title} project image`}
        />
        <VStack align="start" width="100%" padding={4} spacing={3}>
          <Text fontWeight="bold" fontSize="xl" color={textColor}>
            {Title}
          </Text>
          <Text color={secondaryText} fontSize="sm">
            {Description}
          </Text>

          <Wrap spacing={2}>
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
            <HStack spacing={4} pt={2}>
              {Source && (
                <Link
                  href={Source}
                  color={accentColor}
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="sm"
                  fontWeight="bold"
                >
                  Source
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
                >
                  Demo
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
