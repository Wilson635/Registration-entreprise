

import Container from "@/app/components/Container";
import ClientOnly from "../components/ClientOnly";
import NewLetter from "../components/Newletter";
import FormContact from "../components/contact/FormContact";

const Contact = () => {
    return (
        <>
            <ClientOnly>
                <Container>
                    <FormContact />
                </Container>
                <NewLetter />
            </ClientOnly>
        </>
    );
}

export default Contact;