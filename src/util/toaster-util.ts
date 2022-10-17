import { toast } from 'react-toastify'

export const toasterUtil = {
  info: (message: string): void => {
    toast(message, { type: 'info' })
  },
  error: (message: string): void => {
    toast(message, { type: 'error' })
  },
  warn: (message: string): void => {
    toast(message, { type: 'warning' })
  },
  success: (message: string): void => {
    toast(message, { type: 'success' })
  },
}
