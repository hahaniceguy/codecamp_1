import { useState } from "react"
import Head from "next/head"
import { gql, useMutation } from "@apollo/client"

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
    mutation createPointTransactionOfLoading($impUid: ID!){
        createPointTransactionOfLoading(impUid: $impUid){
            status
        }
    }
`

const PaymentPage = () => {
    const [amount, setAmount] = useState(200)
    const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING);

    const onClickPayment = () => {
        //@ts-ignore
        const IMP = window.IMP;
        IMP.init("imp89386405");
        IMP.request_pay({ // param
            pg: "html5_inicis",
            pay_method: "card",
            // merchant_uid: "ORD20180131-0000011",
            name: "노르웨이 회전 의자",
            amount, //amount: amount; 동일하므로 생략가능
            buyer_email: "gildong@gmail.com",
            buyer_name: "철수",
            buyer_tel: "010-1234-5678",
            buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "01181",
            m_redirect_url: '/paymentok'
          },async rsp => { // callback
                if (rsp.success) {
                    await createPoint({
                        variables:{
                            impUid: rsp.imp_uid,
                        },
                        context: {
                            headers:{
                                "authorization": "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJkOGFhNDYyNzA2MjAwMjkxMTA4MzMiLCJwZXJtaXNzaW9uIjowLCJpYXQiOjE2MjM4MjE4NzIsImV4cCI6MTYyMzkwODI3Miwic3ViIjoiYWNjZXNzVG9rZW4ifQ.RsPjq1GfbNNgpZ01P-w0hmWnw2x8pvp5PHiPxoo2IJEeA-OzwoB9E77B16o68uVp92tT1O2qx6hXsOeubLyWeg"
                            }
                        }
                    })
                    alert('결제에 성공했습니다.')
                } else {
                    alert('결제에 실패했습니다.')
                }
          });
    }

    return(
        <>
            <Head>
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
                <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
            </Head>
            <div>결제금액: {amount}</div>
            <button onClick={onClickPayment}>결제하기</button>
        </>
    )
}

export default PaymentPage