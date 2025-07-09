

export const metadata = {
  title: '오렌짐 위치 안내 | 산성점 · 장안점 · 수원인계점',
  description: '오렌짐 산성점, 장안점, 수원인계점 오시는 길 및 교통편 안내. 주차 및 대중교통 이용 방법 제공.',
  openGraph: {
    title: '오렌짐 위치 안내',
    description: '오렌짐 산성점, 장안점, 수원인계점 오시는 길 안내',
    url: 'https://orangym.co.kr/location',
    siteName: '오렌짐',
    type: 'website'
  }
};


const MapEmbed = ({ html }: { html: string }) => (
  <div className="flex justify-center my-4">
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-white py-12 px-6 text-center">
      <div className="max-w-5xl mx-auto bg-orange-400 rounded-b-lg flex justify-center">
        <img src="/orangym_logo.png" alt="Orangym Logo" className="h-60" />
      </div>
      {/* 산성점 오시는 길 안내 */}
      <div className="flex items-center justify-center my-6">
        <div className="border-t border-black w-32 relative">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
        </div>
        <h2 className="mx-4 text-2xl font-bold">
          <span className="text-orangym">오렌짐 </span> 산성점
        </h2>
        <div className="border-t border-black w-32 relative">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
        </div>
      </div>
      <MapEmbed
        html={`<div style="font:normal normal 400 12px/normal dotum, sans-serif; width:640px; height:392px; color:#333; position:relative"><div style="height: 360px;"><a href="https://map.kakao.com/?urlX=533144.0000000007&amp;urlY=1098150.9999999986&amp;itemId=1738371213&amp;q=%EC%98%A4%EB%A0%8C%EC%A7%90%20%EC%82%B0%EC%84%B1%EC%97%AD%EC%A0%90&amp;srcid=1738371213&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank"><img class="map" src="http://t1.daumcdn.net/roughmap/imgmap/45037c53c504c97e08846e1797b5c6f89ef889c7288f96198c65f0504f35d926" width="638px" height="358px" style="border:1px solid #ccc;"></a></div><div style="overflow: hidden; padding: 7px 11px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 0px 0px 2px 2px; background-color: rgb(249, 249, 249);"><a href="https://map.kakao.com" target="_blank" style="float: left;"><img src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" width="72" height="16" alt="카카오맵" style="display:block;width:72px;height:16px"></a><div style="float: right; position: relative; top: 1px; font-size: 11px;"><a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;eName=%EC%98%A4%EB%A0%8C%EC%A7%90%20%EC%82%B0%EC%84%B1%EC%97%AD%EC%A0%90&amp;eX=533144.0000000007&amp;eY=1098150.9999999986" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">길찾기</a><span style="width: 1px;padding: 0;margin: 0 8px 0 9px;height: 11px;vertical-align: top;position: relative;top: 2px;border-left: 1px solid #d0d0d0;float: left;"></span><a target="_blank" href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=1738371213&amp;itemId=1738371213&amp;q=%EC%98%A4%EB%A0%8C%EC%A7%90%20%EC%82%B0%EC%84%B1%EC%97%AD%EC%A0%90&amp;urlX=533144.0000000007&amp;urlY=1098150.9999999986" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">지도 크게 보기</a></div></div><div><span style="border-bottom:0px none #333333;position:absolute;left:-25px;top:-136px;width:0px;height:40px"></span></div></div>`}
      />
      <address className="text-sm text-gray-700 mb-4 not-italic">
        경기도 성남시 수정구 수정로 326, 2층
      </address>
      <div className="text-left text-sm text-gray-800 max-w-lg mx-auto mb-8">
        <div className="flex items-center mb-4">
          <img src="/line8.png" alt="8호선 아이콘" className="w-6 h-6 mr-1 inline-block" />
          <span>산성역 2번 출구에서 326m</span>
        </div>

        <h3 className="font-semibold mb-2">도보 이용 시</h3>
        <p>
          산성역 2번 출구에서 파리 바게트를 지나 약 300m 정도 직진하시면 서서갈비 건물이 보이실 거예요.
          건물 2층을 전체로 쓰고 있으니 바로 올라오시면 됩니다.
        </p>

        <h3 className="font-semibold mt-4 mb-2">차량 이용 시</h3>
        <p>
          산성동 삼거리에서 헬스장 건물과 기아차 서비스센터 사이길로 10m 정도 들어오시면 주차장이 위치해 있습니다.
          오렌짐 회원 전용 주차장이니 주차하신 후 건물 2층으로 올라오시면 됩니다. (자리가 없을 경우에 전화주세요.)
        </p>
      </div>
      {/* 장안점 오시는 길 안내 */}
      <div className="mt-16">
        <div className="flex items-center justify-center my-6">
          <div className="border-t border-black w-32 relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
          </div>
          <h2 className="mx-4 text-2xl font-bold">
            <span className="text-orangym">오렌짐</span> 장안점
          </h2>
          <div className="border-t border-black w-32 relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
          </div>
        </div>

        <MapEmbed
          html={`<div style="font:normal normal 400 12px/normal dotum, sans-serif; width:640px; height:392px; color:#333; position:relative"><div style="height: 360px;"><a href="https://map.kakao.com/?urlX=515664.9999999991&amp;urlY=1131243.0000000005&amp;itemId=1758194821&amp;q=%EC%98%A4%EB%A0%8C%EC%A7%90%20%EC%9E%A5%EC%95%88%EC%A0%90&amp;srcid=1758194821&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank"><img class="map" src="http://t1.daumcdn.net/roughmap/imgmap/48b7900b2b47e9748f2b83b5f2967bf8c5ce7a860f6b5ad4c33710b5bb5bfcc9" width="638px" height="358px" style="border:1px solid #ccc;"></a></div><div style="overflow: hidden; padding: 7px 11px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 0px 0px 2px 2px; background-color: rgb(249, 249, 249);"><a href="https://map.kakao.com" target="_blank" style="float: left;"><img src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" width="72" height="16" alt="카카오맵" style="display:block;width:72px;height:16px"></a><div style="float: right; position: relative; top: 1px; font-size: 11px;"><a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;eName=%EC%98%A4%EB%A0%8C%EC%A7%90%20%EC%9E%A5%EC%95%88%EC%A0%90&amp;eX=515664.9999999991&amp;eY=1131243.0000000005" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">길찾기</a><span style="width: 1px;padding: 0;margin: 0 8px 0 9px;height: 11px;vertical-align: top;position: relative;top: 2px;border-left: 1px solid #d0d0d0;float: left;"></span><a target="_blank" href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=1758194821&amp;itemId=1758194821&amp;q=%EC%98%A4%EB%A0%8C%EC%A7%90%20%EC%9E%A5%EC%95%88%EC%A0%90&amp;urlX=515664.9999999991&amp;urlY=1131243.0000000005" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">지도 크게 보기</a></div></div><div><span style="border-bottom:0px none #333333;position:absolute;left:-25px;top:-136px;width:0px;height:40px"></span></div></div>`}
        />
        <address className="text-sm text-gray-700 mb-4 not-italic">
          서울 동대문구 장한로 129 B1층
        </address>

        <div className="text-left text-sm text-gray-800 max-w-lg mx-auto mb-8">
          <h3 className="font-semibold mb-2">도보 이용 시</h3>
          <p>
            장안동삼성쉐르빌 아파트에서 사거리 방향으로 70m 걸어오시고
            좌측에 ‘오렌짐PT’ 간판을 바로 확인하실 수 있습니다.
          </p>

          <h3 className="font-semibold mt-4 mb-2">대중교통 이용 시</h3>
          <p>
            장한평역 3번출구 앞 정류장에서 2416/221/1212/2233번(면목동 방면) 탑승하여
            ‘장안동삼성쉐르빌아파트’ 하차 후 장안동사거리 방향으로 걸어오시면
            1층에 ‘오렌짐PT’ 간판을 확인하실 수 있습니다.
          </p>

          <h3 className="font-semibold mt-4 mb-2">차량 이용 시</h3>
          <p>
            주차는 건물 앞 지상 주차장이 이용 가능합니다. (자리가 없는 경우에는 2층 주차해두시면 됩니다.)
          </p>

          <p className="mt-2">
            건물 입구로 들어오셔서 B1층으로 오시면 출입구가 나옵니다.
          </p>
        </div>
      </div>

      {/* 수원인계점 오시는 길 안내 */}
      <div className="mt-16">
        <div className="flex items-center justify-center my-6">
          <div className="border-t border-black w-32 relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
          </div>
          <h2 className="mx-4 text-2xl font-bold">
            <span className="text-orangym">오렌짐우먼</span> 수원인계점
          </h2>
          <div className="border-t border-black w-32 relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
          </div>
        </div>

        <MapEmbed
          html={`<div style="font:normal normal 400 12px/normal dotum, sans-serif; width:640px; height:392px; color:#333; position:relative"><div style="height: 360px;"><a href="https://map.kakao.com/?urlX=506944.9999999995&amp;urlY=1045512.9999999981&amp;itemId=1232216486&amp;q=%EC%98%A4%EB%A0%8C%EC%A7%90%EC%9A%B0%EB%A8%BC%20%EC%88%98%EC%9B%90%EC%9D%B8%EA%B3%84%EC%A0%90&amp;srcid=1232216486&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank"><img class="map" src="http://t1.daumcdn.net/roughmap/imgmap/baa978f8c92b457f0eacf73466f6e00a2677cf7f11a25540fa5d62428545a3cc" width="638px" height="358px" style="border:1px solid #ccc;"></a></div><div style="overflow: hidden; padding: 7px 11px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 0px 0px 2px 2px; background-color: rgb(249, 249, 249);"><a href="https://map.kakao.com" target="_blank" style="float: left;"><img src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" width="72" height="16" alt="카카오맵" style="display:block;width:72px;height:16px"></a><div style="float: right; position: relative; top: 1px; font-size: 11px;"><a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;eName=%EC%98%A4%EB%A0%8C%EC%A7%90%EC%9A%B0%EB%A8%BC%20%EC%88%98%EC%9B%90%EC%9D%B8%EA%B3%84%EC%A0%90&amp;eX=506944.9999999995&amp;eY=1045512.9999999981" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">길찾기</a><span style="width: 1px;padding: 0;margin: 0 8px 0 9px;height: 11px;vertical-align: top;position: relative;top: 2px;border-left: 1px solid #d0d0d0;float: left;"></span><a target="_blank" href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=1232216486&amp;itemId=1232216486&amp;q=%EC%98%A4%EB%A0%8C%EC%A7%90%EC%9A%B0%EB%A8%BC%20%EC%88%98%EC%9B%90%EC%9D%B8%EA%B3%84%EC%A0%90&amp;urlX=506944.9999999995&amp;urlY=1045512.9999999981" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">지도 크게 보기</a></div></div><div><span style="border-bottom:0px none #333333;position:absolute;left:-25px;top:-136px;width:0px;height:40px"></span></div></div>`}
        />
        <address className="text-sm text-gray-700 mb-4 not-italic">
          경기 수원시 팔달구 효원로265번길 20
        </address>
        <div className="text-left text-sm text-gray-800 max-w-lg mx-auto mb-8">
          <h3 className="font-semibold mb-2">차량 이용 시</h3>
          <p>
            네이버 지도에서 ‘오렌짐 우먼 수원인계점’ 검색 <br />
            건물 지하 주차장 무료 이용 가능
          </p>

          <h3 className="font-semibold mt-4 mb-2">대중 교통 이용 시</h3>
          <p className="mb-2 flex items-center">
            <img src="/line_suin.png" alt="수인분당선 아이콘" className="w-6 h-6 mr-1 inline-block" />
            수원시청역 7번 출구에서 132m
          </p>

          <p className="mb-2">1) 지하철</p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>수원시청역 7번 출구에서 '홈플러스 동수원점' 가기 전 우회전 후</li>
            <li>직진하시면 CU편의점을 지나서</li>
            <li>1층에 보이는 GS25편의점이 있는 건물의 4층으로 오시면 됩니다.</li>
          </ul>

          <p className="mb-2">2) 버스</p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>수원시청역 8번 출구 인근 ‘씨씨파크 정류장’ 하차</li>
            <li>파리바게트를 끼고 우회전 후 직진</li>
            <li>카페우디 (OOZY Coffee) 지나서 좌회전</li>
            <li>GS25편의점이 있는 건물 4층으로 오시면 됩니다.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}