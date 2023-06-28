import homecardheader from '../../../assets/headerbg.png'
import hotbid1 from '../../../assets/Frame 1.png'
import hotbid2 from '../../../assets/Magdiel Lopez 15.png'
import hotbid3 from '../../../assets/Magdiel Lopez 17.png'
import profile1 from '../../../assets/Clone X 11.png'
import profile2 from '../../../assets/Clone X 12.png'
import profile3 from '../../../assets/Clone X 14.png'
import profile4 from '../../../assets/Group 350.png'
import profile5 from '../../../assets/download (1).jfif'

interface headercardType{
bgImage:string;
heading:string
}

export const headerCard:headercardType = {
    bgImage: homecardheader,
    heading:'Discover, Create and Sell Your Own NFTs'
}

interface auct__link_type{
    label:string;
    path:string;
}

export const auct__link:auct__link_type[]=[
    {
        label:'Art',
        path:''
    },
    {
        label:'Music',
        path:'/'
    },
    {
        label:'Collectibles',
        path:'/'
    },
    {
        label:'Utility',
        path:'/'
    },
]


export interface  hotBidsType{
    id?:number;
    image: string;
    heading: string;
    likes: number;
    profileImage: string | null;
    username: string;
    price: number;
  
}


export const hot__bids:hotBidsType[]=[
 {
    id:1,
    image:hotbid1,
    heading:'Ape In Love',
    likes:300,
    profileImage: profile1,
    username:'Adegbite',
    price: 14
 },   
 {
    id:2,
    image:hotbid2,
    heading:'Ape In Love',
    likes:50,
    profileImage: profile2,
    username:'Adegbite',
    price: 8
 },   
 {
    id:3,
    image:hotbid3,
    heading:'Ape In Love',
    likes:35,
    profileImage: profile3,
    username:'Walexz',
    price: 6
 },   
 {
    id:4,
    image:hotbid3,
    heading:'Ape In Love',
    likes:30,
    profileImage: profile4,
    username:'Walexz',
    price: 4.5
 },   
 {
    id:5,
    image:hotbid2,
    heading:'Ape In Love',
    likes:28,
    profileImage: profile5,
    username:'Walexz',
    price: 3
 },   
 {
    id:6,
    image:hotbid1,
    heading:'Ape In Love',
    likes:28,
    profileImage: null,
    username:'Walexz',
    price: 3
 },   
]

export interface top_creators__type {
    id?: number,
    userImage: string | null;
    fullname: string;
    username: string;
  }

export const top_creators:top_creators__type[]=[
    {
        id:1,
        userImage:profile1,
        fullname:' Micheal Johnson',
        username:'micheal'
    },
    {
        id:2,
        userImage:profile2,
        fullname:'Adegbite Adewale',
        username:'walexz'
    },
    {
        id:3,
        userImage:profile3,
        fullname:'Adegbite Adewale',
        username:'walexz'
    },
    {
        id:4,
        userImage:profile4,
        fullname:'Adegbite Adewale',
        username:'walexz'
    },
    {
        id:5,
        userImage:profile5,
        fullname:'Adegbite Adewale',
        username:'walexz'
    },
    {
        id:6,
        userImage:null,
        fullname:'Adegbite Adewale',
        username:'walexz'
    },
]


export interface featured__creator__types {
    id?:number,
    profileImage: string | null;
    profileName: string;
    username: string;
    nftImage: string;
    price: number;
}
export const featured__creator:featured__creator__types[]=[
    {
        id:1,
        profileImage:profile1,
        profileName:'Adewalex olu',
        username:'walexz',
        nftImage:hotbid1,
        price:10
    },
    {
        id:2,
        profileImage:profile2,
        profileName:'Adewale ade',
        username:'luwaseun',
        nftImage:hotbid3,
        price:14
    },
]  