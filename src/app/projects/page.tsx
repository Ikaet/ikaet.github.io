import Image from 'next/image'
import Nav from "@/components/nav"
import urosArcFlow from "../../assets/img/UROS-Architecture-Flow.png"
import urosArc from "../../assets/img/UROS-Architecture.svg"

export default function Projects() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Nav  />
          <div>
            <h1 className="text-5xl font-bold p-10"> Hola Projects</h1>
            <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, 
                repellat id maxime suscipit aliquam, quos omnis inventore asperiores 
                sint ducimus voluptates voluptatum at neque sunt voluptate odio blanditiis 
                libero temporibus.
            </p>
            <div className='flex justify-center'>
              <Image
                className="relative"
                src={urosArc}
                alt="UROS Architecture"
                width={512}
                height={512}
                priority
                style={{width: 512, height: 512}}
              />
              <Image
                className="relative"
                src={urosArcFlow}
                alt="UROS Architecture Flow"
                width={512}
                height={512}
                priority
                style={{width: 512, height: 512}}
              />
            </div>
          </div>
      </main>
    )
  }
  