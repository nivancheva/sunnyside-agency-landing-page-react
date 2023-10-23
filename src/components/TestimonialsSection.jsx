import './TestimonialsSection.css';
import emilyImg from '../images/image-emily.jpg';
import thomasImg from '../images/image-thomas.jpg';
import jennieImg from '../images/image-emily.jpg';


const testimonials = [
    {image: emilyImg, text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    author: 'Emily R.', position: 'Marketing Director'},
    {image: thomasImg, text: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    author: 'Thomas S.', position: 'Chief Operating Officer'},
    {image: jennieImg, text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    author: 'Jennie F.', position: 'Business Owner'}
]


export default function TestimonialsSection() {
    return (
        <div className='testimonial container'>
            <h2 className='testimonial-header'>Client Testimonials</h2>

            <div className='grid cols-3'>
                {testimonials.map((testimonial, idx) => 
                    <div key={idx}>
                        <img src={testimonial.image}/>
                        <p>{testimonial.text}</p>
                        <p>{testimonial.author}</p>
                        <p>{testimonial.position}</p>
                    </div>
                )}
            </div>
        </div>
    )
}