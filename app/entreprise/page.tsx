

import EntrepriseHead from "../components/entreprise/EntrepriseHead";
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings, {
    IListingsParams
} from "@/app/actions/getListings";
import Container from "@/app/components/Container";
import { FaSlackHash } from "react-icons/fa";
import Heading from "../components/Heading";
import NewLetter from "../components/Newletter";
import ListingCard from "../components/listings/ListingCard";


interface HomeProps {
    searchParams: IListingsParams
};

const Entreprise = async ({ searchParams }: HomeProps) => {

    const currentUser = await getCurrentUser();
    const listings = await getListings( searchParams );


    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState showReset />
            </ClientOnly>
        );
    }

    return (
        <>
            <EntrepriseHead />
            <ClientOnly>
                <Container>
                    <div className="flex gap-3 mt-28">
                        <FaSlackHash className="text-indigo-500 text-3xl" />
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
                </Container>
                <NewLetter />
            </ClientOnly>
        </>
    );
}

export default Entreprise;