import { Box, Heading, Stack, Text, Input, VStack, HStack, FormControl, FormLabel, InputGroup, Button } from "@chakra-ui/react"
import { useFormik, FormikProvider, Form, useField } from 'formik';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { signUpSchema } from "./schemas";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
}


function App() {
  const [showPassword, setShowPassword] = useState(false)

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(
        "Values : "
        , values)

      action.resetForm()
    }
  })






  return (




    <Box bg={"gray.100"} height={"100vh"} display={"flex"} alignItems={"baseline"} justifyContent={"center"}>

      <Stack spacing={8} mx={'auto'} bg={"gray.50"} mt={20}>


        {errors.email && touched.email ? (<Text mx={"auto"} color={'red'} fontSize={"small"}>{errors.email}</Text>) : null}
        {errors.password && touched.password ? (<Text mx={"auto"} color={'red'} fontSize={"small"}>{errors.password}</Text>) : null}
        {errors.confirmPassword && touched.confirmPassword ? (<Text mx={"auto"} color={'red'} fontSize={"small"}>{errors.confirmPassword}</Text>) : null}
        <Stack align={'left'} p={10} spacing={4}>
          <Heading>Welcome</Heading>
          <Text>Please fill this registration form</Text>
          <form action="" onSubmit={handleSubmit}>


            <Stack spacing={5} >
              <HStack>
                <Box>
                  <FormControl id="firstName">
                    <FormLabel
                    >FirstName</FormLabel>
                    <Input type="text"
                      autoComplete="off" name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></Input>



                  </FormControl>

                </Box>

                <Box>
                  <FormControl id="lastName">
                    <FormLabel>LastName</FormLabel>
                    <Input type="text" autoComplete="off" name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></Input>
                  </FormControl>
                </Box>
              </HStack>
              {errors.firstName && touched.firstName ? (<Text mx={"auto"} color={'red'} fontSize={"small"}>{errors.firstName}</Text>) : null}
              {errors.lastName && touched.lastName ? (<Text mx={"auto"} color={'red'} fontSize={"small"}>{errors.lastName}</Text>) : null}
              <FormControl id="email" isRequired>
                <FormLabel name="email ">Email address</FormLabel>
                <Input type="email" value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur} />
              </FormControl>

              <FormControl id="password" isRequired >
                <FormLabel >Password</FormLabel>
                <InputGroup gap={3}>

                  <Input name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type={showPassword ? 'text' : 'password'} />
                  <Button onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputGroup>

              </FormControl>



              <FormControl id="password" isRequired>
                <FormLabel >Confirm Password</FormLabel>
                <InputGroup>
                  <Input name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password" />

                </InputGroup>

              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>

            </Stack>
          </form>
        </Stack>
      </Stack>




    </Box >


  )
}

export default App
