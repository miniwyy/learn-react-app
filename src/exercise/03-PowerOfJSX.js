import React from 'react';

/**
 *🏆
 * The goal here is to get you more familiar with JSX.
 * You will use javascript code inside JSX to loop through object keys
 * and render a div element for each element in that object
 */
function CompanyProfile(props) {
    /**
     * 💡 some variables to store mock data
     * We will use these data to display the company profile information
     */
    const stockTicker = 'APPL';
    const companyProfileInfo = {
        'Company Name': 'Apple Inc.',
        'Price': 150,
        'Exchange': "Nasdaq Global Select",
        'Industry': "Computer Hardware",
        'CEO': 'Timothy D. Cook'
    }

    return (
        <div>
            <div>Profile of: {stockTicker}</div>
            <hr/>
            <div>
                {
                    Object.keys(companyProfileInfo).map((item, index) => 
                        <div key={index}>
                            {item}: {companyProfileInfo[item]}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

/**
 * 🚨 🚨 DO NOT DELETE OR CHANGE THIS.🚨 🚨
 * This is how you would use your above component and 
 * the output of this code is displayed on the browser
 */
const Usage = (props) => {
    return <CompanyProfile />
}

export default Usage;
