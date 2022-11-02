import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import FriendListItem from './FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
    return (
        <ul className={css.friendlist}>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
</ul>
)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired})),
}