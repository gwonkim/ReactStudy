import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import AppLayout from '../components/AppLayout';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '김지원',
    },
    content: '첫 번째 게시글',
    Images: [{
      src: '../component/bonobono.jpg',
    }, {
      src: '../component/bonobono.jpg',
    }, {
      src: '../component/bonobono.jpg',
    }]
  }],
};

const Home = () => {
  return (
    <AppLayout>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((c) => {
        return (
          <PostCard key={c.id} post={c} />
        );
      })}
    </AppLayout>
  );
};

export default Home;