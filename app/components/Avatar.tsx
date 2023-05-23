'use client';

import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return ( 
    <Image 
      className="rounded-full" 
      height="30" 
      width="30" 
      alt="Avatar" 
      src={src || '/images/placeholder.jpg'}
    />
    // <MdAccountCircle className="text-4xl text-gray-500"/>
   );
}
 
export default Avatar;