import Card from 'react-bootstrap/Card';
import styles from './MyCard.module.css';

function MyCard({ img , title , text , writer , views , comments }){
    return(

        <Card className={styles.card}>
            <Card.Img className={styles.CardImg} src={img}></Card.Img>
            <Card.Body>
                <Card.Title className={styles.CardTitle} > {title} </Card.Title>
                <Card.Text className={styles.CardText} > {text} </Card.Text>
                <p className={styles.writer} > {writer} </p>
                <p className={styles.views} > {views} </p>
                <p className={styles.comments} > {comments} </p>
            </Card.Body>
        </Card>

    );
}

export default MyCard;