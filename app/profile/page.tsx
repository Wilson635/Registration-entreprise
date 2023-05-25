

import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import { HeadProfile } from "../components/profile/HeadProfile";


const Profile = async () => {

    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return <EmptyState
            title="Unauthorized"
            subtitle="Please login"
        />
    }


    return (
        <>
            <ClientOnly>
                <Container>
                    
                    <HeadProfile />
                </Container>
            </ClientOnly>
        </>
    );
}

export default Profile;