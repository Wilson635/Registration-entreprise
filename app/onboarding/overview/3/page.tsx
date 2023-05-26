/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"

import { useRouter } from "next/navigation";
import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import { BsCheck2Circle } from "react-icons/bs";
import Heading from "@/app/components/Heading";
import { HiBriefcase, HiCurrencyDollar, HiIdentification, HiUsers } from "react-icons/hi2";


const page = () => {

    const router = useRouter();


    return (
        <>
            <ClientOnly>
                <Container>
                    <section className="pb-16">
                        <div className="mx-auto max-w-7xl px-8 md:px-6">
                            <div className="md:flex md:justify-between md:gap-6 xl:gap-10">
                                <div className="mb-5 max-h-[600px] overflow-hidden rounded-lg md:mb-0 md:w-5/12">
                                    <img src="/images/freelance/7.jpg" alt="features img" className="h-full scale-125 sm:w-full sm:object-cover"/>
                                </div>
                                <div className="md:w-7/12">
                                    <Heading 
                                        title="Maintenant, parlons des choses dont vous voulez vous tenir à l'écart."
                                        subtitle="Votre succès sur Annuary est important pour nous. Éviter les éléments suivants pour respecter les normes communautaires :"
                                    />
                                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
                                        <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                                            <HiIdentification className="text-3xl text-indigo-500"/>
                                            <Heading 
                                                subtitle="Fournir toute information trompeuse ou inexacte sur votre identité." title={""}                        />
                                        </div>
                                        <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                                            <HiUsers className="text-3xl text-indigo-500"/>
                                            <Heading 
                                                subtitle="Ouverture de comptes faisant double emploi. Rappelez-vous, vous pouvez toujours créer plus de Boutiques." title={""}                        />
                                        </div>
                                        <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                                            <HiBriefcase className="text-3xl text-indigo-500"/>
                                            <Heading 
                                                subtitle="Solliciter d'autres membres de la communauté pour travailler sur Annuary." title={""}                        />
                                        </div>
                                        <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                                            <HiCurrencyDollar className="text-3xl text-indigo-500"/>
                                            <Heading 
                                                subtitle="Demander à prendre la communication et le paiement en dehors de Annuary." title={""}                        />
                                        </div>
                                    </div>

                                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                        <p
                                            onClick={() => router.push('/onboarding/overview/personal_info')}
                                            className="rounded-md shadow-lg bg-white border-2 px-12 py-2.5 text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                        >
                                            Continue
                                        </p>
                                        <p 
                                            onClick={() => router.push('/onboarding/overview/2')}
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

