import { easeOut } from 'motion';
import { color, motion } from 'motion/react';
import team1 from '../../assets/images/team1.jpg';
import team2 from '../../assets/images/team2.jpg';

const Banner = () => {
  return (
    <div className="hero bg-base-200 h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl "
            src={team1}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <motion.img
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl "
            src={team2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-lg md:text-5xl font-bold">
            Latest Job For Your!
          </h1>
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest {''}
            <motion.span
              animate={{ color: ['#ee0a22', '#2d0aee'] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Jobs {''}
            </motion.span>
            For Your!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
