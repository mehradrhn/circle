import Card from 'react-bootstrap/Card';

import styles from './MyCards.module.css';

function MyCard({ img, text  }){
    return(

        <Card style={{ width: '12rem' }} className={styles.holder}>
        <Card.Body>
         <div className={styles.box}> 
            <img 
            src={img}
            className={styles.pic}
            />
         </div>
          <Card.Text className={styles.para}>
          {text}
          </Card.Text>
        </Card.Body>
      </Card>

    );
}

export default MyCard;
