import React from 'react'
import pic1 from '../../assest/convertkit-d7JpeA8l6RA-unsplash.jpg'
import pic2 from '../../assest/pexels-pixabay-163452.jpg'
import pic3 from '../../assest/markus-spiske-WUehAgqO5hE-unsplash.jpg'
import pic4 from '../../assest/victor-freitas-qZ-U9z4TQ6A-unsplash.jpg'
import pic5 from '../../assest/pexels-lino-khim-medrina-1234953.jpg'
import pic6 from '../../assest/annie-spratt-jY9mXvA15W0-unsplash.jpg'
import pic7 from '../../assest/pexels-pixabay-209841.jpg'
import pic8 from '../../assest/kabir-cheema-vBdnsrIlueo-unsplash.jpg'
import pic9 from '../../assest/pexels-yahye-abdi-10512973.jpg'
import pic10 from '../../assest/pexels-pixabay-34514.jpg'
import pic11 from '../../assest/pexels-pixabay-209841.jpg'
function Gallery() {
  return (
    <>
    <div className='mt-5'><h1 style={{fontFamily:'sans-serif'}}>Gallery</h1></div>
    <div  style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>



        <div style={{width:'500px'}}>
            <img src={pic1} alt="" 
            style={{height:'300px',width:'100%'}}
            />
        </div>

        <div style={{width:'400px',marginTop:'100px'}}>
            <img src={pic2} alt="" 
               style={{height:'400px',width:'100%'}}
            />
        </div>

        <div style={{width:'500px'}}>
            <img src={pic4} alt="" 
                        style={{height:'300px',width:'100%'}}
                        />
        </div>


        
    </div>


    <div className='mb-5' style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>



<div style={{width:'500px',marginTop:'-100px',marginLeft:"0px"}}>
    <img src={pic10} alt="" 
    style={{height:'300px',width:'100%'}}
    />
</div>

<div style={{width:'400px',marginTop:'10px'}}>
    <img src={pic5} alt="" 
       style={{height:'200px',width:'100%'}}
       className='mb-1'
    />
      <img src='https://media.istockphoto.com/id/505583215/photo/cricket-batsman.jpg?s=2048x2048&w=is&k=20&c=TiUHceye7YyhGgPyw_39xyXflQdE5WiAGwA8ldooQq4=' alt="" 
       style={{height:'200px',width:'100%',display:'none'}}
    />
</div>

<div style={{width:'500px',marginTop:'-100px'}}>
    <img src={pic9} alt="" 
                style={{height:'300px',width:'100%'}}
                />
</div>



</div>



    </>
  )
}

export default Gallery