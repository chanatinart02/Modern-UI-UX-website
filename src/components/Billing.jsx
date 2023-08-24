import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      {/* Image Left side */}
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* Gradient BG */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        {/* End Gradient BG */}
      </div>

      {/* Content */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="App store"
            className="w-[128px] h-[42px] mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="Pay store"
            className="w-[128px] h-[42px] cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
