import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mainPic from '../../Asset/Pic/2.png';
import styles from '../Introduction/Introduction.module.css';

function Introduction() {

  return (

    <section>

      <img
        src={mainPic}
        className={styles.pic}
        alt="intro picture"
      />

      <div className="d-flex justify-content-around" dir="rtl">
        <Card style={{ width: '28rem' }} className={styles.card}>
          <Card.Body>

            <Card.Title className={styles.title} > پژوهشگاه <span> سپهر </span>  </Card.Title>

            <Card.Text>
              پژوهشگاه سپهر با هدف تولید و انتشار محتوای با کیفیت
              آموزشی و همچنین آشنایی جامعه با فضای کسب و کار در
              فضای مجازی ایجاد شده و امید داریم بتوانیم با راه کارهای
              نوین فرصتی برای افراد خواهان پیشرفت فراهم کنیم
            </Card.Text>
            <Button className={styles.button}> مشاهده دوره ها </Button>
          </Card.Body>
        </Card>

      </div>

    </section>
  );
}

export default Introduction;

