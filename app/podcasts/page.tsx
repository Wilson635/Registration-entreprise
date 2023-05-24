

import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";


const Podcast = () => {
    return (
        <>
            <ClientOnly>
                <Container>
                Podcast page
                </Container>
            </ClientOnly>
        </>
    );
}

export default Podcast;