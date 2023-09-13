import Error404Pic from '../../Asset/Pic/error404.png';
import styles from './Error404.module.css';
function Error404 () {
    return(
        <div className={styles.error404}>
            <img src={Error404Pic}/>
            <p>صفحه مورد نظر یافت نشد</p>
            <button><span>بازگشت به صفحه اصلی</span></button>
        </div>
    );
}

export default Error404;