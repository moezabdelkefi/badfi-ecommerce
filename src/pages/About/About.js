import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="معلومات عنا" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Gusto</span>{" "}
          عالم من الأناقة والإلهام والابتكار. يجسد جوستو شغفًا عميقًا بتقديم
          أرقى صيحات الموضة والأزياء التي تعكس تفرّد كل شخص وروحه العصرية. من
          التفاصيل المتقنة إلى الخامات الفاخرة، يتيح لك جوستو اكتشاف طيف واسع من
          التصاميم التي تجمع بين الكلاسيكية والأصالة مع لمسات عصرية حديثة. جوستو
          هو أكثر من مجرد أزياء؛ إنه تجربة تعيد تعريف الرقي وتدعم الثقة، ليمنح
          كل من يرتديه حضورًا لافتًا وأسلوبًا يعكس ذوقًا متفرّدًا.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
          متابعة التسوق
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
