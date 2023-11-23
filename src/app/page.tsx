import aagLogo from "../assets/img/logo-ag.svg"
import Link from "next/link"

import Image from 'next/image'
import Header from "@/components/mobile/header"
import HomeSection from "@/components/mobile/home-section"

export default function RootPage() {
  return (
    <main className="flex-col justify-start items-center inline-flex">
      <Header />
      <HomeSection />
    </main>
  )
}
 