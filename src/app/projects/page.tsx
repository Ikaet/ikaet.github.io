import Image from 'next/image'
import Nav from "@/components/nav"
import urosArcFlow from "../../assets/img/UROS-Architecture-Flow.png"
import urosArc from "../../assets/img/UROS-Architecture.svg"
import ProjectsFigma from '@/components/prototypes/projectsFigma'

export default function Projects() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Nav  />
          <ProjectsFigma />
          <div className="m-5 flex justify-center items-center">
            <div className="video-container">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/WRTHt1Tl3xk?si=2NseSPMCvlVp8O-P" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen></iframe>
            </div>
          </div>
          <div className="m-5">
            <h1 className="text-5xl font-bold p-10"> Hola Projects Just testing</h1>
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
  