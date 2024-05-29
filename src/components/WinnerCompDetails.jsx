// This file is maintained as a store which contains info of comp achievers details.
// To add new achievers details , just add new array in the same format !



import w1Img from '../images/w1.png';
import w2Img from '../images/w2.png';
import w3Img from '../images/w3.png';

import socialw1Img from '../images/social-w1.jpg';
import socialw2Img from '../images/social-w2.jpg';
import socialw3Img from '../images/social-w3.jpg';

const WinnerCompDetails = [
    {
        title: 'Byte Battle S1',
        date: 'Sep 21, 2023',
        winners: [
            {
                name: 'Vergina Sharley MS',
                regNo: '123456',
                department: 'BCA (S1)',
                year: 'II',
                img: w2Img,
                socialImg: socialw1Img
            },
            {
                name: 'Pravin B',
                regNo: '23127035',
                department: 'Bsc CS with DA (S1)',
                year: 'I',
                img: w1Img,
                socialImg: socialw2Img
            },
            {
                name: 'Venkatesh B',
                regNo: '789012',
                department: 'Bsc CS (S1)',
                year: 'II',
                img: w3Img,
                socialImg: socialw3Img,
            },
        ],
    },

    
    // Add more competitions as needed
];

export default WinnerCompDetails;
