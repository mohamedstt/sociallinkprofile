import styles from "./styles.module.scss"
import Image from 'next/image';
const Card = () => {
 return <div className={styles.card}>
    <Image className={styles.image} src="/images/avatar.jpg" alt="Mohamed Schuster" width={288} height={288}  />
    <div className={styles.text}>
        <h1>Mohamed Schuster</h1>
        <p>Santarém, Portugal</p>
        <p>Front-end Developer</p>
    <div className={styles.buttons}>
        <button>GitHub</button>
        <button>FrontEnd Mentor</button>
        <button>Linkedin</button>
        <button>Twitter</button>
        <button>Instragram</button>
    </div>
    </div>
 </div>
}

export default Card;