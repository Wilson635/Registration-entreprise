"use client"

import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import Content from "../components/article/content";
import HeadArt from "../components/article/head";
import TagsArt from "../components/article/tags";

const Articles = () => {
    return (
        <>
            <ClientOnly>
                <Container>
                    <div className="min-h-screen flex flex-row gap-20">
                        <div className="flex flex-col w-56">
                            <TagsArt />
                        </div>
                        <div className="flex-col flex">
                            <HeadArt />
                            <Content />
                        </div>
                    </div>
                </Container>
            </ClientOnly>
        </>
    );
}

export default Articles;