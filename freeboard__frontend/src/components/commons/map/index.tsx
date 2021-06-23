import Head from 'next//head';
import {useEffect} from 'react';
import styled from '@emotion/styled';

const Map = styled.div`
    width: 300px;
    height: 300px;
`;

const MapPage = () => {
    useEffect(() => {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
            //지도를 생성할 때 필요한 기본 옵션
            //@ts-ignore
            center: new kakao.maps.LatLng(
                37.48511281842908,
                126.90151889583512
            ), //지도의 중심좌표.
            level: 3, //지도의 레벨(확대, 축소 정도)
        };
        //@ts-ignore
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        //@ts-ignore
        const markerposition = new kakao.maps.LatLng(
            37.48511281842908,
            126.90151889583512
        );
        //@ts-ignore
        const marker = new kakao.maps.Marker({
            position: markerposition,
        });
        marker.setMap(map);
    }, []);

    return (
        <>
            <Head>
                <script
                    type="text/javascript"
                    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=db10272e2a492230de4b3191eea93ca8"
                ></script>
            </Head>
            <Map id="map"></Map>
        </>
    );
};

export default MapPage;
