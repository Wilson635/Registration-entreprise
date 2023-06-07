import Container from "@/app/components/Container";
import ContentSider from "../page";
import Heading from "@/app/components/Heading";

const page = () => {
    return (
        <>
            <ContentSider>
                <Container>
                    <div className="mt-5">
                        <Heading 
                            title="Profil"
                            subtitle="Vous trouverez ci-dessous les informations de votre profil pour votre compte."
                        />
                    </div>
                    <hr className="mt-5 py-5" />
                </Container>
            </ContentSider>
        </>
    );
}

export default page;