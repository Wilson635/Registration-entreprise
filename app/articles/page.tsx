"use client"

import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";

const Articles = () => {
    return (
        <>
            <ClientOnly>
                <Container>
                Articles page
                </Container>
            </ClientOnly>
        </>
    );
}

export default Articles;