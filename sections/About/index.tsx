const About:React.FC<{}>=()=>{
   
    const handlsContact=()=>{
        const contact=document.getElementById("Contact")
        if(contact){
            contact.scrollIntoView({behavior :"smooth"})
        }
    }
    return(
        <div className="h-[50vh px-16 py-8 bg-slate-200" id="About">
            <p className="text-[21px]">
            My name is Vhuhwavho Nevholoro, and I'm a frontend developer who's always chasing the latest tech trends. I'm fluent in ReactJS, NextJs, Tailwind , and Javascript.

            </p>
            <div className="space-x-3 pt-4">
                <button className="bg-gray-500 text-white px-2 py-1 rounded-[25px] w-[120px]">
                    Download CV
                </button>
                <button className="bg-gray-500 text-white px-2 py-1 rounded-[25px] w-[120px]" onClick={handlsContact}>
                    Contacts
                </button>
            </div>
        </div>
    )
}

export default About