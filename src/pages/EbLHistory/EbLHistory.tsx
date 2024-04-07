// import { CardsStats } from '../../components/charts/Charts'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { dataListOfDocuments } from '../../data/dataListOfDocuments'
import { PageLayout } from '../../components/bol/PageLayout.tsx'
import { Separator } from '@/components/ui/separator.tsx'

export interface DataTable {
  id: string
  status: string
  issuer: string
  date: string
}

function DataTableHeader(): JSX.Element {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className=' font-bold'>ID</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Issuer</TableHead>
        <TableHead className='text-right'>Date</TableHead>
      </TableRow>
    </TableHeader>
  )
}

function DataTableBody(): JSX.Element {
  return (
    <TableBody className=''>
      {dataListOfDocuments
        .slice()
        .reverse()
        .map((row) => (
          <TableRow
            key={row.id}
            className=' hover:bg-slate-900 hover:text-slate-50'
          >
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.issuer}</TableCell>
            <TableCell className='text-right'>{row.date}</TableCell>
          </TableRow>
        ))}
    </TableBody>
  )
}

function DataTable(): JSX.Element {
  return (
    <div className='mb-5'>
      <h3 className='text-start text-2xl font-semibold leading-none tracking-tight '>
        History
      </h3>
      <div className=' h-full overflow-y-auto '>
        <Table className='mt-5 border '>
          <DataTableHeader />
          <DataTableBody />
        </Table>
      </div>
    </div>
  )
}

export default function EbLHistory() {
  return (
    <PageLayout>
      <div className={'flex flex-col gap-12'}>
        <DataTable />
      </div>
    </PageLayout>
  )
}
