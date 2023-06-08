import Container from "@/app/components/Container";
import ContentSider from "../page";
import Heading from "@/app/components/Heading";
import ProfileForms from "@/app/components/ProfileForms";

const page = () => {
    return (
        <>
            <ContentSider>
                <Container>
                    <ProfileForms />
                </Container>
            </ContentSider>
        </>
    );
}

export default page;