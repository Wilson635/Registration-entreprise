import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";

export default function FeedBack() {
    let [isOpen, setIsOpen] = useState(true);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div className="flex justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="flex gqp-2 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    <HiOutlineChatBubbleBottomCenter className="cursor-pointer text-indigo-500 text-2xl" />{" "}
                    <span className="hidden md:block"> Feedback </span>
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Partagez vos commentaires!
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <textarea
                                            rows={8}
                                            placeholder="Entrer votre message ici"
                                            className="
                                                resize-none 
                                                block w-full 
                                                rounded-md 
                                                bg-gray-200
                                                p-4
                                                text-sm text-gray-1200 
                                                placeholder:text-gray-1100 
                                                border-transparent 
                                                focus-visible:border-transparent 
                                                focus:outline-none focus:ring-2 
                                                focus:ring-indigo-700 
                                                focus:ring-offset-2 
                                                focus-visible:ring-opacity-75
                                            "
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Soumettre
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
