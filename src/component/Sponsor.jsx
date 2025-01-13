import calvin from '../assets/calvin.png';
import prada from '../assets/prada.png';
import versace from '../assets/versace.png';
import zara from '../assets/zara.png';
import gucci from '../assets/Gucci.png';

const Sponsor = () => {
    const img = [
        calvin,prada,versace,zara,gucci
    ]

    return (
        <div className='px-4 bg-black flex flex-wrap items-center justify-around h-20'>
            {img.map((spon, index) => (
                <img 
                    key={index}
                    src={spon}
                    alt='Sponsors'
                    className='h-6'
                />
            ))}
        </div>
    );
}
 
export default Sponsor;
