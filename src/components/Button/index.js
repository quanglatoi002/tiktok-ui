import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, plus, primary = false, outline = false, children, onClick, ...passProps }) {
    // Setting default of Comp is 'buttton'
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    //Create tag 'to' component/index.js in className='action'
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        primary.href = href;
        Comp = 'a';
    }

    //  two bot className for agument(primary)
    const classes = cx('wrapper', {
        primary,
        outline,
        plus,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
