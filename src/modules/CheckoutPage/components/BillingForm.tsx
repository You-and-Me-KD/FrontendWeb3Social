'use client'

import { useForm } from 'react-hook-form'
import { FormWrapper, InputField, SelectField, TextareaField } from '@/components'
import { CITY_OPTIONS, COUNTRY_OPTIONS, STATE_OPTIONS } from './mock'

interface BillingFormValues {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  country: string
  state: string
  city: string
  zip: string
  notes: string
}

const FieldLabel = ({ htmlFor, children }: { htmlFor: string; children: string }) => (
  <label htmlFor={htmlFor} className="text-main-2 mb-2 block text-xs font-medium">
    {children}
  </label>
)

const BillingForm = () => {
  const form = useForm<BillingFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      country: '',
      state: '',
      city: '',
      zip: '',
      notes: '',
    },
  })

  return (
    <div className="bg-main-1 w-full rounded-2xl p-4 xl:p-7">
      <h4 className="mb-6 text-base font-bold text-white">Billing Details</h4>
      <FormWrapper form={form} onSubmit={() => {}} className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
        <InputField name="firstName" placeholder="First Name" variant="primary" inputSize="x-medium" fullWidth />
        <InputField name="lastName" placeholder="Last Name" variant="primary" inputSize="x-medium" fullWidth />
        <InputField name="email" type="email" placeholder="Email" variant="primary" inputSize="x-medium" fullWidth />
        <InputField
          name="phone"
          type="tel"
          placeholder="Phone Number"
          variant="primary"
          inputSize="x-medium"
          fullWidth
        />
        <div className="sm:col-span-2">
          <InputField name="address" placeholder="Full Address" variant="primary" inputSize="x-medium" fullWidth />
        </div>

        <div>
          <FieldLabel htmlFor="country">Country</FieldLabel>
          <SelectField
            id="country"
            name="country"
            placeholder="Select your Country"
            variant="primary"
            selectSize="x-medium"
            options={COUNTRY_OPTIONS}
            fullWidth
          />
        </div>
        <div>
          <FieldLabel htmlFor="state">State</FieldLabel>
          <SelectField
            id="state"
            name="state"
            placeholder="Select your State"
            variant="primary"
            selectSize="x-medium"
            options={STATE_OPTIONS}
            fullWidth
          />
        </div>

        <div>
          <FieldLabel htmlFor="city">City</FieldLabel>
          <SelectField
            id="city"
            name="city"
            placeholder="Select your City"
            variant="primary"
            selectSize="x-medium"
            options={CITY_OPTIONS}
            fullWidth
          />
        </div>
        <InputField name="zip" placeholder="ZIP Code" variant="primary" inputSize="x-medium" fullWidth />

        <div className="sm:col-span-2">
          <TextareaField
            name="notes"
            placeholder="Write any additional details here..."
            variant="primary"
            textareaSize="x-medium"
            rows={5}
            fullWidth
          />
        </div>
      </FormWrapper>
    </div>
  )
}

export default BillingForm
