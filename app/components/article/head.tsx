import Heading from "../Heading";

const HeadArt = () => {
    return (
        <>
            <div className="flex flex-col py-7">
                <Heading 
                    title="Récentes publications"
                    subtitle="Tous les articles récemment publiés."
                />
                <hr className="py-3"/>
            </div>
        </>
    );
}

export default HeadArt;