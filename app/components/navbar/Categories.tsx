'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { DiTerminal } from "react-icons/di";
import { MdCommute, MdConstruction, MdOutlinePeopleAlt, MdSettings, MdShoppingBag, MdWaterDrop } from "react-icons/md";
import { FaCreditCard, FaLeaf } from 'react-icons/fa';
import { RiHeartPulseLine, RiPieChartLine } from "react-icons/ri";

import CategoryBox from "../CategoryBox";
import Container from '../Container';
import { BiBus } from 'react-icons/bi';


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
    icon: MdShoppingBag,
    description: "Commerce",
  },
  {
    label: "Industrie",
    icon: MdSettings,
    description: "Industrie",
  },
  {
    label: "Informatique",
    icon: DiTerminal,
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
    icon: MdOutlinePeopleAlt,
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