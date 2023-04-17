import Image  from "next/image"
import CornerThingy from '../../public/Corner-thingy.png'

export default function AuthLayout({children} : {children : React.ReactNode}) {
    return (
        <div className="w-full h-full">
        <Image priority src={CornerThingy}
        className="w-20 absolute m-5" alt="CornerThingy" 
        />
        
        <div className="bg-BgPrimary h-full pt-5 pb-24 flex justify-center">
            {children } 
        </div>
        <Image priority src={CornerThingy}
        className="w-20 absolute m-5 right-1" alt="CornerThingy" style={{bottom: '0px', transform: 'rotate(180deg)'}}
        />
        </div>
        
    )
}