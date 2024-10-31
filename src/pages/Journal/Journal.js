import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="المجلات" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Gusto</span>{" "}
          عالم جوستو يتجاوز حدود التسوق التقليدي، فهو وجهة متكاملة لعشاق الأناقة
          والمعلومات المتجددة. في قسم التسوق، نقدم لك تشكيلة مختارة من الأزياء
          والإكسسوارات التي تعكس أحدث صيحات الموضة لتكمل إطلالتك بأناقة وتميز.
          أما في قسم المجلات، فنأخذك في رحلة ملهمة عبر مقالات وموضوعات حصرية
          تستكشف فيها اتجاهات الموضة، نصائح التصميم، وقصص من قلب عالم الأزياء.
          جوستو هو أكثر من متجر؛ إنه أسلوب حياة مفعم بالإبداع والتميز.
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

export default Journal;
