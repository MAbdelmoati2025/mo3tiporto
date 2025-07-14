import {
  Box,
  Button,
  useToast,
  HStack,
  VStack,
  useBreakpointValue,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { validationSchema, FormValues } from "../utils/validation";
import { sendEmail } from "../utils/sendEmail";

import ContactDetails from "../components/Contact/ContactDetails";
import ContactCodeLines from "../components/Contact/ContactCodeLines";
import ContactForm from "../components/Contact/ContactForm";

interface Props {
  setPage: (page: string) => void;
}

const Contact = ({ setPage }: Props) => {
  useEffect(() => {
    setPage("contact.ts");
  }, []);

  const toast = useToast();
  const [totalLines, setTotalLines] = useState(14);
  const [messageLines, setMessageLines] = useState(1);
  const isMobile = useBreakpointValue({ base: true, md: false });
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
          title: "Message Sent",
          description: "Your message has been sent successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        resetForm();
        setMessageLines(1);
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTotalLines(13 + messageLines);
  }, [messageLines]);

  return (
    <Box minH="100vh" p={{ base: 4, md: 10 }} bg="gray.900" color="white">
      <VStack spacing={8} align="start" maxW="800px" mx="auto">
        <Box>
          <Heading fontSize="3xl" color="#0BCEAF">
            Let's Get in Touch
          </Heading>
          <Text fontSize="md" mt={2} color="gray.400">
            Feel free to drop me a message below.
          </Text>
        </Box>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => {
            const errorMap: Record<number, string> = {};
            if (errors.name && touched.name) errorMap[10] = errors.name;
            if (errors.email && touched.email) errorMap[11] = errors.email;
            if (errors.subject && touched.subject)
              errorMap[10] = errors.subject;
            if (errors.message && touched.message)
              errorMap[13] = errors.message;

            return (
              <Form style={{ width: "100%" }}>
                <VStack spacing={6} align="stretch">
                  <ContactDetails />

                  <HStack align="flex-start" spacing={4} w="full">
                    <ContactCodeLines
                      totalLines={totalLines}
                      errorLines={Object.keys(errorMap).map(Number)}
                      errorMessages={errorMap}
                    />

                    <ContactForm
                      values={values}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setMessageLines={setMessageLines}
                    />
                  </HStack>

                  <Button
                    type="submit"
                    size="lg"
                    bg="#0BCEAF"
                    color="white"
                    _hover={{ bg: "#09a88d" }}
                    isLoading={loading}
                    loadingText="Sending..."
                    alignSelf="flex-start"
                  >
                    Send Message
                  </Button>
                </VStack>
              </Form>
            );
          }}
        </Formik>
      </VStack>
    </Box>
  );
};

export default Contact;
