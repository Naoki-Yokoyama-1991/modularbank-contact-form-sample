/*---Form-Type-Definition---*/

// @Form-Input
export interface InputType {
  firstname: string
  lastname: string
  email: string
  jobtitle: string
  company: string
  industry: string
  country: string
  operating: string
  contents: string
  privacy: boolean
  newsletter: boolean
}

// @Form-Select
export interface DataType {
  country: {
    value: string
    label: string
  }
  operating: {
    value: string
    label: string
  }
  industry: {
    value: string
    label: string
  }
}
