import Image from 'next/image'
import aagPhoto from "../../assets/img/mobile-aag-photo-v1.png"

export default function HomeSection(){
    return (
        <main>
            <div className="w-[328px] h-[414px] flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch h-[146px] bg-gray-900 flex-col justify-start items-center gap-4 flex">
                    <div className="self-stretch h-[55px] pl-2.5 bg-gray-900 flex-col justify-start items-end gap-2.5 flex">
                        <div className="w-[172px] h-[55px] relative">
                            <div className="w-[141.48px] h-[28.14px] left-[30.52px] top-0 absolute bg-stone-50 border"></div>
                            <div className="w-[51.32px] h-[16.63px] left-0 top-[38.37px] absolute bg-stone-50 border"></div>
                        </div>
                    </div>
                    <div className="self-stretch h-[70px] pr-2.5 bg-gray-900 flex-col justify-start items-start gap-2.5 flex">
                        <div className="w-[70px] h-[70px] relative"></div>
                    </div>
                </div>
                <div className="w-[324px] h-[388.26px] origin-top-left rotate-90 flex-col justify-center items-center flex">
                    <div className="w-[324px] h-[388.26px] relative">
                        <div className="opacity-80 w-[322.22px] h-[343.20px] left-[0.67px] top-0 absolute">
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[124px] pt-16 pb-6 flex-col justify-center items-end gap-2.5 flex">
                    <div className="px-1 bg-gray-900 justify-center items-center gap-2 inline-flex">
                        <div className="w-6 h-6 flex-col justify-center items-center inline-flex"></div>
                        <div className="w-[31.02px] h-6 justify-center items-center flex"></div>
                        <div className="w-6 h-6 relative"></div>
                        <div className="w-9 h-9 relative"></div>
                        <div className="w-7 h-7 relative"></div>
                    </div>
                </div>
                <div className="w-[328px] h-[124px] justify-center items-center inline-flex">
                    <Image
                        className="w-[328px] h-[124px]"
                        src={aagPhoto}
                        alt="AAG Photo"
                    />
                </div>
            </div>
        </main>
    )

};