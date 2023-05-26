/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"

import { useRouter } from "next/navigation";
import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import { BsCheck2Circle } from "react-icons/bs";


const page = () => {

    const router = useRouter();


    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-full">
                    <div className="abolute isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#7775D6" />
                                    <stop offset={1} stopColor="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                                Prêt à commencer à vendre sur Annuary ? Voici la ventilation :
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                <ul>
                                    <li className="mb-6 flex items-center">
                                        <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                                            <BsCheck2Circle />
                                        </div>
                                        <p className="ml-4 max-w-md flex flex-col font-medium text-slate-600 text-justify"> <span className="text-xl font-bold">Apprenez ce qui fait le succès</span>
                                            <span>Découvrez les choses à faire et à ne pas faire pour vous assurer d'être toujours sur la bonne voie.</span>
                                        </p>
                                    </li>
                                    <li className="mb-6 flex items-center">
                                        <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                                            <BsCheck2Circle />
                                        </div>
                                        <p className="ml-4 max-w-md flex flex-col font-medium text-slate-600 text-justify"> <span className="text-xl font-bold">Créez votre profil de vendeur</span>
                                            <span>Ajoutez votre photo de profil, votre description et vos informations professionnelles.</span>
                                        </p>
                                    </li>
                                    <li className="mb-6 flex items-center">
                                        <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                                            <BsCheck2Circle />
                                        </div>
                                        <p className="ml-4 max-w-md flex flex-col font-medium text-slate-600 text-justify"> <span className="text-xl font-bold">Publier votre boutique</span>
                                            <span>Créez une boutique du service que vous offrez et commencez à vendre instantanément.</span>
                                        </p>
                                    </li>
                                </ul>
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <p
                                    onClick={() => router.push('/onboarding/overview/2')}
                                    className="rounded-md bg-white px-12 py-2.5 text-sm font-semibold text-gray-900 cursor-pointer shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Continue
                                </p>
                                {/* <p 
                                    onClick={() => router.push('/onboarding/overview/1')}
                                    className= "cursor-pointer text-sm font-semibold leading-6 text-white">
                                    Back <span aria-hidden="true" className="rotate-180">→</span>
                                </p> */}
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img
                                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                src="/images/freelance/5.jpg"
                                alt="App screenshot"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default page;

