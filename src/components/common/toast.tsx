import { type ExternalToast, toast } from 'sonner'

interface IToastProps {
  label?: React.ReactNode | string
  description?: React.ReactNode | string
  message?: string
  duration?: number
  children?: React.ReactNode
  props?: ExternalToast
}

export const Toast = {
  success: ({ label = '', description = '' }: IToastProps) => {
    return toast.success(label, {
      description: <div className="mt-2" dangerouslySetInnerHTML={{ __html: description as string }} />,
      icon: null,
    })
  },
  error: ({ label = '!', description = '' }: IToastProps) => {
    return toast.error(label, {
      description: <div className="mt-2" dangerouslySetInnerHTML={{ __html: description as string }} />,
      icon: null,
    })
  },
}
