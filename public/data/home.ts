import {
  Box,
  Button,
  useToast,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  HStack,
  Input,
  Textarea,
  Link,
  Image,
  Divider,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useState } from "react";
import { validationSchema, FormValues } from "../utils/validation";
import { sendEmail } from "../utils/sendEmail";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const initialValues: FormValues = {
    name: "",
    email: "",
    subject: "CodeX Client",
    message: "",
  };

  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    setLoading(true);
    try {
      const result = await sendEmail(values);
      if (result.status === 200) {
        toast({
          title: "تم الإرسال",
          description: "تم إرسال رسالتك بنجاح، هنرد عليك قريب.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        resetForm();
      }
    } catch (error) {
      toast({
        title: "حصل خطأ",
        description: "في مشكلة أثناء إرسال الرسالة، حاول تاني.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box minH="100vh" p={{ base: 4, md: 10 }} bg="gray.900" color="white">
      <VStack spacing={10} align="start" maxW="800px" mx="auto">
        <Box textAlign="center" w="full">
          <Image
            src="/assets/WhatsApp Image 2025-06-22 at 17.04.14_e8e43668.jpg"
            alt="CodeX Logo"
            borderRadius="full"
            boxSize="120px"
            mx="auto"
            mb={4}
          />
          <Heading fontSize="2xl" color="#0BCEAF">
            تواصل مع CodeX Academy
          </Heading>
          <Text fontSize="md" color="gray.400" mt={2}>
            احنا دايمًا جاهزين نرد على استفساراتك 💬
          </Text>
        </Box>

        {/* Contact Info */}
        <Box
          bg="gray.800"
          p={6}
          rounded="lg"
          w="full"
          border="1px solid"
          borderColor="gray.700"
        >
          <Heading fontSize="lg" mb={4} color="#0BCEAF">
            بيانات التواصل
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
            <HStack>
              <Icon as={IoMdMail} color="cyan.400" />
              <Text>codexacademy50@gmail.com</Text>
            </HStack>
            <HStack>
              <Icon as={FaPhoneAlt} color="cyan.400" />
              <Text>+20 102 207 5809</Text>
            </HStack>
            <HStack>
              <Icon as={FaLocationDot} color="cyan.400" />
              <Text>Maadi, Cairo, Egypt</Text>
            </HStack>
          </SimpleGrid>

          <Divider my={4} borderColor="gray.600" />

          <Heading fontSize="lg" mb={2} color="#0BCEAF">
            تابعنا على السوشيال ميديا
          </Heading>
          <HStack spacing={6}>
            <Link href="https://www.facebook.com/profile.php?id=61572621389592" isExternal>
              <Icon as={FaFacebook} w={6} h={6} color="blue.400" />
            </Link>
            <Link href="https://www.instagram.com/codex__academy?igsh=bXByeWl4c3VuM3h3" isExternal>
              <Icon as={FaInstagram} w={6} h={6} color="pink.400" />
            </Link>
            <Link href="https://www.tiktok.com/@codexacademy1?_t=ZS-8xVhNzXXq6R&_r=1" isExternal>
              <Icon as={FaTiktok} w={6} h={6} color="white" />
            </Link>
          </HStack>
        </Box>

        {/* Contact Form */}
        <Box w="full">
          <Heading fontSize="xl" color="#0BCEAF" mb={2}>
            ابعتلنا رسالة
          </Heading>
          <Text fontSize="sm" color="gray.400" mb={6}>
            اكتب سؤالك أو رسالتك واحنا هنتواصل معاك بسرعة.
          </Text>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form style={{ width: "100%" }}>
                <VStack spacing={4}>
                  <Input
                    name="name"
                    placeholder="اسمك"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    bg="gray.800"
                    border="1px solid"
                    borderColor="gray.700"
                    _focus={{ borderColor: "#0BCEAF" }}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="الإيميل بتاعك"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    bg="gray.800"
                    border="1px solid"
                    borderColor="gray.700"
                    _focus={{ borderColor: "#0BCEAF" }}
                  />
                  <Textarea
                    name="message"
                    placeholder="الرسالة"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    bg="gray.800"
                    border="1px solid"
                    borderColor="gray.700"
                    _focus={{ borderColor: "#0BCEAF" }}
                  />
                  <Button
                    type="submit"
                    size="md"
                    bg="#0BCEAF"
                    color="white"
                    _hover={{ bg: "#09a88d" }}
                    isLoading={loading}
                    loadingText="جار الإرسال..."
                    alignSelf="flex-start"
                  >
                    إرسال الرسالة
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
      </VStack>
    </Box>
  );
};

export default Contact;
