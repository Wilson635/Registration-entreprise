/* eslint-disable react/no-unescaped-entities */
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiBookmark, BiChat, BiMailSend, BiPhoneCall, BiSend, BiUser } from 'react-icons/bi'
import styles from '../../styles/contact.module.css'
import '../../../public/fontawesome-free-6.1.1-web/css/all.css'


const FormContact = () => {

    const Click = () => {

        const inputs = document.querySelectorAll(".input");

        const handleInputs = (e : any) => {
            const parent = e.target.parentNode;
            parent.classList.add("focus");
        }

        function handInputs(e: any) {
            const parent = e.target.parentNode;
            parent.ClassList.add
        }

        const blurFunc = (e : any) => {
            let parent = e.target.parentNode;
            if (e.target.value == "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach((input) => {
            input.addEventListener("focus", handleInputs);
            input.addEventListener("blur", blurFunc);
        })

    }


    return (
        <>
            <div className={styles.container}>
                <span className={styles.bigCircle}></span>
                <div className={styles.form}>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.title}>Contactez-nous</h3>
                        <p className="text-lg">
                            N'hésitez surtout pas à écrire pour plus d'informations.
                        </p>

                        <div className={styles.info}>
                            <div className={styles.information}>
                                <span className="p-3 bg-blue-100 rounded-md text-blue-500 mr-3"> 
                                    <HiOutlineLocationMarker size={35}/> 
                                </span>
                                <p className="font-medium text-lg"> 22 Rue de Paris 93800 - Epinay-sur-Seine </p>
                            </div>
                            <div className={styles.information}>
                                <span className="p-3 bg-blue-100 rounded-md text-blue-500 mr-3"> 
                                    <BiMailSend size={35}/> 
                                </span>
                                <p className="font-medium text-lg"> contact@gno-business.com </p>
                            </div>
                            <div className={styles.information}>
                                <span className="p-3 bg-blue-100 rounded-md text-blue-500 mr-3"> 
                                    <BiPhoneCall size={35}/> 
                                </span>
                                <p className="font-medium text-lg"> +33 (0) 7 49 79 47 07 </p>
                            </div>
                            <h4 className="font-semibold text-xl text-indigo-500/80 mt-5"> Suivez-nous : </h4>
                            
                            <div className={styles.wrapper}>
                                
                                <div className={styles.icon}>
                                    <div className={styles.facebook}>
                                        <div className={styles.tooltip}>
                                            Facebook
                                        </div>
                                        <a href='http://www.facebook.com/username'><i className="fab fa-facebook-f"></i></a>
                                    </div>
                                </div>
                                <div className={styles.icon}>
                                    <div className={styles.twitter}>
                                        <div className={styles.tooltip}>
                                            Twitter
                                        </div>
                                        <a href='http://twitter.com/intent/follow?source=followbutton&variant=1.0&screen_name=username'><i className="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                                <div className={styles.icon}>
                                    <div className={styles.instagram}>
                                        <div className={styles.tooltip}>
                                            Instagram
                                        </div>
                                        <a href='http://instagram.com/username'><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className={styles.icon}>
                                    <div className={styles.snapchat}>
                                        <div className={styles.tooltip}>
                                            Snapchat
                                        </div>
                                        <a href='https://www.snapchat.com/add/username'><i className="fa-brands fa-snapchat"></i></a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactForm}>
                        <span className={styles.circleone}></span>
                        <span className={styles.circletwo}></span>

                        <form action="" className={styles.formContact} onClick={Click}>
                            <div className={styles.inputContainer}>
                                <input type="text" name="name" className={styles.input} placeholder=" Nom "/>
                            </div>
                            <div className={styles.inputContainer}>
                                <input type="text" name="name" className={styles.input} placeholder=" Adresse email "/>
                            </div>
                            <div className={styles.inputContainer}>
                                <input type="text" name="name" className={styles.input} placeholder=" Objet "/>
                            </div>
                            <div className={styles.inputContainer}>
                                <textarea name="message" className={styles.input} placeholder='Votre message'></textarea>
                            </div>
                            <button type="submit" className={styles.btn}> Send <BiSend className="w-5 h-5"/> </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormContact;