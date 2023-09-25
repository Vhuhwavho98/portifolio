
import facebook from '@/public/images/facebook.png'
import linkedin from'@/public/images/linkedin.png'
import Image from 'next/image'

const Images=[
    facebook,
    linkedin,
    facebook,
    linkedin
]
const Contact:React.FC<{}>=()=>{
    return(
        <div className="h-[20vh] bg-gray-300 px-16 py-8 flex space-x-2" id="Contact">
           {/* {Images.map((src, index) => (
          <Image src={src} key={index} alt={''}  width={55}  className='animate-sin px-2 cursor-pointer'/>
        ))} */}
        </div>
    )
}

export default Contact