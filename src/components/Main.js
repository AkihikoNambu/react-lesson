import React from 'react';
import Lesson from './Lesson';
import ContactForm from './ContactForm';

class Main extends React.Component {
  render() {
    const lessons = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.png',
        description: 'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
      },
      {
        name: 'Saas',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.png',
        description: 'SassはCSSをより便利に効率的にするための言語です。',
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.png',
        description: 'JavaScriptはフロントエンドだけでなく、サーバーサイドまで広い可能性を持つプログラミング言語です。',
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.png',
        description: 'Reactは、HTMLのように、サイトの見た目を作ることが出来るJavaScriptのライブラリです。',
      },
    ];

    return (
      <div className='main'>
        <div className='copy-container'>
          <h1>HELLO WORLD<span>.</span></h1>
          <h2>プログラミングの世界へようこそ</h2>
        </div>
        <div className='contents'>
          <h3 className='section-title'>学べるレッスン</h3>
          {lessons.map((lesson) => {
            return <Lesson lesson={lesson} />
          })}
        </div>
      </div>
    );
  }
}

export default Main;
