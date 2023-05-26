import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import NewLetter from "@/app/components/Newletter";
import FreelanceContent from "@/app/components/freelance/FreelanceContent";
import FreelanceHead from "@/app/components/freelance/FreelanceHead";

const page = async () => {

    const currentUser = await getCurrentUser();

    if (!currentUser) {
        <ClientOnly>
            <EmptyState 
                title="Unauthorized"
                subtitle="Please login"
            />
        </ClientOnly>
    }


    return (
        <>
            <FreelanceHead />

            <ClientOnly>
                <Container>
                    <FreelanceContent />
                </Container>
                <NewLetter />
            </ClientOnly>
        </>
    );
}

export default page;