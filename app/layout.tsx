import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import { navConfig } from '../config/nav-config'
import Footer from './component/footer'
import { titleConfig } from '@config/title-config'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex py-10 flex-col items-center">
          <Link href="/">
            <div className="w-[56.95px] h-[50px]">
              <img src="/logo.png" alt="" className="w-full h-full"></img>
            </div>
          </Link>
          <ul className="cursor-pointer flex flex-wrap font-bold flex gap-6 w-fit m-auto mt-4">
            {navConfig.map((item, index) => {
              return (
                <li key={index} className="hover:text-[#eb0000]">
                  <Link
                    href={item.linkUrl}
                    // @ts-ignore
                    target={item.openNewTab ? '_blank' : ''}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <article className="mx-auto max-w-3xl py-8 prose prose-slate">
          {children}
        </article>
        <Footer></Footer>
      </body>
    </html>
  )
}

export const metadata = {
  title: titleConfig.title,
  description: titleConfig.description,
  keyword: titleConfig.keywords
}
