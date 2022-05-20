import React from 'react';
import SectionTitle from './SectionTitle';
import image from '../../assets/images/about-me.jpg';

const AboutMe = () => {
    return (
        
        <section className='about-me'>
            <img src={image} alt='Patrycja' className="about-me__image" />
            <div className='about-me__text'>
                <SectionTitle title='O mnie' />
                <p className="about-me__text__description">Nazywam się Patrycja Nawrotkiewicz i moją pasją jest szycie. Stworzyłam markę Navrot Szycie w celu możliwości wprowadzenia w życie każdego z nas niepowtarzalności. Staram się, aby każdy z moich wyrobów był jedyny w swoim rodzaju i sprawiał jak największą radość kupującemu. Największy uśmiech na mojej twarzy wywołują właśnie Wasze reakcje, kiedy produkt trafia w Wasze ręce.
                    Przywiązuję dużą uwagę do szczegółów i jakości wykonania. Najchętniej szyję z tkanin wodoodpornych i eko-skóry, które są niezawodne w razie niespodziewanej pogody, ale często szyję z tkanin, które po prostu wpadną mi w oko 😉. Zapraszam na Instagram i profil Facebook’owy, jeśli chcesz być na bieżąco z informacjami dotyczącymi nowych pomysłów, jakie wpadły mi do głowy w mojej Pracowni!</p>

            </div>
        </section>
    )
}

export default AboutMe;