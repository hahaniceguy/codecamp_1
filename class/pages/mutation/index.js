import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MutationPage() {
	const router = useRouter();
	const CREATE_BOARD = gql`
		mutation createProfile($name: String, $age: Int, $school: String) {
			createProfile(name: $name, age: $age, school: $school) {
				message
			}
		}
	`;

	const [age, setAge] = useState();

	const [profile, setProfile] = useState({
		name: "",
		age,
		school: "",
	});

	const [createProfile] = useMutation(CREATE_BOARD);

	const handleInput = (event) => {
		setProfile({
			...profile,
			[event.target.name]: event.target.value,
			age,
		});
		console.log(profile);
	};

	async function onClickPost() {
		try {
			const result = await createProfile({
				variables: {
					...profile,
					age,
				},
			});
			alert(result.data.createProfile.message);
			router.push(`/query/${profile.name}`);
		} catch (error) {
			alert(error.message);
		}
	}
	const handleAge = (event) => {
		setAge(Number(event.target.value));
		console.log(age);
	};

	const onClickRoutin = () => {
		router.replace("/query");
	};

	return (
		<>
			이름: <input type="text" name="name" onChange={handleInput}></input>
			<br />
			나이: <input type="password" name="age" onChange={handleAge}></input>
			<br />
			학교: <input type="text" name="school" onChange={handleInput}></input>
			<br />
			<button onClick={onClickPost}>게시물 등록하기</button>
			<button onClick={onClickRoutin}>쿼리로 이동</button>
		</>
	);
}
