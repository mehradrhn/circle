import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Phone from '../../Asset/Pic/phone.png';
import Email from '../../Asset/Pic/email.png';


import styles from '../Footer/Footer.module.css';

function Footer() {
    return (

        <div className={styles.holder}>
            
            <div className={styles.back}>

                <svg className={styles.footerSvg} xmlns="http://www.w3.org/2000/svg" width="2210" height="542.155" viewBox="0 0 2210 542.155">
                    <path id="Path_41" data-name="Path 41" d="M-69,6778.091H2141v-451.6s-404.646-95.963-1121.166-90.319S-69,6296.389-69,6296.389Z" transform="translate(69 -6235.936)" fill="#338d81" />
                </svg>


                <ul className={styles.link}>

                    <span className={styles.title}> لینک ها </span>
                    <li> صفحه اصلی </li>
                    <li> آموزش </li>
                    <li> مالی </li>
                    <li> خدمات </li>

                </ul>

                <ul className={styles.box}>

                    <span className={styles.title}> ارتباط با ما </span>
                    <li >  011-3311999
                        <img className={styles.phonePic}
                            src={Phone}
                        />
                    </li>
                    <li> Example@email.com

                        <img className={styles.emailPic}
                            src={Email}
                        />

                    </li>
                </ul>

                <Form className={styles.sendEmail}>
                    <Form.Control
                        type="search"
                        placeholder="Example@email.com"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button className={styles.button} variant="outline-success"> ارسال </Button>
                </Form>



            </div>
        </div>

    );
}

export default Footer;