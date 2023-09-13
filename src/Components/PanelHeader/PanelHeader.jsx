import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Headerlogo from '../../Asset/Pic/logo1.png';
import searchIcon from '../../Asset/Pic/SearchIconCourses.png';
import Hesab from '../../Asset/Pic/hesab.png';

import styles from '../PanelHeader/PanelHeader.module.css';

function Header() {
    return (
        <Navbar expand="lg" dir="rtl" className={styles.navbar} >
            <Container fluid>
                <Navbar.Brand href="#home" className="ms-2">
                    <img
                        src={Headerlogo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Bahr academy logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#home"> آکادمی بحر </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto" >
                        <Nav.Link href="#home" className={styles.home}> خانه </Nav.Link>
                        <Nav.Link href="#link" className="text-dark"> دوره ها </Nav.Link>
                        <Nav.Link href="#link" className="text-dark"> اخبار </Nav.Link>
                        <Nav.Link href="#link" className="text-dark"> خدمات </Nav.Link>
                        <Nav.Link href="#link" className="text-dark"> تماس با ما </Nav.Link>

                    </Nav>
                    <Button variant="outline" className={styles.search}>
                        <img
                            src={searchIcon}
                            width="20"
                            height="20"
                            className="d-inline-block align-top"
                            alt="Bahr academy logo"
                        />
                    </Button>

                    <Button variant="outline" className={styles.register} > <p> ثبت نام </p>
                        <img
                            src={Hesab}
                            width="20"
                            height="20"
                            className={styles.hesabPic}
                            alt="Bahr academy logo"
                        />
                    </Button>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header

