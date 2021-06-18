import DaumPostcode from 'react-daum-postcode';

export default function PostCodePage() {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    console.log(data);
  };

  return (
    <DaumPostcode
      onComplete={handleComplete}
      autoClose={true}
      animation={true}
    />
  );
}
