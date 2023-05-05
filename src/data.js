import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'



export const pageLinks = [
    {id:1, href:'#home', text:'home'},
    {id:2, href:'#about', text:'about'},
    {id:3, href:'#services', text:'services'},
    {id:4, href:'#tours', text:'tours'},
];

export const socialLinks=[
    {id:1 , href:'https://www.facebook.com' , icon:'fab fa-facebook'},
    {id:2 , href:'https://www.twitter.com' , icon:'fab fa-twitter'},
    {id:3 , href:'https://www.instagram.com' , icon:'fab fa-instagram'}, 
]

export const services=[
          { id:1, 
            icon:'fas fa-wallet fa-fw', 
            title:'saving money', 
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia' },

          { id:2, 
            icon:'fas fa-tree fa-fw', 
            title:'endless hiking', 
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia' },  

          { id:3, 
            icon:'fas fa-socks fa-fw', 
            title:'amazing comfort', 
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia' },
 
];

export const tours = [
    { id:1, 
      image: tour1, 
      date:'august 2th 2023', 
      title:'Khiva Adventure',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia', 
      location:'Uzbekistan',
      duration:3,
      cost:200,},
      
    { id:2, 
      image: tour2, 
      date:'august 5th 2023', 
      title:'Feel the nature in Zomin',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia', 
      location:'Uzbekistan',
      duration:3,
      cost:300,},

    { id:3, 
      image: tour3, 
      date:'august 8th 2023', 
      title:'Bukhara gold in the east',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia', 
      location:'Uzbekistan',
      duration:2,
      cost:200,},
    
      { id:4, 
      image: tour4, 
      date:'august 10th 2023', 
      title:'Charvak Lake',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia', 
      location:'Uzbekistan',
      duration:2,
      cost:100,},

    { id:5, 
      image: tour5, 
      date:'august 12th 2023', 
      title:'Tashkent city',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia', 
      location:'Uzbekistan',
      duration:3,
      cost:300,},
    
      { id:6, 
      image: tour6, 
      date:'august 15th 2023', 
      title:'Fergana Valley',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia', 
      location:'Uzbekistan',
      duration:4,
      cost:500,},
];