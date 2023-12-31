import { Link } from 'react-router-dom';
import profilePic from '../assets/ProfilePic.jpg';
import github from '../assets/githublogo.png';

export default function AboutMe() {
    return (

        <div>
            <img className='profile' src={profilePic}></img>
            <h1>About me</h1>
            <p className='about'>
                <h3>personal</h3>
                My name is Adrian Estrella. I love playing video games, working out, and spending time with my family.
                Im a big into fantasy adventure book series like the Wheel of time or King Killer Chronicales. I've lived in Surprise Arizona for around nine years.
                I Play games on PC and love to costomize my hardware for my rig. Wrestling is also apart of my life, Ive been wrestling Folk Style and Greco Roman sense I was around eight.
                I was apart of a junior Olympic Wrestling team in 2018 for the Young Lions Wreslting training in Europe.

                <h3>Developer</h3>
                Ive been attending ASU's FullStack Flex bootcamp to be a certified FullStack Developer. So far I love developing both front-end and back-end work as a fullStack Developer.

                <h3>Professional Experience</h3>
                Im working full time at W.L Gore and Associates as a medical Device Operator.
                As a medical Device Operator I am also a trainer, I train new Hires and cross train other operators into other processes.
                <div>
                    <h3>Personal Skills</h3>
                    A few Personal skills I processes.
                    <li>
                        -Quick learner: I pick things up quickly and it usually sticks the first time.
                    </li>
                    <li>
                        -Structured Criticism: Im a big fan of structured criticism because it helps me grow in any way possible. I do my best to take in the advice and do better.
                    </li>
                    <li>
                        -Social: As a trainer for W.L Gore it has given me the opportunity to develop my social skill in a Professional setting.
                    </li>
                </div>
            </p>

            <footer>
            <Link
            to="https://github.com/aestrella0140"
            >
            <img className='github' src={github} />
            </Link>

            </footer>
        </div>
    )
}