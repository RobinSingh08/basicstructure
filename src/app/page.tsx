import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center w-full bg-slate-700'>
        Header
      </div>
      <div className='flex'>
      <div className='flex justify-center items-center w-[20%] h-screen border-r-2 border-r-slate-600'>
        Sidebar
      </div>
      <div className='flex justify-center items-center w-[80%] h-screen'>
        Body
      </div>
      </div> 
      <div className='flex justify-center w-full absolute bottom-0 bg-zinc-400'>
        Footer
      </div>
    </div>
  )
}
