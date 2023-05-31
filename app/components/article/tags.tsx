import { HiViewList } from "react-icons/hi";
import Heading from "../Heading";
import { HiClipboardDocumentList } from "react-icons/hi2";

const TagsArt = () => {
    return (
        <>
            <div className="py-7">
                <h4 className="font-semibold mb-3"> Affichage des articles </h4>
                <div className="flex items-center justify-between gap-2 py-2">
                    <div className="flex border cursor-pointer px-5 rounded border-indigo-200 py-2 gap-2 items-center text-indigo-200">
                        <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"></path>
                        </svg>
                        <span> List </span>
                    </div>
                    <div className="flex border cursor-pointer px-5 rounded border-indigo-200 py-2 items-center text-indigo-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"></path>
                        </svg>
                        <span> Carte </span>
                    </div>
                </div>
                
            </div>
            <hr className="py-3"/>
            <div className="py-4">
                <h4 className="font-semibold mb-3"> Tous les tags </h4>
            </div>
            <ol className="border-l border-indigo-300 dark:border-indigo-500">
                {/* <!--First item--> */}
                <li>
                    <div className="flex-start flex items-center">
                        <div
                            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                        <p className="text-sm text-indigo-500 dark:text-indigo-300 cursor-pointer hover:text-indigo-700 hover:font-semibold">
                            Application
                        </p>
                    </div>
                </li>

                {/* <!--Second item--> */}
                <li>
                    <div className="flex-start flex items-center pt-2">
                        <div
                            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                        <p className="text-sm text-indigo-500 dark:text-indigo-300 cursor-pointer hover:text-indigo-700 hover:font-semibold">
                            Design
                        </p>
                    </div>
                </li>

                {/* <!--Third item--> */}
                <li>
                    <div className="flex-start flex items-center pt-2">
                        <div
                            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                        <p className="text-sm text-indigo-500 dark:text-indigo-300 cursor-pointer hover:text-indigo-700 hover:font-semibold">
                            Communaute
                        </p>
                    </div>
                </li>

                <li>
                    <div className="flex-start flex items-center pt-2">
                        <div
                            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                        <p className="text-sm text-indigo-500 dark:text-indigo-300 cursor-pointer hover:text-indigo-700 hover:font-semibold">
                            Freelance
                        </p>
                    </div>
                </li>
                
                <li>
                    <div className="flex-start flex items-center pt-2">
                        <div
                            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                        <p className="text-sm text-indigo-500 dark:text-indigo-300 cursor-pointer hover:text-indigo-700 hover:font-semibold">
                            Photographie
                        </p>
                    </div>
                </li>

                <li>
                    <div className="flex-start flex items-center pt-2">
                        <div
                            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                        <p className="text-sm text-indigo-500 dark:text-indigo-300 cursor-pointer hover:text-indigo-700 hover:font-semibold">
                            Travel
                        </p>
                    </div>
                </li>
            </ol>
        </>
    );
}

export default TagsArt;