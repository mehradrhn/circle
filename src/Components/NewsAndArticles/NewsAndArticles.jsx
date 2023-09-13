import 'bootstrap/dist/css/bootstrap.min.css';
import CoursesIntroPic from '../../Asset/Pic/CoursesIntroPic.png';
import styles from './NewsAndArticles.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import SearchIconCourses from '../../Asset/Pic/SearchIconCourses.png';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArticlesPic from '../../Asset/Pic/Articles.png';
import MyCard from '../MyCard/MyCard';

function NewsAndArticles() {
  return (

    <>



      <>


        <Container className={styles.holder}>
          <img
            src={CoursesIntroPic}
            className={styles.CoursesIntroImg}
            alt="CoursesIntroPic" />

          <p className={styles.LearningPackages}>
            اخبار و مقالات
          </p>
          <Form className={styles.SearchCourses}>
            <Form.Control className={styles.InputSearch}
              placeholder=" عنوان مورد نظر..." />
            <Button className={styles.SearchBtn}>
              <img className={styles.SearchIcon}
                src={SearchIconCourses} /> </Button>
          </Form>
          <Row>
            <Col md={4}>

              <MyCard
                img={ArticlesPic}
                title="آموزش ری اکت جی اس با استاد جدید"
                text="این کتابخانه توسط فیس‌بوک و جامعه‌ای از توسعه‌ده
                  گان و به صورت انفرادی توسعه و نگه‌داری می‌شوند.
                   براساس آنالیزهای جاوااسکریپت سرویس بسکور، ری‌ا"
                writer="مهراد روحانی"
                views={223}
                comments={0}

              />

            </Col>

            <Col md={4}>

              <MyCard
                img={ArticlesPic}
                title="آموزش ری اکت جی اس با استاد جدید"
                text="این کتابخانه توسط فیس‌بوک و جامعه‌ای از توسعه‌ده
                  گان و به صورت انفرادی توسعه و نگه‌داری می‌شوند.
                   براساس آنالیزهای جاوااسکریپت سرویس بسکور، ری‌ا"
                writer="مهراد روحانی"
                views={223}
                comments={0}

              />
            </Col>

            <Col md={4}>
              <MyCard
                img={ArticlesPic}
                title="آموزش ری اکت جی اس با استاد جدید"
                text="این کتابخانه توسط فیس‌بوک و جامعه‌ای از توسعه‌ده
                  گان و به صورت انفرادی توسعه و نگه‌داری می‌شوند.
                   براساس آنالیزهای جاوااسکریپت سرویس بسکور، ری‌ا"
                writer="مهراد روحانی"
                views={223}
                comments={0}

              />
            </Col>

            <Col md={4}>
              <MyCard
                img={ArticlesPic}
                title="آموزش ری اکت جی اس با استاد جدید"
                text="این کتابخانه توسط فیس‌بوک و جامعه‌ای از توسعه‌ده
                  گان و به صورت انفرادی توسعه و نگه‌داری می‌شوند.
                   براساس آنالیزهای جاوااسکریپت سرویس بسکور، ری‌ا"
                writer="مهراد روحانی"
                views={223}
                comments={0}

              />
            </Col>

            <Col md={4}>
              <MyCard
                img={ArticlesPic}
                title="آموزش ری اکت جی اس با استاد جدید"
                text="این کتابخانه توسط فیس‌بوک و جامعه‌ای از توسعه‌ده
                  گان و به صورت انفرادی توسعه و نگه‌داری می‌شوند.
                   براساس آنالیزهای جاوااسکریپت سرویس بسکور، ری‌ا"
                writer="مهراد روحانی"
                views={223}
                comments={0}

              />
            </Col>

            <Col md={4}>
              <MyCard
                img={ArticlesPic}
                title="آموزش ری اکت جی اس با استاد جدید"
                text="این کتابخانه توسط فیس‌بوک و جامعه‌ای از توسعه‌ده
                  گان و به صورت انفرادی توسعه و نگه‌داری می‌شوند.
                   براساس آنالیزهای جاوااسکریپت سرویس بسکور، ری‌ا"
                writer="مهراد روحانی"
                views={223}
                comments={0}

              />
            </Col>


          </Row>
          <button className={styles.BtnMoreNews}><p>بیشتر</p></button>
        </Container>



      </>
    </>




  );
}
export default NewsAndArticles;