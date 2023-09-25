
const Footer:React.FC<{}>=()=>{
    const thisYear=new Date().getFullYear();
    return(
        <div className="w-full px-2 py-2 grid lg:grid-cols-2 bottom-0 static">
                {/* <div className="">
                    <div className='relative'>
                            <div className='left-1 p-[1px] h-[30px] lg:h-[50px]  leading-[30px] lg:w-[50px] w-[30px] text-center absolute text-[22px] bg-gray-500 font-bold text-white sm:text[21px] rounded-[50%]'>Ne </div>
                            <div className='top-3.5 lg:top-5  left-4 lg:left-5  leading-[30px]  h-[30px] lg:h-[45px] mt-1 ml-1 lg:w-[45px] w-fit text-center font-bold absolute p-[1px] lg:p-2 rounded-[50%] text-white sm:text[21px] text[22px]  bg-gray-700'>Vhu</div>
                    </div>
                </div>
                 */}
             
                    &copy; {thisYear} Nevhuloro Vhuhwavho
            
                </div>
    )
}
export default Footer