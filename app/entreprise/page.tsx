"use client"


import { Container } from "@mui/material";
import { FaSlackHash } from "react-icons/fa";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import getListings, { 
    IListingsParams
} from "@/app/actions/getListings";
import Heading from "../components/Heading";
import NewLetter from "../components/Newletter";
import EntrepriseHead from "../components/entreprise/EntrepriseHead";
import ListingCard from "../components/listings/ListingCard";



interface EntrepriseProps {
    searchParams: IListingsParams
  
};



const Entreprise = async ({ searchParams }: EntrepriseProps) => {

    const listings = await getListings(searchParams);
    const currentUser = await getCurrentUser();


    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="No entreprises found"
                    subtitle="Looks like you have no favorite listings."
                />
            </ClientOnly>
        );
    }


    return (
        <>
            <ClientOnly>
                <EntrepriseHead  />
                <Container>
                    <div className="flex gap-3 mt-5">
                        <FaSlackHash className="text-indigo-500 text-3xl"/>
                        <Heading
                            title="Entreprises"
                            subtitle="List of entreprises!"
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