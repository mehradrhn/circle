import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './ArticlesDetails.module.css';
import ReactCourseDetailsPic from '../../Asset/Pic/reactCourseDetailsPic.png';
import CheckPic from '../../Asset/Pic/checkPic.png';
import RelatedCoursesPic from '../../Asset/Pic/relatedCoursesPic.png';
import ArrowPic from '../../Asset/Pic/ArrowPic.png';
import Logo from '../../Asset/Pic/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


function ArticlesDetails () {
    return(
        <Tabs className={styles.Tabs} dir="rtl"
      defaultActiveKey="coursesDetails"
      id="uncontrolled-tab-example"
    >
      <Tab eventKey="coursesDetails" title="جزییات دوره" >
        <div className={styles.CoursesDetailsBack}>

            <div className={styles.CoursesTitle}>
            <p>عنوان خبر :</p>
            <p>دوره جامع آموزش ریکت</p>
            </div>

            <div className={styles.CoursesTeacher}>
            <p>دسته خبر :</p>
            <p> مقاله</p>
            </div>

            <div className={styles.CoursesAbout}>
            <p> متن خبر :</p>
            <p>ری اکت یکی از کتابخانه‌های جاوا اسکریپت است که در سال 2013 توسط تیم توسعه فیسبوک ساخته شده است.
                 ری اکت یکی از کتابخانه‌های جاوا اسکریپت است که در سال 2013 توسط تیم توسعه فیسبوک ساخته شده است.
                 کتابخانه‌های جاوا اسکریپت است که در سال 2013 توسط تیم توسعه فیسبوک ساخته شده است.</p>
            </div>

            <div className={styles.CoursesDetailsImg}>
                <img src={ReactCourseDetailsPic}/>
            </div>

            <div className={styles.CoursesMoreInfo}>
                <p className={styles.moreInfo} >اطلاعات بیشتر :</p>
                <ul className={styles.UL}>


                <li className={styles.LI} >
                        <p className={styles.titleDetail} >تاریخ انتشار خبر :  1401/4/1</p>
                    <div className={styles.checkPic} >   
                        <img src={CheckPic} />
                        </div>             
                    </li>

                    

                    <li className={styles.LI} >
                        <p className={styles.titleDetail} >  دسته بندی : مقاله</p>
                    <div className={styles.checkPic} >   
                        <img src={CheckPic} />
                        </div>             
                    </li>




                </ul>
                
            </div>


            <div className={styles.LineOne}></div>
            <div className={styles.LineTwo}></div>
            <div className={styles.RelatedCourses}><p>اخبار  مرتبط</p></div>


            <Container>
                <Row>
                    <Col md={3}>
                    <div className={styles.OtherCoursesBack}>
                <div className={styles.RelatedCoursesInfo}>
                  <img src={RelatedCoursesPic} />
                  <p>دوره ریکت ترم زمستان</p>
                  <span>سال 1400</span>
                </div>                
            
            </div>
                    </Col>

                    <Col md={3}>
                    <div className={styles.OtherCoursesBack}>
                <div className={styles.RelatedCoursesInfo}>
                  <img src={RelatedCoursesPic} />
                  <p>دوره ریکت ترم زمستان</p>
                  <span>سال 1400</span>
                </div>                
            
            </div>
                    </Col>

                    <Col md={3}>
                    <div className={styles.OtherCoursesBack}>
                <div className={styles.RelatedCoursesInfo}>
                  <img src={RelatedCoursesPic} />
                  <p>دوره ریکت ترم زمستان</p>
                  <span>سال 1400</span>
                </div>                
            
            </div>
                    </Col>

                    <Col md={3}>
                    <div className={styles.OtherCoursesBack}>
                <div className={styles.RelatedCoursesInfo}>
                  <img src={RelatedCoursesPic} />
                  <p>دوره ریکت ترم زمستان</p>
                  <span>سال 1400</span>
                </div>                
            
            </div>
                    </Col>

                    <div className={styles.DownArrow}>
                        <img src={ArrowPic} />
                    </div>

                </Row>
            </Container>


        </div>
      </Tab>
      <Tab eventKey="comments" title="نظرات">

        <div className={styles.CommentsBack}>
            <div className={styles.Alert}>
                <p>برای ثبت نظر باید وارد سایت شده باشید</p>
            </div>

            <div className={styles.logo}><img src={Logo}/></div>

            <div className={styles.UserComment}>
                <p>mehrad   |  ارسال شده در 1401/03/20</p>
                <span>سلام استاد</span>
                <br></br>
                <span>این دوره کی شروع میشه؟</span>
            </div>

            <div className={styles.AdminComment}>
                <img src={Logo}/>
                <p>استاد بحرالعلوم (مدرس)  |  ارسال شده در 1401/03/20</p>
                <span>
                    سلام وقت به خیر
                    <br></br>
                    تا دو هفته آینده
                </span>

            </div>

            <button className={styles.SeeMoreComments}>  <p>مشاهده نظرات بیشتر</p> </button>
            <div className={styles.DownArrowComments}>
                        <img src={ArrowPic} />
                    </div>
                
        </div>

      </Tab>
      <Tab eventKey="newComment" title="درج نظر">
            <div className={styles.NewCommentBack}>
                <p>نظر خود را وارد کنید!</p>
                <Form className={styles.AddComment}>
                <textarea>نظر خود را وارد نمایید...</textarea>
                </Form>
                <button className={styles.SubmitYourComment}>  <p>ثبت دیدگاه شما</p> </button>
                <div className={styles.DownArrowAddComment}>
                        <img src={ArrowPic} />
                    </div>
            </div>
      </Tab>
    </Tabs>
    );
}

export default ArticlesDetails;