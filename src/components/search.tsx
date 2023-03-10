import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import querystring from "querystring";
import { ModalsCategoryAndProvince } from "./index";
import ModalsPriceAndArea from "./modals/modalsPriceAndArea";
import { useQueryClient } from "react-query";

function Search() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [indexModels, setIndexModals] = useState();
  const [modals, setModals] = useState(true);
  const [queries, setQueries] = useState<any>([]);
  const [arrMinMax, setArrMinMax] = useState({});
  const [overPlay, setOverPlay] = useState(false);

  const dataProvince =
    queryClient.getQueriesData<any>(["Province"]).length > 0
      ? queryClient.getQueriesData<any>(["Province"])[0][1]?.province?.response
      : null;
  const dataCategory =
    queryClient.getQueriesData<any>(["Menu"]).length > 0
      ? queryClient.getQueriesData<any>(["Menu"])[0][1]?.category?.response
      : null;
  const dataPrice =
    queryClient.getQueriesData<any>(["Price"]).length > 0
      ? queryClient.getQueriesData<any>(["Price"])[0][1]?.price?.response
      : null;
  const dataArea =
    queryClient.getQueriesData<any>(["Area"]).length > 0
      ? queryClient.getQueriesData<any>(["Area"])[0][1]?.area?.response
      : null;

  useEffect(() => {
    if (!modals && overPlay) {
      setOverPlay(false);
    }
  }, [modals]);

  const handleIsShowModel = (number) => {
    setIndexModals(number);
    setModals(true);
  };

  const handleSubmit = useCallback(
    (query, arrMaxMin) => {
      setQueries((prev) => ({ ...prev, ...query }));
      setModals(false);
      arrMinMax && setArrMinMax((prev) => ({ ...prev, ...arrMaxMin }));
    },
    [queries, modals]
  );
  const handelSearch = () => {
    const queryCodes = Object.entries(queries).filter((item) =>
      item[0].includes("Code")
    );
    console.log(queries, "queries");

    let queryCodesObj = {};
    queryCodes.forEach((item) => {
      queryCodesObj[item[0]] = item[1];
    });
    router.push({
      pathname: "/",
      search: "?" + querystring.stringify(queryCodesObj),
    });
    console.log(queryCodesObj, "queryCodesObj");
  };

  return (
    <div style={{ height: "60px", marginBottom: "10px" }}>
      <section id="filter-top-inner">
        <section id="filter-top">
          <div className="filter-body">
            <div
              className="filter-item post-estate-type js-filter-show-popup-estate-type active"
              onClick={() => {
                handleIsShowModel(0);
                setOverPlay(!overPlay);
              }}
            >
              <span> {queries.category || "Ph??ng tr???, nh?? tr???"}</span>
              <span className="delete-item"></span>
            </div>
            <div
              className="filter-item location js-filter-show-popup-city"
              onClick={() => {
                handleIsShowModel(1);
                setOverPlay(!overPlay);
              }}
            >
              <span> {queries.province || "To??n qu???c"}</span>
            </div>
            <div
              className="filter-item post-price js-filter-show-popup-price"
              onClick={() => {
                handleIsShowModel(2);
                setOverPlay(!overPlay);
              }}
            >
              <span> {queries.price || "Ch???n gi??"}</span>
            </div>
            <div
              className="filter-item post-acreage js-filter-show-popup-acreage"
              onClick={() => {
                handleIsShowModel(3);
                setOverPlay(!overPlay);
              }}
            >
              <span> {queries.area || "Ch???n ??i???n t??ch"}</span>
            </div>
            <div className="filter-item submit" onClick={handelSearch}>
              <span>T??m ki???m</span>
            </div>
            {indexModels === 0 && (
              <ModalsCategoryAndProvince
                handleSubmit={handleSubmit}
                items={dataCategory}
                modals={modals}
                setModals={setModals}
                setOverPlay={setOverPlay}
                queries={queries}
                text="CH???N Danh M???c"
                name="category"
              />
            )}
            {indexModels === 1 && (
              <ModalsCategoryAndProvince
                items={dataProvince}
                modals={modals}
                queries={queries}
                setOverPlay={setOverPlay}
                setModals={setModals}
                handleSubmit={handleSubmit}
                text="CH???N T???Nh TH??NH"
                name="province"
              />
            )}
            {indexModels === 2 && (
              <ModalsPriceAndArea
                items={dataPrice}
                modals={modals}
                setModals={setModals}
                setOverPlay={setOverPlay}
                handleSubmit={handleSubmit}
                arrMinMax={arrMinMax}
                text="CH???N GI??"
                name="price"
              />
            )}
            {indexModels === 3 && (
              <ModalsPriceAndArea
                items={dataArea}
                modals={modals}
                setModals={setModals}
                handleSubmit={handleSubmit}
                setOverPlay={setOverPlay}
                arrMinMax={arrMinMax}
                text="CH???N DI???N T??CH"
                name="area"
              />
            )}
          </div>
        </section>
        {overPlay && <div className="black_overlay js-black-overlay"></div>}
      </section>
    </div>
  );
}
export default Search;
