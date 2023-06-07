/* eslint-disable @next/next/no-img-element */
"use client"


import { Fragment, useMemo } from 'react'
import {
    HiBriefcase,
    HiCalendar,
    HiCheck,
    HiChevronDown,
    HiCurrencyDollar,
    HiGlobeAlt,
    HiInbox,
    HiInformationCircle,
    HiLink,
    HiMapPin,
    HiPencil
} from 'react-icons/hi2'
import { Menu, Switch, Transition } from '@headlessui/react'
import Image from 'next/image'
import Avatar from '../Avatar'
// import getCurrentUser from '@/app/actions/getCurrentUser'
import { SafeUser } from '@/app/types'
import Container from '../Container'
import { TabsProfile } from './TabsProfile'
import { Stack, Typography } from '@mui/material';
import Link from 'next/link'


interface ProfileProps {
    currentUser?: SafeUser | null
}

export const HeadProfile: React.FC<ProfileProps> = ({
    currentUser
}) => {

    return (
        <>
            <img
                className="relative left-1/2 -translate-x-1/2 top-0 w-[76rem] h-[20rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="/images/cover.jpg"
                alt="App screenshot"
            />

            <Container>

                <div className="lg:flex flex-col lg:justify-between">

                    <div className="min-w-0 flex-1">
                        <div className='flex items-center justify-between gap-2'>
                            <div className='p-2 flex gap-4'>
                                <div
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
                                <Stack spacing={0.2}>
                                    <Typography fontWeight={700}>{currentUser?.name}</Typography>
                                    <Typography fontWeight={200}>{currentUser?.email}</Typography>

                                </Stack>
                            </div>
                            <div>
                                <Link href={'/setting/profile'} className="block sm:block">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        <HiPencil className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        Edit
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <HiMapPin className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                ....
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <HiCalendar className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                Inscrit le {currentUser?.createdAt}
                            </div>
                        </div>
                        <div className="px-9 py-5 mt-1 flex flex-col sm:mt-0 sm:flex-row items-center justify-between  sm:flex-wrap sm:space-x-6">
                            <div className="mt-2 flex flex-col items-center text-sm text-gray-500">
                                <div className="flex">
                                    <HiInformationCircle className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    Bibliographie
                                </div>
                                <span className='py-4'> .... </span>
                            </div>
                            <div className="mt-2 flex flex-col items-center text-sm text-gray-500">
                                <div className="flex">
                                    <HiGlobeAlt className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    Site internet
                                </div>
                                <span className='py-4'> .... </span>
                            </div>
                            <div className="mt-2 flex flex-col items-center text-sm text-gray-500">
                                {/* <div className="flex">
                                    <HiGlobe className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    Site internet
                                    <span className='py-4'> .... </span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center flex">
                    <TabsProfile currentUser={currentUser} />
                </div>
            </Container>
        </>
    )
}
