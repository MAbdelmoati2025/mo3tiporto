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
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useState } from "react";
import { validationSchema, FormValues } from "../utils/validation";
import { sendEmail } from "../utils/sendEmail";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const initialValues: FormValues = {
    name: "",
    email: "",
    subject: "",
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
        {/* Contact Info Card */}
        <Box
          bg="gray.800"
          p={6}
          rounded="lg"
          w="full"
          border="1px solid"
          borderColor="gray.700"
        >
          <Heading fontSize="xl" mb={4} color="#0BCEAF">
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
        </Box>

        {/* Contact Form */}
        <Box w="full">
          <Heading fontSize="2xl" color="#0BCEAF" mb={2}>
            ابعتلنا رسالة
          </Heading>
          <Text fontSize="md" color="gray.400" mb={6}>
            ابعت استفسارك أو طلبك واحنا هنتواصل معاك في أقرب وقت.
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
                  <Input
                    name="subject"
                    placeholder="عنdوان الرسالة"
                    value={values.subject}
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
