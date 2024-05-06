import React from 'react'
import OptimizedImage from '../../../components/OptimizedImage/OptimizedImage'
import { Link } from 'react-router-dom'
import "../FellowshipPage.css"
import "./Poiema.css"

const Poiema = () => {
    return (
        <div className="fellowship-page poiema">
            <div className="container-fluid">
                <OptimizedImage src="/assets/poima.jpg" className="image" />
                <div className="text-col">
                    <span className=''>Women's Fellowship</span>
                    <h4 className='title'>Poiema</h4>
                    <div className="description">
                        <p> <b>Poiema (Poy- ah- mah)</b> is the Women’s Ministry of Soteria Church. It is a Greek word that can literally be translated as "a Masterpiece"- God's workmanship (Ephesians 2:10). It is a ministry to women by women. As the word "Poiema” implies, Soteria Church believes that every woman is a masterpiece - the very best of God’s design, fearfully and wonderfully made (Psalm 139:14). We are God’s workmanship created in His image, a wonderful reflection of God our father, women of inestimable worth and significance created by Almighty God for His pleasure. As masterpieces of God, we take our physical demeanor seriously though we do not let that define us. Our worth is neither based on our hairdo nor the elegance and class exhibited by our physical appearance but rather the hidden man indwelt by the Spirit of God and constantly being renewed through the mirror of God’s Word (1 Pet 3:3-15)</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Poiema