import { BillOfLading } from '@/types/BillOfLading.ts'

export const getBols = async () => {
  const rawResponse = await fetch(
    'http://localhost:8000/dataManagement/manageContract',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
  const content = await rawResponse.json()

  return content.data as BillOfLading[]
}
