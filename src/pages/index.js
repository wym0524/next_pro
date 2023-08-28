// import Image from 'next/image'
import Link from 'next/link'
// import { Inter } from 'next/font/google'
// import FirstPost from './posts/first-post'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      Read <Link href="/posts/first-post">first-post</Link>
    </div>
  )
}