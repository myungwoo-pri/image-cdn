(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+/jN":function(e,a,t){"use strict";t.r(a);var s=t("q1tI"),c=t.n(s),i=t("TJpk"),n=t.n(i),l=t("5gvO"),m=(t("WL/A"),t("HYKl")),r=t.n(m),o=function(){var e=Object(s.useState)(null),a=e[0],t=e[1];Object(s.useEffect)((function(){var e=(new kakao.maps.services.Geocoder).addressSearch("경기도 광명시 새빛공원로 67(자이타워) A1715",(function(e,a){if(console.log("overlay",r),a===kakao.maps.services.Status.OK){var s=e[0].x,c=e[0].y;console.log(s,c);var i=document.getElementById("map"),n={center:new kakao.maps.LatLng(c,s),level:3},l=new kakao.maps.Map(i,n),m=new kakao.maps.Marker({map:l,position:new kakao.maps.LatLng(c,s)}),r=new kakao.maps.CustomOverlay({content:'<div class="wrap">    <div class="info">        <div class="title_box">            (주)나우            <div class="close" title="close"></div>        </div>        <div class="body">            <div class="img">                <img src="https://drive.google.com/uc?export=view&id=15RC-WqU3DfHI7Eav1SLiGRpJt1EUhznI" width="70" height="30">           </div>            <div class="desc">                <div class="ellipsis">경기도 광명시 새빛공원로 67(자이타워) A1715</div>                <div class="jibun ellipsis">(우) 14348 (지번) 일직동 515-1</div>                <div><a href="http://www.nowhr24.com" target="_blank" class="link">홈페이지</a></div>            </div>        </div>    </div></div>',map:l,position:m.getPosition()});t(r),kakao.maps.event.addListener(m,"click",(function(){r.setMap(l)}))}}));console.log(e)}),[]);return c.a.createElement("div",null,c.a.createElement("script",{type:"text/javascript",src:"//dapi.kakao.com/v2/maps/sdk.js?appkey=445febe88cc6e45aaa4250ee7809955f&libraries=services,clusterer"}),c.a.createElement("div",{className:"map-address has-text-grey"},c.a.createElement("img",{src:r.a,className:"address-image"}),c.a.createElement("span",{className:"address-text"},"경기도 광명시 새빛공원로 67(자이타워) A1715")),c.a.createElement("div",{id:"map",className:"map",onClick:function(e){void 0!==e.target.title&&"close"==e.target.title&&a.setMap(null)}}))},d=t("/CLa"),E=(t("Z7Pr"),t("9a8T")),g=t.n(E),v=function(e){var a=e.title;e.content,e.contentComponent||l.b;return Object(s.useEffect)((function(){g.a.init()}),[]),c.a.createElement("div",null,c.a.createElement("section",{className:"hero is-bold is-medium",id:"aboutpage-hero"},c.a.createElement("div",{className:"hero-body","data-aos":"zoom-in","data-aos-duration":"1500"},c.a.createElement("div",{className:"container has-text-white"},c.a.createElement("div",{className:"sectionc"},c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column has-text-centered",id:"misson-text"},c.a.createElement("h3",{className:"has-text-weight-bold is-size-4 has-text-warning"},a),c.a.createElement("h2",{className:"mission-text is-size-2 has-text-weight-bold"},"우리의 목표는 최고의 회사를 만드는 것입니다."))))))),c.a.createElement(d.a,null),c.a.createElement("section",{className:"section","data-aos":"fade-up","data-aos-duration":"1500"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column is-offset-1"},c.a.createElement("h4",{className:"has-text-weight-bold is-size-4"},"위치"))),c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column is-offset-1"},c.a.createElement(o,null))))))},u=t("Zttt");t.d(a,"aboutPageQuery",(function(){return x}));a.default=function(e){var a=e.data,t=a.markdownRemark;return Object(s.useEffect)((function(){console.log(a)}),[]),c.a.createElement(u.a,null,c.a.createElement(n.a,null,c.a.createElement("title",null,t.frontmatter.meta_title),c.a.createElement("meta",{name:"description",content:t.frontmatter.meta_description})),c.a.createElement(v,{contentComponent:l.a,title:t.frontmatter.title,content:t.html}))};var x="3172287745"},"/CLa":function(e,a,t){"use strict";var s=t("q1tI"),c=t.n(s),i=t("JAaG"),n=t.n(i),l=t("EBFD"),m=t.n(l),r=t("vjVK"),o=t.n(r);a.a=function(){return c.a.createElement("section",{className:"section section--gradient"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column is-10 is-offset-1"},c.a.createElement("div",{className:"texts-container","data-aos":"fade-up","data-aos-duration":"1500"},c.a.createElement("div",{className:"is-size-2 has-text-weight-bold title"},"About Now"),c.a.createElement("div",{className:"is-size-5"},"우리회사는 2020년에 설립된 컨설팅 전문업체로서 진정성 있는 용역수행을 통해 고객의 니즈를 반영하고, 최고의 결과물을 제공함으로써 고객만족을 추구하는 고객중심 조직입니다. 심리학, 교육학, 인재개발 전공자들이 새로운 방법론을 개발하고, 더 나은 방법을 제공하기 위해 노력하는 전문가 집단입니다."),c.a.createElement("br",null),c.a.createElement("div",{className:"is-size-5"},"최고 품질 역량평가(Assessment Center)와 역량교육(Development Center), 성과중심기업교육, NCS 기반 채용, 심리검사 관련 서비스를 제공합니다.")),c.a.createElement("div",{className:"columns","data-aos":"fade-up","data-aos-duration":"1500"},c.a.createElement("div",{className:"column is-4"},c.a.createElement("div",{className:"about-card"},c.a.createElement("figure",{className:"image is-64x64 img-center "},c.a.createElement("img",{className:"is-rounded now-three-image",src:n.a})),c.a.createElement("div",{className:"has-text-weight-bold is-size-5 has-text-centered card-text"},"New"),c.a.createElement("div",{className:"is-size-6 has-text-centered has-text-grey"},"some texts"))),c.a.createElement("div",{className:"column is-4"},c.a.createElement("div",{className:"about-card"},c.a.createElement("figure",{className:"image is-64x64 img-center"},c.a.createElement("img",{className:"is-rounded now-three-image",src:m.a})),c.a.createElement("div",{className:"has-text-weight-bold is-size-5 has-text-centered card-text"},"Opportunity"),c.a.createElement("div",{className:"is-size-6 has-text-centered has-text-grey"},"some texts"))),c.a.createElement("div",{className:"column is-4"},c.a.createElement("div",{className:"about-card"},c.a.createElement("figure",{className:"image is-64x64 img-center"},c.a.createElement("img",{className:"is-rounded now-three-image",src:o.a})),c.a.createElement("div",{className:"has-text-weight-bold is-size-5 has-text-centered card-text"},"Ways"),c.a.createElement("div",{className:"is-size-6 has-text-centered has-text-grey"},"some texts"))))))))}},"5gvO":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var s=t("q1tI"),c=t.n(s),i=function(e){var a=e.content,t=e.className;return c.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:a}})};a.b=function(e){var a=e.content,t=e.className;return c.a.createElement("div",{className:t},a)}},EBFD:function(e,a,t){e.exports=t.p+"static/o-img-22c2e833006a29b41a65bed4ae4e8c58.jpeg"},HYKl:function(e,a){e.exports="data:image/png;base64,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"},JAaG:function(e,a,t){e.exports=t.p+"static/n-img-4db4e7892f5357a3324e24020be13657.jpeg"},vjVK:function(e,a,t){e.exports=t.p+"static/w-img-6d182d28bb878211b4a8c5b1291cfd0d.jpeg"}}]);
//# sourceMappingURL=component---src-templates-about-page-js-d1e33cb4d831c726f811.js.map