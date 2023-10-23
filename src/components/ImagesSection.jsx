import './ImagesSection.css';

export default function ImagesSection() {
    return (
        <div className="images-section">
            <picture className='milk-bottle_img'>
                <source srcSet="./images/desktop/image-gallery-milkbottles.jpg" media="(min-width: 750px)" />
                <img src="./images/mobile/image-gallery-milkbottles.jpg"/>
            </picture>

            <picture className='orange_img'>
                <source srcSet="./images/desktop/image-gallery-orange.jpg" media="(min-width: 750px)" />
                <img src="./images/mobile/image-gallery-orange.jpg"/>
            </picture>

            <picture className='cone_img'>
                <source srcSet="./images/desktop/image-gallery-cone.jpg" media="(min-width: 750px)" />
                <img src="./images/mobile/image-gallery-cone.jpg"/>
            </picture>

            <picture className='suggar_img'>
                <source srcSet="./images/desktop/image-gallery-sugarcubes.jpg" media="(min-width: 750px)" />
                <img src="./images/mobile/image-gallery-sugar-cubes.jpg"/>
            </picture>
        </div>
    )
}