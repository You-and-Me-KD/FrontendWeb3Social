import { SearchIcon } from '@/assets/icons/search'
import useTranslations from '@/hooks/useTranslations'

export const Search = () => {
  const { t } = useTranslations('common')
  return (
    <div className="relative w-1/2 2xl:w-30/100">
      <input
        placeholder={t('common.search-placeholder')}
        className="bg-main-6 placeholder:text-icon-color h-13 w-full rounded-2xl border-0 border-none px-4.5 pr-15 text-base font-bold text-white outline-0 placeholder:text-sm"
      />
      <SearchIcon className="fill-icon-color absolute top-1/2 right-4.5 -translate-y-1/2" />
    </div>
  )
}
