

import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import HeadProfile from "../components/profile/HeadProfile";


const Profile = () => {
    return (
        <>
            <ClientOnly>
                <Container>
                    <HeadProfile />
                    Profile Page
                </Container>
            </ClientOnly>
        </>
    );
}

export default Profile;