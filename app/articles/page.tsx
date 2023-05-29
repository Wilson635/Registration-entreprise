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
                    <div className="grid grid-cols-2">
                        <div className="w-4/12">
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