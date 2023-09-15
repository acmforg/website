import Image from 'next/image'
import Logo from '/public/assets/logo.png'
import Construction from '/public/assets/construction.png'

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={Logo} width={200} height={100} alt='logo' />
      <Image src={Construction} width={400} height={250} style={{ margin: 0 }} alt='we are under construction' />
      <h1 className='text-5xl'>We are coming soon!</h1>
    </main>
  )
}
