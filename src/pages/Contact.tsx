import {
  Box,
  Button,
  useToast,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useState } from "react";
import { validationSchema, FormValues } from "../utils/validation";
import { sendEmail } from "../utils/sendEmail";
import ContactForm from "../components/Contact/ContactForm";

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
      <VStack spacing={6} align="start" maxW="600px" mx="auto">
        <Box>
          <Heading fontSize="2xl" color="#0BCEAF">
            تواصل معانا
          </Heading>
          <Text mt={2} color="gray.400">
            ابعتلنا رسالتك واحنا هنرد عليك في أسرع وقت /new
            ادخل بياناتك
          </Text>
        </Box>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form style={{ width: "100%" }}>
              <VStack spacing={4}>
                <ContactForm
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setMessageLines={() => {}}
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
      </VStack>
    </Box>
  );
};

export default Contact;
