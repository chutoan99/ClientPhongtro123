import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Header,
  AsideArea,
  AuthorAside,
  AsideNewPost,
  AsideNewHot,
  WhyUs,
  Footer,
  NavBarMenu,
  Support,
  AsideSubLink,
} from "../../components/index";
import { renderStart } from "../../utils/Commom/renderStart";
import { AreaHcm } from "../../utils/area";

import React from "react";
import Slider from "react-slick";
import { gql, GraphQLClient } from "graphql-request";
import { useQuery, useQueryClient } from "react-query";
const DetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const graphQLClient = new GraphQLClient("http://localhost:8000/graphql");

  const dataPostId = useQuery<any>(["PostId", id], () =>
    graphQLClient.request(
      gql`
        query ($postId: ID!) {
          postId(id: $postId) {
            err
            msg
            response {
              address
              areaNumber
              areaNumber
              attributes {
                acreage
                createdAt
                hashtag
                id
                price
                published
                updatedAt
              }
              attributesId
              categoryCode
              createdAt
              description
              id
              imagesId
              labelCode
              listImage {
                createdAt
                id
                image
                postImg
                total
                updatedAt
              }
              overviewId
              overviews {
                area
                bonus
                code
                created
                createdAt
                expired
                id
                target
                type
                updatedAt
              }
              priceNumber
              start
              priceNumber
              provinceCode
              title
              updatedAt
              user {
                avatar
                createdAt
                id
                name
                password
                phone
                updatedAt
                zalo
              }
              userId
            }
          }
        }
      `,
      { postId: id }
    )
  )?.data?.postId?.response;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="webpage">
      <Header />
      <NavBarMenu path="index" />
      <main id="man">
        <div className="container clearfix">
          <div id="breadcrumb">
            <ol className="clearfix">
              <li className="first link">
                <a href="" title="Cho thu?? ph??ng tr???">
                  <span>Cho thu?? ph??ng tr???</span>
                </a>
              </li>
              <li className="link link">
                <a href="" title="Cho thu?? ph??ng tr??? H??? Ch?? Minh">
                  <span>H??? Ch?? Minh</span>
                </a>
              </li>
              <li className="link link">
                <a href="" title="Cho thu?? ph??ng tr??? Qu???n T??n Ph??">
                  <span>Qu???n T??n Ph??</span>
                </a>
              </li>
              <li className="link last">
                <a href="" title="Cho thu?? ph??ng tr??? Ph?????ng S??n K???">
                  <span>Ph?????ng S??n K???</span>
                </a>
              </li>
            </ol>
          </div>
          <div id="left-col">
            <article className="the-post tin-vip vipnoibat">
              <div className="post-images">
                <div className="images-swiper-container swiper-container-horizontal">
                  <Slider {...settings}>
                    {dataPostId?.listImage?.image &&
                      JSON.parse(dataPostId?.listImage?.image)?.map(
                        (item: any, index: number) => (
                          <div className="swiper-slide" key={index}>
                            <img src={item} alt="img" />
                          </div>
                        )
                      )}
                  </Slider>
                  <div className="slick-slider slick-initialized" dir="ltr">
                    <button
                      type="button"
                      data-role="none"
                      className="slick-arrow slick-prev"
                      style={{ display: "block" }}
                    >
                      Previous
                    </button>
                    <div className="slick-list">
                      <div
                        className="slick-track"
                        style={{
                          width: "5.03316e+08px",
                          opacity: 1,
                          transform: "translate3d(-3.35544e+07px, 0px, 0px)",
                        }}
                      >
                        <div
                          data-index="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: "3.35544e+07px" }}
                        >
                          <div>
                            <div
                              className="swiper-slide"
                              style={{
                                width: "100%",
                                display: "inline-block",
                              }}
                            >
                              <img
                                src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/13/shophouse-sapphire-2-ngoquocdungcom-_1660356471.jpg"
                                alt="img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-role="none"
                      className="slick-arrow slick-next"
                      style={{ display: "block" }}
                    >
                      Next
                    </button>
                    <ul className="slick-dots" style={{ display: "block" }}>
                      <li className="slick-active">
                        <button>1</button>
                      </li>
                      <li className="">
                        <button>2</button>
                      </li>
                      <li className="">
                        <button>3</button>
                      </li>
                      <li className="">
                        <button>4</button>
                      </li>
                      <li className="">
                        <button>5</button>
                      </li>
                      <li className="">
                        <button>6</button>
                      </li>
                      <li className="">
                        <button>7</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <header className="page-header">
                <h1 className="page-h1">
                  <span
                    className="star star-5"
                    style={{ float: "left" }}
                  ></span>
                  <a
                    style={{ color: "#E13427" }}
                    href=""
                    title="CHO THU?? PH??NG TR??? M???I CH??NH CH???, GI???M GI??, QU???N T??N PH?? - G???N B??N TR?????NG ?????I H???C C??NG NGH??? TH???C PH???M"
                  >
                    {dataPostId?.title}
                  </a>
                </h1>
                <div className="clearfix"></div>
                <p className="margin-bottom: 10px;">
                  Chuy??n m???c:{" "}
                  <a
                    style={{ textDecoration: "underline" }}
                    title="Ph??ng tr??? Qu???n T??n Ph??"
                    href=""
                  >
                    <strong>{dataPostId?.overviews?.area}</strong>
                  </a>
                </p>
                <address className="post-address">
                  ?????a ch???:{dataPostId?.address}
                </address>
                <div className="post-attributes">
                  <div className="item price">
                    <i></i>
                    <span
                      style={{
                        color: "#16c784",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                      }}
                    >
                      {dataPostId?.attributes?.price}
                    </span>
                  </div>
                  <div className="item acreage">
                    <i></i>
                    <span>{dataPostId?.attributes?.acreage}</span>
                  </div>
                  <div className="item published">
                    <i></i>
                    <span title="Th??? 5, 08:31 23/02/2023">
                      {dataPostId?.attributes?.published}
                    </span>
                  </div>
                  <div className="item hashtag">
                    <i></i>
                    <span>{dataPostId?.attributes?.hashtag}</span>
                  </div>
                </div>
              </header>

              <section className="section post-main-content">
                <div className="section-header">
                  <h2 className="section-title">Th??ng tin m?? t???</h2>
                </div>
                <div className="section-content">
                  {dataPostId?.description &&
                    JSON.parse(dataPostId?.description)?.map(
                      (ele: any, index: number) => <p key={index}>{ele}</p>
                    )}
                </div>
              </section>

              <section className="section post-overview">
                <div className="section-header">
                  <h3 className="section-title">?????c ??i???m tin ????ng</h3>
                </div>
                <div className="section-content">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="name">M?? tin:</td>
                        <td>{dataPostId?.overviews?.code}</td>
                      </tr>
                      <tr>
                        <td className="name">Khu v???c</td>
                        <td>{dataPostId?.overviews?.area}</td>
                      </tr>
                      <tr>
                        <td className="name">Lo???i tin rao:</td>
                        <td>{dataPostId?.overviews?.type}</td>
                      </tr>
                      <tr>
                        <td className="name">?????i t?????ng thu??:</td>
                        <td>{dataPostId?.overviews?.target}</td>
                      </tr>
                      <tr>
                        <td className="name">G??i tin:</td>
                        <td>
                          <span style={{ color: "#E13427" }}>
                            {dataPostId?.overviews?.bonus}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">Ng??y ????ng:</td>
                        <td>
                          <time title="Th??? 5, 08:31 23/02/2023">
                            {dataPostId?.overviews?.created}
                          </time>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">Ng??y h???t h???n:</td>
                        <td>
                          <time title="Th??? 6, 08:31 10/03/2023">
                            {dataPostId?.overviews?.expired}
                          </time>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="section post-contact">
                <div className="section-header">
                  <h3 className="section-title">Th??ng tin li??n h???</h3>
                </div>
                <div className="section-content">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="name">Li??n h???:</td>
                        <td>{dataPostId?.user?.name}</td>
                      </tr>
                      <tr>
                        <td className="name">??i???n tho???i:</td>
                        <td>{dataPostId?.user?.phone}</td>
                      </tr>
                      <tr>
                        <td className="name">Zalo</td>
                        <td>{dataPostId?.user?.zalo}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="section post-map">
                <div className="section-header">
                  <h3 className="section-title">B???n ?????</h3>
                  <address className="section-description">
                    ?????a ch???: {dataPostId?.address}
                  </address>
                </div>
                <div className="section-content">
                  <div
                    id="__maps_content"
                    style={{ width: "100%", height: "300px" }}
                    data-lat="10.7976093"
                    data-long="106.6166242"
                    data-address={dataPostId?.address}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      src="https://www.google.com/maps/embed/v1/place?q=24 ???????ng S??n K???, Ph?????ng S??n K???, Qu???n T??n Ph??, H??? Ch?? Minh&amp;key=AIzaSyD6Coia3ssHYuRKJ2nDysWBdSlVlBCzKAw&amp;zoom=14"
                    ></iframe>
                  </div>
                </div>
              </section>

              <section className="section post-report">
                <div className="section-content">
                  <p>
                    B???n ??ang xem n???i dung tin ????ng:{" "}
                    <em>
                      "CHO THU?? PH??NG TR??? M???I CH??NH CH???, GI???M GI??, QU???N T??N PH??
                      - G???N B??N TR?????NG ?????I H???C C??NG NGH??? TH???C PH???M - M?? tin:
                      135699"
                    </em>
                    . M???i th??ng tin li??n quan ?????n tin ????ng n??y ch??? mang t??nh
                    ch???t tham kh???o. N???u b???n c?? ph???n h???i v???i tin ????ng n??y (b??o
                    x???u, tin ???? cho thu??, kh??ng li??n l???c ???????c,...), vui l??ng
                    th??ng b??o ????? Ph??ngTr???123 c?? th??? x??? l??.
                  </p>
                  <a
                    className="btn btn-report btn-outline"
                    target="_blank"
                    rel="nofollow"
                    href=""
                  >
                    <i></i> G???i ph???n h???i
                  </a>
                </div>
              </section>
              <div className="post-fix-bar">
                <div className="inner clearfix">
                  <div className="left-bar">
                    <span className="post-fix-bar-price">
                      {dataPostId?.attributes?.price}
                      <span style={{ color: "#333", fontWeight: "normal" }}>
                        - {dataPostId?.attributes?.acreage}
                      </span>
                    </span>
                    <span className="post-fix-bar-address">
                      {dataPostId?.address}
                    </span>
                  </div>
                  <div className="right-bar">
                    <span
                      className="post-fix-bar-save js-btn-save"
                      data-post-id="135699"
                    >
                      <i></i> Y??u th??ch
                    </span>
                    <a
                      className="post-fix-bar-zalo"
                      rel="nofollow"
                      target="_blank"
                      href={`https://zalo.me/${dataPostId?.user?.zalo}`}
                    >
                      Nh???n Zalo
                    </a>
                    <a
                      className="post-fix-bar-phone"
                      rel="nofollow"
                      target="_blank"
                      href={`tel:${dataPostId?.user?.phone}`}
                    >
                      <i></i> G???i ngay {dataPostId?.user?.phone}
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <section className="section section-post-listing">
              <div className="section-header">
                <h2 className="section-title">
                  Cho thu?? ph??ng tr??? Qu???n T??n Ph??, H??? Ch?? Minh
                </h2>
              </div>
              <ul className="post-listing clearfix"></ul>
            </section>
          </div>
          <aside id="aside">
            <AuthorAside item={dataPostId?.user} />
            <AsideNewPost />
            <AsideNewHot />
            <AsideArea item={AreaHcm} />
            <AsideSubLink />
          </aside>
        </div>
        <WhyUs />
        <Support />
      </main>
      <Footer />
    </div>
  );
};

export default DetailPage;
