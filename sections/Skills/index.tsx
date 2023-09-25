import Image from 'next/image';
import { BiLogoReact } from 'react-icons/bi';

import reactIcon from '@/public/images/physics.png';
import bootstrap from '@/public/images/bootstrap.png';
import css from '@/public/images/css-3.png';
import java from '@/public/images/java.png';
import typescript from '@/public/images/typescript.png';

import sql from '@/public/images/sql-server.png';
import js from '@/public/images/js.png';
import git from '@/public/images/gitlab.png';
const Images = [reactIcon, bootstrap, css, java, typescript];

const OtherImages=[
    sql,
    js,
    git
]

const Skills: React.FC<{}> = () => {
  return (
    <div className="h-[50vh] px-16 py-8 space-y-2 ">
        <h1 className='text-center font-semibold text-[21px] text-slate-950 hover:'>Skills</h1>
      <div className='flex space-x-2 py-4 content-center justify-center' >
        {Images.map((src, index) => (
          <Image src={src} key={index} alt={''} height={50} width={70} className='animate-sin px-2 cursor-pointer'/>
        ))}
      </div>
      <div className='flex space-x-2 py-4 content-center justify-center' >
        {OtherImages.map((src, index) => (
          <Image src={src} key={index} alt={''}  height={50} width={70}  className='animate- px-2 cursor-pointer' />
        ))}
      </div>
    </div>
  );
};

export default Skills;
