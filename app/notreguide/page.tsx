

import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";

const Guide = () => {
    return (
        <>
            <ClientOnly>
                <Container>
                    Guide page
                </Container>
            </ClientOnly>
        </>
    );
}

export default Guide;