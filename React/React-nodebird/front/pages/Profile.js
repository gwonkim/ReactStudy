import React from 'react';

import NicknameEditForm from '../components/NicknameEditForm';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [{ nickname: '김지원' }, { nickname: '카카오닙스' }, { nickname: '자바칩' }];
  const followingList = [{ nickname: '김지원' }, { nickname: '캣닢' }, { nickname: '블루베리' }];

  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList
        header="팔로잉 목록"
        data={followingList}
      />
      <FollowList
        header="팔로워 목록"
        data={followerList}
      />
    </AppLayout>
  );
};

export default Profile;