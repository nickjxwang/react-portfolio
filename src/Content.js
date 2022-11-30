// import images
import Logo from './assets/images/Navbar/logo.png'
import Blender from './assets/images/Skills/blender.png'
import Git from './assets/images/Skills/git.png'
import Photoshop from './assets/images/Skills/photoshop.png'
import React from './assets/images/Skills/react.png'
import Tailwind from './assets/images/Skills/tailwind.png'
import Unity from './assets/images/Skills/unity.png'
import Work1 from './assets/images/Works/work-1.png'
import Work2 from './assets/images/Works/work-2.png'

// import icons from react-icons
import { BiUser } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import {
  MdArrowForward,
  MdCall,
  MdOutlinePermContactCalendar,
} from 'react-icons/md'
import { RiProjectorLine, RiServiceLine } from 'react-icons/ri'
import { TbSmartHome } from 'react-icons/tb'

export const content = {
  nav: [
    {
      link: '#home',
      name: 'HOME',
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
}
