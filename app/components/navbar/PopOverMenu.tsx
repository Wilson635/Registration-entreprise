"use client"


import useRentModal from '@/app/hooks/useRentModal'
import useLoginModal from "@/app/hooks/useLoginModal"
import { SafeUser } from "@/app/types"
import { Popover, Transition } from '@headlessui/react'
import { Fragment, useState, useCallback } from 'react'
import { HiAdjustmentsHorizontal, HiPhone, HiVideoCamera, HiOutlineChatBubbleOvalLeftEllipsis, HiBookOpen, HiOutlineIdentification, HiOutlineNewspaper, HiOutlineSignal } from "react-icons/hi2"
import { Badge } from '@mui/material'

const menu = [
  {
    name: 'Discussion',
    description: 'Measure actions your users take',
    href: '/discussions',
    icon: IconOne,
  },
  {
    name: 'Articles',
    description: 'Create your own targeted content',
    href: '/articles',
    icon: IconTwo,
  },
  {
    name: 'Podcasts',
    description: 'Découvrez toutes les dicussions du site',
    href: '/podcasts',
    icon: IconThree,
  },
  {
    name: 'Entreprises',
    description: 'Parcourez la liste des différentes entreprises enrégistrées sur le site',
    href: '/entreprise',
    icon: IconFour,
  },
]

const callsToAction = [
  { name: 'Guide', href: '/notreguide', icon: HiBookOpen },
  { name: 'Contact sales', href: '/contact-us', icon: HiPhone },
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
              <Popover.Panel className="absolute left-1/2 z-50 mt-5 flex w-[90vw] sm:mx-auto max-sm:-left-28 max-md:-left-28 -translate-x-1/2 px-4 lg:max-w-3xl backdrop:blur-md">
                <div className="relative overflow-hidden rounded-br-lg rounded-bl-lg shadow-lg mr-52 ring-1 ring-black ring-opacity-5">
                    <div className="grid gap-8 bg-white p-8 lg:grid-cols-1 backdrop:blur-md opacity-100">
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
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {item.description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                          {item.name}
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




export default PopOverMenu;