import Head from "next//head"
import { useEffect } from "react"

const MapPage = () => {

    useEffect(() => {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            //@ts-ignore
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        //@ts-ignore
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    }, []);

    return (
        <>
            <Head>
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=db10272e2a492230de4b3191eea93ca8"></script>
            </Head>
            <div id="map" style={{width:'500px', height:'400px'}}></div>;
        </>
    )
}

export default MapPage