import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/Statistics/data';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

      }}
    >
     <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
/>
      <Statistics 
        title="Upload stats" 
        stats={data}
/>
      <FriendList friends={friends} 
/>
      <TransactionHistory items={transactions} />
    </div>
  );
};

