import { useState } from "react";
import './BmiCalculator.css'

function BmiCalculator() {
    const [wzrostValue, setWzrostValue] = useState('');
    // stala wartosct wzrostu i zmiena 
    const [wagaValue, setWagaValue] = useState('');
    //stala wagi i zmiany wagi
    const [bmiValue, setBmiValue] = useState('');
    //stala wartosci bmi i zmiena bmi
    const [bmiMsg, setBmiMsg] = useState('');
    // stala wiadomosc i zmiena wiadomosci 

    // Kalkulator BMI oblicza idealną wagę na podstawie wzoru: masa ciała/(wzrost) 2. W
    // setWagaValue / (setwzrostValue)*2




    const caluculatorBmi = () => {
        if (wzrostValue && wagaValue) {
            // jesli wzrost i waga jest podna to
            const wzrostWMetrach = wzrostValue / 100
            // jesli wzrost jest podany wczesniej to liczmy wzrost w metrach
            const bmi = (wagaValue / (wzrostWMetrach * wzrostWMetrach));
            // stala bmi jest to tutaj wzor na bmi czyli waga dzielona przez wzrost w metach*2  
            //ktory jest wstawiany do seTBmiValue
            setBmiValue(bmi);


            let wiadomosc = '';
            if (bmi < 16) {
                wiadomosc = 'Wyglodzenie';
            } else if (bmi >= 16 && bmi < 17) {
                wiadomosc = 'wychudzenie';
            } else if (bmi >= 17 && bmi < 18.5) {
                wiadomosc = 'niedowaga';
            } else if (bmi >= 18.5 && bmi < 25) {
                wiadomosc = 'wartość prawidłowa';
            } else if (bmi >= 25 && bmi < 30) {
                wiadomosc = 'nadwaga';
            } else if (bmi >= 30 && bmi < 35) {
                wiadomosc = 'otyłość I stopnia';
            } else if (bmi >= 35 && bmi < 40) {
                wiadomosc = 'otyłość II stopnia';
            } else if (bmi >= 40) {
                wiadomosc = 'otyłość III stopnia';
            }
            setBmiMsg(wiadomosc);
        } else {
            setBmiValue('');
            setBmiMsg('');

            //wstaw waruinki w razie gdy bedzie ktora zgadzac si

        }

        console.log();
    };

    return (
        <div className="container">
        <h1>Kalkulator Bmi</h1>
        <div className="input-container">
            <label htmlFor="wzrost">Wpisz swoj wzrost (cm)</label>
            <input
              type='text' // zmiana na text
              id='wzrost'
              value={wzrostValue}
              onChange={(e) => {
                  const inputText = e.target.value;
                  // Sprawdź, czy wprowadzony tekst zawiera tylko cyfry
                  if (/^\d*$/.test(inputText)) {
                      setWzrostValue(inputText);
                  }
              }}
              required
            />
        </div>

        <div className="input-container">
            <label htmlFor="waga">Wpisz swoj wage (kg)</label>
            <input
                type='number'
                id='waga'
                value={wagaValue}
                onChange={(e) => setWagaValue(e.target.value)}
                required
            />
        </div>
        <button className="btn" onClick={caluculatorBmi}>Policz swoje Bmi</button>
        {bmiValue && (
            <div className="rezultat">
                <p>Twoje BMI: {bmiValue}</p>
                <p>Stan: {bmiMsg}</p>
            </div>
        )}
    </div>
    )


    //       //Poniższa skala pozwoli nam na przyporządkowanie wartości wskaźnika BMI do odpowiedniego zakresu wagi:

    // < 16 = wygłodzenie,
    // 16 – 16,99 = wychudzenie,
    // 17 – 18,49 = niedowaga,
    // 18,5 – 24,99 = wartość prawidłowa,
    // 25 – 29,99 = nadwaga,
    // 30 – 34,99 = otyłość I stopnia,
    // 35 – 39,99 = otyłość II stopnia,
    // > 40 = otyłość III stopnia.

};

export default BmiCalculator
