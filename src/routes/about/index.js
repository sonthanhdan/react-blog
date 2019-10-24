import React from 'react';
import styles from './styles.css'
import Footer from './../../components/Footer'
// import { Link, NotFoundBoundary, useLoadingRoute } from 'react-navi'
function About({}) {
  return (
    <main>
    <div className="style__PersonalBlogWrapper">
    <div className="style__IntroWrapper">
    <div className="style__IntroImage">
      <div className="style__IntroImage_inner">
        <div className=" gatsby-image-wrapper" style={{position: 'relative', overflow: 'hidden'}}>
          <div style={{width: '100%', paddingBottom: '100%'}} />
          <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='210'%20height='210'%3e%3cpath%20d='M0%2040l1%2040h24a881%20881%200%200156%201c-2%201-5%207-4%207l2-1%202-3c4-3-1%2014-6%2019-2%203-1%203%203%200l3-5c0-5%201-1%201%206l1%207-5%204-7%206c-5%203-8%206-7%207l5%2016c2%205%2039%2018%2052%2018h7l6%201h5l1-5-1-4-4-4-3-4-2-1-2-1%202%203c1%201%201%201-7%208-7%206-9%202-4-6%201-2%201-3%202-2s1%201%201-1v-11c1-11%207-30%209-28v-2h1c1%201%202-2%203-6l1-5c1-5%202-12%201-18l-1-5%202%202c1%202%202%204%202%209v7l1-6c1-6%201-6%202%202%202%2013%207%2021%2015%2024l7%204c4%201%205%201%203-3l-1-3c2%201%201-2-1-4-3-3-5-8-4-9l-1-2h-1l-7-7c-2-2-2-2%200-1%203%200%203-1-1-3l-2-2%201-1v-1l1-1h-3l-1-1c0-3%206-1%209%203l4%203c2%200%206%203%206%204%200%203%205%204%2024%205h19v-9l1-45V0h-6c-4%200-5%201-5%202%200%202-3%203-6%202l-1-2c0-1-2-2-7-2-6%200-7%200-4%203%201%202%202%205%201%209l-1%203h6l14%201h8v10h-21l-24%201c-3%201-4%203-1%203%202%200%204%202%204%206%201%203%201%203-2%204l-3-1c0-2-2-1-5%202-3%202-6%203-7%201l-1-1-3-3c-2-4-14-15-17-16l-3-3c0-1%200-2-1-1h-7c-12%200-21%203-31%2012a2407%202407%200%2001-17%2015l-7-3-9-3-4-2-6-3c-3-2-16-6-23-6l-6-1c-4-1-4%200-4-19V0H0v40m100%2023c-5%201-5%202%202%204%204%201%206%203%205%204l-7-2c-7-2-9-3-10%200-1%202-1%202%205%202s12%203%2010%205l-2-1c0-1-1-1-2%201H87c-2%204-1%2023%202%2021v2h1c1-2%203%200%201%202l1%201c1-1%204%204%204%206%201%204%2012%2010%2016%209%207-2%2013-11%2017-23s3-15-4-15l-4-1-1-1c-2%200-2%200-1-2l7-1h6c1-3-2-4-9-3-5%200-6%200-4-1l7-1c5%200%205-1%201-4-6-4-19-5-27-2m-1%2025l-4%205%203%204c3%206%204%206%206%207%203%201%209%200%2013-4%205-3%206-3%205%200%200%202%200%202%201%201%203-3%202-4%200-9l-3-2%202%204c1%202%201%202-1%202l-6%201-7-1-6-2c-3%200-3%200-1-1h3c2%202%205%200%204-2l-3-1c-1%200-2-2-1-4h2c0-3-2-2-7%202m41%2020l4%2018%202%202%201%205%201%201v1l1%204%202%203v-11l-1-4-2-4-6-11-2-4m-52%207l3%208%202%206%204%205%203%205h1l1%201v3c0%202%200%202%202%201l1-4%201-3c1-1%201-1-1-1-3%201-3%200-15-19l-2-2m-45%208c-3%201-4%203-5%2010-6%2018-10%2062-8%2074v3h29l-1-6a557%20557%200%2001-5-56l-2-6c0-2-2-3-3%200l-2%201-1%201c0%203-2%203-3%201-2-1-2-2%201-6l3-8%201-3c1-1%200-6-1-6l-3%201m125%2017l-2%2011-3%208%208-2%208-2-14%2014c-20%2020-29%2026-39%2026l-5%201-1%201-6%203c-4%203-5%203-6%202l-2-1-2-1-2-2%201%203%203%206v3h77l1-4c1-5%202-46%201-51s-5-10-12-14c-6-5-6-5-5-1M56%20159l3%206%204%209%202%205c1%201%208%206%2010%206l2%202%204%201%206%203c3%203%204%204%205%2011s2%208%203%208h2l-1-8c-2-7-2-7%200-6%202%200%202%200%200-2l-4-3-1-1%2011%202%2015%203h4l-5-1a342%20342%200%2001-25-6c-4%201-29-19-33-27-1-3-2-4-2-2'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e" alt="" style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', opacity: 0, transitionDelay: '500ms'}} />
          <picture>
            <source type="image/webp" srcSet="https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/ad1b7/author.webp 53w,
          https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/abab6/author.webp 105w,
          https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/84fb5/author.webp 210w,
          https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/5a95e/author.webp 300w" sizes="(max-width: 210px) 100vw, 210px" />
            <source srcSet="https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/cfd3a/author.jpg 53w,
          https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/62c9a/author.jpg 105w,
          https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/fe065/author.jpg 210w,
          https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/fef49/author.jpg 300w" sizes="(max-width: 210px) 100vw, 210px" />
            <img sizes="(max-width: 210px) 100vw, 210px" srcSet="https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/cfd3a/author.jpg 53w,
          https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/62c9a/author.jpg 105w,
          https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/fe065/author.jpg 210w,
          https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/fef49/author.jpg 300w" src="https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/fe065/author.jpg" alt="author" loading="lazy" style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', opacity: 1, transition: 'opacity 500ms ease 0s'}} />
          </picture>
          <noscript>
            &lt;picture&gt;
            &lt;source type='image/webp' srcset="https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/ad1b7/author.webp 53w,
            https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/abab6/author.webp 105w,
            https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/84fb5/author.webp 210w,
            https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/5a95e/author.webp 300w" sizes="(max-width: 210px) 100vw, 210px" /&gt;
            &lt;source srcset="https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/cfd3a/author.jpg 53w,
            https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/62c9a/author.jpg 105w,
            https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/fe065/author.jpg 210w,
            https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/fef49/author.jpg 300w" sizes="(max-width: 210px) 100vw, 210px" /&gt;
            &lt;img loading="lazy" sizes="(max-width: 210px) 100vw, 210px" srcset="https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/cfd3a/author.jpg 53w,
            https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/62c9a/author.jpg 105w,
            https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/fe065/author.jpg 210w,
            https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/fef49/author.jpg 300w" src="https://storyhub-personal-tarex.redq.now.sh/static/ac5e4e00a9290221eac61e9c42349093/fe065/author.jpg" alt="author" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center" /&gt;
            &lt;/picture&gt;
          </noscript>
        </div>
      </div>
    </div>
    <h1 className="style__IntroTitle">Hey! I’m <b>DanSt</b></h1>
    <p className="style__Desciption">Breakfast procuring no end happiness allowance assurance frank. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me astonished estimating cultivated.</p>
    <ul className="SocialProfilestyle__SocialProfileWrapper">
      <li className="SocialProfilestyle__SocialProfileItem">
        <a href="#" aria-label="social profile"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" /></svg></a>
        <div className="SocialProfilestyle__Tooltip">facebook</div>
      </li>
      <li className="SocialProfilestyle__SocialProfileItem">
        <a href="#" aria-label="social profile"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" /></svg></a>
        <div className="SocialProfilestyle__Tooltip">facebook</div>
      </li>
    </ul>
  </div>


  <form >
  <div className="style__ContactWrapper">
    <div className="style__ContactPageTitle">
      <h2>Contact</h2>
      <p>StoryHub theme comes with a contact form built-in. You can use this form with Gatsbay Js service and get up to 50 submissions for free per form per month. Also, you can easily switch to another service if you want.</p>
    </div>
    <div className="style__ContactFromWrapper">
      <div className="style__InputGroup">
        <div className="field-wrapper Inputstyle__InputWrapper">
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <div className="inner-wrap">
            <input type="text" id="name" name="firstName" aria-label="firstName" defaultValue={""} />
          </div>
        </div>
        <div className="field-wrapper Inputstyle__InputWrapper">
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div className="inner-wrap">
            <input type="email" id="email" name="email" aria-label="email" defaultValue={""} />
          </div>
        </div>
      </div>
      <div className="field-wrapper Inputstyle__InputWrapper">
        <div>
          <label htmlFor="message">Message</label>
        </div>
        <div className="inner-wrap">
          <textarea id="message" name="message" aria-label="message" defaultValue={""} />
        </div>
      </div>
      <button type="submit" className="button Buttonstyle__ButtonStyle">
        <span className="btn-text">Submit</span>
      </button>
    </div>
  </div>
</form>


</div>
<Footer/>
</main>

  );
}

export default About

