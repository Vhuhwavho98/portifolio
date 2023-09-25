const Education:React.FC<{}>=()=>{
    return(
        <div className="h-fit bg-gray-300 px-16 py-8 flex space-x-2" id="Education">
          
           <div className="inline-block space-y-2">
            <div className="rounded-[10px] bg-slate-200 h-[15vh] w-[50vw] pl-2 pt-1 ">
            <div className='flex'>
                {/* <BsFillBriefcaseFill height={20} className='h-[20px]'/> */}
                <span className='ml-2 font-bold'> January 2012 - December 2016</span>
                </div>
                <div className='ml-2'>
                  <h2 className=''>Thengwe High School</h2>
                  <p className=''>National Senior Certificate</p>
                </div>

            </div>
          <div className="rounded-[10px] bg-slate-200 h-[15vh] w-[50vw] pl-2 pt-1 ">
                <div className='flex'>
                {/* <BsFillBriefcaseFill height={20} className='h-[20px]'/> */}
                <span className='ml-2 font-bold '>January 2017 - April 2022</span>
                </div>
                <div className='ml-2'>
                <h2 className=' '>Tshwane University of Technology</h2>
                  <p className=''>National Diploma</p>
                </div>
            </div>
            <div className="rounded-[10px] bg-slate-200 h-[15vh] w-[50vw] pl-2 pt-1 ">
                <div className='flex'>
                {/* <BsFillBriefcaseFill height={20} className='h-[20px]'/> */}
                <span className='ml-2 font-bold '>January 2023 - Present</span>
                </div>
                <div className='ml-2'>
                <h2 className=' '>Tshwane University of Technology</h2>
                  <p className=''>Advanced Diploma</p>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Education