import React from "react";

const UrlText = () => {
  return (
    <section className="flex justify-center bg-[#F9F9F9]">
      <div className="container flex justify-center">
        <div className="w-3/5">
          <h3 className="font-primary font-bold text-[26px] text-[#555555]">
            Simple and fast URL shortener!
          </h3>
          <p className="pb-5">
            ShortURL allows to shorten long links from <span className="text-[#006CFF]">Instagram</span>, <span className="text-[#006CFF]">Facebook</span>,
            <span className="text-[#006CFF]">YouTube</span>, <span className="text-[#006CFF]">Twitter</span>, <span className="text-[#006CFF]">Linked In</span>,
            <br /> <span className="text-[#006CFF]">WhatsApp</span>, <span className="text-[#006CFF]">TikTok</span>, blogs and sites. Just paste the long URL
            and click the Shorten URL button. On the
            <br /> next page, copy the shortened URL and share it on sites, chat
            and emails. After shortening the URL,
            <br /> check <span className="text-[#006CFF]">how many clicks it received</span>.
          </p>
          <h3 className="font-primary font-bold text-[26px] text-[#555555] pb-2">
            Shorten, share and track
          </h3>
          <p>
            Your shortened URLs can be used in publications, documents,
            advertisements, blogs, forums, instant messages, and other
            locations. Track statistics for your business and projects by
            monitoring the number of hits from your URL with our click counter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrlText;
