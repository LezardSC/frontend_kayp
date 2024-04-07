import { BolCreateForm } from '../../components/bol/BolCreateForm.tsx'
import { Layout, LayoutHeader } from '@/components/custom/layout'

const BolCreate = () => {
  return (
    <div className={'flex w-full'}>
      <Layout>
        <LayoutHeader>
          <BolCreateForm />
        </LayoutHeader>
      </Layout>
    </div>
  )
}

export default BolCreate
