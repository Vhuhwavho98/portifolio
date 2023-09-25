
import {BsFillBriefcaseFill} from 'react-icons/bs'
const Experience:React.FC<{}>=()=>{
    return(
        <div className="h-[50vh] bg-slate-300 px-16 py-8 " id="About">
          <h1 className='py-2'>Experience </h1>
          <div className="inline-block space-y-2">
            <div className="rounded-[10px] bg-slate-200 h-[15vh] w-[50vw] pl-2 pt-1 ">
            <div className='flex'>
                <BsFillBriefcaseFill height={20} className='h-[20px]'/>
                <span className='ml-2 '> March 2021 - October 2021</span>
                </div>
                <div className='ml-4 pl-1'>
                  <h2 className='font-bold'>Desktop Support engineer intern</h2>
                  <p className=''>Gijima</p>
                </div>

            </div>
          <div className="rounded-[10px] bg-slate-200 h-[15vh] w-[50vw] pl-2 pt-1 ">
                <div className='flex'>
                <BsFillBriefcaseFill height={20} className='h-[20px]'/>
                <span className='ml-2 '> March 2021 - October 2021</span>
                </div>
                <div className='ml-4 pl-1'>
                <h2 className='font-bold'>Junior frontend developer</h2>
                  <p className=''>Telkom SA</p>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Experience