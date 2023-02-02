// import images
import Avatar from './assets/images/About/IMG_1906.png'
import Logo from './assets/images/Navbar/logo.png'
import Blender from './assets/images/Skills/blender.png'
import Git from './assets/images/Skills/git.png'
import Photoshop from './assets/images/Skills/photoshop.png'
import React from './assets/images/Skills/react.png'
import Tailwind from './assets/images/Skills/tailwind.png'
import Unity from './assets/images/Skills/unity.png'
import Work1 from './assets/images/Works/work-1.png'
import Work2 from './assets/images/Works/work-2.png'

import { AiOutlineHome } from 'react-icons/ai'

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
