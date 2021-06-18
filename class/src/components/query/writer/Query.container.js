import QueryUI from './Query.pressenter'
import { Router, useRouter } from "next/router";
import { useQuery, gql, useMutation } from "@apollo/client";
import {useState} from "react"
import { CREATE_PROFILE, BBB } from './QueryWrite.queries'


const QueryWrite = () => {

	const router = useRouter(); 


    const [createProfile] = useMutation(CREATE_PROFILE)


    const [profile, setProfile] = useState({
        name: "",
        age: "",
        school: ""
    })

    const onChangeInput = (event) => {
 
        setProfile({
            ...profile,
            [event.target.name]: event.target.value
        })
    }




    const onClickSubmit = async () => {
        try {
            const result = await createProfile({
                variables: {
                    ...profile,
                    age: Number(profile.age)
                }
            })

            alert(result.data.createProfile.message)

            router.push(`/query/${profile.name}`)
        } catch(error){
            alert(error.message)
        }
    }

    return (
        <QueryUI onClickSubmit={onClickSubmit} onChangeInput={onChangeInput} />
    )
}
export default QueryWrite