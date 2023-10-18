import clsx from 'clsx';
import Video from './Video';

const data = [
  {
    video: 'http://localhost:5173/src/assets/videos/video1.mp4',
    avatar: 'http://localhost:5173/src/assets/imgs/avatar.jpg',
  },
  {
    video: 'http://localhost:5173/src/assets/videos/video2.mp4',
    avatar: 'http://localhost:5173/src/assets/imgs/avatar.jpg',
  },
  {
    video: 'http://localhost:5173/src/assets/videos/video3.mp4',
    avatar: 'http://localhost:5173/src/assets/imgs/avatar.jpg',
  },
];

function Home() {
  return (
    <div className={clsx('home', 'w-[692px]', 'py-[24px]')}>
      {data.map((item, index) => (
        <Video key={index} video={item.video} avatarUser={item.avatar} />
      ))}
    </div>
  );
}

export default Home;
