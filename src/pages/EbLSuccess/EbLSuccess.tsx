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
import { image, image2, image3 } from '@/data/xrpImages.ts'
import { useSearchParams } from 'react-router-dom'

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

  const snowflake1 = document.createElement('img')
  snowflake1.src = image;
  const snowflake2 = document.createElement('img')
  snowflake2.src = image2;
  const snowflake3 = document.createElement('img')
  snowflake3.src = image3;
  const images = [snowflake3]

  const [searchParams] = useSearchParams();

  // Get a specific query parameter
  const myParam = searchParams.get('id');


  return (
    <>
      <Confetti width={width} height={height} />
        <Snowfall
          // Applied to the canvas element
          // Controls the number of snowflakes that are created (default 150)
          snowflakeCount={100}
          // Pass in the images to be used
          images={images}
          radius={[15, 30]}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 50
          }}
        ></Snowfall>

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
                    href={'https://testnet.xrpl.org/nft/' + myParam}
                    target='_blank'
                  >
                    On chain proof
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
