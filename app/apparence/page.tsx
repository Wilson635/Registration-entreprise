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
                            title="Apparence de l'application"
                            subtitle="Vous avez la possibilite de modifier l'apparence de l'application selon vos gouts."
                        />
                    </div>
                    <hr className="mt-5 py-5" />
                </Container>
            </ContentSider>
        </>
    );
}

export default page;