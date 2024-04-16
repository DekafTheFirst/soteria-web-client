import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "./OptimizedImage.css"


const OptimizedImage = ({ src, blurhash, height, width, wrapperClassName, className, alt, effect, style, backgroundImage }) => {

    const [isLoaded, setLoaded] = useState(false);
    const [isLoadStarted, setLoadStarted] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
        // console.log("loaded")
    };

    const handleLoadStarted = () => {
        // console.log("Started: ");
        setLoadStarted(true);
    };

    // useEffect(() => {
    //     const img = new Image();
    //     img.src = src;
    //     img.onload = () => {
    //         const aspectRatio = img.width / img.height;
    //         setImageWidth(width);
    //         setImageHeight(width / aspectRatio);
    //     };
    // }, [src, width]);

    return (
        < div className={`optimized-image-wrapper ${className}`} style={style}>
            <LazyLoadImage
                wrapperClassName={wrapperClassName}
                style={{objectFit:'cover', overflow:'hidden'}}
                alt={alt}
                src={src}
                effect='blur'
                height={'100%'}
                width={'100%'}
                onLoad={handleLoad}
                beforeLoad={handleLoadStarted}
            />

            {!isLoaded && isLoadStarted && (
                // <Blurhash
                //     hash={blurhash}
                //     width={'100%'}
                //     height={'100%'}
                //     punch={1}
                //     className={`blurHash`}
                // />
                <div className={`image-placeholder ${backgroundImage ? 'background-image':''}`} ></div>
            )}
        </div>


    )
}

export default OptimizedImage