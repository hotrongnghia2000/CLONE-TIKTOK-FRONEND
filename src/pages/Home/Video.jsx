import * as Icons from '../../components/Icons';
import clsx from 'clsx';
import React from 'react';

function Video({ video, avatarUser }) {
  // hook
  const [isPlaying, setIsPlaying] = React.useState(false);

  const videoRef = React.useRef();

  // function
  const handleVideo = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={clsx('flex', 'py-[20px]')}>
      <a href="/" className={clsx('video__avatar')}>
        <div
          className={clsx(
            'w-[56px]',
            'h-[56px]',
            'rounded-full',
            'overflow-hidden',
            'mr-[12px]'
          )}
        >
          <img src={avatarUser} alt="avatar" />
        </div>
      </a>
      <div className={clsx('video__content')}>
        <div className={clsx('video__info')}>
          <a href="/" className={clsx('flex', 'items-center')}>
            <h3 className={clsx('mr-2', 'text-[1.8rem]', 'font-bold')}>
              mr.quangsang
            </h3>
            <span className={clsx('text-[1.4rem]', 'leading-none')}>
              LOVE PET
            </span>
          </a>
          <div>
            <span>chóng mặt quá sen ơi😵</span>
            <a href="/">
              <strong>#cat</strong>
            </a>
            <a href="/">
              <strong>#cat</strong>
            </a>
            <a href="/">
              <strong>#petsoftiktok</strong>
            </a>
            <a href="/">
              <strong>#xuhuong</strong>
            </a>
          </div>
          <h3 className={clsx('m-[4px_0_12px]', 'font-semibold')}>
            <Icons.Music className={clsx('inline-block', 'mr-2')} />
            nhạc nền - Người viết tình ca
          </h3>
        </div>
        <div
          className={clsx('video__main', 'h-[var(--video-height)]', 'relative')}
        >
          <div
            className={clsx(
              'h-full',
              'absolute',
              'rounded-xl',
              'overflow-hidden'
            )}
          >
            <video
              ref={videoRef}
              className={clsx('w-full', 'h-full', 'object-cover')}
              src={video}
              onClick={handleVideo}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
