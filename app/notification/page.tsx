/* eslint-disable react/no-unescaped-entities */
import { HiOutlineInformationCircle } from "react-icons/hi2";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ContentSider from "../setting/page";

const page = () => {
    return (
        <>
            <ContentSider>
                <Container>
                    <div className="mt-5">
                        <Heading 
                            title="Gérez vos notifications "
                            subtitle="Cette page répertorie tous les abonnements à des e-mails pour votre compte. Par exemple, vous avez peut-être demandé à être informé par e-mail de la mise à jour d'un thread ou d'un fil de discussion particulier."
                        />
                    </div>
                    <hr className="mt-5 py-5" />
                    <div className="flex gap-2 px-4 bg-transparent  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 f sm:text-sm text-base sm:leading-6">
                        <HiOutlineInformationCircle className="text-indigo-500" size={42} />
                        <p>
                            <span className="text-indigo-500 text-lg">Astuce:</span>  Visitez n'importe quel fil de discussion du forum et cliquez sur le bouton <strong>"S'abonner" </strong>dans la barre latérale. Une fois 
                            cliqué, vous recevrez un e-mail chaque fois qu'une réponse sera publiée. Il en va de même pour n'importe quel type de contenu qui offre cette possibilité. 
                        </p>
                    </div>
                </Container>
            </ContentSider>
        </>
    );
}

export default page;
