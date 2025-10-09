import { Button, HStack, RadioFields, VStack } from '@/components'
import { CheckboxFields } from '@/components/form/checkbox-field'
import FormWrapper from '@/components/form/form-wrapper'
import { useForm } from 'react-hook-form'
import { CATEGORIES_FILTER, FILES_INCLUDE } from './mock'
import useTranslations from '@/hooks/useTranslations'
import { InputField } from '@/components/form/input-field'
import { StarIcon } from '@/assets/icons/star'

const FilterPrice = () => {
  const form = useForm()
  const { t } = useTranslations('marketplaceCategory')
  return (
    <VStack className="bg-main-1 shadow-shadow-1 rounded-2xl px-8 py-7">
      <FormWrapper form={form} onSubmit={() => {}} formId="filter-price-form">
        <p className="text-base font-bold">{t('filter.categories')}</p>
        <VStack spacing={24} className="mt-6">
          {CATEGORIES_FILTER.map((category, index) => (
            <HStack key={index} align="center" pos="apart">
              <CheckboxFields className="gap-3" id={category.name} name={category.name} label={category.name} />
              <p className="text-main-5 text-sm font-bold">{1234}</p>
            </HStack>
          ))}
        </VStack>
        <p className="mt-8 text-base font-bold">{t('filter.files-include')}</p>
        <VStack spacing={24} className="mt-6">
          {FILES_INCLUDE.map((file, index) => (
            <HStack key={index} align="center" pos="apart">
              <CheckboxFields className="gap-3" id={file.name} name={file.name} label={file.name} />
              <p className="text-main-5 text-sm font-bold">{1234}</p>
            </HStack>
          ))}
        </VStack>
        <p className="mt-8 text-base font-bold">{t('filter.price-range')}</p>
        <HStack spacing={24} className="mt-6 flex-nowrap">
          <InputField inputSize="small" placeholder=" " autoComplete="off" name="from" label={t('filter.from')} />
          <InputField inputSize="small" placeholder=" " autoComplete="off" name="to" label={t('filter.to')} />
        </HStack>

        <p className="mt-8 text-base font-bold">{t('filter.reviews')}</p>
        <VStack spacing={24} className="mt-6">
          <HStack align="center" pos="apart">
            <RadioFields id="option0" name="options0" value="option0" label={t('filter.all-reviews')} />
            <p className="text-main-5 text-sm font-bold">{1234}</p>
          </HStack>
          <HStack align="center" pos="apart">
            <RadioFields id="option1" name="options1" value="option1" label={<RadioStar rating={5} />} />
            <p className="text-main-5 text-sm font-bold">{1234}</p>
          </HStack>
          <HStack align="center" pos="apart">
            <RadioFields id="option2" name="options2" value="option2" label={<RadioStar rating={4} />} />
            <p className="text-main-5 text-sm font-bold">{1234}</p>
          </HStack>
          <HStack align="center" pos="apart">
            <RadioFields id="option3" name="options3" value="option3" label={<RadioStar rating={3} />} />
            <p className="text-main-5 text-sm font-bold">{1234}</p>
          </HStack>
          <HStack align="center" pos="apart">
            <RadioFields id="option4" name="options4" value="option4" label={<RadioStar rating={2} />} />
            <p className="text-main-5 text-sm font-bold">{1234}</p>
          </HStack>
          <HStack align="center" pos="apart">
            <RadioFields id="option5" name="options5" value="option5" label={<RadioStar rating={1} />} />
            <p className="text-main-5 text-sm font-bold">{1234}</p>
          </HStack>
        </VStack>
        <Button className="mt-8 w-full" size="x-medium" rounded="xl">
          {t('filter.apply-filters')}
        </Button>
      </FormWrapper>
    </VStack>
  )
}

export default FilterPrice

interface RadioStarProps {
  rating: number
}

const RadioStar = ({ rating }: RadioStarProps) => {
  return (
    <HStack align="center" spacing={4}>
      {Array.from({ length: rating }).map((_, index) => (
        <StarIcon key={index} rating={1} />
      ))}
      {Array.from({ length: 5 - rating }).map((_, index) => (
        <StarIcon key={index} rating={0} />
      ))}
      <p className="ml-2 text-sm font-bold text-white">{rating}+</p>
    </HStack>
  )
}
