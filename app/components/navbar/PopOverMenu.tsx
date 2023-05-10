"use client"


import useRentModal from '@/app/hooks/useRentModal'
import useLoginModal from "@/app/hooks/useLoginModal"
import { SafeUser } from "@/app/types"
import { Popover, Transition } from '@headlessui/react'
import { Fragment, useState, useCallback } from 'react'
import { HiAdjustmentsHorizontal, HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineBookOpen, HiOutlineIdentification, HiOutlineNewspaper, HiOutlineSignal } from "react-icons/hi2"
import { Badge } from '@mui/material'

const menu = [
  {
    name: 'Discussion',
    description: 'Measure actions your users take',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Articles',
    description: 'Create your own targeted content',
    href: '##',
    icon: IconTwo,
  },
  {
    name: 'Podcasts',
    description: 'Découvrez toutes les dicussions du site',
    href: '##',
    icon: IconThree,
  },
  {
    name: 'Entreprises',
    description: 'Parcourez la liste des différentes entreprises enrégistrées sur le site',
    href: '##',
    icon: IconFour,
  },
  {
    name: 'Guide',
    description: "Découvrez le code de conduite pour l'utilisation su site",
    href: '##',
    icon: IconFive,
  },
]

interface PopOverMenuProps {
    currentUser?: SafeUser | null
}

const PopOverMenu: React.FC<PopOverMenuProps> = ({
    currentUser
}) => {

    const rentModal = useRentModal();
    const loginModal = useLoginModal();

    const onRent = useCallback(() => {
        if (!currentUser) {
          return loginModal.onOpen();
        }
    
        rentModal.onOpen();
      }, [loginModal, rentModal, currentUser]);

  return (
    <div className="top-16 w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                p-2  
                rounded-full text-base font-medium text-indigo-400 hover:bg-neutral-100 hover:text-opacity-100 focus:outline-none`}
            >
              <span> <HiAdjustmentsHorizontal size={30} /> </span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/4 right-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 mr-8 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-8 lg:grid-cols-2">
                        {menu.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                    <item.icon aria-hidden="true" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-xl font-medium text-gray-900">
                                        {item.name} 
                                        <Badge badgeContent="bientôt" color="success" className="ml-8 rounded-lg bg-indigo-100 text-indigo-500" />
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {item.description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

function IconOne() {
  return (
    <div 
        className="
            p-2 
            bg-indigo-100 
            rounded-md 
            text-indigo-500 
        "
    >
        <HiOutlineChatBubbleOvalLeftEllipsis size={35} />
    </div>
  )
}

function IconTwo() {
  return (
    <div 
        className="
            p-2 
            bg-indigo-100 
            rounded-md 
            text-indigo-500 
        "
    >
        <HiOutlineNewspaper size={35} />
    </div>
  )
}

function IconThree() {
  return (
    <div 
        className="
            p-2 
            bg-indigo-100 
            rounded-md 
            text-indigo-500 
        "
    >
        <HiOutlineSignal size={35} />
    </div>
  )
}

function IconFour() {
    return (
        <div 
            className="
                p-2 
                bg-indigo-100 
                rounded-md 
                text-indigo-500 
            "
        >
            <HiOutlineIdentification size={35} />
        </div>
    )
}


function IconFive() {
  return (
      <div 
          className="
              p-2 
              bg-indigo-100 
              rounded-md 
              text-indigo-500 
          "
      >
          <HiOutlineBookOpen size={35} />
      </div>
  )
}


export default PopOverMenu;