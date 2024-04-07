import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import { PageLayout } from '@/components/layout/PageLayout.tsx'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet'
import { Step, StepItem, Stepper } from '../../components/ui/stepper.tsx'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Book } from 'lucide-react'
import { IconFileDownload } from '@tabler/icons-react'
import { Document, Page, pdfjs } from 'react-pdf'
import Snowfall from 'react-snowfall'
import { useEffect, useState } from 'react'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const steps = [
  { label: 'eBL created' },
  { label: 'eBL validated by shipper' },
  { label: 'eBL validated by consignee' },
  { label: 'shipped' },
  { label: 'cargo delivered' },
] satisfies StepItem[]

export function StepperDemo() {
  return (
    <div className='flex w-full flex-row pr-10'>
      <Stepper orientation='horizontal' initialStep={1} steps={steps}>
        {steps.map(({ label }) => {
          return <Step key={label} label={label}></Step>
        })}
      </Stepper>
    </div>
  )
}

export default function EbLSuccess() {
  const { width, height } = useWindowSize()
  const [isLoaded, setisLoaded] = useState(false)
  const xrpLogo1 = new Image()
  useEffect(() => {
    xrpLogo1.src = '/Users/neoff/Documents/frontend_kayp/src/assets/xrp.svg'

    xrpLogo1.onload = () => {
      setisLoaded(true)
    }
  }, [])

  // const xrpLogo2 = new Image()
  // xrpLogo2.src = '/Users/neoff/Documents/frontend_kayp/src/assets/xrp.svg'

  // let img = new Image()

  // img.width = 1337
  // img.height = 13.37

  // img.onload = function () {
  //   // context.drawImage(this, 0, 0)
  // }

  // img.src = 'data:...'

  const images = [xrpLogo1]

  return (
    <>
      {isLoaded && (
        <Snowfall
          // Applied to the canvas element
          style={{ background: '#fff' }}
          // Controls the number of snowflakes that are created (default 150)
          snowflakeCount={200}
          // Pass in the images to be used
          images={images}
        ></Snowfall>
      )}

      <PageLayout title={'Your eBL is on chain !'} description={'Bravo !'}>
        <div className={'flex flex-col gap-5'}>
          <StepperDemo />
          <MapContainer
            className={'z-0 h-[300px] w-[1650px]'}
            center={[25, 0]}
            zoom={1}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {/* Coord du port de singapore */}
            <Marker position={[1.29027, 103.851959]} />
            {/* Coord du port de hambourg */}
            <Marker position={[53.5459, 9.9916]} />
          </MapContainer>

          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className={'flex flex-col gap-4'}>
              <div className={'flex gap-1.5'}>
                <Button className={'gap-1.5'}>
                  <IconFileDownload />
                  Download eBL as PDF
                </Button>

                <Button className={'gap-1.5'}>
                  <Book />
                  <a
                    href='https://ghostnet.tzkt.io/KT1MvGPyXNvNNwEAc286Xtw9Xgv5B5vBFHg3/operations/'
                    target='_blank'
                  >
                    On chain proof (Ghostnet)
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Document file={'http://localhost:5173/bol.pdf'}>
          <Page pageNumber={1} width={1700} />
        </Document>
      </PageLayout>
    </>
  )
}
