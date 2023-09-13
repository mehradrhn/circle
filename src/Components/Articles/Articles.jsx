import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import News from '../../Asset/Pic/News.png';
import Left from '../../Asset/Pic/left.png';

import styles from '../Articles/Articles.module.css';

function Articles() {

    return (

        <Container className={styles.container}>
            <span className={' d-flex justify-content-center'}>  اخبار و مقالات </span>

            <Row className={styles.box}>

                <div >

                    <div className={styles.newsHolder}>

                        <p className={styles.newsTitle}>  اخبار</p>
                        <div className={styles.newsBorder}> </div>

                    </div>

                    <div className={styles.articHolder}>

                        <p className={styles.articTitle} > مقالات </p>
                        <div className={styles.articBorder}> </div>

                    </div>

                </div>
                <Col md={6} className="d-flex justify-content-center">
                    <Card className={styles.cardBox} style={{ width: '34rem' }} dir="rtl" >
                        <Row>
                            <Col md={3}>
                                <Card.Img src={News} className={styles.cardPic} />
                            </Col>
                            <Col md={9}>
                                <Card.Body >
                                    <Card.Text className={styles.text}>
                                        لورم ایپسوم دارای استاندارد صنعتی متن ساختگی از سال
                                        1500 میلادی، زمانی که یک پرینتر ناشناخته به زحمت
                                        در حال گسترش بود، می‌باشد
                                    </Card.Text>

                                    <img src={Left} style={{ float: 'left' }} />

                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                </Col>

                <Col md={6} className="d-flex justify-content-center">

                    <Card className={styles.cardBox} style={{ width: '34rem' }} dir="rtl">
                        <Row>
                            <Col md={3}>
                                <Card.Img src={News} className={styles.cardPic} />
                            </Col>
                            <Col md={9}>
                                <Card.Body >
                                    <Card.Text className={styles.text}>
                                        لورم ایپسوم دارای استاندارد صنعتی متن ساختگی از سال
                                        1500 میلادی، زمانی که یک پرینتر ناشناخته به زحمت
                                        در حال گسترش بود، می‌باشد
                                    </Card.Text>

                                    <img src={Left} style={{ float: 'left' }} />

                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                </Col>
            </Row>

            <Row className={styles.box}>

                <Col md={6} className="d-flex justify-content-center">

                    <Card className={styles.cardBox} style={{ width: '34rem' }} dir="rtl">
                        <Row>
                            <Col md={3}>
                                <Card.Img src={News} className={styles.cardPic} />
                            </Col>
                            <Col md={9}>
                                <Card.Body  >
                                    <Card.Text className={styles.text}>
                                        لورم ایپسوم دارای استاندارد صنعتی متن ساختگی از سال
                                        1500 میلادی، زمانی که یک پرینتر ناشناخته به زحمت
                                        در حال گسترش بود، می‌باشد
                                    </Card.Text>

                                    <img src={Left} style={{ float: 'left' }} />

                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                </Col>

                <Col md={6} className="d-flex justify-content-center">

                    <Card className={styles.cardBox} style={{ width: '34rem' }} dir="rtl">
                        <Row>
                            <Col md={3}>
                                <Card.Img src={News} className={styles.cardPic} />
                            </Col>
                            <Col md={9}>
                                <Card.Body >
                                    <Card.Text className={styles.text}>
                                        لورم ایپسوم دارای استاندارد صنعتی متن ساختگی از سال
                                        1500 میلادی، زمانی که یک پرینتر ناشناخته به زحمت
                                        در حال گسترش بود، می‌باشد
                                    </Card.Text>

                                    <img src={Left} style={{ float: 'left' }} />

                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                </Col>
            </Row>

            <Row className={styles.box}>

                <Col md={6} className="d-flex justify-content-center">

                    <Card className={styles.cardBox} style={{ width: '34rem' }} dir="rtl">
                        <Row>
                            <Col md={3}>
                                <Card.Img src={News} className={styles.cardPic} />
                            </Col>
                            <Col md={9}>
                                <Card.Body  >
                                    <Card.Text className={styles.text}>
                                        لورم ایپسوم دارای استاندارد صنعتی متن ساختگی از سال
                                        1500 میلادی، زمانی که یک پرینتر ناشناخته به زحمت
                                        در حال گسترش بود، می‌باشد
                                    </Card.Text>

                                    <img src={Left} style={{ float: 'left' }} />

                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                </Col>

                <Col md={6} className="d-flex justify-content-center">

                    <Card className={styles.cardBox} style={{ width: '34rem' }} dir="rtl">
                        <Row>
                            <Col md={3}>
                                <Card.Img src={News} className={styles.cardPic} />
                            </Col>
                            <Col md={9}>
                                <Card.Body  >
                                    <Card.Text className={styles.text}>
                                        لورم ایپسوم دارای استاندارد صنعتی متن ساختگی از سال
                                        1500 میلادی، زمانی که یک پرینتر ناشناخته به زحمت
                                        در حال گسترش بود، می‌باشد
                                    </Card.Text>

                                    <img src={Left} style={{ float: 'left' }} />

                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                </Col>
            </Row>

            <Carousel className={styles.slider}>
                <Carousel.Item interval={1000} className={styles.sliderBox}>
                    <img
                        className="d-block w-100"
                        src={News}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 class="text-dark">اخبار</h3>
                        <p class="text-dark" > لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={News}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 class="text-dark">اخبار</h3>
                        <p class="text-dark" > لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={News}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 class="text-dark">اخبار</h3>
                        <p class="text-dark"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Carousel className={styles.slider}>
                <Carousel.Item interval={1000} className={styles.sliderBox}>
                    <img
                        className="d-block w-100"
                        src={News}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 class="text-dark">مقالات</h3>
                        <p class="text-dark" > لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={News}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 class="text-dark">مقالات</h3>
                        <p class="text-dark" > لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={News}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 class="text-dark"> مقالات </h3>
                        <p class="text-dark"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



        </Container>

    );
}

export default Articles;