import React from 'react'
// Next.jsComponent
import { useRouter } from 'next/router'
// FormModelSelect
import { InputType, DataType } from '../util/type'
// ReactFormTool
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
// Styled-component
import {
  Label,
  Columns,
  Column,
  Input,
  Main,
  Textarea,
  LabelBox,
  InputBox,
  Link,
  Text,
  FormButton,
  Title,
  Form,
  Error,
  Lato,
} from './styles'

// FormSelectStyle
const customStyles = {
  option: provided => ({
    ...provided,
    fontFamily: 'Calibre',
    color: '#333333',
    borderRadius: 0,
    border: '#fff',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#5B76A9',
      color: '#fff',
      border: '#fff',
    },
  }),
  control: provided => ({
    ...provided,
    border: 0,
    boxShadow: 'none',
    fontFamily: 'Calibre',
    color: '#333333',
    height: 36,
    borderRadius: 0,
    outline: 'none',
  }),
  menuList: provided => ({
    ...provided,
    border: '#fff',
    paddingTop: 0,
    paddingBottom: 0,
  }),
  menu: provided => ({
    ...provided,
    marginTop: 0,
  }),
  dropdownIndicator: defaultStyles => ({
    ...defaultStyles,
    color: '#333333',
  }),
  // removes the "stick"
  indicatorSeparator: () => {},
}

interface SelectData {
  data: DataType
}

// FormComponent
const ContactForm: React.FC<SelectData> = (props: SelectData) => {
  // NextRouter
  const router = useRouter()

  // ReactSelect
  const { register, errors, handleSubmit, reset, control, formState, watch } = useForm<InputType>()

  // WatchGetValue
  const Firstname = watch('firstname')
  const Email = watch('email')
  const Company = watch('company')
  const IndustrySelect = watch('industry')
  const Privacy = watch('privacy')

  // ClickSuccessful
  const onSubmit = (data: InputType) => {
    // Transition to message page.
    router.push('/message')
    // InputReset
    reset()
  }

  return (
    <Main>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Columns>
          <Column>
            <Title>Contact us</Title>
          </Column>
        </Columns>
        <Columns>
          <Column>
            <Label htmlFor="firstname">
              First name<Lato>*</Lato>
            </Label>
            <Input
              type="text"
              name="firstname"
              id="firstname"
              ref={register({
                required: { value: true, message: 'Required' },
                maxLength: { value: 50, message: 'Too Long!' },
                minLength: { value: 2, message: 'Too Short!' },
              })}
            />
            {errors.firstname ? <Error>{errors.firstname.message}</Error> : null}
          </Column>

          <Column>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              type="text"
              name="lastname"
              id="lastname"
              ref={register({
                maxLength: { value: 50, message: 'Too Long!' },
                minLength: { value: 2, message: 'Too Short!' },
              })}
            />
            {errors.lastname ? <Error>{errors.lastname.message}</Error> : null}
          </Column>
        </Columns>
        <Columns>
          <Column>
            <Label htmlFor="email">
              Email<Lato>*</Lato>
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              ref={register({
                required: { value: true, message: 'Required' },
                maxLength: { value: 50, message: 'Too Long!' },
                minLength: { value: 2, message: 'Too Short!' },
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please enter your email address correctly.',
                },
              })}
            />
            {errors.email ? <Error>{errors.email.message}</Error> : null}
          </Column>
          <Column>
            <Label htmlFor="jobtitle">Job title</Label>
            <Input
              type="text"
              name="jobtitle"
              id="jobtitle"
              ref={register({
                maxLength: { value: 50, message: 'Too Long!' },
                minLength: { value: 2, message: 'Too Short!' },
              })}
            />
            {errors.jobtitle ? <Error>{errors.jobtitle.message}</Error> : null}
          </Column>
        </Columns>
        <br />
        <Columns>
          <Column>
            <Label htmlFor="company">
              Company<Lato>*</Lato>
            </Label>
            <Input
              type="text"
              name="company"
              id="company"
              ref={register({
                required: { value: true, message: 'Required' },
                maxLength: { value: 50, message: 'Too Long!' },
                minLength: { value: 2, message: 'Too Short!' },
              })}
            />
            {errors.company ? <Error>{errors.company.message}</Error> : null}
          </Column>
          <Column>
            <Label htmlFor="industry">
              Industry<Lato>*</Lato>
            </Label>
            <Controller
              defaultValue={props.data.industry[0]}
              styles={customStyles}
              options={props.data.industry}
              control={control}
              name="industry"
              instanceId="industry"
              inputRef={register({
                required: { value: true, message: 'Required' },
              })}
              as={Select}
            />
            {errors.industry ? <Error>{errors.industry.message}</Error> : null}
          </Column>
        </Columns>
        <Columns>
          <Column>
            <Label htmlFor="country">
              Country<Lato>*</Lato>
            </Label>
            <Controller
              defaultValue={props.data.country[0]}
              styles={customStyles}
              options={props.data.country}
              control={control}
              name="country"
              instanceId="country"
              inputRef={register({
                required: { value: true, message: 'Required' },
              })}
              as={Select}
            />

            {errors.industry ? <Error>{errors.industry.message}</Error> : null}
          </Column>
          <Column>
            <Label htmlFor="operating">Operating geography</Label>
            <Controller
              defaultValue={props.data.operating[0]}
              styles={customStyles}
              options={props.data.operating}
              control={control}
              name="operating"
              instanceId="operating"
              inputRef={register({
                required: { value: true, message: 'Required' },
              })}
              as={Select}
            />
            {errors.operating ? <Error>{errors.operating.message}</Error> : null}
          </Column>
        </Columns>
        <br />
        <Columns>
          <Column>
            <Label htmlFor="contents">
              What would you like to talk about<Lato>?</Lato>
            </Label>
            <Textarea
              name="contents"
              id="contents"
              ref={register({
                maxLength: { value: 500, message: 'Too Long!' },
              })}
            />
            {errors.contents ? <Error>{errors.contents.message}</Error> : null}
          </Column>
        </Columns>
        <Columns>
          <Column>
            <LabelBox htmlFor="privacy">
              <InputBox
                type="checkbox"
                name="privacy"
                ref={register({ required: 'You must agree to privacy' })}
              />
              <Text>
                By submitting this form I accept&ensp;
                <Link href="https://www.modularbank.co/privacy-policy/">
                  privacy policy and cookie policy
                </Link>
                .
              </Text>
            </LabelBox>
            {errors.privacy ? <Error>{errors.privacy.message}</Error> : null}

            <LabelBox htmlFor="newsletter">
              <InputBox type="checkbox" name="newsletter" id="newsletter" />
              <Text>I would like to receive your newsletter.</Text>
            </LabelBox>
          </Column>
          <Column>
            <FormButton
              className={
                Firstname && Email && Company && IndustrySelect && Privacy ? 'active' : 'passive'
              }
              type="submit"
              disabled={formState.isSubmitting}
            >
              Send
            </FormButton>
          </Column>
        </Columns>
      </Form>
    </Main>
  )
}

export default ContactForm
