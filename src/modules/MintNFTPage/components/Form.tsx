import { FormWrapper, InputField, SelectField, TextareaField } from '@/components'
import useTranslations from '@/hooks/useTranslations'
import { useForm } from 'react-hook-form'

const Form = () => {
  const { t } = useTranslations('mintNFT')
  const form = useForm({})
  return (
    <div className="bg-main-1 col-span-2 h-fit rounded-2xl p-4 xl:px-7 xl:py-8">
      <div>
        <h4 className="text-base font-bold">{t('create-nft.title')}</h4>
        <FormWrapper form={form} onSubmit={() => {}} className="mt-8 grid grid-cols-2 gap-6">
          <InputField placeholder=" " autoComplete="off" name="name" label={t('create-nft.name')} />
          <InputField placeholder=" " autoComplete="off" name="price" label={t('create-nft.price')} />
          <SelectField
            placeholder=" "
            autoComplete="off"
            name="chain"
            label={t('create-nft.chain')}
            options={[{ value: '1', label: 'Ethereum' }]}
          />
          <SelectField
            placeholder=" "
            autoComplete="off"
            name="type"
            label={t('create-nft.type')}
            options={[
              { value: '1', label: 'ERC-721' },
              { value: '2', label: 'ERC-1155' },
            ]}
          />
          <div className="col-span-2">
            <TextareaField
              placeholder=" "
              autoComplete="off"
              name="description"
              label={t('create-nft.description')}
              rows={4}
            />
          </div>
          <div className="col-span-2">
            <InputField placeholder=" " autoComplete="off" name="remarks" label={t('create-nft.remarks')} />
          </div>
          <InputField
            type="date"
            placeholder=" "
            autoComplete="off"
            name="start-date"
            label={t('create-nft.start-date')}
          />
          <InputField type="date" placeholder=" " autoComplete="off" name="end-date" label={t('create-nft.end-date')} />
          <div className="col-span-2">
            <SelectField
              placeholder=" "
              autoComplete="off"
              name="category"
              label={t('create-nft.category')}
              options={[
                { value: '1', label: '1' },
                { value: '2', label: '2' },
              ]}
            />
          </div>
        </FormWrapper>
      </div>
    </div>
  )
}

export default Form
