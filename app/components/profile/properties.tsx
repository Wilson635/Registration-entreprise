"use client"


import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";
import PropertiesClient from "@/app/properties/PropertiesClient";
import ClientOnly from "../ClientOnly";
import EmptyState from "../EmptyState";

const Properties = async () => {

    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return <EmptyState
            title="Unauthorized"
            subtitle="Please login"
        />
    }

    const listings = await getListings({ userId: currentUser.id });



    return (
        <>
                <PropertiesClient
                    listings={listings}
                    currentUser={currentUser}
                />
        </>
    );
}

export default Properties;