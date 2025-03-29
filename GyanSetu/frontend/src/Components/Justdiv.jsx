import "./Justdiv.css"
import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import LocomotiveScroll from 'locomotive-scroll';
import GaneshaImg from './Assets/LordGanesha.jpg';



function Justdiv() {
  return (
    <div data-scroll data-scroll-translate="50 -100" className='divs'>
<img className="image" src={GaneshaImg} alt="" />
</div>
  )
}

export default Justdiv