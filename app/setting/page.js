import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import Sidebar from "../components/profile/Sidebar";

const ContentSider = ({ children }) => {
    return (
        <>
            <div className="body">
                <ClientOnly>
                    <Container>
                        <div className="layout">
                            <Sidebar />
                            <main className="layout__main-content">{children}</main>;
                        </div>
                    </Container>
                </ClientOnly>
            </div>
        </>
    );
}

export default ContentSider;