import Container from "../components/Container";
import Heading from "../components/Heading";
import ContentSider from "../setting/page";

const page = () => {
    return (
        <>
            <ContentSider>
                <Container>
                    <div className="mt-5">
                        <Heading 
                            title="Gérez vos notifications "
                            subtitle="Cette page répertorie tous les abonnements à des e-mails pour votre compte. Par exemple, vous avez peut-être demandé à être informé par e-mail de la mise à jour d'un thread ou d'un fil de discussion particulier."
                        />
                    </div>
                    <hr className="mt-5 py-5" />
                </Container>
            </ContentSider>
        </>
    );
}

export default page;
