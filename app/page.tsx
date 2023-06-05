import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";

import getListings, { 
  IListingsParams
} from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import NewLetter from "./components/Newletter";
import Heading from "./components/Heading";
import { FaSlackHash } from "react-icons/fa";
import ServicesCard from "./components/ServicesCard";

interface HomeProps {
  searchParams: IListingsParams
};

export const dynamicParams = true; // true | false,

export const dynamic = 'auto';
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="flex gap-3 mt-28">
          <FaSlackHash className="text-indigo-500 text-3xl"/>
          <Heading
            title="Entreprises"
            subtitle="Listes des entreprises!"
          />
        </div>
        <div 
          className="
            pt-16
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
        <div className="flex gap-3 mt-28">
          <FaSlackHash className="text-indigo-500 text-3xl"/>
          <Heading
            title="Services Populaires"
            subtitle={""}
          />
        </div>
        <div 
          className="
            pt-16
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          <ServicesCard />
        </div>
      </Container>
      <NewLetter />
    </ClientOnly>
  )
}

export default Home;
