import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Stack,
  Stat,
  StatLabel,
} from "@chakra-ui/react";

const initialData = {
  firstName: "",
  lastName: "",
  age: undefined,
  email: "",
  password: "",
};

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First Name cannot be empty."),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last Name cannot be empty."),
  age: yup.number().min(0).max(200).required("Age cannot be empty."),
  email: yup
    .string()
    .email("Email should have correct format.")
    .required("Email cannot be empty."),
  password: yup.string().min(8).max(20).required("Password cannot be empty."),
});

const FormPage = () => {
  const [data, setData] = useState(initialData);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      email: data.email,
      password: data.password,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const updateData = (newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  const onSubmit = (formInputData) => {
    updateData(formInputData);
  };

  return (
    <Box
      bg="white"
      p={4}
      color="black"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      marginX="auto"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.firstName}>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            {...register("firstName")}
          />
          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.lastName}>
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
          />
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.age}>
          <FormLabel htmlFor="age">Age</FormLabel>
          <Input
            id="age"
            name="age"
            type="number"
            placeholder="Age"
            {...register("age")}
          />
          <FormErrorMessage>
            {errors.age && errors.age.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
      <Stat mt={5}>
        <Stack
          p={4}
          borderWidth="3px"
          borderRadius="md"
          direction="column"
          align="flex-start"
        >
          <StatLabel>First Name: {data.firstName}</StatLabel>
          <StatLabel>Last Name: {data.lastName}</StatLabel>
          <StatLabel>Age: {data.age}</StatLabel>
          <StatLabel>Email: {data.email}</StatLabel>
          <StatLabel>Password: {data.password}</StatLabel>
        </Stack>
      </Stat>
    </Box>
  );
};

export default FormPage;
