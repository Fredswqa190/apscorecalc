'use client'
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Page() {
    const [values, setValues] = useState(Array(3).fill(0)); 
    const [largeValue, setLargeValue] = useState(0); 
    const [total, setTotal] = useState(0);
    const [APScore, setAPScore] = useState(0);

    const handleChange = (index: number) => (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValues = [...values];
        newValues[index] = Number(event.target.value);
        setValues(newValues);
    };

    const [MCQ, setMCQ] = useState(0);

    const handleLargeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLargeValue(Number(event.target.value));
        const newMCQ = Number(event.target.value) * 1.2857;
        setMCQ(newMCQ);
    };

    useEffect(() => {
        setTotal(values.reduce((a, b) => a + b, 0) + MCQ);
    }, [values, largeValue, MCQ]);

    useEffect(() => {
        if (total >= 53) {
            setAPScore(5);
        }
        else if (total<53 && total >= 42){
            setAPScore(4);
        }
        else if (total<42 && total >= 33){
            setAPScore(3);
        }
        else if (total<33 && total >= 24){
            setAPScore(2);
        }
        else{
            setAPScore(1);
        }
    }, [total]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Head>
                <title>Number Selectors</title>
            </Head>
            <h1 style={{fontSize: '36px'}} className="">AP Physics C Mechanics score calculator</h1>
            <p style={{fontSize: '20'}} className="">Based on the 2017 curve</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ marginRight: '10px' }}>MCQ Score:</p>
                <select 
                    value={largeValue} 
                    onChange={handleLargeChange}
                    style={{ borderRadius: '10px', padding: '5px', marginBottom: '10px', color: 'black' }}
                >
                    {Array.from({ length: 36 }, (_, i) => i).map((num) => (
                        <option className="text-black items-center" key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </select>
            </div>
            {values.map((value, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ marginRight: '10px' }}>FRQ {index+1} Score:</p>
                    <select 
                        value={value} 
                        onChange={handleChange(index)}
                        style={{ borderRadius: '10px', padding: '5px', marginBottom: '10px', color: 'black' }}
                    >
                        {Array.from({ length: 16 }, (_, i) => i).map((num) => (
                            <option className="text-black items-center" key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
            <h2 style={{fontSize: "24px"}}>Your Estimated AP Score: {APScore}</h2>
        </div>
    );
}