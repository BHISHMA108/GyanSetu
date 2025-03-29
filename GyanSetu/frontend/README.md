
💗Different Approaches to render 3D models!
    💡1.making an website which contains the 3D models as well as the normal html elemtns so we need two things:
            React Three Fiber is library used to render 3D models in a React-based web app using Three.js. It provides a declarative way to build and interact with 3D scenes.

            Drei is a helper library that provides useful abstractions and utilities for React Three Fiber, including Html,OribitControls, which allows you to overlay HTML elements within the 3D scene.

            both of them need to be installed!!

    💡2. if we wanted to import 3D models the go with below steps:
            install npm install @react-three/drei @react-three/gltf

            1.download the model from skethfab and keep in public folder in project.
            2.then import model and libraries 
                import { Canvas } from '@react-three/fiber';
                import { OrbitControls, useGLTF } from '@react-three/drei';
            3.update the code


💗Hacks!
    1.As we are using the react three fiber so it will require Canvas to be the parent element so add the Canvas instead of div in return.
    2. type "rfce" to get snippit of function
    3. to make two component follow the z property then wrap them under the parent div and one each child div in main component where parent div is flex.
    the heigher component div has absolute with higher z index and lower component div has relative with lower z index 
