import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";

import getListings, { 
  IListingsParams
} from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import EntrepriseHead from "./components/entreprise/EntrepriseHead";
import NewLetter from "./components/Newletter";
import Heading from "./components/Heading";
import { FaSlackHash } from "react-icons/fa";

interface HomeProps {
  searchParams: IListingsParams
};

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
      <EntrepriseHead  />
      <Container>
        <div className="flex gap-3">
          <FaSlackHash className="text-indigo-500 text-3xl"/>
          <Heading
            title="Entreprises"
            subtitle="List of entreprises!"
          />
        </div>
        <div 
          className="
            pt-
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
      </Container>
      <NewLetter />
    </ClientOnly>
  )
}

export default Home;
