import React from 'react';
import NewsItem from './NewsItem';

var masterNewsfeed = [
  {
    icon: 'https://2.bp.blogspot.com/-ny1b2XMtZbE/VpH3tIG8uZI/AAAAAAAAAjk/CphoSeY0Svs/s200/mr%2Bclean.jpg',
    header: 'Im a hedder',
    content: 'I have a cat and here\'s a food dinner meal I just ate@@)'
  },
  {
    icon: 'https://a.wattpad.com/useravatar/Wombat_Luv.256.923661.jpg',
    header: 'Im another hedder',
    content: 'I have a cat and here\'s a food brunch meal I just ate :)'
  },
  {
    icon: 'https://pbs.twimg.com/profile_images/1052278476772990979/dQuNH9vj_normal.jpg',
    header: 'Im a hedder',
    content: 'I have a dog and here\'s a food dinner meal I just ate @,..,@,)'
  },
];

function Newsfeed(){
  return (
    <div>
        <hr/>
        {masterNewsfeed.map((newsItem, index) =>
          <NewsItem icon={newsItem.icon}
            header={newsItem.header}
            content={newsItem.content}
            key={index}/>
        )}
      </div>
  );
}

export default Newsfeed;
