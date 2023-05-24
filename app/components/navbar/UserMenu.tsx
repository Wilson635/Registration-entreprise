'use client';

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useRentModal from "@/app/hooks/useRentModal";
import { SafeUser } from "@/app/types";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";
import PopOverMenu from "./PopOverMenu";
import { GiNotebook } from "react-icons/gi";
import FeedBack from "../modals/FeedBack";

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);

  return ( 
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div>
          <PopOverMenu  />
        </div>
        <div className="p-2 hover:bg-neutral-100 rounded-full">
          <FeedBack />
        </div>
        <div 
        onClick={toggleOpen}
        className="
          p-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <Avatar src={currentUser?.image} />
        </div>
      </div>
      {isOpen && (
        <div 
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            lg:w-3/4 
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-14
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                {/* <MenuItem 
                  label="My trips" 
                  onClick={() => router.push('/trips')}
                /> */}
                <div className="flex flex-col p-5">
                  <p className="text-sm"> Connecté en tant que </p>
                  <span className="font-bold text-md"> {currentUser?.email} </span>
                </div>
                <hr />
                  <MenuItem 
                    label="Profile" 
                    onClick={() => router.push('/profile')}
                  />
                <MenuItem 
                  label="Favorites" 
                  onClick={() => router.push('/favorites')}
                />
                {/* <MenuItem 
                  label="Reservations" 
                  onClick={() => router.push('/reservations')}
                /> */}
                <MenuItem 
                  label="Boutique" 
                  onClick={() => router.push('/mybookshop')}
                />
                {/* <MenuItem 
                  label="My properties" 
                  onClick={() => router.push('/properties')}
                /> */}
                <MenuItem 
                  label="Add your entreprise" 
                  onClick={rentModal.onOpen}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem 
                  label="Login" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
   );
}
 
export default UserMenu;