import Container from "../components/Container";
import Heading from "../components/Heading";
import PasswordForm from "../components/PasswordForm";
import ContentSider from "../setting/page";

const page = () => {
    return (
        <>
            <ContentSider>
                <Container>
                    <div className="mt-5">
                        <Heading 
                            title="Mot de passe"
                            subtitle="Vous devez renseigner votre mot de passe actuel pour changer de mot de passe."
                        />
                    </div>
                    <hr className="mt-5 py-5" />
                    <PasswordForm />
                </Container>
            </ContentSider>
        </>
    );
}

export default page;