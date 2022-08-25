import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/5ccd2eae1f93e600f33f06a2e6f9436f.jpeg?x-expires=1661522400&x-signature=RTfUuX41tPKnyPsRNkADhVG7tzI%3D"
                alt="Quang"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Pham Van Quang</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Quang AB</span>
            </div>
        </div>
    );
}

export default AccountItem;
