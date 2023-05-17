'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { MdCommute, MdConstruction, MdWaterDrop } from "react-icons/md";
import { FaCreditCard, FaLeaf } from 'react-icons/fa';
import { RiHeartPulseLine, RiPieChartLine } from "react-icons/ri";

import CategoryBox from "../CategoryBox";
import Container from '../Container';
import { BiBus } from 'react-icons/bi';
import { HiCog, HiComputerDesktop, HiShoppingBag, HiUserGroup } from 'react-icons/hi2';


export const categories = [
  {
    label: "Agriculture",
    icon: FaLeaf,
    description: "Agriculture",
  },
  {
    label: "Construction",
    icon: MdConstruction,
    description: "Construction Second Oeuvre BTP",
  },
  {
    label: "Commerce",
    icon: HiShoppingBag,
    description: "Commerce",
  },
  {
    label: "Industrie",
    icon: HiCog,
    description: "Industrie",
  },
  {
    label: "Informatique",
    icon: HiComputerDesktop,
    description: "Informatique & telecom",
  },
  {
    label: "Pétrole",
    icon: MdWaterDrop,
    description: "Pétrole, mine & energie",
  },

  {
    label: "Comptabilité",
    icon: RiPieChartLine,
    description: "Service de Comptabilité et de publicité",
  },

  {
    label: "Transport",
    icon: MdCommute,
    description: "Transport air, mer & terre",
  },

  {
    label: "Santé",
    icon: RiHeartPulseLine,
    description: "Santé enseignement",
  },

  {
    label: "Administration",
    icon: HiUserGroup,
    description: "Administration",
  },

  {
    label: "Banque",
    icon: FaCreditCard,
    description: "Banque & assurances",
  },

  {
    label: "Tourisme",
    icon: BiBus,
    description: "Tourisme et loisir",
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;