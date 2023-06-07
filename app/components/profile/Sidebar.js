"use client"

/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { HiOutlineUser, HiOutlineLockClosed, HiOutlineRectangleGroup, HiOutlineMegaphone, HiOutlineCog8Tooth } from "react-icons/hi2";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { SidebarContext } from "@/app/context/SidebarContext";

const sidebarItems = [
    {
        name: "Mon Profile",
        href: "/setting/profile",
        icon: HiOutlineUser,
    },
    {
        name: "Mot de passe",
        href: "/password",
        icon: HiOutlineLockClosed,
    },
    {
        name: "Apparence",
        href: "/apparence",
        icon: HiOutlineRectangleGroup,
    },
    {
        name: "Notificaion",
        href: "/notification",
        icon: HiOutlineMegaphone,
    },
];

const Sidebar = () => {
    const router = useRouter();
    const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

    return (
        <div className="sidebar__wrapper">
            <button className="btn" onClick={toggleSidebarcollapse}>
                {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
            </button>
            <aside className="sidebar" data-collapse={isCollapsed}>
                <div className="sidebar__top">
                    {/* <Image
                        width={80}
                        height={80}
                        className="sidebar__logo"
                        src="/logo.jpg"
                        alt="logo"
                    /> */}
                    <HiOutlineCog8Tooth className="sidebar__logo" size={80} />
                    <p className="sidebar__logo-name">Paramètres</p>
                </div>
                <ul className="sidebar__list">
                    {sidebarItems.map(({ name, href, icon: Icon }) => {
                        return (
                            <li className="sidebar__item" key={name}>
                                <Link
                                    className={`sidebar__link ${router.pathname === href ? "sidebar__link--active" : ""
                                        }`}
                                    href={href}
                                >
                                    <span className="sidebar__icon">
                                        <Icon />
                                    </span>
                                    <span className="sidebar__name">{name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;