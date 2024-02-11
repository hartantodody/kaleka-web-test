const AboutUs = () => {
  const h2Style = "font-bold text-[16px] lg:text-[18px] leading-[21.78px] underline";
  const paragraphStyle = "font-normal text-[16px] lg:text-[18px] leading-[21.78px]";

  return (
    <div className='max-w-[1156px]'>
      <section>
        <p className={paragraphStyle}>
          Kaleka (formerly Yayasan Inobu) is an Indonesian, non-profit organization that strives towards the sustainable
          management of Indonesia’s landscapes and seascapes for the benefit of local and indigenous communities.
          Founded in 2014, Kaleka is a women-led organization, where the Executive Director and majority of managers and
          staff are women. With over 60 staff now, our staff represent the diversity of peoples in the Indonesian
          archipelago, all committed to upholding human rights and protecting the environment. Kaleka’s thematic
          strengths are in the areas of sustainable sourcing, conservation and restoration, agri-food systems, community
          development and environmental and social governance.
        </p>
      </section>
      <br />
      <section>
        <p className={paragraphStyle}>
          At the heart of Kaleka’s approach, is the concept of Collaborative, Action Research. Before commencing any
          work, we work with our partners, including the government at the national and sub-national levels, civil
          society organizations, producer, manufacturing and consumer-facing companies, universities, farmers and local
          communities, to identify their priorities. Through researching best practices in science, while incorporating
          local and indigenous knowledge, we test, implement, evaluate and refine innovations. This approach ensures the
          acceptability and relevance of interventions to local partners while also allowing us to scale nationally.
        </p>
      </section>
      <br />
      <section>
        <h2 className={h2Style}>Vision</h2>
        <p className={paragraphStyle}>
          Aspire for an Indonesia where land and seascapes are managed sustainably and benefit the communities that
          depend on them.
        </p>
      </section>
      <br />
      <section>
        <h2 className={h2Style}>Mission</h2>
        <p className={paragraphStyle}>
          Improve public policies and strengthen civil society through innovative research, policy analysis, technology
          and alliance-building to sustainably manage Indonesia’s natural resources and agricultural production system,
          throughout the life-cycle of products.
        </p>
      </section>
      <br />
      <section>
        <h2 className={h2Style}>Purpose</h2>
        <p className={paragraphStyle}>
          To work with farmers, including younger generations, to protect nature. We aim to achieve our vision and
          mission through our four strategic initiatives.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
