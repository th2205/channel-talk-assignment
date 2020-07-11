import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCountry } from '../constants/actions';
import Form from '../components/Form';

export default function FormContainer() {
  const [name, setName] = useState('');
  const [alpha2Code, setAlphaCode] = useState('');
  const [callingCodes, setCallingCodes] = useState('');
  const [capital, setCapital] = useState('');
  const [region, setRegion] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return setErrorMessage('나라 이름을 입력해주세요.');
    if (!alpha2Code.trim()) return setErrorMessage('국가 코드 입력해주세요.');
    if (!callingCodes.trim()) return setErrorMessage('국가 번호 입력해주세요.');
    if (!capital.trim()) return setErrorMessage('수도를 입력해주세요.');
    if (!region.trim()) return setErrorMessage('지역을 입력해주세요.');

    const splitedCallingCodes = callingCodes.split(' ');
    const country = {
      name,
      alpha2Code,
      callingCodes: splitedCallingCodes,
      capital,
      region
    };

    dispatch(addCountry(country));
    setErrorMessage('');
    setName('');
    setAlphaCode('');
    setCallingCodes('');
    setCapital('');
    setRegion('');
    alert('성공!');
  };

  return (
    <Form
      name={name}
      alpha2Code={alpha2Code}
      callingCodes={callingCodes}
      capital={capital}
      region={region}
      setName={setName}
      errorMessage={errorMessage}
      setAlphaCode={setAlphaCode}
      setCallingCodes={setCallingCodes}
      setCapital={setCapital}
      setRegion={setRegion}
      onSubmit={handleSubmit}
    />
  );
}
