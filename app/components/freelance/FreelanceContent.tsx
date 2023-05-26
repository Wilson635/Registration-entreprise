


/* eslint-disable react/no-unescaped-entities */




/* eslint-disable @next/next/no-img-element */
import { FaSlackHash } from "react-icons/fa";
import ClientOnly from "../ClientOnly";
import Container from "../Container";
import Heading from "../Heading";
import { Timeline } from "@material-ui/icons";
import { BsCheck2Circle, BsChevronCompactDown } from "react-icons/bs";
import Accordion from "./Accordeon";



const FreelanceContent = () => {
    return (
        <div>
            <ClientOnly>
                <Container>
                    <div className="flex gap-3 mt-28">
                        <FaSlackHash className="text-indigo-500 text-3xl" />
                        <Heading
                            title="Recherche de missions freelance ? "
                            subtitle="Nous recherchons des talents comme le vôtre !  Proposez vos compétences dans une ou plusieurs de nos catégories et recevez des projets intéressants de clients du monde entier."
                        />
                    </div>
                    <div className="flex gap-3 mt-28">
                        <FaSlackHash className="text-indigo-500 text-3xl" />
                        <Heading
                            title="Comment ça marche ?"
                        />
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-6">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full" src="/images/freelance/2.jpg" alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">1. Créez votre service</div>
                                <p className="text-gray-700 text-base">
                                    Inscrivez-vous gratuitement, créez votre service, et proposez votre travail à notre public international.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full" src="/images/freelance/2.jpg" alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">2. Démarrez le travail</div>
                                <p className="text-gray-700 text-base">
                                    Recevez une notification lorsque vous obtenez une nouvelle commande sur Fiverr et discutez des détails avec les clients.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full" src="/images/freelance/2.jpg" alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">3. Soyez payé</div>
                                <p className="text-gray-700 text-base">
                                    Recevez votre paiement à chaque fois que vous finaliserez une commande.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-28">
                        <FaSlackHash className="text-indigo-500 text-3xl" />
                        <Heading
                            title="Pourquoi choisir Annuary ?"
                        />
                    </div>
                    <section className="py-16">
                        <div className="mx-auto max-w-7xl px-8 md:px-6">
                            <div className="md:flex md:justify-between md:gap-6">
                                <div className="md:w-6/12">
                                    <ul>
                                        <li className="mb-6 flex items-center">
                                            <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                                                <BsCheck2Circle />
                                            </div>
                                            <p className="ml-4 max-w-md flex flex-col font-medium text-slate-600 text-justify"> <span className="text-xl font-bold">C'est gratuit</span>
                                                <span>Pas de frais d'inscription.</span>
                                            </p>
                                        </li>
                                        <li className="mb-6 flex items-center">
                                            <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                                                <BsCheck2Circle />
                                            </div>
                                            <p className="ml-4 max-w-md flex flex-col font-medium text-slate-600 text-justify"> <span className="text-xl font-bold">Des clients provenant du monde entier</span>
                                                <span>Les entreprises du monde entier nous font confiance.</span>
                                            </p>
                                        </li>
                                        <li className="mb-6 flex items-center">
                                            <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                                                <BsCheck2Circle />
                                            </div>
                                            <p className="ml-4 max-w-md flex flex-col font-medium text-slate-600 text-justify"> <span className="text-xl font-bold">Flexibilité</span>
                                                <span>Fixez vos propres prix et délais de livraison</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-8 flex justify-center md:mt-0 md:w-3/12">
                                    <img src="/images/freelance/3.jpg" alt="about img" className="max-h-[500px] md:max-h-max" />
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="py-16">
                        <div className="mx-auto max-w-7xl px-8 md:px-6">
                            <div className="mb-5 sm:mb-10">
                                <span className="font-medium text-blue-500">Our FAQ</span>
                                <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">Questions fréquentes</h1>
                            </div>
                            <div className="md:flex md:justify-between md:gap-6">
                                <div className="mb-8 flex justify-center md:mb-0 md:w-5/12">
                                    <img src="/images/freelance/4.png" alt="faq images" className="max-h-[500px] md:max-h-max" />
                                </div>
                                <div className="md:w-6/12">
                                    <Accordion />
                                </div>
                            </div>
                        </div >
                    </section >

                </Container >
            </ClientOnly >
        </div >
    );
}

export default FreelanceContent;