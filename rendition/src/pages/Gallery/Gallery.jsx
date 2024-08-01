import React from 'react';
import LightGallery from 'lightgallery/react/Lightgallery.es5';
import './Gallery.css'
import {imagesData} from "../../data/imagesData";
import Header from '../../components/Header/Header';



// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom'
import lgAutoplay from  'lightgallery/plugins/autoplay';
import lgFullScreen from  'lightgallery/plugins/fullscreen';
import lgShare from  'lightgallery/plugins/share';
import lgRotate from  'lightgallery/plugins/rotate';

const Gallery=()=> {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="gallery">
            <div className='g-nav'>
                <Header/>
            </div>
            <div className='g-subheading'>
                <p>𝓦𝓱𝓮𝓻𝓮 𝓦𝓸𝓻𝓭𝓼 𝓕𝓪𝓲𝓵...𝓓𝓻𝓪𝓶𝓪 𝓤𝓷𝓿𝓮𝓲𝓵𝓼</p>
            </div>

            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail,lgZoom,lgAutoplay,lgFullScreen,lgRotate,lgShare]}
                elementClassNames='lg-custom'
            >

            <div className='g-content'>
                {
                    imagesData.map((image,index)=>{
                        return(
                            <a href={image.src} key={index} data-lg-size="1600-2400">
                                <img className='gallery-img' alt={image.alt} src={image.src} />
                            </a>
                            
                        )
                    })
                }
            </div>
            </LightGallery>
        </div>
    );
}

export default Gallery;