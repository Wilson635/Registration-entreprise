/* eslint-disable @next/next/no-img-element */
import { HiOutlineEye, HiOutlineHandThumbUp } from "react-icons/hi2";
import ClientOnly from "../ClientOnly";
import Container from "../Container";

const Content = () => {
    return (
        <>
            <ClientOnly>
                <Container>
                    <ul role="list" className="p-6 divide-y divide-slate-200">
                        <li className="flex py-4 first:pt-0 last:pb-0">
                            <div className="w-full overflow-hidden py-4">
                                <img className="w-full rounded-md h-60" src="/images/cover.jpg" alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <div className="px-6 flex items-center justify-between gap-2">
                                    <div className="flex flex-row gap-4">
                                        <div className="flex flex-row gap-2">
                                            <HiOutlineEye className="text-indigo-200" size={25} />
                                            <span>...</span>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <HiOutlineHandThumbUp className="text-indigo-200" size={25} />
                                            <span>...</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#design</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex py-4 first:pt-0 last:pb-0">
                            <div className="w-full overflow-hidden py-4">
                                <img className="w-full rounded-md h-60" src="/images/cover.jpg" alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <div className="px-6 flex items-center justify-between gap-2">
                                    <div className="flex flex-row gap-4">
                                        <div className="flex flex-row gap-2">
                                            <HiOutlineEye className="text-indigo-200" size={25} />
                                            <span>...</span>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <HiOutlineHandThumbUp className="text-indigo-200" size={25} />
                                            <span>...</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#design</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex py-4 first:pt-0 last:pb-0">
                            <div className="w-full overflow-hidden py-4">
                                <img className="w-full rounded-md h-60" src="/images/cover.jpg" alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <div className="px-6 flex items-center justify-between gap-2">
                                    <div className="flex flex-row gap-4">
                                        <div className="flex flex-row gap-2">
                                            <HiOutlineEye className="text-indigo-200" size={25} />
                                            <span>...</span>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <HiOutlineHandThumbUp className="text-indigo-200" size={25} />
                                            <span>...</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#design</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Container>
            </ClientOnly>
        </>
    );
}

export default Content;