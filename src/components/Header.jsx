
const links= [
    {text:'About', url:'#'},
    {text:'Services', url:'#'},
    {text:'Projects', url:'#'}
]


export default function Header() {
    return (
        <div>

            <ul>
                {links.map((link, idx) => {
                    return (
                        <li key={idx}><a className='links' href={link.url}>{link.text}</a></li>
                    )
                })}
            </ul>

            <button className="button">Contact</button>
        </div>
    )
}