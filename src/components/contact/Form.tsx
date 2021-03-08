import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import Selects from 'react-select'
import {
  Label,
  Columns,
  Column,
  Input,
  Inquiry,
  Textarea,
  CheckLabel,
  CheckInput,
  Link,
  CheckText,
  FormButton,
} from './styles'

interface ContactInputs {
  firstname: string
  lastname: string
  email: string
  jobtitle: string
  company: string
  industry: string
  country: string
  geography: string
  contents: string
  privacy: boolean
  newsletter: boolean
}

const Industry = [
  { value: 'Automotive', label: 'Automotive' },
  { value: 'Banking', label: 'Banking' },
  { value: 'Consulting', label: 'Consulting' },
  { value: 'Finance', label: 'Finance' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'Media/PR', label: 'Media/PR' },
  { value: 'Retail', label: 'Retail' },
  { value: 'Telecommunication', label: 'Telecommunication' },
  { value: 'Other', label: 'Other' },
]

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: '#4a4a4a',
    borderRadius: 0,
    backgroundColor: 'white',
    '&:hover': {
      // Overwrittes the different states of border
      backgroundColor: '#5B76A9',
      color: '#fff',
    },
  }),
  control: (provided, state, base) => ({
    ...provided,
    ...base,
    border: 0,
    // This line disable the blue border
    boxShadow: 'none',
    position: 'relative',
    height: 36,
    borderRadius: 0,
    outline: 'none',
  }),
  menuList: (provided, state) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: 0,
  }),
  dropdownIndicator: defaultStyles => ({
    ...defaultStyles,
    '& svg': { display: 'none' },
    '&::before': {
      border: '…',
      transform: 'rotate(…)',
    },
    '&::after': {
      border: '…',
      transform: 'rotate(…)',
    },
  }),
  indicatorSeparator: () => {}, // removes the "stick"
}

const Form = () => {
  const { register, errors, handleSubmit, reset, control } = useForm<ContactInputs>()
  const onSubmit = (data: ContactInputs) => {
    console.log(data)
    reset()
  }

  return (
    <Inquiry>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Columns>
          <Column>
            <Label htmlFor="firstname">First name*</Label>
            <Input
              type="text"
              name="firstname"
              id="firstname"
              ref={register({
                required: { value: true, message: 'first name is required' },
                maxLength: { value: 50, message: 'first name is too Long!' },
                minLength: { value: 3, message: 'must be 3 chars' },
              })}
            />
            {errors.firstname ? <div>errors.firstname.message</div> : null}
          </Column>
          <Column>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              type="text"
              name="lastname"
              id="lastname"
              ref={register({
                required: { value: true, message: 'last name is required' },
                maxLength: { value: 50, message: 'last name is too Long!' },
                minLength: { value: 3, message: 'must be 3 chars' },
              })}
            />
            {errors.lastname ? <div>errors.lastname.message</div> : null}
          </Column>
        </Columns>

        <Columns>
          <Column>
            <Label htmlFor="email">Email*</Label>
            <Input
              type="email"
              name="email"
              id="email"
              ref={register({
                required: { value: true, message: 'email is required' },
                maxLength: { value: 50, message: 'email is too Long!' },
                minLength: { value: 3, message: 'must be 3 chars' },
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'must include lower, upper, number, and special chars',
                },
              })}
            />
            {errors.email ? <div>{errors.email.message}</div> : null}
          </Column>
          <Column>
            <Label htmlFor="jobtitle">Job title</Label>
            <Input
              type="text"
              name="jobtitle"
              id="jobtitle"
              ref={register({
                required: { value: true, message: 'job title is required' },
                maxLength: { value: 50, message: 'job title is too Long!' },
                minLength: { value: 3, message: 'must be 3 chars' },
              })}
            />
            {errors.jobtitle ? <div>errors.jobtitle.message</div> : null}
          </Column>
        </Columns>
        <br />
        <Columns>
          <Column>
            <Label htmlFor="company">Company*</Label>
            <Input
              type="text"
              name="company"
              id="company"
              ref={register({
                required: { value: true, message: 'company is required' },
                maxLength: { value: 50, message: 'company is too Long!' },
                minLength: { value: 3, message: 'must be 3 chars' },
              })}
            />
            {errors.company ? <div>errors.company.message</div> : null}
          </Column>
          <Column>
            <Label htmlFor="industry">Industry*</Label>
            <Controller
              defaultValue={Industry[0]}
              styles={customStyles}
              options={Industry}
              control={control}
              name="industry"
              id="industry"
              ref={register({
                required: { value: true, message: 'industry is required' },
              })}
              as={Selects}
            />
            {errors.industry ? <div>errors.industry.message</div> : null}
          </Column>
        </Columns>

        <Columns>
          <Column>
            <Label htmlFor="country">Country*</Label>
            <Controller
              defaultValue={Industry[0]}
              styles={customStyles}
              options={Industry}
              control={control}
              name="country"
              id="country"
              ref={register({
                required: { value: true, message: 'country is required' },
              })}
              as={Selects}
            />

            {errors.industry ? <div>errors.industry.message</div> : null}
          </Column>
          <Column>
            <Label htmlFor="geography">Operating geography</Label>
            <Controller
              defaultValue={Industry[0]}
              styles={customStyles}
              options={Industry}
              control={control}
              name="geography"
              id="geography"
              ref={register({
                required: { value: true, message: 'geography is required' },
              })}
              as={Selects}
            />
            {errors.geography ? <div>errors.geography.message</div> : null}
          </Column>
        </Columns>
        <br />
        <Columns>
          <Column>
            <Label htmlFor="contents">What would you like to talk about?</Label>
            <Textarea
              name="contents"
              id="contents"
              ref={register({
                maxLength: { value: 500, message: 'contents is too Long!' },
              })}
            />
            {errors.contents ? <div>errors.contents.message</div> : null}
          </Column>
        </Columns>

        <Columns>
          <Column>
            <CheckLabel htmlFor="privacy">
              <CheckInput
                type="checkbox"
                name="privacy"
                id="privacy"
                ref={register({ required: 'you must agree to privacy' })}
              />
              <CheckText>
                By submitting this form I accept&ensp;
                <Link href="/privacy-policy/" target="_blank">
                  privacy policy
                  <br />
                  and cookie policy
                </Link>
                .
              </CheckText>
              {errors.privacy ? <div>{errors.privacy.message}</div> : null}
            </CheckLabel>

            <CheckLabel htmlFor="newsletter">
              <CheckInput type="checkbox" name="newsletter" id="newsletter" />I would like to
              receive your newsletter.
            </CheckLabel>
          </Column>
          <Column>
            <FormButton type="submit">Send</FormButton>
          </Column>
        </Columns>
      </form>
    </Inquiry>
  )
}

export default Form
