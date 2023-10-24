import './SectionTwo.css';

export default function SectionTwo() {
    return (
        <div className='grid col-2'>
            <picture className='glass_img main-section_img'>
                <source srcSet="./images/desktop/image-stand-out.jpg" media="(min-width: 750px)" />
                <img src="./images/mobile/image-stand-out.jpg"/>
            </picture>

            <div className='main-container'>
                <h2>Stand out to the right audience</h2>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <a className='link red' href='#'>Learn more</a>
            </div>
        </div>
    )
}