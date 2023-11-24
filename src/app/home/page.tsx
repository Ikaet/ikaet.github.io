import Link from "next/link"
import Nav from "@/components/nav"
import DesktopFigma from "@/components/prototypes/desktopFigma"
import MobileFigma from "@/components/prototypes/mobileFigma"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav  />
      <DesktopFigma />
      <MobileFigma />
      <div className="m-5">
        <h1 className="font-bold text-5xl"> Hola Mundo Landing </h1>
        <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, 
            repellat id maxime suscipit aliquam, quos omnis inventore asperiores 
            sint ducimus voluptates voluptatum at neque sunt voluptate odio blanditiis 
            libero temporibus.
        </p>
        <p className="font-barlow text-2xl p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, 
            repellat id maxime suscipit aliquam, quos omnis inventore asperiores 
            sint ducimus voluptates voluptatum at neque sunt voluptate odio blanditiis 
            libero temporibus.
        </p>
        <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, 
            repellat id maxime suscipit aliquam, quos omnis inventore asperiores 
            sint ducimus voluptates voluptatum at neque sunt voluptate odio blanditiis 
            libero temporibus.
        </p>
        <p className="text-2xl font-barlow">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, 
            repellat id maxime suscipit aliquam, quos omnis inventore asperiores 
            sint ducimus voluptates voluptatum at neque sunt voluptate odio blanditiis 
            libero temporibus.
        </p>
      </div>
    </main>
  )
}
