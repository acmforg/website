'use client'

import { useRef } from 'react'
import { Support } from '@/app/(home)/home/components/support'
import { Heading, Maxwidth, Button } from '@/components'
import tw from 'twin.macro'
import { QRCodeSVG } from 'qrcode.react'

const QR_URL = 'https://acmfng.org?referrer=banner-qr-code-may-25'

const DonatePage = () => {
  const qrRef = useRef<SVGSVGElement>(null)

  // const downloadQRCode = () => {
  //   const svg = qrRef.current
  //   if (!svg) return
  //   const serializer = new XMLSerializer()
  //   const svgString = serializer.serializeToString(svg)
  //   const canvas = document.createElement('canvas')
  //   const img = new window.Image()
  //   const size = 1000 // High-res size
  //   canvas.width = size
  //   canvas.height = size
  //   img.onload = function () {
  //     const ctx = canvas.getContext('2d')
  //     ctx?.fillRect(0, 0, size, size)
  //     ctx?.drawImage(img, 0, 0, size, size)
  //     const pngUrl = canvas.toDataURL('image/png')
  //     const downloadLink = document.createElement('a')
  //     downloadLink.href = pngUrl
  //     downloadLink.download = 'acmf-donate-qrcode.png'
  //     document.body.appendChild(downloadLink)
  //     downloadLink.click()
  //     document.body.removeChild(downloadLink)
  //   }
  //   img.src =
  //     'data:image/svg+xml;base64,' +
  //     window.btoa(unescape(encodeURIComponent(svgString)))
  // }

  return (
    <main tw="bg-white">
      <Maxwidth tw="pt-[8rem] pb-[4rem]">
        <Heading $variant="h2" as="h1" tw="text-center mb-8">
          Support <span tw="text-primary">Our Mission</span>
        </Heading>
        <Support showDetailsByDefault={true} />

        {/* <div tw="flex flex-col items-center gap-4 mt-8">
          <QRCodeSVG
            value={QR_URL}
            size={500}
            ref={qrRef}
          />
          <Button onClick={downloadQRCode} $isSmall tw="mt-2 px-8 py-2">Download QR Code</Button>
        </div> */}
      </Maxwidth>
    </main>
  )
}

export default DonatePage
