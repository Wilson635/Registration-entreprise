"use client"

/* eslint-disable react/no-unescaped-entities */

import { Disclosure } from '@headlessui/react'
import { HiChevronUp } from 'react-icons/hi2'

export default function Accordion() {
    return (
        <div className="w-full px-4 pt-2">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-8 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                                <span>Quels avantages aurai-je en tant que freelance Annuary ?</span>
                                <HiChevronUp
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-indigo-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            Vous pouvez proposer vos services à un prix que vous déterminez. Votre compte Annuary, facile à utiliser, dispose de nombreuses fonctionnalités 
                            qui vous aident à gagner plus. Créez un service professionnel et de qualité, et des clients du monde entier se présenteront à vous
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-8 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                                <span>Qu'est-ce qu'un service et comment en créer un ?</span>
                                <HiChevronUp
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-indigo-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            Votre service montre au monde entier les prestations que vous proposez. Il donne aux clients toutes les informations dont ils ont besoin pour passer commande auprès de vous.
                            Pour créer un service : Se connecter &gt; Cliquez sur « Devenir prestataire » &gt;  Cliquez sur « Services » &gt; Cliquez sur « Créer un nouveau service », puis suivez la procédure étape par étape. 
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-8 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                                <span>Comment suis-je payé ?</span>
                                <HiChevronUp
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-indigo-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            Lorsqu'un client passe une commande, le paiement est immédiatement transféré à Annuary pour y être conservé. Une fois que vous avez livré la commande et que le client l'a acceptée, votre part de 80% est transférée sur 
                            votre compte de la page des gains. Après une période de vérification d'une à deux semaines, vous pourrez retirer vos gains via PayPal, un virement bancaire. 
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-8 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                                <span>Y a-t-il des frais lorsque je retire mes gains ?</span>
                                <HiChevronUp
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-indigo-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            Lorsque vous retirez vos gains, Annuary ne prélève pas de frais. Cependant, votre fournisseur de paiement en ligne peut facturer des frais de traitement des retraits. En outre, si vous retirez vos 
                            gains dans une devise autre que le dollar américain, votre fournisseur peut facturer des frais de conversion. 
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}
