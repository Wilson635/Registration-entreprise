/* eslint-disable react/no-unescaped-entities */
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiBookmark, BiChat, BiMailSend, BiPhoneCall, BiSend, BiUser } from 'react-icons/bi'
import styles from '../../styles/contact.module.css'


const FormContact = () => {

    const Click = () => {

        const inputs = document.querySelectorAll(".input");

        const handleInputs = (e : any) => {
            const parent = e.target.parentNode;
            parent.classList.add("focus");
        }

        const blurFunc = (e : any) => {
            let parent = e.target.parentNode;
            if (e.target.value === "") {
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
                        <h3 className={styles.title}>Let's get in touch</h3>
                        <p className="text">
                            The Fastest Delivery in Your City.
                            Come to ask your problem
                        </p>

                        <div className={styles.info}>
                            <div className={styles.information}>
                                <span className="p-2 bg-blue-100 rounded-md text-blue-500"> 
                                    <HiOutlineLocationMarker size={25}/> 
                                </span>
                                <p> Douala, Yassa - Yatchika </p>
                            </div>
                            <div className={styles.information}>
                                <span className="p-2 bg-blue-100 rounded-md text-blue-500"> 
                                    <BiMailSend size={25}/> 
                                </span>
                                <p> wngahemeni@gmail.com </p>
                            </div>
                            <div className={styles.information}>
                                <span className="p-2 bg-blue-100 rounded-md text-blue-500"> 
                                    <BiPhoneCall size={25}/> 
                                </span>
                                <p> +237 659 38 96 49 </p>
                            </div>
                            <h4 className="font-semibold text-xl" style={{ color: '#349ebf'}}> Connect with us : </h4>
                            <div className={styles.wrapper}>

                                <div className="icon facebook">
                                    <div className={styles.tooltip}>
                                        Facebook
                                    </div>
                                    <span><i className="fab fa-facebook-f"></i></span>
                                </div>
                                <div className="icon twitter">
                                    <div className={styles.tooltip}>
                                        Twitter
                                    </div>
                                    <span><i className="fab fa-twitter"></i></span>
                                </div>
                                <div className="icon instagram">
                                    <div className={styles.tooltip}>
                                        Instagram
                                    </div>
                                    <span><i className="fab fa-instagram"></i></span>
                                </div>
                                <div className="icon github">
                                    <div className={styles.tooltip}>
                                        Github
                                    </div>
                                    <span><i className="fab fa-github"></i></span>
                                </div>
                                <div className="icon youtube">
                                    <div className={styles.tooltip}>
                                        YouTube
                                    </div>
                                    <span><i className="fab fa-youtube"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactForm}>
                        <span className={styles.circleone}></span>
                        <span className={styles.circletwo}></span>

                        <form action="" className={styles.formContact} onClick={Click}>
                            <h3 className={styles.title}> Contact us </h3>
                            <div className={styles.inputContainer}>
                                <input type="text" name="name" className={styles.input}/>
                                <label htmlFor=""> <BiUser className="w-5 h-5"/> Username </label>
                                <span> Username </span>
                            </div>
                            <div className={styles.inputContainer}>
                                <input type="text" name="name" className={styles.input}/>
                                <label htmlFor=""> <BiMailSend className="w-5 h-5"/> Email Address </label>
                                <span> Email Address </span>
                            </div>
                            <div className={styles.inputContainer}>
                                <input type="text" name="name" className={styles.input}/>
                                <label htmlFor=""> <BiPhoneCall className="w-5 h-5" /> Phone Number </label>
                                <span> Phone Number </span>
                            </div>
                            <div className={styles.inputContainer}>
                                <input type="text" name="name" className={styles.input}/>
                                <label htmlFor=""> <BiBookmark className="w-5 h-5"/> Objet </label>
                                <span> Objet </span>
                            </div>
                            <div className={styles.inputContainer}>
                                <textarea name="message" className={styles.input}></textarea>
                                <label htmlFor=""> <BiChat className="w-5 h-5"/> Message </label>
                                
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