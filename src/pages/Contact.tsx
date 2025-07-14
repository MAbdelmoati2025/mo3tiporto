import {
  FormControl,
  Input,
  Textarea,
  VStack,
  Text,
} from "@chakra-ui/react";

interface Props {
  values: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setMessageLines: (lines: number) => void;
}

const ContactForm = ({ values, handleChange, handleBlur, setMessageLines }: Props) => {
  return (
    <VStack spacing={4} w="full">
      {/* Name */}
      <FormControl>
        <Input
          name="name"
          placeholder="Your Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="filled"
          size="md"
          bg="gray.700"
          _placeholder={{ color: "gray.400" }}
          focusBorderColor="#0BCEAF"
          borderRadius="md"
        />
      </FormControl>

      {/* Email */}
      <FormControl>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="filled"
          size="md"
          bg="gray.700"
          _placeholder={{ color: "gray.400" }}
          focusBorderColor="#0BCEAF"
          borderRadius="md"
        />
      </FormControl>

      {/* Subject */}
      <FormControl>
        <Input
          name="subject"
          placeholder="Subject"
          value={values.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="filled"
          size="md"
          bg="gray.700"
          _placeholder={{ color: "gray.400" }}
          focusBorderColor="#0BCEAF"
          borderRadius="md"
        />
      </FormControl>

      {/* Message */}
      <FormControl>
        <Textarea
          name="message"
          placeholder="Your Message"
          value={values.message}
          onChange={(e) => {
            handleChange(e);
            setMessageLines(e.target.value.split("\n").length);
          }}
          onBlur={handleBlur}
          rows={4}
          variant="filled"
          bg="gray.700"
          _placeholder={{ color: "gray.400" }}
          focusBorderColor="#0BCEAF"
          borderRadius="md"
          resize="none"
        />
      </FormControl>
    </VStack>
  );
};

export default ContactForm;
