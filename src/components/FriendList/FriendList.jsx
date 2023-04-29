import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return <ul className={css.FriendList}>
        {friends.map(({ avatar, name, isOnline, id}) => (
        <li className={css.item} key={id}>
                   <span className={isOnline ? css.online : css.offline}></span>
          <img className={css.avatar} src={avatar} alt={name} width="80" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};