import Pagination from 'react-bootstrap/Pagination';
import styles from '../MyPagination/MyPagination.module.css';

function MyPagination() {

    return (
        <Pagination className={styles.bar}>
            <Pagination.First />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item >{4}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Last />
        </Pagination>
    );
}

export default MyPagination;