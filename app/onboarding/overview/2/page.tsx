/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"

import { useRouter } from "next/navigation";
import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import { BsCheck2Circle } from "react-icons/bs";
import Heading from "@/app/components/Heading";
import { HiLink, HiLockClosed, HiNewspaper, HiIdentification, HiUserPlus } from "react-icons/hi2";


const page = () => {

    const router = useRouter();


    return (
        <>
            <ClientOnly>
                <Container>
                    <section className="pb-16">
                        <div className="mx-auto max-w-7xl px-8 md:px-6">
                            <div className="mb-5 sm:mb-10">
                                <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">Qu'est-ce qui fait un profil Annuary réussi?</h1>
                            </div>
                            <div className="md:flex md:justify-between md:gap-6 xl:gap-10">
                                <div className="mb-5 max-h-[600px] overflow-hidden rounded-lg md:mb-0 md:w-5/12">
                                    <img src="/images/freelance/1.jpg" alt="features img" className="h-full scale-125 sm:w-full sm:object-cover"/>
                                </div>
                                <div className="md:w-7/12">
                                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                                            <HiIdentification className="text-3xl text-indigo-500"/>
                                            <Heading 
                                                subtitle="Prenez votre temps pour créer votre profil, c'est exactement ce que vous voulez." title={""}                        />
                                        </div>
                                        <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                                            <HiLink className="text-3xl text-indigo-500"/>
                                            <Heading 
                                                subtitle="Ajoutez de la crédibilité en vous liant à vos réseaux professionnels pertinents." title={""}                        />
                                        </div>
                                        <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                                            <HiNewspaper className="text-3xl text-indigo-500"/>
                                            <Heading 
                                                subtitle="Décrivez avec précision vos compétences professionnelles pour vous aider à obtenir plus de travail." title={""}                        />
                                        </div>
                                        <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                                            <HiUserPlus className="text-3xl text-indigo-500"/>
                                            <Heading 
                                                subtitle="Mettez un visage à votre nom. Téléchargez une photo de profil qui montre clairement votre visage." title={""}                        />
                                        </div>
                                        <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                                            <HiLockClosed className="text-3xl text-indigo-500"/>
                                            <Heading 
                                                subtitle="Pour que notre communauté soit sûre pour tout le monde, nous pouvons vous demander de vérifier votre carte d'identité." title={""}                        />
                                        </div>
                                    </div>

                                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                        <p
                                            onClick={() => router.push('/onboarding/overview/3')}
                                            className="rounded-md shadow-lg bg-white border-2 px-12 py-2.5 text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                        >
                                            Continue
                                        </p>
                                        <p 
                                            onClick={() => router.push('/onboarding/overview/1')}
                                            className= "cursor-pointer text-sm font-semibold leading-6 text-indigo-500">
                                            Back <span aria-hidden="true" className="rotate-180">→</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </ClientOnly>
        </>
    );
}

export default page;

