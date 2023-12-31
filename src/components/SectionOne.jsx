import './SectionOne.css';

export default function SectionOne() {
    return (
        <div className='grid col-2'>
            <picture className='egg_img main-section_img'>
                <source srcSet="./images/desktop/image-transform.jpg" media="(min-width: 750px)" />
                <img src="./images/mobile/image-transform.jpg"/>
            </picture>

            <div className='main-container'>
                <h2>Transform your brand</h2>
                <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a className='link' href='#'>Learn more</a>
            </div>
        </div>
    )
}