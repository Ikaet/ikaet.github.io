import Link from "next/link"
import Nav from "@/components/nav"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav  />
      <h1 className="font-bold text-5xl"> Hola Mundo Landing </h1>
      <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, 
          repellat id maxime suscipit aliquam, quos omnis inventore asperiores 
          sint ducimus voluptates voluptatum at neque sunt voluptate odio blanditiis 
          libero temporibus.
      </p>
      <p className="font-barlow text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, 
          repellat id maxime suscipit aliquam, quos omnis inventore asperiores 
          sint ducimus voluptates voluptatum at neque sunt voluptate odio blanditiis 
          libero temporibus.
      </p>
      <p className="font-serif text-2xl font-barlow font-sans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, 
          repellat id maxime suscipit aliquam, quos omnis inventore asperiores 
          sint ducimus voluptates voluptatum at neque sunt voluptate odio blanditiis 
          libero temporibus.
      </p>
      <p className="font-sans text-2xl font-barlow">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, 
          repellat id maxime suscipit aliquam, quos omnis inventore asperiores 
          sint ducimus voluptates voluptatum at neque sunt voluptate odio blanditiis 
          libero temporibus.
      </p>
    </main>
  )
}
