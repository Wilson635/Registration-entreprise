
import Sidebar from "../components/profile/Sidebar";

const ContentSider = ({ children }) => {
    return (
        <>
            <div className="body">
                <div className="layout">
                    <Sidebar />
                    <main className="layout__main-content">{children}</main>
                </div>
            </div>
        </>
    );
}

export default ContentSider;