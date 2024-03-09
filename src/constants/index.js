import pic1 from '../assets/images/img2.png';
import pic2 from '../assets/images/img3.png';
import pic3 from '../assets/images/img4.png';

import pic4 from '../assets/images/img5.png';

import pic6 from '../assets/images/img6.png';
import pic7 from '../assets/images/img7.png';
import pic8 from '../assets/images/img8.png';

import pic9 from '../assets/images/img9.png';
import pic10 from '../assets/images/img10.png';
import pic11 from '../assets/images/img11.png';

import icon1 from '../assets/icons/Delivery.svg';
import icon2 from '../assets/icons/247.svg';
import icon3 from '../assets/icons/shield-1 1.png';

import album1 from '../assets/images/album1.png'
import album2 from '../assets/images/album2.png'
import album3 from '../assets/images/album3.png'
import album4 from '../assets/images/album4.png'

const sampleContent = {
    title: 'Inspiration Collection',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'type3',
    imageList: [
      {
        source: pic1,
        css: 'img img-border-top-left img-margin-top',
        title: '',
        content: ''
      },
      {
        source: pic2,
        css: 'img img-margin-bottom',
        title: '',
        content: ''
      },
      {
        source: pic3,
        css: 'img img-border-bottom-right img-margin-top',
        title: '',
        content: ''
      }
    ]
  }

const sampleContent2 = {
title: 'Browse The Range',
subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
type: 'type2',
imageList: [
    {
    source: pic6,
    css: 'img img-border-top-left img-margin-top',
    title: 'Dining',
    content: ''
    },
    {
    source: pic7,
    css: 'img img-margin-bottom',
    title: 'Living',
    content: ''
    },
    {
    source: pic8,
    css: 'img img-border-bottom-right img-margin-top',
    title: 'Bedroom',
    content: ''
    }
]
}

const sampleContent3 = {
title: 'How Its Works',
subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
type: 'type1',
imageList: [
    {
    source: pic9,
    css: 'img img-border-top-left img-margin-top',
    title: 'Purchase Securely',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
    source: pic10,
    css: 'img img-margin-bottom',
    title: 'Ships From Warehouse ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
    source: pic11,
    css: 'img img-border-bottom-right img-margin-top',
    title: 'Style Your Room',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
]
}

const messages = {
    intro: {
        tag: 'New Arrival',
        title: 'Discover Our New Collection',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        button: 'Buy now',
    },

    advantages: [
        {
            icon: icon1,
            title: 'Free Delivery',
            content: 'Lorem ipsum dolor sit amet.',
        },
        {
            icon: icon2,
            title: 'Support 24/7',
            content: 'Lorem ipsum dolor sit amet.',
        },
        {
            icon: icon3,
            title: '100% Authentic',
            content: 'Lorem ipsum dolor sit amet.',
        }
    ],

    beautify: {
        title: 'Beautify Your Space',
        content: 'Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        button: 'Learn more',
        image: pic4,
    },

    form: {
        title: 'Join Our Mailing List',
        content: 'Sign up to receive inspiration, product updates, and special offers from our team.',
        inputType: 'email',
    },

    footer: {
        information: {
            title1: 'Beauty Care',
            content: 'Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            title2: 'Follow Us',
        },
        album: {
            title: 'Instagram Shop',
            imageList: [
                album1,
                album2,
                album3,
                album4,
            ]
        }
    }
}

export {sampleContent, sampleContent2, sampleContent3, messages}; 