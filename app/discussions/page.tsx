

import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";

const Discussion = () => {
    return (
        <>
            <ClientOnly>
                <Container>
                    Discussion page
                </Container>
            </ClientOnly>
        </>
    );
}

export default Discussion;