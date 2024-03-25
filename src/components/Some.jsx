import React, { useRef, useState } from 'react'
import ProjectCard from './ProjectCard';


const Some = () => {
  // const [details, setDetails] = useState(false);

  // const handleDetails = () => {
  //   setDetails(!details);
  // };

  // return (
  //   <>
  //     <div className='bg-red-500 py-4' onClick={handleDetails}>
  //       <p>Toggle Details</p>
  //     </div>

  //     <div className={`fg ${details ? 'show' : ''}`}>
  //       {/* Content to be displayed when details is true */}
  //       Details Content
  //     </div>
  //   </>
  // );
  // const [details, setDetails] = useState(false);
  // const contentRef = useRef(null);

  // const handleDetails = () => {

  //   const contentElement = contentRef.current;

  //   if (!details) {

  //     contentElement.style.display = 'flex'; 
  //     const contentHeight = contentElement.scrollHeight;
  //     contentElement.style.overflow = 'hidden'; 

  //     contentElement.animate(
  //       { height: [0, contentHeight + 'px'] },
  //       {
  //         duration: 500, 
  //         easing: 'ease', 
  //         fill: 'forwards' 
  //       }
  //     );
  //   } else {
   
  //     contentElement.animate(
  //       { height: [contentElement.scrollHeight + 'px', 0] },
  //       {
  //         duration: 500,
  //         easing: 'ease',
  //         fill: 'forwards'
  //       }
  //     ).onfinish = () => {
  //       contentElement.style.display = 'none';  
  //       contentElement.style.height = ''; 
  //       contentElement.style.overflow = ''; 
  //     };
  //   }

  //   setDetails(!details);
  // };

  // return (
  //   <>
  //     <div className='bg-red-500 py-4' onClick={handleDetails}>
  //       <p>Toggle Details</p>
  //     </div>

  //     <div className='fg flex' ref={contentRef} style={{ display: 'none', overflow: 'hidden' }}>
  //       <ProjectCard src = 'src/assets/p1.png' />
  //       <ProjectCard src = 'src/assets/p1.png' />
  //       <ProjectCard src = 'src/assets/p1.png' />
  //       <ProjectCard src = 'src/assets/p1.png' />
  //     </div>
  //   </>
  // );

  // let [btn, setbtn] = useState(false)
  // let handleclcik = () => {
    
  //   setbtn(!btn)
  //   setTimeout(() => {

  //   }, 1000);
  // }

  // let tgle = btn ? 'active' : ''
  // let tgle2 = btn ? 'actives' : ''

  return(
    <>
    </>
    // <>
    //   <button type='button' className= {`btn ${tgle}`} onClick={handleclcik}>toogle</button>
      
    //     <p className={ !btn ? 'bg ': 'bg actives'}>dfdfdff</p>
    //   <p>cdcdcd</p>
    // </>
    // fg{
  //   display: flex;
  // }
  // .active{
  //     background: #000;
  //     transition: 1s ease;
  // }
  // .btn{
  //     transition: 1s ease;
  
  // }
  // .bg{
  //     padding: 40px 0;
  //     transition: 2s ease;
  //     width: 0px;
  //     background: red;
  //     position: absolute;
  //     left: -100%;
  //     opacity: 0;
  //     top: 30%;
     
  
  // }
  // .actives{
  //     background: red;
  //     transition: 2s;
  //     width: 200px;
  //     left: 0;
  //     opacity: 1;
      
  // } */
  
  )
}

export default Some 