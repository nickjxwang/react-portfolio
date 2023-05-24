// import images
import Avatar from './assets/images/About/IMG_1906.webp'
import Logo from './assets/images/Navbar/logo.png'
import Blender from './assets/images/Skills/blender.png'
import Git from './assets/images/Skills/git.png'
import Photoshop from './assets/images/Skills/photoshop.png'
import React from './assets/images/Skills/react.png'
import Tailwind from './assets/images/Skills/tailwind.png'
import Unity from './assets/images/Skills/unity.png'
import Work1 from './assets/images/Works/work-1.webp'
import Work2 from './assets/images/Works/work-2.webp'
import Work3 from './assets/images/Works/work-3.webp'
import Work4 from './assets/images/Works/work-4.webp'

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCodeSandbox,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineUser,
} from 'react-icons/ai'

export const content = {
  nav: [
    {
      link: '#home',
      icon: AiOutlineHome,
    },
    {
      link: '#skills',
      name: 'SKILLS',
    },
    {
      link: '#works',
      name: 'WORKS',
    },
    {
      link: '#contact',
      name: 'CONTACT',
    },
  ],
  logo: {
    logo: Logo,
  },
  blender: {
    blender: Blender,
  },
  git: {
    git: Git,
  },
  photoshop: {
    photoshop: Photoshop,
  },
  react: {
    react: React,
  },
  tailwind: {
    tailwind: Tailwind,
  },
  unity: {
    unity: Unity,
  },
  work1: {
    work1: Work1,
  },
  work2: {
    work2: Work2,
  },
  avatar: {
    avatar: Avatar,
  },
}

export const links = [
  {
    name: 'Home',
    path: '/',
    active: '#home',
    icon: AiOutlineHome,
  },
  {
    name: 'About',
    path: '/about',
    active: '#about',
    icon: AiOutlineUser,
  },
  {
    name: 'Projects',
    path: '/projects',
    active: '#projects',
    icon: AiOutlineCodeSandbox,
  },
  {
    name: 'Contact',
    path: '/contact',
    active: '#contact',
    icon: AiOutlineMail,
  },
]

export const projects = [
  {
    name: 'Music Web Application',
    types: ['#React', '#TailwindCSS', '#RapidAPI'],
    img: Work1,
  },
  {
    name: 'Personal Website',
    types: ['#React', '#TailwindCSS'],
    img: Work2,
  },
  {
    name: 'Monster Battle AR Game',
    types: ['#Unity', '#Vuforia'],
    img: Work3,
    video: 'https://www.youtube.com/embed/lwDSuDfKlIo',
  },
  {
    name: 'AR Clothing',
    types: ['#Unity', '#Vuforia'],
    img: Work4,
    video: 'https://www.youtube.com/embed/jSQUVWTtPJI',
  },
]
