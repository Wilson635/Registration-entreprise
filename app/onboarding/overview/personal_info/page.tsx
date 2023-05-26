import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import StepperFreelance from "@/app/components/freelance/stepper/Stepper";

const page = () => {
    return (
        <>
            <ClientOnly>
                <Container>
                    <StepperFreelance />
                </Container>
            </ClientOnly>
        </>
    );
}

export default page;